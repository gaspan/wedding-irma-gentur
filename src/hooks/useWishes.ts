import { useCallback, useEffect, useRef, useState } from 'react'
import { fetchGuestbook, postGuestbook } from '../lib/guestbook'
import type { GuestbookEntry, GuestbookInput } from '../types'

const COOLDOWN_KEY = 'guestbook_last_submit'
const COOLDOWN_MS = 60_000

function readLock() {
  try {
    return Number(localStorage.getItem(COOLDOWN_KEY) ?? 0)
  } catch {
    return 0
  }
}

function writeLock() {
  try {
    localStorage.setItem(COOLDOWN_KEY, String(Date.now()))
  } catch {
    /* penyimpanan diblokir — cooldown sesi ini saja */
  }
}

function cooldownLeft() {
  return Math.max(0, Math.ceil((COOLDOWN_MS - (Date.now() - readLock())) / 1000))
}

export function useWishes() {
  const [wishes, setWishes] = useState<GuestbookEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [cooldown, setCooldown] = useState(0)
  const mounted = useRef(true)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await fetchGuestbook()
      if (mounted.current) setWishes(data)
    } catch {
      if (mounted.current) setError('Gagal memuat ucapan. Periksa koneksi lalu coba lagi.')
    } finally {
      if (mounted.current) setLoading(false)
    }
  }, [])

  useEffect(() => {
    mounted.current = true
    setCooldown(cooldownLeft())
    load()
    return () => {
      mounted.current = false
    }
  }, [load])

  const cooling = cooldown > 0

  useEffect(() => {
    if (!cooling) return
    const id = window.setInterval(() => {
      if (mounted.current) setCooldown(cooldownLeft())
    }, 1000)
    return () => window.clearInterval(id)
  }, [cooling])

  const submit = useCallback(async (input: GuestbookInput) => {
    setError(null)
    const left = cooldownLeft()
    if (left > 0) {
      setCooldown(left)
      setError(`Mohon tunggu ${left} detik sebelum mengirim lagi.`)
      return false
    }
    setSubmitting(true)
    try {
      const entry = await postGuestbook(input)
      if (mounted.current) {
        setWishes((prev) =>
          prev.some((w) => w.timestamp === entry.timestamp && w.nama === entry.nama)
            ? prev
            : [entry, ...prev],
        )
        writeLock()
        setCooldown(Math.ceil(COOLDOWN_MS / 1000))
      }
      return true
    } catch (e) {
      if (!mounted.current) return false
      if (e instanceof DOMException && e.name === 'AbortError') {
        setError('Koneksi timeout. Periksa internet Anda lalu coba lagi.')
      } else if (e instanceof Error && e.message && !/^HTTP \d+|^validation$/.test(e.message)) {
        setError(e.message.slice(0, 140))
      } else {
        setError('Gagal mengirim ucapan. Coba lagi sebentar.')
      }
      return false
    } finally {
      if (mounted.current) setSubmitting(false)
    }
  }, [])

  return { wishes, loading, submitting, error, submit, reload: load, cooldown }
}
