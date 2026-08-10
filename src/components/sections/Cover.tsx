import { AnimatePresence, motion } from 'framer-motion'
import { couple, events } from '../../config/wedding'
import { useGuestName } from '../../hooks/useGuestName'
import { Arch, Aurora, CornerFloral, Sparkles } from '../illustrations'

export function Cover({ open, onOpen }: { open: boolean; onOpen: () => void }) {
  const guest = useGuestName()

  return (
    <AnimatePresence>
      {!open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-emerald-deep px-6"
          exit={{ opacity: 0, scale: 1.06 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <Aurora />
          <div className="pointer-events-none absolute inset-0 bg-pattern-gold opacity-[0.15]" />
          <Sparkles className="text-gold-bright" />

          {/* bingkai ganda emas */}
          <div className="pointer-events-none absolute inset-3 rounded-[2rem] border border-gold/35 sm:inset-5" />
          <div className="pointer-events-none absolute inset-4 rounded-[1.75rem] border border-gold/15 sm:inset-6" />

          <Arch className="pointer-events-none absolute h-[88vh] max-h-[700px] w-auto opacity-90" />
          <CornerFloral className="pointer-events-none absolute -top-1 -left-1 w-36 rotate-180 text-gold-bright/50 sm:w-48" />
          <CornerFloral className="pointer-events-none absolute -right-1 -bottom-1 w-36 text-gold-bright/50 sm:w-48" />

          <div className="relative z-10 flex flex-col items-center text-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-[0.65rem] font-semibold tracking-[0.4em] text-gold-bright uppercase"
            >
              Walimatul ‘Urs
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8 }}
              className="mt-6"
            >
              <h1 className="font-display text-[4.2rem] leading-[1.02] font-medium text-gold-gradient text-gold-shimmer sm:text-8xl">
                {couple.bride.nickname}
              </h1>
              <span
                className="my-1 block font-display text-5xl text-gold italic"
                style={{ textShadow: '0 0 28px rgba(201,169,97,.7)' }}
              >
                &
              </span>
              <h1 className="font-display text-[4.2rem] leading-[1.02] font-medium text-gold-gradient text-gold-shimmer sm:text-8xl">
                {couple.groom.nickname}
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-gold/40 bg-white/5 px-6 py-2.5 backdrop-blur-md"
            >
              <span className="h-1.5 w-1.5 rotate-45 bg-gold-bright" />
              <p className="font-display text-lg tracking-wide text-gold-light">
                {events[0].date}
              </p>
              <span className="h-1.5 w-1.5 rotate-45 bg-gold-bright" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-10"
            >
              <p className="text-xs tracking-[0.25em] text-gold-light/70 uppercase">
                Kepada Yth.
              </p>
              <p className="mt-1.5 font-display text-3xl text-gold-gradient italic">
                {guest ?? 'Bapak/Ibu/Saudara/i'}
              </p>
              <p className="mt-1 text-xs text-gold-light/60">di tempat</p>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              onClick={onOpen}
              className="group animate-glow mt-10 inline-flex items-center gap-2.5 rounded-full bg-linear-to-r from-gold-deep via-gold to-gold-bright px-10 py-4 text-sm font-semibold tracking-wide text-emerald-night transition hover:scale-105 active:scale-95"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M3 8l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="3" y="5" width="18" height="14" rx="2" />
              </svg>
              Buka Undangan
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
