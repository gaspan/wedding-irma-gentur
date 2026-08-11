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

const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2)

const smoothScrollTo = (targetY: number, duration = 800) => {
  const startY = window.scrollY
  const delta = targetY - startY
  if (Math.abs(delta) < 2) return
  const start = performance.now()
  const step = (now: number) => {
    const p = Math.min(1, (now - start) / duration)
    window.scrollTo({ top: startY + delta * easeInOutCubic(p), behavior: 'instant' })
    if (p < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

export function NavBar({ show }: { show: boolean }) {
  if (!show) return null

  const go = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    smoothScrollTo(el.getBoundingClientRect().top + window.scrollY)
    el.classList.remove('nav-jump')
    void el.offsetWidth
    el.classList.add('nav-jump')
    el.addEventListener('animationend', () => el.classList.remove('nav-jump'), {
      once: true,
    })
  }

  return (
    <motion.nav
      initial={{ y: 90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
    >
      <div className="relative mx-auto flex max-w-md items-center justify-around overflow-hidden rounded-[1.6rem] border border-gold/40 bg-emerald-void/90 px-2.5 py-3 shadow-[0_20px_60px_-14px_rgba(2,16,11,.95)] backdrop-blur-2xl">
        <span className="pointer-events-none absolute inset-x-10 top-0 h-px hairline-gold opacity-80" />
        {ITEMS.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => go(item.id)}
            whileHover={{ scale: 1.15, y: -5 }}
            whileTap={{ scale: 0.85 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="group relative flex flex-1 flex-col items-center gap-1.5 rounded-2xl px-1 py-1.5 text-gold-light/75 transition-colors duration-300 hover:bg-gold/[0.12] hover:text-gold-bright cursor-pointer"
            aria-label={item.label}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-[20px] w-[20px] transition-transform duration-300 group-hover:-translate-y-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {item.icon}
            </svg>
            <span className="text-[0.6rem] font-bold tracking-[0.08em] uppercase">{item.label}</span>
          </motion.button>
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
      whileHover={{ scale: 1.15, rotate: 10 }}
      whileTap={{ scale: 0.85, rotate: -10 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 300, damping: 15 }}
      onClick={onToggle}
      aria-label={playing ? 'Jeda musik' : 'Putar musik'}
      className="fixed right-5 bottom-24 z-40 flex h-13 w-13 items-center justify-center rounded-full border-2 border-gold-light/60 bg-linear-to-br from-gold-deep via-gold-light to-gold-deep text-emerald-night shadow-[0_0_35px_rgba(200,167,92,.6)] cursor-pointer"
    >
      <motion.span
        animate={playing ? { rotate: 360 } : { rotate: 0 }}
        transition={
          playing ? { duration: 5, repeat: Infinity, ease: 'linear' } : { duration: 0.3 }
        }
        className="flex items-center justify-center"
      >
        {playing ? (
          <span className="flex h-4.5 w-5.5 items-end justify-center gap-[3.5px]">
            {[0, 0.15, 0.3].map((d) => (
              <span
                key={d}
                className="animate-eq w-[3.5px] rounded-full bg-emerald-night"
                style={{ height: '100%', animationDelay: `${d}s` }}
              />
            ))}
          </span>
        ) : (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
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

