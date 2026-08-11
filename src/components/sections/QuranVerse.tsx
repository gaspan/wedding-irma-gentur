import { quran } from '../../config/wedding'
import { Divider } from '../illustrations'
import { Reveal, Section } from '../ui'

export function QuranVerse() {
  return (
    <Section className="relative bg-emerald-void text-ink">
      <div className="pointer-events-none absolute inset-0 bg-pattern-gold opacity-[0.05]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[50vh] w-full -translate-x-1/2 -translate-y-1/2 bg-radial-gold blur-[120px] opacity-30" />

      <Reveal className="relative">
        <div className="mx-auto max-w-2xl rounded-[2.5rem] bg-gradient-to-br from-gold-deep via-gold-bright to-gold-deep p-[1.5px] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)]">
          <div className="relative overflow-hidden rounded-[calc(2.5rem-1.5px)] bg-emerald-night/95 px-6 py-14 backdrop-blur-xl sm:px-14 sm:py-16">
            <div className="pointer-events-none absolute inset-0 bg-damask opacity-[0.05]" />
            <div className="pointer-events-none absolute inset-0 bg-pattern-gold opacity-[0.05]" />
            <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gold/15 blur-[90px]" />

            <span className="pointer-events-none absolute inset-5 rounded-[2rem] border border-gold/20" />

            <p
              dir="rtl"
              lang="ar"
              className="relative text-center font-arabic text-[2rem] leading-[2.6] text-gold-bright drop-shadow-[0_0_20px_rgba(200,167,92,0.4)] sm:text-[2.2rem]"
            >
              {quran.arabic}
            </p>

            <Divider className="relative mx-auto my-10 w-48 text-gold drop-shadow-md" />

            <p className="relative mx-auto max-w-lg text-center font-display text-[1.15rem] leading-loose text-balance text-gold-light/90 italic drop-shadow-sm sm:text-[1.25rem]">
              &ldquo;{quran.translation}&rdquo;
            </p>

            <p className="relative mt-10 text-center">
              <span className="inline-block rounded-full border border-gold/40 bg-gold/[0.1] px-7 py-2.5 text-[0.7rem] font-bold tracking-[0.3em] text-gold-bright shadow-[0_0_20px_rgba(200,167,92,0.2)] uppercase">
                {quran.surah}
              </span>
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
