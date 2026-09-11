import { useCallback, useEffect, useRef, useState } from 'react'
import { fetchGuestbook, postGuestbook } from '../lib/guestbook'
import type { GuestbookEntry, GuestbookInput } from '../types'

export function useWishes() {
  const [wishes, setWishes] = useState<GuestbookEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
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
    load()
    return () => {
      mounted.current = false
    }
  }, [load])

  const submit = useCallback(async (input: GuestbookInput) => {
    setError(null)
    setSubmitting(true)
    try {
      const entry = await postGuestbook(input)
      if (mounted.current) {
        setWishes((prev) =>
          prev.some((w) => w.timestamp === entry.timestamp && w.nama === entry.nama)
            ? prev
            : [entry, ...prev],
        )
      }
      return true
    } catch {
      if (mounted.current) setError('Gagal mengirim ucapan. Coba lagi sebentar.')
      return false
    } finally {
      if (mounted.current) setSubmitting(false)
    }
  }, [])

  return { wishes, loading, submitting, error, submit, reload: load }
}
