import { motion } from 'framer-motion'
import { story } from '../../config/wedding'
import { Sprig } from '../illustrations'
import { Petals } from '../ui/Effects'
import { Reveal, Section, SectionTitle } from '../ui'

export function Story() {
  return (
    <Section id="momen" className="relative bg-cream-deep">
      <div className="pointer-events-none absolute inset-0 bg-pattern opacity-[0.1]" />
      <Petals count={16} className="text-sage" />
      <Sprig className="pointer-events-none absolute top-12 -left-10 h-52 text-gold opacity-15" />

      <Reveal className="relative">
        <SectionTitle overline="Perjalanan Cinta" title="Momen Kami" />
        <p className="mx-auto mt-6 max-w-md text-center text-[0.82rem] leading-loose text-balance text-muted/85">
          Setiap langkah menuju hari ini adalah karunia yang kami syukuri.
        </p>
      </Reveal>

      <div className="relative mx-auto mt-16 max-w-2xl">
        {/* garis penghubung emas tengah */}
        <div className="pointer-events-none absolute top-0 bottom-0 left-4 w-px bg-linear-to-b from-transparent via-gold to-transparent sm:left-1/2 sm:-translate-x-1/2" />

        <div className="space-y-10 sm:space-y-0">
          {story.map((item, i) => {
            const right = i % 2 === 1
            return (
              <Reveal
                key={item.title}
                delay={i * 0.08}
                className={`relative pl-12 sm:pl-0 ${right ? 'sm:pl-[52%]' : 'sm:pr-[52%]'}`}
              >
                {/* titik pada garis */}
                <span className="absolute top-2.5 left-2 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-gold bg-cream-deep font-display text-[0.65rem] font-semibold text-gold-deep shadow-[0_0_0_4px_rgba(242,236,224,1)] sm:left-1/2 sm:-translate-x-1/2">
                  {i + 1}
                </span>

                <div
                  className={`relative rounded-[1.5rem] border border-gold/20 bg-white/95 p-7 shadow-[0_18px_50px_-26px_rgba(10,49,37,.4)] backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:border-gold/45 hover:shadow-[0_28px_66px_-26px_rgba(157,122,51,.45)] ${
                    right ? '' : 'sm:text-right'
                  }`}
                >
                  <span className="pointer-events-none absolute inset-x-8 top-0 h-px hairline-gold opacity-60" />
                  <p className="text-[0.62rem] font-semibold tracking-[0.32em] text-gold-deep/85 uppercase">
                    {item.date}
                  </p>
                  <h3 className="mt-2 font-display text-[1.75rem] leading-tight font-light italic text-ink sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.82rem] leading-loose text-balance text-muted/85">
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
        className="pointer-events-none mx-auto mt-12 h-2 w-2 rotate-45 rounded-sm bg-gold-deep shadow-[0_0_20px_rgba(201,169,97,.7)]"
      />
    </Section>
  )
}