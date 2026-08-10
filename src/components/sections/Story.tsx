import { motion } from 'framer-motion'
import { story } from '../../config/wedding'
import { Divider, Sprig } from '../illustrations'
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
        <p className="mx-auto mt-4 max-w-md text-center text-sm leading-relaxed text-balance text-muted">
          Setiap langkah menuju hari ini adalah karunia yang kami syukuri.
        </p>

        <Divider className="mx-auto mt-9 w-36 text-gold" />
      </Reveal>

      <div className="relative mx-auto mt-14 max-w-2xl">
        {/* garis penghubung emas tengah */}
        <div className="pointer-events-none absolute top-0 bottom-0 left-4 w-px bg-linear-to-b from-gold-deep via-gold to-transparent sm:left-1/2 sm:-translate-x-1/2" />

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
                <span
                  className="absolute top-2 left-2 z-10 flex h-5 w-5 items-center justify-center rounded-full border-2 border-gold bg-cream-deep text-[0.6rem] font-bold text-gold-deep sm:left-1/2 sm:-translate-x-1/2"
                >
                  {i + 1}
                </span>

                <div
                  className={`rounded-2xl border border-gold/25 bg-white/90 p-6 shadow-[0_14px_42px_-22px_rgba(13,58,42,.4)] backdrop-blur-sm transition hover:-translate-y-1 hover:border-gold/55 hover:shadow-[0_22px_56px_-22px_rgba(201,169,97,.5)] ${
                    right ? '' : 'sm:text-right'
                  }`}
                >
                  <p className="font-display text-sm font-semibold tracking-[0.18em] text-gold-deep uppercase">
                    {item.date}
                  </p>
                  <h3 className="mt-1 font-display text-3xl font-medium text-ink">{item.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-balance text-muted">
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