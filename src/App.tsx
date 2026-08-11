import { useCallback, useEffect, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import { hashtag, music } from './config/wedding'
import { useAudio } from './hooks/useAudio'
import { asset } from './lib/utils'
import { MusicToggle, NavBar } from './components/ui/Nav'
import { Confetti, Ticker, WaveSep } from './components/ui/Effects'
import { Cover } from './components/sections/Cover'
import { Hero } from './components/sections/Hero'
import { QuranVerse } from './components/sections/QuranVerse'
import { Couple } from './components/sections/Couple'
import { Story } from './components/sections/Story'
import { Countdown } from './components/sections/Countdown'
import { Events } from './components/sections/Events'
import { Gallery } from './components/sections/Gallery'
import { Gift } from './components/sections/Gift'
import { Wishes } from './components/sections/Wishes'
import { Footer } from './components/sections/Footer'

const NOISE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")"

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
        <WaveSep top="text-emerald-void" bottom="bg-cream" shape="mountain" />
        <QuranVerse />
        <Couple />
        <Story />
        <WaveSep top="text-cream-deep" bottom="bg-emerald-night" />
        <Countdown />
        <WaveSep top="text-emerald-night" bottom="bg-cream" shape="mountain" />
        <Events />
        <Gallery />
        <WaveSep top="text-cream-deep" bottom="bg-emerald-void" shape="tilt" />
        <Ticker
          items={[hashtag.toUpperCase(), `IRMA ✦ GENTUR`, `SAKINAH MAWADDAH WARAHMAH`, `JAZAKUMULLAHU KHAIRAN`]}
        />
        <Gift />
        <WaveSep top="text-emerald-night" bottom="bg-cream-deep" />        <Wishes />
        <WaveSep top="text-cream-deep" bottom="bg-emerald-night" />
        <Footer />
      </main>

      <NavBar show={open} />
      <MusicToggle show={open} playing={playing} onToggle={toggle} />

      {/* progress bar emas */}
      <motion.div
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-linear-to-r from-gold-deep via-gold-light to-gold-deep shadow-[0_0_12px_rgba(200,167,92,.55)]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* tekstur grain halus */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[55] opacity-[0.045] mix-blend-multiply"
        style={{ backgroundImage: NOISE }}
      />

      {confetti && open && <Confetti />}
    </>
  )
}
