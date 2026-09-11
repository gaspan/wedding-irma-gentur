import { motion } from 'framer-motion'

const ITEMS = [
  { id: 'mempelai', label: 'Mempelai' },
  { id: 'acara', label: 'Acara' },
  { id: 'galeri', label: 'Galeri' },
  { id: 'gift', label: 'Gift' },
  { id: 'ucapan', label: 'Ucapan' },
]

export function NavBar({ show }: { show: boolean }) {
  if (!show) return null
  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <motion.nav
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(0.9rem,env(safe-area-inset-bottom))]"
    >
      <div className="glass mx-auto flex max-w-md items-center justify-around rounded-full px-3 py-2.5">
        {ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => go(item.id)}
            className="btn-fluid flex-1 rounded-full px-2 py-2 font-body text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-ink/60 hover:bg-sage-light/50 hover:text-ink active:scale-95"
          >
            {item.label}
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
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 18 }}
      onClick={onToggle}
      aria-label={playing ? 'Jeda musik' : 'Putar musik'}
      className="btn-fluid glass-strong fixed bottom-24 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full hover:scale-105 active:scale-95"
    >
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-full bg-ink text-ivory ${playing ? 'animate-vinyl' : ''}`}
      >
        <span className="h-2 w-2 rounded-full bg-gold-light" />
        <span className="absolute h-8 w-8 rounded-full border border-white/20" />
      </span>
      {!playing && (
        <span className="absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-sage-deep text-white">
          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      )}
    </motion.button>
  )
}
