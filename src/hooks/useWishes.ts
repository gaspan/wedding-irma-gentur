import { useCallback, useEffect, useState } from 'react'
import { isSupabaseReady, supabase } from '../lib/supabase'
import type { Wish, WishInput } from '../types'

const LS_KEY = 'undangan_wishes'
const COOLDOWN_KEY = 'undangan_last_submit'
const COOLDOWN_MS = 30_000

function readLocal(): Wish[] {
  try {
    return JSON.parse(localStorage.getItem(LS_KEY) ?? '[]')
  } catch {
    return []
  }
}

function writeLocal(list: Wish[]) {
  localStorage.setItem(LS_KEY, JSON.stringify(list.slice(0, 200)))
}

export function useWishes() {
  const [wishes, setWishes] = useState<Wish[]>([])
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const load = useCallback(async () => {
    if (!isSupabaseReady || !supabase) {
      setWishes(readLocal())
      setLoading(false)
      return
    }
    const { data, error } = await supabase
      .from('wishes')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(100)

    if (error) {
      setError('Gagal memuat ucapan.')
      setWishes(readLocal())
    } else {
      setWishes(data as Wish[])
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    load()
  }, [load])

  // Realtime: ucapan baru langsung muncul tanpa refresh
  useEffect(() => {
    if (!isSupabaseReady || !supabase) return
    const client = supabase
    const channel = client
      .channel('wishes-feed')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'wishes' },
        (payload) => {
          const row = payload.new as Wish
          setWishes((prev) =>
            prev.some((w) => w.id === row.id) ? prev : [row, ...prev],
          )
        },
      )
      .subscribe()

    return () => {
      client.removeChannel(channel)
    }
  }, [])

  const submit = useCallback(async (input: WishInput) => {
    setError(null)

    const last = Number(localStorage.getItem(COOLDOWN_KEY) ?? 0)
    if (Date.now() - last < COOLDOWN_MS) {
      const wait = Math.ceil((COOLDOWN_MS - (Date.now() - last)) / 1000)
      setError(`Mohon tunggu ${wait} detik sebelum mengirim lagi.`)
      return false
    }

    setSubmitting(true)

    if (!isSupabaseReady || !supabase) {
      const local: Wish = {
        id: crypto.randomUUID(),
        ...input,
        created_at: new Date().toISOString(),
      }
      const next = [local, ...readLocal()]
      writeLocal(next)
      setWishes(next)
      localStorage.setItem(COOLDOWN_KEY, String(Date.now()))
      setSubmitting(false)
      return true
    }

    const { data, error } = await supabase
      .from('wishes')
      .insert(input)
      .select()
      .single()

    setSubmitting(false)

    if (error) {
      setError('Gagal mengirim ucapan. Coba lagi sebentar.')
      return false
    }

    localStorage.setItem(COOLDOWN_KEY, String(Date.now()))
    setWishes((prev) =>
      prev.some((w) => w.id === (data as Wish).id) ? prev : [data as Wish, ...prev],
    )
    return true
  }, [])

  return { wishes, loading, submitting, error, submit }
}
