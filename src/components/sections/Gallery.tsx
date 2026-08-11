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
    <Section id="galeri" className="relative bg-emerald-night text-ink">
      <div className="pointer-events-none absolute inset-0 bg-pattern-gold opacity-[0.05]" />
      <div className="pointer-events-none absolute inset-0 bg-radial-gold blur-[120px] opacity-50" />

      <Reveal className="relative">
        <SectionTitle overline="Momen Indah" title="Galeri Kebahagiaan" />
      </Reveal>

      <div className="relative mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-6">
        {galleryArt.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.07} className="group">
            <button
              onClick={() => setActive(i)}
              className="group relative aspect-square w-full overflow-hidden rounded-[2rem] border border-gold/40 bg-emerald-void/80 p-6 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-gold hover:shadow-[0_30px_70px_-20px_rgba(200,167,92,0.5)] active:scale-95 cursor-pointer"
              aria-label={`Lihat ${item.title}`}
            >
              <span className="pointer-events-none absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-80" />
              <span className="pointer-events-none absolute top-4 left-4 h-5 w-5 border-t-2 border-l-2 border-gold/40" />
              <span className="pointer-events-none absolute right-4 bottom-4 h-5 w-5 border-r-2 border-b-2 border-gold/40" />
              <item.Art className="h-full w-full text-gold-light transition-transform duration-700 group-hover:scale-110 group-hover:text-gold-bright drop-shadow-[0_0_15px_rgba(200,167,92,0.4)]" />
            </button>
            <p className="mt-4 text-center font-display text-[1.4rem] font-normal text-gold-light transition duration-300 group-hover:text-gold-bright drop-shadow-md">
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
            className="fixed inset-0 z-[60] flex items-center justify-center bg-emerald-void/95 p-6 backdrop-blur-xl"
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 280, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg overflow-hidden rounded-[2.5rem] border border-gold/40 bg-emerald-night/90 p-12 text-center shadow-[0_0_100px_-20px_rgba(200,167,92,.4)] backdrop-blur-3xl"
            >
              <span className="pointer-events-none absolute inset-6 rounded-[2rem] border border-gold/20" />
              <current.Art className="mx-auto h-64 w-64 text-gold-bright drop-shadow-[0_0_30px_rgba(200,167,92,0.6)]" />
              <h3 className="mt-10 font-display text-4xl font-light text-gold-gradient text-gold-shimmer text-glow drop-shadow-xl">
                {current.title}
              </h3>
              <p className="mt-4 text-[0.9rem] leading-relaxed text-gold-light/80">{current.caption}</p>

              <div className="mt-10 flex items-center justify-center gap-4">
                <button
                  onClick={() => setActive((i) => ((i ?? 0) - 1 + galleryArt.length) % galleryArt.length)}
                  className="rounded-full border border-gold/40 p-4 text-gold-light transition duration-300 hover:border-gold hover:bg-gold hover:text-emerald-night active:scale-90"
                  aria-label="Sebelumnya"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  onClick={() => setActive(null)}
                  className="inline-flex items-center gap-2 rounded-full border border-gold/45 bg-gold/[0.1] px-8 py-3 text-[0.8rem] font-bold tracking-[0.2em] text-gold-light uppercase transition duration-300 hover:border-gold hover:bg-gold hover:text-emerald-night shadow-[0_0_20px_rgba(200,167,92,0.3)]"
                >
                  Tutup
                </button>
                <button
                  onClick={() => setActive((i) => ((i ?? 0) + 1) % galleryArt.length)}
                  className="rounded-full border border-gold/40 p-4 text-gold-light transition duration-300 hover:border-gold hover:bg-gold hover:text-emerald-night active:scale-90"
                  aria-label="Berikutnya"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}

