import { useMemo } from 'react'
import type { CSSProperties } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

/** Debu Emas Melayang Melingkar & Naik */
export function Particles({ className = '', count = 22 }: { className?: string; count?: number }) {
  const p = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        size: 2 + Math.random() * 6,
        delay: Math.random() * 12,
        dur: 6 + Math.random() * 9,
        dx: (Math.random() - 0.5) * 160,
        op: 0.3 + Math.random() * 0.65,
        blur: Math.random() > 0.6 ? '1px' : '0px',
      })),
    [count],
  )

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {p.map((s, i) => (
        <span
          key={i}
          className="absolute -bottom-6 animate-rise rounded-full bg-linear-to-tr from-gold-deep via-gold-bright to-white shadow-[0_0_8px_rgba(246,229,184,0.8)]"
          style={
            {
              left: `${s.left}%`,
              width: s.size,
              height: s.size,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.dur}s`,
              filter: `blur(${s.blur})`,
              '--dx': `${s.dx}px`,
              '--p-op': s.op,
            } as CSSProperties
          }
        />
      ))}
    </div>
  )
}

const CONFETTI_COLORS = [
  '#c8a75c',
  '#f6e5b8',
  '#efdcb4',
  '#176243',
  '#e3cd96',
  '#ffffff',
  '#9d7a33',
  '#0a3125',
]

/** Confetti Emas & Emerald Jatuh saat Undangan dibuka */
export function Confetti() {
  const pieces = useMemo(
    () =>
      Array.from({ length: 75 }, (_, i) => ({
        left: Math.random() * 100,
        delay: Math.random() * 1.2,
        dur: 2.8 + Math.random() * 2.4,
        color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
        w: 5 + Math.random() * 8,
        h: 8 + Math.random() * 10,
        rot: 360 + Math.random() * 720,
        rounded: i % 3 === 0 ? '999px' : i % 2 === 0 ? '2px' : '0px',
      })),
    [],
  )

  return (
    <div className="pointer-events-none fixed inset-0 z-[70] overflow-hidden" aria-hidden>
      {pieces.map((p, i) => (
        <span
          key={i}
          className="absolute -top-10 animate-confetti shadow-[0_0_6px_rgba(200,167,92,0.4)]"
          style={
            {
              left: `${p.left}%`,
              width: p.w,
              height: p.h,
              background: p.color,
              borderRadius: p.rounded,
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

/** Teks Melingkar Berputar Halus */
export function CircularText({ text, className = '' }: { text: string; className?: string }) {
  return (
    <div className={`animate-spin-slow ${className}`}>
      <svg viewBox="0 0 120 120" className="h-full w-full drop-shadow-[0_0_10px_rgba(200,167,92,0.3)]">
        <defs>
          <path id="circ-path" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" fill="none" />
        </defs>
        <text fontSize="10.5" letterSpacing="2.8" fill="currentColor" className="font-body font-semibold">
          <textPath href="#circ-path">{text}</textPath>
        </text>
      </svg>
    </div>
  )
}

/** Ticker Berjalan Tanpa Henti dengan Ornamen Mewah */
export function Ticker({ items, className = '' }: { items: string[]; className?: string }) {
  const row = items.join('   ❀   ')
  return (
    <div className={`relative overflow-hidden border-y border-gold/30 bg-emerald-void/95 py-3.5 ${className}`}>
      <div className="pointer-events-none absolute inset-0 bg-pattern-gold opacity-[0.1]" />
      <div className="flex animate-marquee whitespace-nowrap">
        {[0, 1].map((k) => (
          <span
            key={k}
            className="inline-block shrink-0 pr-12 font-display text-[1.15rem] font-light tracking-[0.32em] text-gold-gradient text-gold-shimmer"
          >
            {row}   ⚜   
          </span>
        ))}
      </div>
    </div>
  )
}

/** Pembatas Antar Section (Wave / Mountain / Tilt / Ornate) */
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

/** Kelopak Bunga Berjatuhan dengan Ayunan 3D */
const LEAF_COLORS = ['#c8a75c', '#e3cd96', '#8a9a7b', '#a9b79c', '#f6e5b8']

export function Petals({ className = '', count = 18 }: { className?: string; count?: number }) {
  const p = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        size: 8 + Math.random() * 12,
        delay: Math.random() * 18,
        dur: 12 + Math.random() * 14,
        sway: (Math.random() - 0.5) * 110,
        op: 0.25 + Math.random() * 0.55,
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
            className="drop-shadow-[0_2px_8px_rgba(200,167,92,0.3)]"
            aria-hidden
          >
            <path
              d="M12 2C7 7 4 11 4 15c0 5 4 7 8 7s8-2 8-7c0-4-3-8-8-13z"
              fill="currentColor"
              opacity="0.85"
            />
            <path d="M12 8v14" stroke="white" strokeWidth="0.7" opacity="0.5" fill="none" />
          </svg>
        </span>
      ))}
    </div>
  )
}

/** Angka Countdown dengan Flip 3D & Blur Fade */
export function FlipDigit({ value, className = '' }: { value: number; className?: string }) {
  return (
    <span className="relative inline-flex h-[1.05em] items-center justify-center overflow-hidden">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={value}
          initial={{ y: '-70%', opacity: 0, rotateX: -60, filter: 'blur(6px)' }}
          animate={{ y: '0%', opacity: 1, rotateX: 0, filter: 'blur(0px)' }}
          exit={{ y: '70%', opacity: 0, rotateX: 60, filter: 'blur(6px)' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={className}
        >
          {String(value).padStart(2, '0')}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

