import { useCallback, useEffect, useState } from 'react'
import { MotionConfig, motion, useScroll } from 'framer-motion'
import { hashtag, music } from './config/wedding'
import { useAudio } from './hooks/useAudio'
import { asset } from './lib/utils'
import { MusicToggle, NavBar } from './components/ui/Nav'
import { OrganicDivider, Ticker } from './components/ui/Effects'
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
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")"

export default function App() {
  const [open, setOpen] = useState(false)
  const { playing, play, toggle } = useAudio(asset(music.src), music.volume)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    document.body.dataset.locked = String(!open)
  }, [open])

  const handleOpen = useCallback(() => {
    setOpen(true)
    window.scrollTo({ top: 0 })
    play()
  }, [play])

  return (
    <MotionConfig reducedMotion="user">
      <Cover open={open} onOpen={handleOpen} />

      <main aria-hidden={!open} className="bg-ivory text-ink">
        <Hero />
        <Ticker items={[`IRMA & GENTUR`, `12 JUNI 2027`, `WALIMATUL ‘URS`, `UNDANGAN PERNIKAHAN`]} />
        <QuranVerse />
        <OrganicDivider />
        <Couple />
        <Story />
        <Countdown />
        <OrganicDivider flip />
        <Events />
        <Gallery />
        <Ticker
          items={[hashtag.toUpperCase(), `IRMA ✦ GENTUR`, `SAKINAH MAWADDAH WARAHMAH`, `TERIMA KASIH`]}
        />
        <Gift />
        <Wishes />
        <Footer />
      </main>

      <NavBar show={open} />
      <MusicToggle show={open} playing={playing} onToggle={toggle} />

      <motion.div
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-gold-deep via-gold-light to-sage-deep"
        style={{ scaleX: scrollYProgress }}
      />

      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[55] opacity-[0.05] mix-blend-multiply"
        style={{ backgroundImage: NOISE }}
      />
    </MotionConfig>
  )
}
