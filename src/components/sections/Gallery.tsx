import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { galleryArt } from '../illustrations/gallery'
import { Reveal, Section, SectionTitle } from '../ui'

export function Gallery() {
  const [active, setActive] = useState<number | null>(null)

  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
      if (e.key === 'ArrowRight') setActive((i) => ((i ?? 0) + 1) % galleryArt.length)
      if (e.key === 'ArrowLeft')
        setActive((i) => ((i ?? 0) - 1 + galleryArt.length) % galleryArt.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active])

  const current = active !== null ? galleryArt[active] : null

  return (
    <Section id="galeri" className="bg-cream-deep">
      <div className="pointer-events-none absolute inset-0 bg-pattern opacity-[0.1]" />

      <Reveal className="relative">
        <SectionTitle overline="Momen" title="Galeri" />
      </Reveal>

      <div className="relative mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3">
        {galleryArt.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06} className="group">
            <button
              onClick={() => setActive(i)}
              className="group relative aspect-square w-full overflow-hidden rounded-[1.35rem] border border-gold/25 bg-linear-to-b from-white to-cream p-6 shadow-[0_14px_44px_-22px_rgba(10,49,37,.35)] backdrop-blur-sm transition duration-500 hover:-translate-y-1.5 hover:border-gold/55 hover:shadow-[0_26px_60px_-22px_rgba(157,122,51,.45)] active:scale-95"
              aria-label={`Lihat ${item.title}`}
            >
              <span className="pointer-events-none absolute inset-x-7 top-0 h-px hairline-gold opacity-70" />
              <span className="pointer-events-none absolute top-3 left-3 h-4 w-4 border-t border-l border-gold/30" />
              <span className="pointer-events-none absolute right-3 bottom-3 h-4 w-4 border-r border-b border-gold/30" />
              <item.Art className="h-full w-full text-gold-deep transition-transform duration-700 group-hover:scale-110 group-hover:text-gold" />
            </button>
            <p className="mt-3 text-center font-display text-lg font-normal italic text-ink transition duration-300 group-hover:text-gold-deep">
              {item.title}
            </p>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-emerald-void/90 p-6 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0, y: 24 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 14 }}
              transition={{ type: 'spring', stiffness: 280, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm overflow-hidden rounded-[2rem] border border-gold/30 bg-cream p-10 text-center shadow-[0_0_100px_-20px_rgba(200,167,92,.5)]"
            >
              <span className="pointer-events-none absolute inset-5 rounded-[1.5rem] border border-gold/10" />
              <current.Art className="mx-auto h-52 w-52 text-gold" />
              <h3 className="mt-7 font-display text-3xl font-light italic text-gold-gradient text-gold-shimmer text-glow">
                {current.title}
              </h3>
              <p className="mt-2 text-[0.8rem] text-muted/85">{current.caption}</p>

              <button
                onClick={() => setActive(null)}
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold/35 px-7 py-2.5 text-[0.75rem] font-medium tracking-wide text-muted/80 transition duration-300 hover:border-gold hover:text-gold"
              >
                Tutup
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}
