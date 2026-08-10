import { useCallback, useEffect, useState } from 'react'
import { music } from './config/wedding'
import { useAudio } from './hooks/useAudio'
import { asset } from './lib/utils'
import { MusicToggle, NavBar } from './components/ui/Nav'
import { Cover } from './components/sections/Cover'
import { Hero } from './components/sections/Hero'
import { QuranVerse } from './components/sections/QuranVerse'
import { Couple } from './components/sections/Couple'
import { Countdown } from './components/sections/Countdown'
import { Events } from './components/sections/Events'
import { Gallery } from './components/sections/Gallery'
import { Gift } from './components/sections/Gift'
import { Wishes } from './components/sections/Wishes'
import { Footer } from './components/sections/Footer'

export default function App() {
  const [open, setOpen] = useState(false)
  const { playing, play, toggle } = useAudio(asset(music.src), music.volume)

  // Kunci scroll selama cover masih tertutup
  useEffect(() => {
    document.body.dataset.locked = String(!open)
  }, [open])

  const handleOpen = useCallback(() => {
    setOpen(true)
    window.scrollTo({ top: 0 })
    // Interaksi pengguna diperlukan browser agar autoplay diizinkan
    play()
  }, [play])

  return (
    <>
      <Cover open={open} onOpen={handleOpen} />

      <main aria-hidden={!open}>
        <Hero />
        <QuranVerse />
        <Couple />
        <Countdown />
        <Events />
        <Gallery />
        <Gift />
        <Wishes />
        <Footer />
      </main>

      <NavBar show={open} />
      <MusicToggle show={open} playing={playing} onToggle={toggle} />
    </>
  )
}
