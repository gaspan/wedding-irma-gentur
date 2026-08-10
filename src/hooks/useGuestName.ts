import { useMemo } from 'react'

/**
 * Membaca nama tamu dari URL: ?to=Budi+Santoso
 * Disanitasi agar tidak bisa dipakai untuk injeksi konten.
 */
export function useGuestName() {
  return useMemo(() => {
    const raw = new URLSearchParams(window.location.search).get('to')
    if (!raw) return null
    const clean = raw
      .replace(/[<>{}[\]\\/]/g, '')
      .trim()
      .slice(0, 60)
    return clean.length ? clean : null
  }, [])
}
