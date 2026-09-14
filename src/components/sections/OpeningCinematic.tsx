import { useEffect, useMemo } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { couple } from '../../config/wedding'

const EASE = [0.22, 1, 0.36, 1] as const
const DURATION = 6.6

export function OpeningCinematic({ active, onDone }: { active: boolean; onDone: () => void }) {
  const petals = useMemo(
    () =>
      Array.from({ length: 26 }, (_, i) => ({
        left: (i * 37 + 11) % 100,
        delay: ((i * 0.53) % 5.5),
        dur: 3.4 + ((i * 7) % 30) / 12,
        size: 7 + ((i * 5) % 9),
        drift: ((i * 13) % 60) - 30,
      })),
    [],
  )

  useEffect(() => {
    if (!active) return
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    const t = window.setTimeout(onDone, reduced ? 700 : DURATION * 1000)
    return () => window.clearTimeout(t)
  }, [active, onDone])

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="fixed inset-0 z-[70] cursor-pointer overflow-hidden bg-ivory"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04, filter: 'blur(8px)', transition: { duration: 0.9, ease: EASE } }}
          transition={{ duration: 0.45 }}
          onClick={onDone}
          role="dialog"
          aria-label="Animasi pembuka undangan"
        >
          {/* ===== KAMERA: dolly maju ===== */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center will-change-transform"
            initial={{ scale: 1.0 }}
            animate={{ scale: 1.15 }}
            transition={{ duration: DURATION, ease: 'easeInOut' }}
            style={{ transformOrigin: '50% 50%' }}
          >
            {/* Lukisan Background Istana AI */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ filter: 'blur(8px)', opacity: 0 }}
              animate={{ filter: 'blur(0px)', opacity: 1 }}
              transition={{ delay: 2.2, duration: 2.4, ease: EASE }}
            >
              <img src={`${import.meta.env.BASE_URL}castle_bg.jpg`} alt="Heavenly Castle Background" className="h-full w-full object-cover object-center" />
            </motion.div>
            
            {/* degradasi akhir ke ivory agar nyambung ke Hero (tetap dipertahankan untuk transisi halus) */}
            <motion.div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[30%] bg-[linear-gradient(180deg,transparent_0%,rgba(244,236,221,0.55)_45%,#fdfbf7_100%)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0, 1] }}
              transition={{ duration: DURATION, times: [0, 0.55, 1], ease: 'easeOut' }}
            />
          </motion.div>

          {/* ===== RANTING DEPAN: tersingkap ===== */}
          <motion.div
            className="absolute inset-y-0 left-0 flex justify-start"
            initial={{ x: '0%', rotate: 0, opacity: 1 }}
            animate={{ x: '-100%', rotate: -7, opacity: 0 }}
            transition={{ duration: DURATION * 0.62, ease: 'easeInOut', delay: 0.35 }}
            style={{ transformOrigin: '0% 50%', filter: 'drop-shadow(0 20px 40px rgba(20,8,12,0.5))' }}
          >
            <img src={`${import.meta.env.BASE_URL}sakura_left.png`} alt="Sakura Branch Left" className="h-full w-auto max-w-none" />
          </motion.div>
          
          <motion.div
            className="absolute inset-y-0 right-0 flex justify-end"
            initial={{ x: '0%', rotate: 0, opacity: 1 }}
            animate={{ x: '100%', rotate: 7, opacity: 0 }}
            transition={{ duration: DURATION * 0.62, ease: 'easeInOut', delay: 0.35 }}
            style={{ transformOrigin: '100% 50%', filter: 'drop-shadow(0 20px 40px rgba(20,8,12,0.5))' }}
          >
            <img src={`${import.meta.env.BASE_URL}sakura_right.png`} alt="Sakura Branch Right" className="h-full w-auto max-w-none" />
          </motion.div>

          {/* bokeh depan tambahan */}
          <motion.div className="pointer-events-none absolute inset-0" initial={{ opacity: 0.9 }} animate={{ opacity: 0 }} transition={{ delay: 1.6, duration: 1.6 }}>
            <div className="absolute -left-10 top-[10%] h-40 w-40 rounded-full bg-[#e8b4c2]/30 blur-2xl" />
            <div className="absolute -right-10 top-[30%] h-52 w-52 rounded-full bg-[#8a8378]/25 blur-2xl" />
            <div className="absolute bottom-[10%] left-[30%] h-32 w-32 rounded-full bg-[#fdfbf7]/50 blur-2xl" />
          </motion.div>

          {/* ===== LEDAKAN CAHAYA saat tersingkap (champagne/ivory) ===== */}
          <motion.div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,#fdfbf7_0%,rgba(239,220,180,0.9)_24%,rgba(253,251,247,0)_62%)]"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: [0, 0.25, 1, 0.35, 0], scale: [0.6, 0.8, 1.25, 1.4, 1.5] }}
            transition={{ duration: DURATION, times: [0, 0.32, 0.52, 0.72, 1], ease: 'easeOut' }}
          />

          {/* kelopak beterbangan (tetap ada untuk menambah dinamika!) */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {petals.map((p, i) => (
              <span
                key={i}
                className="cin-petal absolute top-[-4%]"
                style={{
                  left: `${p.left}%`,
                  width: p.size,
                  height: p.size * 1.25,
                  animationDelay: `${p.delay}s`,
                  animationDuration: `${p.dur}s`,
                  ['--drift' as string]: `${p.drift}px`,
                }}
              />
            ))}
          </div>

          {/* vignette sinematik */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(44,44,44,0.4)_100%)]" />
          {/* veil ivory sebelum serah-terima ke web */}
          <motion.div
            className="pointer-events-none absolute inset-0 bg-ivory"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0, 0.85] }}
            transition={{ duration: DURATION, times: [0, 0.82, 1], ease: 'easeInOut' }}
          />
          {/* letterbox */}
          <motion.div className="absolute inset-x-0 top-0 bg-ink" initial={{ height: 0 }} animate={{ height: ['0vh', '7vh', '7vh', '0vh'] }} transition={{ duration: DURATION, times: [0, 0.12, 0.82, 1], ease: EASE }} />
          <motion.div className="absolute inset-x-0 bottom-0 bg-ink" initial={{ height: 0 }} animate={{ height: ['0vh', '7vh', '7vh', '0vh'] }} transition={{ duration: DURATION, times: [0, 0.12, 0.82, 1], ease: EASE }} />

          {/* teks */}
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
            <motion.p
              className="font-body text-[0.62rem] font-semibold uppercase tracking-[0.5em] text-[#fdfbf7] drop-shadow-[0_2px_12px_rgba(44,44,44,0.7)]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: [0, 1, 1, 0], y: [12, 0, 0, -10] }}
              transition={{ duration: 2.6, times: [0, 0.2, 0.75, 1], ease: EASE }}
            >
              Di balik ranting sakura
            </motion.p>
            <motion.div
              className="mt-4"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: [0, 0, 1, 1, 0], y: [18, 18, 0, 0, -12] }}
              transition={{ duration: DURATION, times: [0, 0.48, 0.62, 0.88, 1], ease: EASE }}
            >
              <p className="font-body text-[0.62rem] font-semibold uppercase tracking-[0.5em] text-[#fdfbf7] drop-shadow-[0_1px_10px_rgba(0,0,0,0.8)]">
                Taman Surga menanti
              </p>
              <p className="mt-2 font-script text-5xl leading-none text-gold-deep drop-shadow-[0_2px_18px_rgba(253,251,247,0.95)] sm:text-6xl">
                {couple.bride.nickname} & {couple.groom.nickname}
              </p>
              <div className="mx-auto mt-3 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
            </motion.div>
          </div>

          {/* progress + lewati */}
          <motion.div className="absolute bottom-[10vh] left-1/2 w-40 -translate-x-1/2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            <div className="h-[2px] overflow-hidden rounded-full bg-[#fdfbf7]/40">
              <motion.div className="h-full origin-left bg-gradient-to-r from-gold-light via-gold to-gold-light" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: DURATION - 0.4, ease: 'linear' }} />
            </div>
            <p className="mt-3 text-center font-body text-[0.6rem] uppercase tracking-[0.3em] text-[#fdfbf7]/80">
              Ketuk untuk lewati
            </p>
          </motion.div>

          {/* copyright */}
          <motion.div 
            className="pointer-events-none absolute bottom-[3vh] inset-x-0 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 2 }}
          >
            <p className="font-body text-[0.5rem] uppercase tracking-widest text-[#fdfbf7]/50 drop-shadow-md">
              © {new Date().getFullYear()} Gentur Ariyadi Siddiq Permana Yakti
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
