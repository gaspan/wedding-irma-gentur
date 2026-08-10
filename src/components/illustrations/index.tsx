/** Set ilustrasi SVG bertema Islamic minimalist. Semua mewarisi currentColor. */

export function Arch({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 420" fill="none" className={className} aria-hidden>
      <defs>
        <linearGradient id="arch-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f0d9a0" />
          <stop offset="0.55" stopColor="#c9a961" />
          <stop offset="1" stopColor="#a8843c" />
        </linearGradient>
      </defs>
      <path
        d="M20 415V150C20 78 78 20 150 20s130 58 130 130v265"
        stroke="url(#arch-gold)"
        strokeWidth="1.6"
      />
      <path
        d="M36 415V152c0-63 51-114 114-114s114 51 114 114v263"
        stroke="url(#arch-gold)"
        strokeWidth="0.7"
        opacity="0.55"
      />
      <path d="M150 20V4M150 4l-6 8M150 4l6 8" stroke="#f0d9a0" strokeWidth="1.2" />
      <circle cx="150" cy="150" r="4.5" fill="#ecd5a4" opacity="0.7" />
    </svg>
  )
}

export function Divider({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 24" fill="none" className={className} aria-hidden>
      <path d="M0 12h84M156 12h84" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      <path
        d="M120 2l7.5 10L120 22l-7.5-10L120 2z"
        stroke="currentColor"
        strokeWidth="0.9"
      />
      <path d="M103 12l7 -6v12l-7-6zM137 12l-7-6v12l7-6z" fill="currentColor" opacity="0.6" />
      <circle cx="120" cy="12" r="1.8" fill="currentColor" />
    </svg>
  )
}

export function Sprig({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 200" fill="none" className={className} aria-hidden>
      <path d="M60 200C60 140 60 70 60 4" stroke="currentColor" strokeWidth="1" />
      {[30, 60, 90, 120, 150].map((y, i) => (
        <g key={y}>
          <ellipse
            cx={60 - 22}
            cy={y}
            rx="21"
            ry="8"
            transform={`rotate(-28 ${60 - 22} ${y})`}
            stroke="currentColor"
            strokeWidth="0.9"
            opacity={0.85 - i * 0.08}
          />
          <ellipse
            cx={60 + 22}
            cy={y + 15}
            rx="21"
            ry="8"
            transform={`rotate(28 ${60 + 22} ${y + 15})`}
            stroke="currentColor"
            strokeWidth="0.9"
            opacity={0.85 - i * 0.08}
          />
        </g>
      ))}
      <circle cx="60" cy="10" r="3.5" stroke="currentColor" strokeWidth="0.9" />
    </svg>
  )
}

export function CornerFloral({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 180" fill="none" className={className} aria-hidden>
      <path
        d="M0 90c30 0 54-8 72-26S98 20 98 0"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.7"
      />
      <path
        d="M0 120c44 0 78-12 102-36S138 28 138 0"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.45"
      />
      {[
        [26, 74, -20],
        [52, 56, -35],
        [74, 32, -50],
      ].map(([cx, cy, r], i) => (
        <ellipse
          key={i}
          cx={cx}
          cy={cy}
          rx="16"
          ry="6.5"
          transform={`rotate(${r} ${cx} ${cy})`}
          stroke="currentColor"
          strokeWidth="0.9"
        />
      ))}
      <circle cx="96" cy="16" r="3" fill="currentColor" opacity="0.6" />
    </svg>
  )
}

/** Ilustrasi pasangan bergaya garis, dipakai di section mempelai */
export function BrideIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden>
      <circle cx="100" cy="100" r="78" stroke="currentColor" strokeWidth="0.8" opacity="0.35" />
      <path
        d="M100 52c-19 0-32 13-32 31 0 12 5 20 9 26-14 6-24 19-24 36v13h94v-13c0-17-10-30-24-36 4-6 9-14 9-26 0-18-13-31-32-31z"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path
        d="M68 78c0-20 14-32 32-32s32 12 32 32c-6-10-18-14-32-14s-26 4-32 14z"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path d="M62 92c-8 10-10 26-6 40" stroke="currentColor" strokeWidth="0.9" opacity="0.7" />
      <path d="M138 92c8 10 10 26 6 40" stroke="currentColor" strokeWidth="0.9" opacity="0.7" />
      <circle cx="100" cy="44" r="4" stroke="currentColor" strokeWidth="0.9" />
    </svg>
  )
}

export function GroomIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden>
      <circle cx="100" cy="100" r="78" stroke="currentColor" strokeWidth="0.8" opacity="0.35" />
      <path
        d="M100 54c-17 0-29 12-29 28s12 29 29 29 29-13 29-29-12-28-29-28z"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path
        d="M60 158v-12c0-19 18-33 40-33s40 14 40 33v12"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      {/* peci */}
      <path d="M76 60h48v-6c0-8-11-13-24-13S76 46 76 54v6z" stroke="currentColor" strokeWidth="1.1" />
      <path d="M100 113v45" stroke="currentColor" strokeWidth="0.9" opacity="0.6" />
      <path d="M88 120l12 12 12-12" stroke="currentColor" strokeWidth="0.9" opacity="0.6" />
    </svg>
  )
}

