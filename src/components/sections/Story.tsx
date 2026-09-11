import { story } from '../../config/wedding'
import { Grain } from '../ui/Effects'
import { Reveal, Section, SectionTitle } from '../ui'

export function Story() {
  return (
    <Section id="momen" className="bg-cream-deep/50">
      <Grain opacity={0.04} />
      <Reveal>
        <SectionTitle
          overline="Perjalanan Cinta"
          title="Momen Kami"
          desc="Setiap langkah menuju hari bahagia ini adalah karunia yang senantiasa kami syukuri."
        />
      </Reveal>
      <div className="relative mx-auto mt-14 max-w-xl">
        <div aria-hidden className="absolute bottom-4 left-[13px] top-4 w-px bg-gold/25" />
        <div className="space-y-8">
          {story.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="relative pl-10">
                <span className="absolute left-0 top-5 flex h-7 w-7 items-center justify-center rounded-full bg-ink font-body text-[0.7rem] font-bold text-ivory">
                  {i + 1}
                </span>
                <div className="glass rounded-[1.6rem] p-6 text-left sm:p-7">
                  <span className="inline-block rounded-full bg-sage-light/60 px-3.5 py-1 font-body text-[0.64rem] font-bold uppercase tracking-[0.24em] text-sage-deep">
                    {item.date}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-medium text-ink">{item.title}</h3>
                  <p className="mt-2 font-body text-[0.88rem] font-light leading-relaxed text-ink/70">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
