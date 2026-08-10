import { quran } from '../../config/wedding'
import { Divider } from '../illustrations'
import { Reveal, Section } from '../ui'

export function QuranVerse() {
  return (
    <Section className="bg-cream-deep/60">
      <div className="pointer-events-none absolute inset-0 bg-pattern opacity-[0.12]" />

      <Reveal className="relative text-center">
        <Divider className="mx-auto mb-10 w-40 text-gold" />

        <p
          dir="rtl"
          lang="ar"
          className="font-arabic text-2xl leading-[2.4] text-ink sm:text-[1.75rem]"
        >
          {quran.arabic}
        </p>

        <p className="mx-auto mt-9 max-w-xl text-sm leading-loose text-balance text-muted italic">
          “{quran.translation}”
        </p>

        <p className="mt-7 text-xs font-medium tracking-[0.22em] text-sage-deep uppercase">
          {quran.surah}
        </p>

        <Divider className="mx-auto mt-10 w-40 rotate-180 text-gold" />
      </Reveal>
    </Section>
  )
}
