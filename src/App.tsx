import { useCallback, useEffect, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import { hashtag, music } from './config/wedding'
import { useAudio } from './hooks/useAudio'
import { asset } from './lib/utils'
import { MusicToggle, NavBar } from './components/ui/Nav'
import { Confetti, Ticker } from './components/ui/Effects'
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
  const [confetti, setConfetti] = useState(false)
  const { playing, play, toggle } = useAudio(asset(music.src), music.volume)
  const { scrollYProgress } = useScroll()

  // Kunci scroll selama cover masih tertutup
  useEffect(() => {
    document.body.dataset.locked = String(!open)
  }, [open])

  const handleOpen = useCallback(() => {
    setOpen(true)
    setConfetti(true)
    window.scrollTo({ top: 0 })
    // Interaksi pengguna diperlukan browser agar autoplay diizinkan
    play()
    const t = setTimeout(() => setConfetti(false), 5500)
    return () => clearTimeout(t)
  }, [play])

  return (
    <>
      <Cover open={open} onOpen={handleOpen} />

      <main aria-hidden={!open}>
        <Hero />
        <Ticker items={[`IRMA & GENTUR`, `12 JUNI 2027`, `WALIMATUL ‘URS`, `UNDANGAN PERNIKAHAN`]} />
        <QuranVerse />
        <Couple />
        <Countdown />
        <Events />
        <Gallery />
        <Ticker items={[hashtag.toUpperCase(), `IRMA ✦ GENTUR`, `SAKINAH MAWADDAH WARAHMAH`, `JAZAKUMULLAHU KHAIRAN`]} />
        <Gift />
        <Wishes />
        <Footer />
      </main>

      <NavBar show={open} />
      <MusicToggle show={open} playing={playing} onToggle={toggle} />

      {/* progress bar emas */}
      <motion.div
        className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-linear-to-r from-gold-deep via-gold-bright to-gold-deep"
        style={{ scaleX: scrollYProgress }}
      />

      {confetti && open && <Confetti />}
    </>
  )
}
