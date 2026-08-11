import { motion } from 'framer-motion'
import { story } from '../../config/wedding'
import { Sprig } from '../illustrations'
import { Petals } from '../ui/Effects'
import { Reveal, Section, SectionTitle } from '../ui'

export function Story() {
  return (
    <Section id="momen" className="relative bg-emerald-void text-ink">
      <div className="pointer-events-none absolute inset-0 bg-pattern-gold opacity-[0.05]" />
      <Petals count={24} className="text-gold" />
      <Sprig className="pointer-events-none absolute top-12 -left-10 h-60 text-gold opacity-20" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[50vh] w-[50vh] rounded-full bg-gold/5 blur-[120px]" />

      <Reveal className="relative">
        <SectionTitle overline="Perjalanan Cinta" title="Momen Kami" />
        <p className="mx-auto mt-6 max-w-md text-center text-[0.85rem] leading-loose text-balance text-gold-light/70">
          Setiap langkah menuju hari kebahagiaan ini adalah karunia indah yang senantiasa kami syukuri.
        </p>
      </Reveal>

      <div className="relative mx-auto mt-16 max-w-2xl">
        {/* Garis penghubung emas berpendar di tengah */}
        <div className="pointer-events-none absolute top-0 bottom-0 left-4 w-0.5 bg-gradient-to-b from-transparent via-gold to-transparent shadow-[0_0_15px_rgba(200,167,92,0.8)] sm:left-1/2 sm:-translate-x-1/2" />

        <div className="space-y-12 sm:space-y-0">
          {story.map((item, i) => {
            const right = i % 2 === 1
            return (
              <Reveal
                key={item.title}
                delay={i * 0.15}
                className={`relative pl-12 sm:pl-0 ${right ? 'sm:pl-[52%]' : 'sm:pr-[52%]'}`}
              >
                {/* Titik medali berpendar pada garis */}
                <span className="absolute top-4 left-1.5 z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gold bg-emerald-night font-display text-sm font-semibold text-gold-light shadow-[0_0_20px_rgba(200,167,92,0.8)] sm:left-1/2 sm:-translate-x-1/2">
                  {i + 1}
                </span>

                <div
                  className={`relative rounded-[2rem] border border-gold/30 bg-emerald-night/60 p-8 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-gold hover:shadow-[0_30px_60px_-20px_rgba(200,167,92,0.4)] ${
                    right ? '' : 'sm:text-right'
                  }`}
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
              </Reveal>
            )
          })}
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