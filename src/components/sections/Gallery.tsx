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
    <Section id="galeri" className="bg-cream-deep/50">
      <div className="pointer-events-none absolute inset-0 bg-pattern opacity-[0.1]" />

      <Reveal className="relative">
        <SectionTitle overline="Momen" title="Galeri" />
      </Reveal>

      <div className="relative mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {galleryArt.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06} className="group">
            <button
              onClick={() => setActive(i)}
              className="group aspect-square w-full overflow-hidden rounded-2xl border border-gold/25 bg-white/80 p-5 shadow-[0_10px_36px_-18px_rgba(13,58,42,.35)] backdrop-blur-sm transition hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_20px_50px_-18px_rgba(201,169,97,.55)] active:scale-95"
              aria-label={`Lihat ${item.title}`}
            >
              <item.Art className="h-full w-full text-gold-deep transition-transform duration-500 group-hover:scale-110 group-hover:text-gold" />
            </button>
            <p className="mt-2.5 text-center font-display text-lg font-medium text-ink transition group-hover:text-gold-deep">
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
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/85 p-6 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm rounded-3xl border border-gold/30 bg-cream p-9 text-center shadow-[0_0_80px_-20px_rgba(201,169,97,.6)]"
            >
              <current.Art className="mx-auto h-52 w-52 text-gold" />
              <h3 className="mt-6 font-display text-3xl font-medium text-gold-gradient text-gold-shimmer">
                {current.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{current.caption}</p>

              <button
                onClick={() => setActive(null)}
                className="mt-7 rounded-full border border-sage/30 px-6 py-2 text-sm text-muted transition hover:border-gold hover:text-gold"
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
