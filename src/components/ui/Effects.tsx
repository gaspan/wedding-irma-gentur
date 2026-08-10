import { useMemo } from 'react'
import type { CSSProperties } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

/** Partikel emas naik perlahan */
export function Particles({ className = '', count = 16 }: { className?: string; count?: number }) {
  const p = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        size: 3 + Math.random() * 5,
        delay: Math.random() * 10,
        dur: 7 + Math.random() * 8,
        dx: (Math.random() - 0.5) * 140,
        op: 0.25 + Math.random() * 0.65,
      })),
    [count],
  )

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {p.map((s, i) => (
        <span
          key={i}
          className="absolute -bottom-5 animate-rise rounded-full bg-gold"
          style={
            {
              left: `${s.left}%`,
              width: s.size,
              height: s.size,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.dur}s`,
              '--dx': `${s.dx}px`,
              '--p-op': s.op,
            } as CSSProperties
          }
        />
      ))}
    </div>
  )
}

const CONFETTI_COLORS = ['#c9a961', '#f0d9a0', '#f8ecc3', '#1b6b4a', '#e0c88d', '#ffffff']

/** Confetti jatuh, dipakai sesaat setelah undangan dibuka */
export function Confetti() {
  const pieces = useMemo(
    () =>
      Array.from({ length: 60 }, (_, i) => ({
        left: Math.random() * 100,
        delay: Math.random() * 0.8,
        dur: 2.6 + Math.random() * 2,
        color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
        w: 6 + Math.random() * 6,
        h: 9 + Math.random() * 8,
        rot: 240 + Math.random() * 480,
      })),
    [],
  )

  return (
    <div className="pointer-events-none fixed inset-0 z-[70] overflow-hidden" aria-hidden>
      {pieces.map((p, i) => (
        <span
          key={i}
          className="absolute -top-10 animate-confetti rounded-[2px]"
          style={
            {
              left: `${p.left}%`,
              width: p.w,
              height: p.h,
              background: p.color,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.dur}s`,
              '--rot': `${p.rot}deg`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  )
}

/** Teks melingkar berputar */
export function CircularText({ text, className = '' }: { text: string; className?: string }) {
  return (
    <div className={`animate-spin-slow ${className}`}>
      <svg viewBox="0 0 120 120" className="h-full w-full">
        <defs>
          <path id="circ-path" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" fill="none" />
        </defs>
        <text fontSize="11" letterSpacing="2.6" fill="currentColor" className="font-body font-semibold">
          <textPath href="#circ-path">{text}</textPath>
        </text>
      </svg>
    </div>
  )
}

/** Ticker berjalan tanpa henti */
export function Ticker({ items, className = '' }: { items: string[]; className?: string }) {
  const row = items.join('  ✦  ')
  return (
    <div className={`relative overflow-hidden border-y border-gold/30 bg-emerald-deep py-3.5 ${className}`}>
      <div className="pointer-events-none absolute inset-0 bg-pattern-gold opacity-10" />
      <div className="flex animate-marquee whitespace-nowrap">
        {[0, 1].map((k) => (
          <span
            key={k}
            className="inline-block shrink-0 pr-10 font-display text-xl tracking-[0.25em] text-gold-gradient text-gold-shimmer"
          >
            {row} ✦
          </span>
        ))}
      </div>
    </div>
  )
}

/** Pembatas antar section. `top` = warna section di atas, `bottom` = bg section di bawah */
export function WaveSep({
  top,
  bottom,
  shape = 'wave',
  className = '',
}: {
  top: string
  bottom: string
  shape?: 'wave' | 'mountain' | 'tilt'
  className?: string
}) {
  const paths = {
    wave: 'M0 0h1440v26C1140 96 300 96 0 26V0z',
    mountain: 'M0 0h1440v44L960 8 720 44 480 8 290 44 0 8V0z',
    tilt: 'M0 0h1440v24L0 60V0z',
  }
  return (
    <div className={`relative z-[5] ${bottom} ${className}`} aria-hidden>
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className={`block h-12 w-full sm:h-20 ${top}`}
      >
        <path d={paths[shape]} fill="currentColor" />
      </svg>
    </div>
  )
}

/** Kelopak bunga berjatuhan dengan ayunan lembut */
const LEAF_COLORS = ['#8a9a7b', '#c9a961', '#e0c88d', '#a9b79c']

export function Petals({ className = '', count = 14 }: { className?: string; count?: number }) {
  const p = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        size: 7 + Math.random() * 10,
        delay: Math.random() * 16,
        dur: 12 + Math.random() * 12,
        sway: (Math.random() - 0.5) * 90,
        op: 0.18 + Math.random() * 0.5,
        color: LEAF_COLORS[Math.floor(Math.random() * LEAF_COLORS.length)],
        flip: Math.random() > 0.5 ? -1 : 1,
      })),
    [count],
  )

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {p.map((s, i) => (
        <span
          key={i}
          className="absolute animate-petal"
          style={
            {
              left: `${s.left}%`,
              top: 0,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.dur}s`,
              '--sway': `${s.sway}px`,
              '--pdur': `${s.dur}s`,
              opacity: s.op,
            } as CSSProperties
          }
        >
          <svg
            viewBox="0 0 24 24"
            width={s.size}
            height={s.size}
            style={{ transform: `scaleX(${s.flip})`, color: s.color }}
            aria-hidden
          >
            <path
              d="M12 2C7 7 4 11 4 15c0 5 4 7 8 7s8-2 8-7c0-4-3-8-8-13z"
              fill="currentColor"
              opacity="0.75"
            />
            <path d="M12 8v14" stroke="white" strokeWidth="0.8" opacity="0.4" fill="none" />
          </svg>
        </span>
      ))}
    </div>
  )
}

/** Angka countdown dengan animasi flip setiap berubah */
export function FlipDigit({ value, className = '' }: { value: number; className?: string }) {
  return (
    <span className="relative inline-flex h-[1.05em] items-center justify-center overflow-hidden">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={value}
          initial={{ y: '-60%', opacity: 0, filter: 'blur(4px)' }}
          animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: '60%', opacity: 0, filter: 'blur(4px)' }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className={className}
        >
          {String(value).padStart(2, '0')}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
