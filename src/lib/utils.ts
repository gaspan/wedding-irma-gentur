export function formatTime(t: string) {
  return `${t} WIB`
}

/** Membuat file .ics untuk Save the Date */
export function downloadIcs(opts: {
  title: string
  description: string
  location: string
  start: Date
  durationHours?: number
}) {
  const { title, description, location, start, durationHours = 2 } = opts
  const end = new Date(start.getTime() + durationHours * 3600_000)
  const fmt = (d: Date) => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'

  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Undangan//ID',
    'BEGIN:VEVENT',
    `UID:${Date.now()}@undangan`,
    `DTSTAMP:${fmt(new Date())}`,
    `DTSTART:${fmt(start)}`,
    `DTEND:${fmt(end)}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${location}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')

  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' })
  const a = document.createElement('a')
  a.href = URL.createObjectURL(blob)
  a.download = 'undangan-irma-gentur.ics'
  a.click()
  URL.revokeObjectURL(a.href)
}

export function googleCalendarUrl(opts: {
  title: string
  description: string
  location: string
  start: Date
  durationHours?: number
}) {
  const { title, description, location, start, durationHours = 2 } = opts
  const end = new Date(start.getTime() + durationHours * 3600_000)
  const fmt = (d: Date) => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
  const p = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    dates: `${fmt(start)}/${fmt(end)}`,
    details: description,
    location,
  })
  return `https://calendar.google.com/calendar/render?${p.toString()}`
}

export async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    const ta = document.createElement('textarea')
    ta.value = text
    document.body.appendChild(ta)
    ta.select()
    try {
      document.execCommand('copy')
      return true
    } catch {
      return false
    } finally {
      ta.remove()
    }
  }
}

export function shareWhatsApp(text: string, url: string) {
  const msg = encodeURIComponent(`${text}\n\n${url}`)
  window.open(`https://wa.me/?text=${msg}`, '_blank', 'noopener')
}

/** Resolusi path aset agar tetap benar di GitHub Pages subfolder */
export function asset(path: string) {
  return `${import.meta.env.BASE_URL}${encodeURI(path.replace(/^\//, ''))}`
}

export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

export function relativeTime(iso: string) {
  const diff = Date.now() - new Date(iso).getTime()
  const m = Math.floor(diff / 60000)
  if (m < 1) return 'Baru saja'
  if (m < 60) return `${m} menit lalu`
  const h = Math.floor(m / 60)
  if (h < 24) return `${h} jam lalu`
  const d = Math.floor(h / 24)
  if (d < 30) return `${d} hari lalu`
  return new Date(iso).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}
