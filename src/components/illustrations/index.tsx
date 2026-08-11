/** Set ilustrasi SVG bertema Islamic minimalist. Semua mewarisi currentColor. */

export function Arch({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 420" fill="none" className={className} aria-hidden>
      <defs>
        <linearGradient id="arch-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f6e5b8" />
          <stop offset="0.35" stopColor="#e3cd96" />
          <stop offset="0.7" stopColor="#c8a75c" />
          <stop offset="1" stopColor="#7d5f24" stopOpacity="0.35" />
        </linearGradient>
      </defs>

      {/* lengkung utama */}
      <path
        d="M20 415V150C20 78 78 20 150 20s130 58 130 130v265"
        stroke="url(#arch-gold)"
        strokeWidth="1.6"
      />
      {/* lengkung kedua */}
      <path
        d="M36 415V152c0-63 51-114 114-114s114 51 114 114v263"
        stroke="url(#arch-gold)"
        strokeWidth="0.6"
        opacity="0.5"
      />
      {/* lengkung ketiga, hairline */}
      <path
        d="M50 415V154c0-55 45-100 100-100s100 45 100 100v261"
        stroke="url(#arch-gold)"
        strokeWidth="0.4"
        opacity="0.3"
      />

      {/* mahkota puncak */}
      <path d="M150 20V2" stroke="#f6e5b8" strokeWidth="1.2" strokeLinecap="round" />
      <path
        d="M150 2c-4 5-6 8-6 11 0 3.5 2.7 6 6 6s6-2.5 6-6c0-3-2-6-6-11z"
        stroke="#f6e5b8"
        strokeWidth="0.9"
      />
      {/* sulur simetris di bawah mahkota */}
      <path
        d="M150 30c-14 4-24 12-30 22M150 30c14 4 24 12 30 22"
        stroke="url(#arch-gold)"
        strokeWidth="0.7"
        opacity="0.7"
        strokeLinecap="round"
      />
      <circle cx="150" cy="150" r="3.5" fill="#f6e5b8" opacity="0.55" />
      <circle cx="150" cy="150" r="9" stroke="#e3cd96" strokeWidth="0.4" opacity="0.4" />
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

/** Ornamen sudut filigree mewah (bentuk L). Putar dengan rotate-90/180/-90 */
export function CornerOrnate({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 140" fill="none" className={className} aria-hidden>
      <path d="M4 136V84c0-44 36-80 80-80h52" stroke="currentColor" strokeWidth="1.1" />
      <path d="M4 136v-24c0-58 50-108 108-108h24" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      {/* sulur */}
      <path
        d="M4 62c16 0 24-7 28-20M4 48c20 0 32-9 38-26"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.7"
      />
      <path
        d="M62 4c0 16 7 24 20 28M48 4c0 20 9 32 26 38"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.7"
      />
      <circle cx="30" cy="30" r="2.2" fill="currentColor" opacity="0.65" />
      <circle cx="6" cy="110" r="1.6" fill="currentColor" opacity="0.5" />
      <circle cx="110" cy="6" r="1.6" fill="currentColor" opacity="0.5" />
      <path d="M4 124c8 0 12-4 14-10M124 4c0 8 4 12 10 14" stroke="currentColor" strokeWidth="0.6" opacity="0.6" />
    </svg>
  )
}

/** Pembatas mewah: belah ketupat + sulur simetris */
export function OrnateDivider({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 36" fill="none" className={className} aria-hidden>
      <path d="M0 18h118" stroke="currentColor" strokeWidth="0.7" opacity="0.55" />
      <path d="M202 18h118" stroke="currentColor" strokeWidth="0.7" opacity="0.55" />
      {/* sulur kiri-kanan */}
      <path d="M118 18c-8 0-11-7-11-13M118 18c-8 0-11 7-11 13M202 18c8 0 11-7 11-13M202 18c8 0 11 7 11 13" stroke="currentColor" strokeWidth="0.6" opacity="0.7" />
      {/* belah ketupat kecil */}
      <path d="M136 6l8 12-8 12-8-12 8-12z" stroke="currentColor" strokeWidth="0.7" />
      <path d="M184 6l8 12-8 12-8-12 8-12z" stroke="currentColor" strokeWidth="0.7" />
      {/* ketupat utama */}
      <path d="M160 2l9 16-9 16-9-16 9-16z" stroke="currentColor" strokeWidth="0.9" />
      <path d="M160 8l6 10-6 10-6-10 6-10z" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
      <circle cx="160" cy="18" r="1.8" fill="currentColor" />
      <path d="M150 18l10 8M170 18l-10 8" stroke="currentColor" strokeWidth="0.6" opacity="0.7" />
    </svg>
  )
}

/** Mandala lingkaran — latar belakang nama/nomor mewah */
export function Mandala({ className = '' }: { className?: string }) {
  const petals = Array.from({ length: 24 })
  const dots = Array.from({ length: 12 })
  return (
    <svg viewBox="0 0 400 400" fill="none" className={className} aria-hidden>
      <circle cx="200" cy="200" r="192" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
      <circle cx="200" cy="200" r="172" stroke="currentColor" strokeWidth="0.3" opacity="0.35" />
      {petals.map((_, i) => {
        const a = (i * 15 * Math.PI) / 180
        const x1 = 200 + Math.cos(a) * 158
        const y1 = 200 + Math.sin(a) * 158
        const x2 = 200 + Math.cos(a + 0.05) * 138
        const y2 = 200 + Math.sin(a + 0.05) * 138
        const x3 = 200 + Math.cos(a - 0.05) * 138
        const y3 = 200 + Math.sin(a - 0.05) * 138
        return (
          <path
            key={i}
            d={`M${x1.toFixed(1)} ${y1.toFixed(1)}L${x2.toFixed(1)} ${y2.toFixed(1)}L${x3.toFixed(1)} ${y3.toFixed(1)}Z`}
            stroke="currentColor"
            strokeWidth="0.4"
            opacity="0.45"
          />
        )
      })}
      <circle cx="200" cy="200" r="112" stroke="currentColor" strokeWidth="0.4" opacity="0.4" />
      {dots.map((_, i) => {
        const a = (i * 30 * Math.PI) / 180
        const r = 96
        return (
          <circle key={i} cx={200 + Math.cos(a) * r} cy={200 + Math.sin(a) * r} r="2.4" fill="currentColor" opacity="0.5" />
        )
      })}
      <circle cx="200" cy="200" r="34" stroke="currentColor" strokeWidth="0.4" opacity="0.45" />
      <circle cx="200" cy="200" r="5" fill="currentColor" opacity="0.6" />
    </svg>
  )
}
