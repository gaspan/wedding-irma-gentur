export function Arch({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 420" fill="none" className={className} aria-hidden>
      <path
        d="M20 415V150C20 78 78 20 150 20s130 58 130 130v265"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.7"
      />
      <path
        d="M36 415V152c0-63 51-114 114-114s114 51 114 114v263"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.4"
      />
    </svg>
  )
}

export function Divider({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 24" fill="none" className={className} aria-hidden>
      <path d="M0 12h96M144 12h96" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      <path d="M120 4l6 8-6 8-6-8 6-8z" stroke="currentColor" strokeWidth="0.9" />
      <circle cx="120" cy="12" r="1.6" fill="currentColor" />
    </svg>
  )
}

export function Sprig({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 200" fill="none" className={className} aria-hidden>
      <path d="M60 200C60 140 60 70 60 8" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      {[40, 75, 110, 145].map((y, i) => (
        <g key={y} opacity={0.7 - i * 0.1}>
          <ellipse cx={60 - 20} cy={y} rx="18" ry="7" transform={`rotate(-28 ${60 - 20} ${y})`} stroke="currentColor" strokeWidth="0.9" />
          <ellipse cx={60 + 20} cy={y + 14} rx="18" ry="7" transform={`rotate(28 ${60 + 20} ${y + 14})`} stroke="currentColor" strokeWidth="0.9" />
        </g>
      ))}
    </svg>
  )
}

export function CornerFloral({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 180" fill="none" className={className} aria-hidden>
      <path d="M0 90c30 0 54-8 72-26S98 20 98 0" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <path d="M0 120c44 0 78-12 102-36S138 28 138 0" stroke="currentColor" strokeWidth="0.7" opacity="0.3" />
      <circle cx="96" cy="16" r="3" fill="currentColor" opacity="0.4" />
    </svg>
  )
}

export function BrideIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden>
      <circle cx="100" cy="100" r="76" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
      <path d="M100 52c-19 0-32 13-32 31 0 12 5 20 9 26-14 6-24 19-24 36v13h94v-13c0-17-10-30-24-36 4-6 9-14 9-26 0-18-13-31-32-31z" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  )
}

export function GroomIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden>
      <circle cx="100" cy="100" r="76" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
      <path d="M100 54c-17 0-29 12-29 28s12 29 29 29 29-13 29-29-12-28-29-28z" stroke="currentColor" strokeWidth="1.1" />
      <path d="M60 158v-12c0-19 18-33 40-33s40 14 40 33v12" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  )
}

export function RingsIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" fill="none" className={className} aria-hidden>
      <circle cx="46" cy="46" r="24" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="74" cy="46" r="24" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

export function MosqueIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 140" fill="none" className={className} aria-hidden>
      <path d="M10 132h180" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <path d="M60 132V72c0-22 18-40 40-40s40 18 40 40v60" stroke="currentColor" strokeWidth="1.1" />
      <path d="M100 32c-12-10-12-24 0-32 12 8 12 22 0 32z" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

export function EnvelopeIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 110" fill="none" className={className} aria-hidden>
      <rect x="10" y="20" width="140" height="86" rx="14" stroke="currentColor" strokeWidth="1.2" />
      <path d="M10 30l70 44 70-44" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  )
}

export function CalendarIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} aria-hidden>
      <rect x="14" y="24" width="92" height="82" rx="18" stroke="currentColor" strokeWidth="1.2" />
      <path d="M14 48h92" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <path d="M38 24V12M82 24V12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

export function Aurora({ className = '' }: { className?: string }) {
  return <div aria-hidden className={`pointer-events-none absolute inset-0 ${className}`} />
}

const SPARKS = [
  { t: '8%', l: '12%' }, { t: '18%', l: '84%' }, { t: '32%', l: '8%' },
  { t: '52%', l: '92%' }, { t: '68%', l: '10%' }, { t: '82%', l: '88%' },
]

export function Sparkles({ className = '' }: { className?: string }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {SPARKS.map((p, i) => (
        <svg key={i} viewBox="0 0 24 24" width="9" height="9" fill="currentColor" className={className} style={{ position: 'absolute', top: p.t, left: p.l, opacity: 0.5 }}>
          <path d="M12 0l2.4 9.6L24 12l-9.6 2.4L12 24l-2.4-9.6L0 12l9.6-2.4z" />
        </svg>
      ))}
    </div>
  )
}

export function CornerOrnate({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 140" fill="none" className={className} aria-hidden>
      <path d="M4 136V84c0-44 36-80 80-80h52" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <circle cx="30" cy="30" r="2" fill="currentColor" opacity="0.5" />
    </svg>
  )
}

export function OrnateDivider({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 36" fill="none" className={className} aria-hidden>
      <path d="M0 18h120M200 18h120" stroke="currentColor" strokeWidth="0.7" opacity="0.5" />
      <path d="M160 6l8 12-8 12-8-12 8-12z" stroke="currentColor" strokeWidth="0.8" />
    </svg>
  )
}

export function Mandala({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" fill="none" className={className} aria-hidden>
      <circle cx="200" cy="200" r="188" stroke="currentColor" strokeWidth="0.6" opacity="0.35" />
      <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="0.4" opacity="0.25" />
      <circle cx="200" cy="200" r="90" stroke="currentColor" strokeWidth="0.4" opacity="0.2" />
    </svg>
  )
}
