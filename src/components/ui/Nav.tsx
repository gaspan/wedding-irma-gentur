import { motion } from 'framer-motion'

const ITEMS = [
  {
    id: 'mempelai',
    label: 'Mempelai',
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <circle cx="16" cy="8" r="3" />
        <path d="M3 20c0-3 3-5 6-5s6 2 6 5M14 20c0-3 3-5 6-5" />
      </>
    ),
  },
  {
    id: 'acara',
    label: 'Acara',
    icon: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M3 10h18M8 3v4M16 3v4" />
      </>
    ),
  },
  {
    id: 'momen',
    label: 'Momen',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" strokeLinecap="round" />
      </>
    ),
  },
  {
    id: 'galeri',
    label: 'Galeri',
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="8.5" cy="9.5" r="1.5" />
        <path d="M21 16l-5-5-9 9" />
      </>
    ),
  },
  {
    id: 'gift',
    label: 'Gift',
    icon: (
      <>
        <rect x="3" y="8" width="18" height="13" rx="2" />
        <path d="M3 12h18M12 8v13" />
        <path d="M12 8S9 3 7 5s5 3 5 3zM12 8s3-5 5-3-5 3-5 3z" />
      </>
    ),
  },
  {
    id: 'rsvp',
    label: 'RSVP',
    icon: (
      <>
        <path d="M21 11.5a8.4 8.4 0 01-9 8.4 9 9 0 01-3.9-.9L3 21l1.9-5a8.4 8.4 0 01-.9-3.9 8.4 8.4 0 018.4-8.4 8.4 8.4 0 018.6 8.3z" />
      </>
    ),
  },
]

export function NavBar({ show }: { show: boolean }) {
  if (!show) return null

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <motion.nav
      initial={{ y: 90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
    >
      <div className="mx-auto flex max-w-md items-center justify-around rounded-3xl border border-gold/30 bg-emerald-night/85 px-2 py-2 shadow-[0_14px_50px_-12px_rgba(8,35,25,.7)] backdrop-blur-xl">
        {ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => go(item.id)}
            className="flex flex-1 flex-col items-center gap-1 rounded-2xl px-1 py-1.5 text-gold-light/80 transition hover:bg-white/5 hover:text-gold-bright active:scale-90"
            aria-label={item.label}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-[18px] w-[18px]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {item.icon}
            </svg>
            <span className="text-[0.6rem] font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </motion.nav>
  )
}

export function MusicToggle({
  show,
  playing,
  onToggle,
}: {
  show: boolean
  playing: boolean
  onToggle: () => void
}) {
  if (!show) return null

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2 }}
      onClick={onToggle}
      aria-label={playing ? 'Jeda musik' : 'Putar musik'}
      className="fixed right-4 bottom-24 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-gold-deep via-gold to-gold-bright text-emerald-night shadow-[0_0_26px_rgba(201,169,97,.55)] transition hover:scale-105 active:scale-90"
    >
      <motion.span
        animate={playing ? { rotate: 360 } : { rotate: 0 }}
        transition={
          playing ? { duration: 6, repeat: Infinity, ease: 'linear' } : { duration: 0.3 }
        }
        className="flex items-center justify-center"
      >
        {playing ? (
          <span className="flex h-4 w-5 items-end justify-center gap-[3px]">
            {[0, 0.15, 0.3].map((d) => (
              <span
                key={d}
                className="animate-eq w-[3px] rounded-full bg-current"
                style={{ height: '100%', animationDelay: `${d}s` }}
              />
            ))}
          </span>
        ) : (
          <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M9 18V5l10-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="16" cy="16" r="3" />
            <path d="M4 4l16 16" />
          </svg>
        )}
      </motion.span>
    </motion.button>
  )
}
