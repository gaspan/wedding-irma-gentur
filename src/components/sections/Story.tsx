import { motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { story } from '../../config/wedding'
import { Sprig } from '../illustrations'
import { Parallax, Petals } from '../ui/Effects'
import { Reveal, Section, SectionTitle } from '../ui'

function StoryStep({
  item,
  index,
  right,
}: {
  item: (typeof story)[number]
  index: number
  right: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const active = useInView(ref, { margin: '-45% 0px -45% 0px' })

  return (
    <Reveal
      delay={index * 0.1}
      className={`relative pl-12 sm:pl-0 ${right ? 'sm:pl-[52%]' : 'sm:pr-[52%]'}`}
    >
      <div ref={ref}>
        {/* Titik medali — menyala saat menjadi step aktif */}
        <span
          className={`absolute top-4 left-1.5 z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 font-display text-sm font-semibold transition-all duration-500 sm:left-1/2 sm:-translate-x-1/2 ${
            active
              ? 'scale-125 border-gold-bright bg-gold text-emerald-night shadow-[0_0_28px_rgba(246,229,184,0.9)]'
              : 'border-gold bg-emerald-night text-gold-light shadow-[0_0_20px_rgba(200,167,92,0.8)]'
          }`}
        >
          {index + 1}
        </span>

        <div
          className={`relative rounded-[2rem] border p-8 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-700 hover:-translate-y-2 ${
            active
              ? 'border-gold bg-emerald-night/80 shadow-[0_30px_70px_-20px_rgba(200,167,92,0.5)]'
              : 'border-gold/30 bg-emerald-night/60 hover:border-gold hover:shadow-[0_30px_60px_-20px_rgba(200,167,92,0.4)]'
          } ${right ? '' : 'sm:text-right'}`}
        >
          <span className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-80" />
          <span className="inline-block rounded-full border border-gold/40 bg-gold/[0.08] px-4 py-1.5 text-[0.65rem] font-bold tracking-[0.3em] text-gold-light uppercase">
            {item.date}
          </span>
          <h3 className="mt-4 font-display text-[2rem] leading-tight text-gold-gradient drop-shadow-md sm:text-3xl">
            {item.title}
          </h3>
          <p className="mt-3 text-[0.85rem] leading-relaxed text-balance text-gold-light/70">
            {item.desc}
          </p>
        </div>
      </div>
    </Reveal>
  )
}

export function Story() {
  const reduced = useReducedMotion()
  const lineRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ['start 0.72', 'end 0.45'],
  })
  const dotTop = useTransform(scrollYProgress, (v) => `${v * 100}%`)

  return (
    <Section id="momen" className="relative bg-emerald-void text-ink">
      <div className="pointer-events-none absolute inset-0 bg-pattern-gold opacity-[0.05]" />
      <Petals count={24} className="text-gold" />
      <Parallax speed={0.22} className="pointer-events-none absolute top-12 -left-10">
        <Sprig className="h-60 text-gold opacity-20" />
      </Parallax>
      <div className="pointer-events-none absolute bottom-0 right-0 h-[50vh] w-[50vh] rounded-full bg-gold/5 blur-[120px]" />

      <Reveal className="relative">
        <SectionTitle overline="Perjalanan Cinta" title="Momen Kami" />
        <p className="mx-auto mt-6 max-w-md text-center text-[0.85rem] leading-loose text-balance text-gold-light/70">
          Setiap langkah menuju hari kebahagiaan ini adalah karunia indah yang senantiasa kami syukuri.
        </p>
      </Reveal>

      <div ref={lineRef} className="relative mx-auto mt-16 max-w-2xl">
        {/* Rel dasar — redup */}
        <div className="pointer-events-none absolute top-0 bottom-0 left-4 w-0.5 bg-gold/15 sm:left-1/2 sm:-translate-x-1/2" />

        {/* Garis emas yang terisi mengikuti scroll */}
        {!reduced && (
          <motion.div
            style={{ scaleY: scrollYProgress, transformOrigin: '50% 0%' }}
            className="pointer-events-none absolute top-0 bottom-0 left-4 w-0.5 bg-linear-to-b from-gold-bright via-gold to-gold-deep shadow-[0_0_15px_rgba(200,167,92,0.8)] sm:left-1/2 sm:-translate-x-1/2"
          />
        )}

        {/* Titik cahaya di ujung garis yang tumbuh */}
        {!reduced && (
          <motion.span
            style={{ top: dotTop }}
            className="pointer-events-none absolute left-4 z-[5] h-3 w-3 -translate-x-[5px] rounded-full bg-gold-bright shadow-[0_0_18px_rgba(246,229,184,1)] sm:left-1/2 sm:-translate-x-1/2"
          />
        )}

        <div className="space-y-12 sm:space-y-0">
          {story.map((item, i) => (
            <StoryStep key={item.title} item={item} index={i} right={i % 2 === 1} />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="pointer-events-none mx-auto mt-14 h-2.5 w-2.5 rotate-45 rounded-sm bg-gold-deep shadow-[0_0_24px_rgba(201,169,97,.8)]"
      />
    </Section>
  )
}
