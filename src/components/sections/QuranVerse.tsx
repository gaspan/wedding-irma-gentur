import { quran } from '../../config/wedding'
import { Divider } from '../illustrations'
import { Reveal, Section } from '../ui'

export function QuranVerse() {
  return (
    <Section className="bg-cream">
      <div className="pointer-events-none absolute inset-0 bg-pattern opacity-[0.12]" />

      <Reveal className="relative">
        <div className="mx-auto max-w-2xl rounded-[2rem] bg-linear-to-b from-gold-deep via-gold to-gold-deep p-[1.5px] shadow-[0_24px_80px_-28px_rgba(13,58,42,.55)]">
          <div className="relative overflow-hidden rounded-[calc(2rem-1.5px)] bg-emerald-deep px-6 py-12 sm:px-12 sm:py-14">
            <div className="pointer-events-none absolute inset-0 bg-pattern-gold opacity-10" />
            <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gold/15 blur-[90px]" />

            <p
              dir="rtl"
              lang="ar"
              className="relative text-center font-arabic text-2xl leading-[2.5] text-gold-bright sm:text-[1.85rem]"
              style={{ textShadow: '0 0 34px rgba(240,217,160,.35)' }}
            >
              {quran.arabic}
            </p>

            <Divider className="relative mx-auto my-8 w-36 text-gold" />

            <p className="relative mx-auto max-w-lg text-center text-sm leading-loose text-balance text-cream/85 italic">
              “{quran.translation}”
            </p>

            <p className="relative mt-8 text-center">
              <span className="inline-block rounded-full border border-gold/40 bg-gold/10 px-5 py-1.5 text-xs font-semibold tracking-[0.25em] text-gold-bright uppercase">
                {quran.surah}
              </span>
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
