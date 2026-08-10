import { useCallback, useEffect, useRef, useState } from 'react'

export function useAudio(src: string, volume = 0.35) {
  const ref = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const audio = new Audio(src)
    audio.loop = true
    audio.volume = volume
    audio.preload = 'none'
    ref.current = audio
    return () => {
      audio.pause()
      ref.current = null
    }
  }, [src, volume])

  const play = useCallback(async () => {
    try {
      await ref.current?.play()
      setPlaying(true)
    } catch {
      setPlaying(false)
    }
  }, [])

  const toggle = useCallback(async () => {
    const audio = ref.current
    if (!audio) return
    if (audio.paused) {
      try {
        await audio.play()
        setPlaying(true)
      } catch {
        setPlaying(false)
      }
    } else {
      audio.pause()
      setPlaying(false)
    }
  }, [])

  // Jeda otomatis saat tab tidak aktif
  useEffect(() => {
    const onHidden = () => {
      if (document.hidden && ref.current && !ref.current.paused) {
        ref.current.pause()
        setPlaying(false)
      }
    }
    document.addEventListener('visibilitychange', onHidden)
    return () => document.removeEventListener('visibilitychange', onHidden)
  }, [])

  return { playing, play, toggle }
}
