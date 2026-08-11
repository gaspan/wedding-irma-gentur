import { quran } from '../../config/wedding'
import { Divider } from '../illustrations'
import { Reveal, Section } from '../ui'

export function QuranVerse() {
  return (
    <Section className="bg-cream">
      <div className="pointer-events-none absolute inset-0 bg-pattern opacity-[0.1]" />

      <Reveal className="relative">
        <div className="mx-auto max-w-2xl rounded-[2.25rem] bg-linear-to-b from-gold-light via-gold-deep to-gold-light p-px shadow-[0_30px_90px_-32px_rgba(10,49,37,.6)]">
          <div className="relative overflow-hidden rounded-[calc(2.25rem-1px)] bg-emerald-night px-6 py-14 sm:px-14 sm:py-16">
            <div className="pointer-events-none absolute inset-0 bg-pattern-gold opacity-[0.09]" />
            <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gold/15 blur-[90px]" />

            <span className="pointer-events-none absolute inset-5 rounded-[1.5rem] border border-gold/10" />

            <p
              dir="rtl"
              lang="ar"
              className="relative text-center font-arabic text-2xl leading-[2.6] text-gold-bright sm:text-[1.9rem]"
              style={{ textShadow: '0 0 38px rgba(246,229,184,.32)' }}
            >
              {quran.arabic}
            </p>

            <Divider className="relative mx-auto my-9 w-40 text-gold" />

            <p className="relative mx-auto max-w-lg text-center font-display text-lg leading-loose text-balance text-cream/80 italic sm:text-xl">
              &ldquo;{quran.translation}&rdquo;
            </p>

            <p className="relative mt-9 text-center">
              <span className="inline-block rounded-full border border-gold/30 bg-gold/[0.08] px-6 py-2 text-[0.65rem] font-semibold tracking-[0.3em] text-gold-bright uppercase">
                {quran.surah}
              </span>
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
