import type { GuestbookEntry, GuestbookInput, Kehadiran } from '../types'
import { relativeTime } from './utils'

export const GUESTBOOK_URL =
  'https://script.google.com/macros/s/AKfycby_yFXg9auH-2gHMMybIRjD8bskHr-axWQTo86U7i0-v_kXiou_ErpPnZXJsKSS7KmE/exec'

const TIMEOUT_MS = 15000

function withTimeout() {
  const c = new AbortController()
  const t = window.setTimeout(() => c.abort(), TIMEOUT_MS)
  return { signal: c.signal, done: () => window.clearTimeout(t) }
}

function clean(v: unknown, max: number) {
  return String(v ?? '').trim().slice(0, max)
}

function normalizeKehadiran(v: unknown): string {
  const s = clean(v, 20).toLowerCase()
  if (s.startsWith('hadir')) return 'Hadir'
  if (s.startsWith('tidak')) return 'Tidak Hadir'
  if (s.startsWith('ragu')) return 'Ragu-ragu'
  return clean(v, 20) || '-'
}

function normalizeEntry(r: Record<string, unknown>): GuestbookEntry | null {
  const nama = clean(r.nama ?? r.name, 50)
  const ucapan = clean(r.ucapan ?? r.message, 500)
  if (!nama || !ucapan) return null
  return {
    timestamp: clean(r.timestamp ?? r.created_at ?? new Date().toISOString(), 40),
    nama,
    kehadiran: normalizeKehadiran(r.kehadiran ?? r.attendance),
    ucapan,
  }
}

function timeOf(e: GuestbookEntry) {
  return guestTimestampMs(e.timestamp)
}

export function guestTimestampMs(ts: string) {
  const direct = Date.parse(ts)
  if (!Number.isNaN(direct)) return direct
  const fixed = Date.parse(ts.replace(' ', 'T'))
  return Number.isNaN(fixed) ? 0 : fixed
}

export function formatGuestTime(ts: string) {
  const ms = guestTimestampMs(ts)
  if (!ms) return ts.slice(0, 20)
  return relativeTime(new Date(ms).toISOString())
}

export async function fetchGuestbook(): Promise<GuestbookEntry[]> {
  const { signal, done } = withTimeout()
  try {
    const res = await fetch(GUESTBOOK_URL, { method: 'GET', signal, cache: 'no-store' })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const json: unknown = await res.json()
    const raw = Array.isArray(json)
      ? json
      : Array.isArray((json as { data?: unknown }).data)
        ? (json as { data: unknown[] }).data
        : []
    return (raw as Record<string, unknown>[])
      .map(normalizeEntry)
      .filter((e): e is GuestbookEntry => e !== null)
      .sort((a, b) => timeOf(b) - timeOf(a))
  } finally {
    done()
  }
}

export function detectDevice() {
  const ua = navigator.userAgent || ''
  if (/tablet|ipad|playbook|silk/i.test(ua)) return 'Tablet'
  if (/mobi|android|iphone|ipod|phone/i.test(ua)) return 'Mobile'
  return window.innerWidth < 768 ? 'Mobile' : 'Desktop'
}

async function getPublicIp() {
  const c = new AbortController()
  const t = window.setTimeout(() => c.abort(), 4000)
  try {
    const res = await fetch('https://api.ipify.org?format=json', { signal: c.signal })
    if (!res.ok) return 'Unknown'
    const json = (await res.json()) as { ip?: unknown }
    const ip = String(json?.ip ?? '').trim()
    return /^[0-9a-fA-F.:]{3,45}$/.test(ip) ? ip : 'Unknown'
  } catch {
    return 'Unknown'
  } finally {
    window.clearTimeout(t)
  }
}

async function getLocation(ip: string) {
  if (ip === 'Unknown') return 'Unknown'
  const c = new AbortController()
  const t = window.setTimeout(() => c.abort(), 5000)
  try {
    const res = await fetch(`https://ipapi.co/${ip}/json/`, { signal: c.signal })
    if (!res.ok) return 'Unknown'
    const json = (await res.json()) as { city?: unknown; region?: unknown; country_name?: unknown }
    const city = String(json?.city ?? '').trim()
    const region = String(json?.region ?? '').trim()
    const country = String(json?.country_name ?? '').trim()
    const parts = [city, region, country].filter(Boolean)
    return parts.length ? parts.join(', ').slice(0, 100) : 'Unknown'
  } catch {
    return 'Unknown'
  } finally {
    window.clearTimeout(t)
  }
}

export async function postGuestbook(input: GuestbookInput): Promise<GuestbookEntry> {
  const nama = input.nama.trim().slice(0, 50)
  const ucapan = input.ucapan.trim().slice(0, 500)
  if (!nama || !ucapan) throw new Error('validation')

  // Resolve all async data BEFORE building payload
  const resolvedIp = input.ip ?? (await getPublicIp())
  const resolvedUserAgent = (input.userAgent ?? navigator.userAgent ?? '').slice(0, 300)
  const resolvedDeviceInfo = input.deviceInfo ?? detectDevice()
  const resolvedLocation = input.location ?? (await getLocation(resolvedIp))

  const payload = {
    nama,
    kehadiran: input.kehadiran as Kehadiran,
    ucapan,
    ip: resolvedIp,
    userAgent: resolvedUserAgent,
    deviceInfo: resolvedDeviceInfo,
    location: resolvedLocation,
  }

  const { signal, done } = withTimeout()
  try {
    // Google Apps Script does a 302 redirect from script.google.com →
    // script.googleusercontent.com. When fetch follows this cross-origin
    // redirect in default mode, the browser may strip the POST body
    // (converting it to GET). Using redirect:'manual' lets us detect the
    // redirect and re-send the POST body to the final URL ourselves.
    const initial = await fetch(GUESTBOOK_URL, {
      method: 'POST',
      signal,
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload),
      redirect: 'follow',
      mode: 'no-cors',
    })

    // With mode:'no-cors' the response is opaque (type 'opaque', status 0),
    // so we cannot inspect status or body.  An opaque response means the
    // request was sent successfully; network errors would throw instead.
    if (initial.type === 'opaque') {
      return { timestamp: new Date().toISOString(), ...payload }
    }

    // Fallback for environments that return a readable response
    if (!initial.ok) throw new Error(`HTTP ${initial.status}`)
    const text = await initial.text()
    if (text) {
      try {
        const json = JSON.parse(text) as { status?: string; error?: string; message?: string }
        if (json && (json.error || json.status === 'error')) {
          throw new Error(json.error || json.message || 'Server menolak permintaan.')
        }
      } catch (e) {
        if (!(e instanceof SyntaxError)) throw e
      }
    }
    return { timestamp: new Date().toISOString(), ...payload }
  } finally {
    done()
  }
}
