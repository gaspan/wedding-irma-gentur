import { AnimatePresence, motion } from 'framer-motion'
import { couple, events } from '../../config/wedding'
import { useGuestName } from '../../hooks/useGuestName'
import { Arch, CornerFloral, Sprig } from '../illustrations'

export function Cover({ open, onOpen }: { open: boolean; onOpen: () => void }) {
  const guest = useGuestName()

  return (
    <AnimatePresence>
      {!open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-cream px-6"
          exit={{ opacity: 0, scale: 1.06 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="pointer-events-none absolute inset-0 bg-pattern opacity-[0.18]" />

          <CornerFloral className="pointer-events-none absolute -top-2 -left-2 w-32 rotate-180 text-sage opacity-40 sm:w-44" />
          <CornerFloral className="pointer-events-none absolute -right-2 -bottom-2 w-32 text-sage opacity-40 sm:w-44" />

          <Arch className="pointer-events-none absolute h-[86vh] max-h-[680px] w-auto text-gold opacity-35" />

          <div className="relative z-10 flex flex-col items-center text-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-[0.65rem] tracking-[0.35em] text-sage-deep uppercase"
            >
              Walimatul ‘Urs
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8 }}
              className="mt-6"
            >
              <h1 className="font-display text-5xl leading-[1.05] font-light text-ink sm:text-6xl">
                {couple.bride.nickname}
              </h1>
              <span className="my-2 block font-display text-3xl text-gold italic">&</span>
              <h1 className="font-display text-5xl leading-[1.05] font-light text-ink sm:text-6xl">
                {couple.groom.nickname}
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-7 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-gold/60" />
              <p className="font-display text-lg text-muted">{events[0].date}</p>
              <span className="h-px w-10 bg-gold/60" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-10"
            >
              <p className="text-xs tracking-wide text-muted">Kepada Yth.</p>
              <p className="mt-1.5 font-display text-2xl text-ink">
                {guest ?? 'Bapak/Ibu/Saudara/i'}
              </p>
              <p className="mt-1 text-xs text-muted">di tempat</p>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              onClick={onOpen}
              className="group mt-10 inline-flex items-center gap-2.5 rounded-full border border-gold/50 bg-white/70 px-8 py-3.5 text-sm font-medium tracking-wide text-ink shadow-sm backdrop-blur transition hover:border-gold hover:bg-gold hover:text-white active:scale-95"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M3 8l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="3" y="5" width="18" height="14" rx="2" />
              </svg>
              Buka Undangan
            </motion.button>
          </div>

          <Sprig className="pointer-events-none absolute bottom-0 left-4 h-40 text-sage opacity-25" />
          <Sprig className="pointer-events-none absolute top-0 right-4 h-40 -scale-y-100 text-sage opacity-25" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
