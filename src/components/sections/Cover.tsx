import { AnimatePresence, motion } from 'framer-motion'
import { couple, events } from '../../config/wedding'
import { useGuestName } from '../../hooks/useGuestName'
import { Arch, Aurora, CornerFloral, Sparkles } from '../illustrations'
import { Particles } from '../ui/Effects'

const EASE = [0.22, 1, 0.36, 1] as const

export function Cover({ open, onOpen }: { open: boolean; onOpen: () => void }) {
  const guest = useGuestName()
  const initials = `${couple.bride.nickname[0]}${couple.groom.nickname[0]}`.toUpperCase()

  return (
    <AnimatePresence>
      {!open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-emerald-night px-6"
          exit={{ opacity: 0, scale: 1.08, filter: 'blur(16px)' }}
          transition={{ duration: 1, ease: EASE }}
        >
          <Aurora />
          <div className="pointer-events-none absolute inset-0 bg-pattern-gold opacity-[0.12]" />
          <Sparkles className="text-gold-bright" />
          <Particles count={16} />
          <div className="pointer-events-none absolute inset-0 vignette" />

          {/* bingkai foil berlapis */}
          <div className="pointer-events-none absolute inset-3 rounded-[2.25rem] border border-gold/40 sm:inset-6" />
          <div className="pointer-events-none absolute inset-[0.9rem] rounded-[2rem] border border-gold/15 sm:inset-[1.65rem]" />
          <div className="pointer-events-none absolute inset-5 rounded-[1.8rem] border border-gold/[0.07] sm:inset-8" />

          <Arch className="pointer-events-none absolute h-[88vh] max-h-[720px] w-auto opacity-80" />
          <CornerFloral className="pointer-events-none absolute -top-1 -left-1 w-36 rotate-180 text-gold-bright/45 sm:w-52" />
          <CornerFloral className="pointer-events-none absolute -right-1 -bottom-1 w-36 text-gold-bright/45 sm:w-52" />

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* monogram */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.9, ease: EASE }}
              className="relative flex h-20 w-20 items-center justify-center"
            >
              <span className="absolute inset-0 rounded-full border border-gold/35" />
              <span className="absolute inset-[0.3rem] rounded-full border border-gold/15" />
              <span className="font-display text-2xl font-medium tracking-[0.1em] text-gold-gradient">
                {initials}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-7 text-[0.6rem] font-semibold tracking-[0.5em] text-gold-light/75 uppercase"
            >
              Walimatul &lsquo;Urs
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 26, filter: 'blur(14px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.5, duration: 1.2, ease: EASE }}
              className="mt-5"
            >
              <h1 className="font-display text-[4.4rem] leading-[0.95] font-light text-gold-gradient text-gold-shimmer text-glow sm:text-[7rem]">
                {couple.bride.nickname}
              </h1>

              <span className="my-2 flex items-center justify-center gap-4">
                <span className="h-px w-12 hairline-gold sm:w-20" />
                <span className="font-script text-4xl leading-none text-gold-bright sm:text-5xl">
                  &amp;
                </span>
                <span className="h-px w-12 hairline-gold sm:w-20" />
              </span>

              <h1 className="font-display text-[4.4rem] leading-[0.95] font-light text-gold-gradient text-gold-shimmer text-glow sm:text-[7rem]">
                {couple.groom.nickname}
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-9 inline-flex items-center gap-3 rounded-full border border-gold/30 bg-gold/[0.06] px-7 py-2.5 backdrop-blur-md"
            >
              <span className="h-1 w-1 rotate-45 bg-gold-bright" />
              <p className="font-display text-base tracking-[0.18em] text-gold-light">
                {events[0].date}
              </p>
              <span className="h-1 w-1 rotate-45 bg-gold-bright" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95 }}
              className="mt-11"
            >
              <p className="text-[0.6rem] tracking-[0.35em] text-gold-light/55 uppercase">
                Kepada Yth.
              </p>
              <p className="mt-2 font-script text-4xl leading-tight text-gold-gradient sm:text-5xl">
                {guest ?? 'Bapak/Ibu/Saudara/i'}
              </p>
              <p className="mt-1.5 text-[0.7rem] tracking-wide text-gold-light/50">di tempat</p>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.15 }}
              onClick={onOpen}
              className="group animate-glow relative mt-11 inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-linear-to-r from-gold-deep via-gold-light to-gold-deep px-10 py-4 text-[0.8rem] font-semibold tracking-[0.12em] text-emerald-night uppercase transition duration-300 hover:scale-[1.04] active:scale-95"
            >
              {/* kilau melintas */}
              <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 animate-sheen bg-white/35 blur-md" />
              <svg
                viewBox="0 0 24 24"
                className="relative h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 8l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="relative">Buka Undangan</span>
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