export function RingsIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" fill="none" className={className} aria-hidden>
      <circle cx="46" cy="46" r="24" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="74" cy="46" r="24" stroke="currentColor" strokeWidth="1.3" />
      <path d="M46 22l-5-9h10l-5 9z" stroke="currentColor" strokeWidth="1" />
      <circle cx="74" cy="18" r="4" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

export function MosqueIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 140" fill="none" className={className} aria-hidden>
      <path d="M10 138h180" stroke="currentColor" strokeWidth="1" />
      <path
        d="M60 138V72c0-22 18-40 40-40s40 18 40 40v66"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path d="M100 32c-12-10-12-24 0-32 12 8 12 22 0 32z" stroke="currentColor" strokeWidth="1" />
      <path d="M36 138V56M164 138V56" stroke="currentColor" strokeWidth="1.1" />
      <path d="M36 56c-5-6-5-12 0-18 5 6 5 12 0 18zM164 56c-5-6-5-12 0-18 5 6 5 12 0 18z" stroke="currentColor" strokeWidth="1" />
      <path
        d="M86 138v-30c0-8 6-14 14-14s14 6 14 14v30"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.7"
      />
    </svg>
  )
}

export function EnvelopeIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 110" fill="none" className={className} aria-hidden>
      <rect x="10" y="20" width="140" height="86" rx="6" stroke="currentColor" strokeWidth="1.2" />
      <path d="M10 28l70 46 70-46" stroke="currentColor" strokeWidth="1.1" />
      <path d="M80 74c-9-9-9-20 0-28 9 8 9 19 0 28z" stroke="currentColor" strokeWidth="1" opacity="0.8" />
      <circle cx="80" cy="12" r="6" stroke="currentColor" strokeWidth="1" opacity="0.6" />
    </svg>
  )
}

export function CalendarIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} aria-hidden>
      <rect x="14" y="24" width="92" height="82" rx="8" stroke="currentColor" strokeWidth="1.2" />
      <path d="M14 48h92" stroke="currentColor" strokeWidth="1.1" />
      <path d="M38 24V12M82 24V12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="60" cy="78" r="14" stroke="currentColor" strokeWidth="1" />
      <path d="M54 78l4 4 8-8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

/** Aurora bergerak untuk section gelap */
const AURORA = [
  { cls: 'bg-emerald/45', pos: '-top-40 left-1/2 -translate-x-1/2 h-[560px] w-[760px]', anim: 'animate-aurora' },
  { cls: 'bg-gold/20', pos: '-bottom-24 -left-28 h-[460px] w-[460px]', anim: 'animate-aurora-slow' },
  { cls: 'bg-emerald-mid/50', pos: 'top-1/4 -right-28 h-[420px] w-[420px]', anim: 'animate-aurora' },
]

export function Aurora({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {AURORA.map((b, i) => (
        <div
          key={i}
          className={`absolute rounded-full blur-[130px] ${b.cls} ${b.pos} ${b.anim}`}
        />
      ))}
    </div>
  )
}

/** Sparkles emas berkelip */
const SPARKS = [
  { t: '6%', l: '10%', s: 13, d: 0 },
  { t: '14%', l: '84%', s: 10, d: 0.7 },
  { t: '24%', l: '18%', s: 8, d: 1.4 },
  { t: '30%', l: '90%', s: 12, d: 0.3 },
  { t: '42%', l: '6%', s: 10, d: 1.9 },
  { t: '48%', l: '80%', s: 7, d: 2.4 },
  { t: '58%', l: '14%', s: 11, d: 1.1 },
  { t: '64%', l: '88%', s: 9, d: 0.5 },
  { t: '74%', l: '8%', s: 8, d: 2.8 },
  { t: '80%', l: '82%', s: 12, d: 1.6 },
  { t: '88%', l: '22%', s: 9, d: 2.1 },
  { t: '92%', l: '70%', s: 10, d: 0.9 },
]

export function Sparkles({ className = '' }: { className?: string }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {SPARKS.map((p, i) => (
        <span
          key={i}
          className="absolute animate-twinkle"
          style={{ top: p.t, left: p.l, animationDelay: `${p.d}s` }}
        >
          <svg viewBox="0 0 24 24" width={p.s} height={p.s} fill="currentColor" className={className}>
            <path d="M12 0l2.9 9.1L24 12l-9.1 2.9L12 24l-2.9-9.1L0 12l9.1-2.9z" />
          </svg>
        </span>
      ))}
    </div>
  )
}
