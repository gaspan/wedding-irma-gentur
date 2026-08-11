import { AnimatePresence, motion } from 'framer-motion'
import { couple, events } from '../../config/wedding'
import { useGuestName } from '../../hooks/useGuestName'
import { Aurora, CornerOrnate, Mandala, Sparkles } from '../illustrations'
import { Particles } from '../ui/Effects'

const EASE = [0.22, 1, 0.36, 1] as const

export function Cover({ open, onOpen }: { open: boolean; onOpen: () => void }) {
  const guest = useGuestName()
  const initials = `${couple.bride.nickname[0]}${couple.groom.nickname[0]}`.toUpperCase()

  return (
    <AnimatePresence>
      {!open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden px-6"
          exit={{ opacity: 0, transition: { delay: 1.2, duration: 0.5 } }}
        >
          {/* Gerbang Kiri */}
          <motion.div
            className="absolute inset-y-0 left-0 w-1/2 bg-emerald-void border-r-2 border-gold/40 shadow-[10px_0_30px_rgba(0,0,0,0.8)] z-0 overflow-hidden"
            exit={{ x: '-100%', transition: { duration: 1.2, ease: EASE } }}
          >
            <div className="absolute inset-0 bg-damask opacity-[0.1]" />
            <div className="absolute inset-0 bg-pattern-gold opacity-[0.1]" />
            <CornerOrnate className="absolute top-5 left-5 w-32 text-gold-bright/60" />
            <CornerOrnate className="absolute bottom-5 left-5 w-32 -rotate-90 text-gold-bright/60" />
            <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-black/60 to-transparent" />
          </motion.div>

          {/* Gerbang Kanan */}
          <motion.div
            className="absolute inset-y-0 right-0 w-1/2 bg-emerald-void border-l-2 border-gold/40 shadow-[-10px_0_30px_rgba(0,0,0,0.8)] z-0 overflow-hidden"
            exit={{ x: '100%', transition: { duration: 1.2, ease: EASE } }}
          >
            <div className="absolute inset-0 bg-damask opacity-[0.1]" />
            <div className="absolute inset-0 bg-pattern-gold opacity-[0.1]" />
            <CornerOrnate className="absolute top-5 right-5 w-32 rotate-90 text-gold-bright/60" />
            <CornerOrnate className="absolute bottom-5 right-5 w-32 rotate-180 text-gold-bright/60" />
            <div className="absolute top-0 left-0 bottom-0 w-8 bg-gradient-to-r from-black/60 to-transparent" />
          </motion.div>

          {/* Konten Utama (Tengah) */}
          <motion.div
            className="relative z-10 flex w-full max-w-lg flex-col items-center text-center"
            exit={{ opacity: 0, scale: 1.3, filter: 'blur(15px)', transition: { duration: 0.8, ease: EASE } }}
          >
            <Aurora />
            <Sparkles className="text-gold-bright absolute inset-0 pointer-events-none" />
            <Particles count={30} />
            <div className="pointer-events-none absolute top-1/2 left-1/2 h-[80vh] w-[80vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[120px]" />
            
            {/* Mandala Tengah */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
              className="pointer-events-none absolute top-1/2 left-1/2 h-[90vh] w-[90vh] max-w-none -translate-x-1/2 -translate-y-1/2 text-gold-bright opacity-[0.25]"
            >
              <Mandala className="h-full w-full drop-shadow-[0_0_15px_rgba(200,167,92,0.3)]" />
            </motion.div>

            {/* Monogram Monarki Mewah */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 1.2, ease: EASE }}
              className="relative flex h-32 w-32 items-center justify-center rounded-full bg-emerald-void/80 shadow-[0_0_40px_rgba(200,167,92,0.4)] backdrop-blur-xl border border-gold/50"
            >
              <span className="absolute inset-[0.35rem] rounded-full border-2 border-gold/30 border-dashed animate-[spin_20s_linear_infinite]" />
              <span className="absolute inset-[0.85rem] rounded-full border border-gold/20" />
              <span className="font-display text-5xl font-medium tracking-wide text-gold-gradient text-gold-shimmer text-glow drop-shadow-md">
                {initials}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="mt-8 text-[0.7rem] font-semibold tracking-[0.8em] text-gold-light/90 uppercase drop-shadow-lg"
            >
              Walimatul &lsquo;Urs
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.6, duration: 1.4, ease: EASE }}
              className="mt-4"
            >
              <h1 className="font-script text-[4.5rem] leading-[0.8] text-gold-gradient text-gold-shimmer text-glow drop-shadow-2xl sm:text-[6.5rem]">
                {couple.bride.nickname}
              </h1>

              <span className="my-2 flex items-center justify-center gap-6">
                <span className="h-px w-20 hairline-gold sm:w-32" />
                <span
                  className="font-display text-[2rem] leading-none text-gold-bright sm:text-[3rem] italic"
                  style={{ textShadow: '0 0 25px rgba(246,229,184,0.8)' }}
                >
                  &
                </span>
                <span className="h-px w-20 hairline-gold sm:w-32" />
              </span>

              <h1 className="font-script text-[4.5rem] leading-[0.8] text-gold-gradient text-gold-shimmer text-glow drop-shadow-2xl sm:text-[6.5rem]">
                {couple.groom.nickname}
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
              className="mt-10 inline-flex items-center gap-4 rounded-full border border-gold/40 bg-emerald-night/70 px-10 py-3 shadow-[0_0_30px_rgba(200,167,92,0.3)] backdrop-blur-md"
            >
              <span className="h-1.5 w-1.5 rotate-45 bg-gold-bright shadow-[0_0_10px_#f6e5b8]" />
              <p className="font-display text-[0.95rem] tracking-[0.3em] text-gold-light">{events[0].date}</p>
              <span className="h-1.5 w-1.5 rotate-45 bg-gold-bright shadow-[0_0_10px_#f6e5b8]" />
            </motion.div>

            {/* Kartu Tamu VVIP */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 1 }}
              className="relative mt-10 w-full rounded-xl border border-gold/30 bg-emerald-void/80 px-8 py-5 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8)] backdrop-blur-xl"
            >
              <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
              <p className="text-[0.65rem] tracking-[0.5em] text-gold-light/60 uppercase">Kepada Yth.</p>
              <p className="mt-2 font-display text-2xl font-bold tracking-wider text-gold-gradient drop-shadow sm:text-3xl">
                {guest ?? 'Tamu Kehormatan'}
              </p>
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 1 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={onOpen}
              className="group relative mt-10 inline-flex items-center gap-4 overflow-hidden rounded-full bg-gradient-to-r from-gold-deep via-gold-bright to-gold-deep px-12 py-4.5 text-[0.85rem] font-bold tracking-[0.2em] text-emerald-void uppercase shadow-[0_0_50px_rgba(200,167,92,0.8)] transition-shadow duration-500 hover:shadow-[0_0_80px_rgba(200,167,92,1)] cursor-pointer"
            >
              <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 animate-sheen bg-white/50 blur-md" />
              <svg
                viewBox="0 0 24 24"
                className="relative h-5 w-5 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 8l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="relative">Buka Undangan</span>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
