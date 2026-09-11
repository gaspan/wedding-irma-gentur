import { quran } from '../../config/wedding'
import { Grain } from '../ui/Effects'
import { Reveal, Section } from '../ui'

export function QuranVerse() {
  return (
    <Section className="bg-cream-deep/50">
      <Grain opacity={0.04} />
      <Reveal className="relative mx-auto max-w-xl text-center">
        <p dir="rtl" lang="ar" className="font-arabic text-[1.9rem] leading-[2.2] text-ink/90 sm:text-[2.1rem]">
          {quran.arabic}
        </p>
        <p className="mx-auto mt-8 max-w-lg font-display text-[1.2rem] font-light italic leading-relaxed text-ink/80">
          “{quran.translation}”
        </p>
        <p className="mt-8 inline-block rounded-full border border-gold/30 bg-white/60 px-6 py-2 font-body text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-gold-deep">
          {quran.surah}
        </p>
      </Reveal>
    </Section>
  )
}
