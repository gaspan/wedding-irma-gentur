import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { couple, coverPhoto, events } from '../../config/wedding'
import { useGuestName } from '../../hooks/useGuestName'
import { asset } from '../../lib/utils'
import { Grain, Petals, SoftBloom } from '../ui/Effects'

const EASE = [0.22, 1, 0.36, 1] as const

export function Cover({ open, onOpen }: { open: boolean; onOpen: () => void }) {
  const guest = useGuestName()
  const [broken, setBroken] = useState(false)
  const showPhoto = Boolean(coverPhoto) && !broken

  return (
    <AnimatePresence>
      {!open && (
        <motion.div
          className="fixed inset-0 z-50 overflow-y-auto bg-ivory"
          exit={{ opacity: 0, scale: 1.04, filter: 'blur(8px)', transition: { duration: 0.7, ease: EASE } }}
        >
          <SoftBloom />
          <Grain opacity={0.06} />
          <Petals count={12} />

          <div className="relative mx-auto flex min-h-dvh w-full max-w-md flex-col items-center justify-center px-7 py-14 text-center">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-body text-[0.66rem] font-semibold uppercase tracking-[0.5em] text-gold-deep"
            >
              Walimatul ‘Urs
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 1, ease: EASE }}
              className="mt-8 w-full max-w-[280px]"
            >
              <div className="arch glass-strong relative overflow-hidden p-2.5">
                {showPhoto ? (
                  <img
                    src={asset(coverPhoto)}
                    alt="Mempelai"
                    onError={() => setBroken(true)}
                    className="arch h-[340px] w-full object-cover"
                  />
                ) : (
                  <div className="arch flex h-[340px] w-full flex-col items-center justify-center bg-gradient-to-b from-cream-deep via-ivory to-sage-light/50 px-6">
                    <span className="font-display text-6xl font-light text-gold-deep">
                      {couple.bride.nickname[0]} <span className="font-script text-5xl text-sage-deep">&</span> {couple.groom.nickname[0]}
                    </span>
                    <span className="mt-4 font-body text-[0.64rem] uppercase tracking-[0.4em] text-muted">
                      {events[0].date}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: EASE }}
              className="mt-8"
            >
              <h1 className="font-display text-5xl font-medium leading-[1.02] text-ink">
                {couple.bride.nickname}
              </h1>
              <div className="my-1 font-script text-5xl leading-none text-gold-deep">&</div>
              <h1 className="font-display text-5xl font-medium leading-[1.02] text-ink">
                {couple.groom.nickname}
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-7 w-full"
            >
              <div className="glass rounded-[1.8rem] px-6 py-5">
                <p className="font-body text-[0.66rem] uppercase tracking-[0.34em] text-muted">
                  Kepada Yth. Bapak / Ibu / Saudara-i
                </p>
                <p className="mt-2 font-display text-2xl font-medium text-ink">
                  {guest ?? 'Tamu Undangan'}
                </p>
              </div>

              <button
                onClick={onOpen}
                className="btn-fluid mt-6 inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-ink px-10 py-4 font-body text-[0.82rem] font-semibold uppercase tracking-[0.22em] text-ivory shadow-[0_18px_40px_-16px_rgb(44_44_44/0.5)] hover:bg-sage-deep hover:shadow-[0_18px_44px_-14px_rgb(95_115_81/0.6)] active:scale-[0.98]"
              >
                <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="5" width="18" height="14" rx="4" />
                  <path d="M3 9l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Buka Undangan
              </button>
              <p className="mt-4 font-body text-[0.72rem] tracking-wide text-muted">
                Ketuk untuk membuka • musik akan diputar
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
