import { closingWords, couple, hashtag, meta } from '../../config/wedding'
import { shareWhatsApp } from '../../lib/utils'
import { Aurora, CornerFloral, Divider, Sparkles } from '../illustrations'
import { Reveal, Section } from '../ui'

export function Footer() {
  const share = () =>
    shareWhatsApp(
      `Assalamu'alaikum. Kami mengundang Anda ke pernikahan ${couple.bride.nickname} & ${couple.groom.nickname}. Berikut undangan digitalnya:`,
      meta.siteUrl,
    )

  return (
    <>
      <Section className="relative bg-emerald-night pb-36">
        <Aurora />
        <div className="pointer-events-none absolute inset-0 bg-pattern-gold opacity-[0.09]" />
        <Sparkles className="text-gold-bright" />
        <div className="pointer-events-none absolute inset-0 vignette" />
        <CornerFloral className="pointer-events-none absolute -top-2 -left-2 w-28 rotate-180 text-gold-bright/35 sm:w-40" />
        <CornerFloral className="pointer-events-none absolute -right-2 bottom-24 w-28 text-gold-bright/35 sm:w-40" />

        <Reveal className="relative text-center">
          <p className="mx-auto max-w-md text-[0.85rem] leading-loose text-balance text-gold-light/80">
            {closingWords}
          </p>

          <p
            className="mt-10 font-arabic text-[1.7rem] leading-relaxed text-gold-light"
            style={{ textShadow: '0 0 34px rgba(232,208,150,.45)' }}
          >
            وَالسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللّٰهِ وَبَرَكَاتُهُ
          </p>
          <p className="mt-3 text-[0.7rem] tracking-[0.14em] text-gold-light/65">
            Wassalamu’alaikum Warahmatullahi Wabarakatuh
          </p>

          <Divider className="mx-auto mt-10 w-44 text-gold" />

          <p className="mt-9 text-[0.68rem] font-semibold tracking-[0.34em] text-gold-light/70 uppercase">
            Kami yang berbahagia
          </p>
          <h2 className="mt-5 font-display text-[3.1rem] leading-[1.05] font-normal text-gold-gradient text-gold-shimmer sm:text-[3.9rem]">
            {couple.bride.nickname}
            <span
              className="mx-3 font-script text-[0.85em] text-gold-bright"
              style={{ textShadow: '0 0 26px rgba(246,229,184,.6)' }}
            >
              &amp;
            </span>
            {couple.groom.nickname}
          </h2>

          {hashtag && (
            <p className="mt-6 inline-block rounded-full border border-gold/25 bg-gold/[0.06] px-5 py-1.5 text-[0.7rem] tracking-[0.25em] text-gold-bright/90 backdrop-blur">
              {hashtag}
            </p>
          )}

          <button
            onClick={share}
            className="animate-glow relative mt-11 inline-flex items-center gap-2 overflow-hidden rounded-full bg-linear-to-r from-gold-deep via-gold-light to-gold-deep px-7 py-3.5 text-[0.78rem] font-semibold tracking-[0.12em] text-emerald-night uppercase transition duration-300 hover:scale-105 active:scale-95"
          >
            <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 animate-sheen bg-white/35 blur-md" />
            <svg viewBox="0 0 24 24" className="relative h-4 w-4" fill="currentColor">
              <path d="M17.5 14.4c-.3-.1-1.7-.9-2-1s-.5-.1-.7.1-.7 1-.9 1.2-.4.2-.7.1a8.2 8.2 0 01-2.4-1.5 9 9 0 01-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.6.3-.5v-.5l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6a1.2 1.2 0 00-.8.4A3.4 3.4 0 005.7 9c0 2 1.5 4 1.7 4.2a15.3 15.3 0 005.9 5.2 6.6 6.6 0 002.9.6 3.5 3.5 0 002.3-1.6 2.9 2.9 0 00.2-1.6c-.1-.2-.3-.3-.6-.4z" />
              <path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3a8.2 8.2 0 1113.7-6 8.2 8.2 0 01-6.7 9.8z" />
            </svg>
            <span className="relative">Bagikan Undangan</span>
          </button>
        </Reveal>
      </Section>

      <footer className="relative border-t border-gold/15 bg-emerald-void py-7 text-center">
        <span className="pointer-events-none absolute inset-x-0 top-0 h-px hairline-gold opacity-50" />
        <p className="text-[0.65rem] tracking-wide text-gold-light/50">
          Dibuat dengan sepenuh hati &middot; {couple.bride.nickname} &amp;{' '}
          {couple.groom.nickname} {new Date().getFullYear()}
        </p>
      </footer>
    </>
  )
}
