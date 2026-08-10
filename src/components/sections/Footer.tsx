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
      <Section className="relative bg-emerald-deep pb-36">
        <Aurora />
        <div className="pointer-events-none absolute inset-0 bg-pattern-gold opacity-10" />
        <Sparkles className="text-gold-bright" />
        <CornerFloral className="pointer-events-none absolute -top-2 -left-2 w-28 rotate-180 text-gold-bright/40" />
        <CornerFloral className="pointer-events-none absolute -right-2 bottom-24 w-28 text-gold-bright/40" />

        <Reveal className="relative text-center">
          <p className="mx-auto max-w-md text-sm leading-relaxed text-balance text-gold-light/85">
            {closingWords}
          </p>

          <p
            className="mt-9 font-arabic text-2xl text-gold-bright"
            style={{ textShadow: '0 0 30px rgba(240,217,160,.5)' }}
          >
            وَالسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللّٰهِ وَبَرَكَاتُهُ
          </p>
          <p className="mt-2 text-xs tracking-wide text-gold-light/70">
            Wassalamu’alaikum Warahmatullahi Wabarakatuh
          </p>

          <Divider className="mx-auto mt-9 w-40 text-gold" />

          <p className="mt-8 text-xs font-semibold tracking-[0.3em] text-gold-light/80 uppercase">
            Kami yang berbahagia
          </p>
          <h2 className="mt-4 font-display text-5xl leading-tight font-medium text-gold-gradient text-gold-shimmer sm:text-6xl">
            {couple.bride.nickname}
            <span className="mx-3 text-gold italic" style={{ textShadow: '0 0 24px rgba(201,169,97,.7)' }}>
              &amp;
            </span>
            {couple.groom.nickname}
          </h2>

          {hashtag && (
            <p className="mt-4 inline-block rounded-full border border-gold/35 bg-white/5 px-4 py-1 text-xs tracking-[0.2em] text-gold-bright backdrop-blur">
              {hashtag}
            </p>
          )}

          <button
            onClick={share}
            className="animate-glow mt-10 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-gold-deep via-gold to-gold-bright px-7 py-3.5 text-sm font-semibold text-emerald-night transition hover:scale-105 active:scale-95"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
              <path d="M17.5 14.4c-.3-.1-1.7-.9-2-1s-.5-.1-.7.1-.7 1-.9 1.2-.4.2-.7.1a8.2 8.2 0 01-2.4-1.5 9 9 0 01-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.6.3-.5v-.5l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6a1.2 1.2 0 00-.8.4A3.4 3.4 0 005.7 9c0 2 1.5 4 1.7 4.2a15.3 15.3 0 005.9 5.2 6.6 6.6 0 002.9.6 3.5 3.5 0 002.3-1.6 2.9 2.9 0 00.2-1.6c-.1-.2-.3-.3-.6-.4z" />
              <path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3a8.2 8.2 0 1113.7-6 8.2 8.2 0 01-6.7 9.8z" />
            </svg>
            Bagikan Undangan
          </button>
        </Reveal>
      </Section>

      <footer className="border-t border-gold/15 bg-emerald-night py-6 text-center">
        <p className="text-[0.65rem] text-gold-light/60">
          Dibuat dengan sepenuh hati &middot; {couple.bride.nickname} &amp;{' '}
          {couple.groom.nickname} {new Date().getFullYear()}
        </p>
      </footer>
    </>
  )
}
