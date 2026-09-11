import { useMemo } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export function SoftBloom({ className = '' }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute -top-24 left-1/2 h-96 w-[42rem] max-w-[120vw] -translate-x-1/2 rounded-full bg-gradient-to-b from-champagne/60 via-cream-deep/40 to-transparent blur-3xl" />
      <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-sage-light/40 blur-3xl" />
      <div className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-gold-light/30 blur-3xl" />
    </div>
  )
}

export function Grain({ opacity = 0.05 }: { opacity?: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 bg-grain mix-blend-multiply"
      style={{ opacity }}
    />
  )
}

export function Ticker({ items, className = '' }: { items: string[]; className?: string }) {
  const row = items.join('  ✦  ')
  return (
    <div className={`relative overflow-hidden border-y border-gold/20 bg-cream-deep/70 py-3 ${className}`}>
      <div className="flex animate-marquee whitespace-nowrap">
        {[0, 1].map((k) => (
          <span
            key={k}
            className="inline-block shrink-0 pr-10 font-display text-lg font-medium tracking-[0.28em] text-gold-deep/80"
          >
            {row} ✦{' '}
          </span>
        ))}
      </div>
    </div>
  )
}

export function OrganicDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div aria-hidden className="relative bg-ivory">
      <svg
        viewBox="0 0 1440 70"
        preserveAspectRatio="none"
        className={`block h-10 w-full text-cream-deep sm:h-14 ${flip ? 'rotate-180' : ''}`}
      >
        <path
          d="M0 0h1440v18C1180 58 620 68 0 22V0z"
          fill="currentColor"
        />
      </svg>
    </div>
  )
}

export function Petals({ count = 14, className = '' }: { count?: number; className?: string }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: (i * 97) % 100,
        delay: (i * 1.7) % 10,
        size: 8 + ((i * 5) % 10),
        op: 0.25 + ((i * 7) % 40) / 100,
      })),
    [count],
  )
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {items.map((s, i) => (
        <span
          key={i}
          className="absolute top-0 animate-rise-soft rounded-full bg-gold-light/70 blur-[0.5px]"
          style={{
            left: `${s.left}%`,
            width: s.size,
            height: s.size * 1.3,
            animationDelay: `${s.delay}s`,
            opacity: s.op,
          }}
        />
      ))}
    </div>
  )
}

export function Toast({ message }: { message: string | null }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.97 }}
          className="fixed bottom-24 left-1/2 z-[80] -translate-x-1/2"
        >
          <div className="glass-strong flex items-center gap-2.5 rounded-full px-5 py-3 font-body text-[0.82rem] font-medium text-ink">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sage-deep text-white">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {message}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
