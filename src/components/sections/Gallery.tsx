import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { galleryArt } from '../illustrations/gallery'
import { Grain } from '../ui/Effects'
import { Reveal, Section, SectionTitle } from '../ui'

export function Gallery() {
  const [active, setActive] = useState<number | null>(null)
  const current = active !== null ? galleryArt[active] : null

  return (
    <Section id="galeri" className="bg-ivory">
      <Grain opacity={0.04} />
      <Reveal>
        <SectionTitle
          overline="Momen Indah"
          title="Galeri Kebahagiaan"
          desc="Kepingan kisah yang kami rangkai dengan penuh cinta."
        />
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
        {galleryArt.map((item, i) => (
          <Reveal key={item.title} delay={(i % 3) * 0.07}>
            <button
              onClick={() => setActive(i)}
              className={`btn-fluid group relative w-full overflow-hidden border border-gold/25 bg-white/70 p-5 backdrop-blur-md hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_20px_40px_-20px_rgb(140_115_64/0.4)] ${
                i % 3 === 0 ? 'arch-sm' : 'rounded-[1.6rem]'
              }`}
              aria-label={`Lihat ${item.title}`}
            >
              <item.Art className="mx-auto aspect-square h-auto w-full max-w-[150px] text-sage-deep/70 transition-transform duration-500 group-hover:scale-105" />
              <p className="mt-3 font-display text-xl text-ink">{item.title}</p>
            </button>
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
            className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/40 p-5 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ y: 30, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 16, opacity: 0, scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong w-full max-w-sm rounded-[2rem] p-8 text-center"
            >
              <current.Art className="mx-auto h-44 w-44 text-sage-deep" />
              <h3 className="mt-5 font-display text-3xl text-ink">{current.title}</h3>
              <p className="mt-1 font-body text-[0.86rem] text-muted">{current.caption}</p>
              <button
                onClick={() => setActive(null)}
                className="btn-fluid mt-6 rounded-full bg-ink px-8 py-3 font-body text-[0.74rem] font-semibold uppercase tracking-[0.18em] text-ivory hover:bg-sage-deep"
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
