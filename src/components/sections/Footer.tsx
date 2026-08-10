import { closingWords, couple, hashtag, meta } from '../../config/wedding'
import { shareWhatsApp } from '../../lib/utils'
import { CornerFloral, Divider, Sprig } from '../illustrations'
import { Reveal, Section } from '../ui'

export function Footer() {
  const share = () =>
    shareWhatsApp(
      `Assalamu'alaikum. Kami mengundang Anda ke pernikahan ${couple.bride.nickname} & ${couple.groom.nickname}. Berikut undangan digitalnya:`,
      meta.siteUrl,
    )

  return (
    <>
      <Section className="relative pb-32">
        <CornerFloral className="pointer-events-none absolute -top-2 -left-2 w-28 rotate-180 text-sage opacity-25" />
        <CornerFloral className="pointer-events-none absolute -right-2 bottom-24 w-28 text-sage opacity-25" />
        <Sprig className="pointer-events-none absolute bottom-24 left-1/2 h-32 -translate-x-1/2 text-sage opacity-10" />

        <Reveal className="relative text-center">
          <p className="mx-auto max-w-md text-sm leading-relaxed text-balance text-muted">
            {closingWords}
          </p>

          <p className="mt-8 font-arabic text-xl text-sage-deep">
            وَالسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللّٰهِ وَبَرَكَاتُهُ
          </p>
          <p className="mt-2 text-xs tracking-wide text-muted">
            Wassalamu’alaikum Warahmatullahi Wabarakatuh
          </p>

          <Divider className="mx-auto mt-9 w-40 text-gold" />

          <p className="mt-8 text-xs tracking-[0.25em] text-muted uppercase">
            Kami yang berbahagia
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight font-light text-ink sm:text-5xl">
            {couple.bride.nickname}
            <span className="mx-3 text-gold italic">&amp;</span>
            {couple.groom.nickname}
          </h2>

          {hashtag && <p className="mt-4 text-xs tracking-[0.2em] text-gold">{hashtag}</p>}

          <button
            onClick={share}
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-sage/30 px-6 py-3 text-sm font-medium text-ink transition hover:border-gold hover:bg-gold hover:text-white active:scale-95"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
              <path d="M17.5 14.4c-.3-.1-1.7-.9-2-1s-.5-.1-.7.1-.7 1-.9 1.2-.4.2-.7.1a8.2 8.2 0 01-2.4-1.5 9 9 0 01-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.6.3-.5v-.5l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6a1.2 1.2 0 00-.8.4A3.4 3.4 0 005.7 9c0 2 1.5 4 1.7 4.2a15.3 15.3 0 005.9 5.2 6.6 6.6 0 002.9.6 3.5 3.5 0 002.3-1.6 2.9 2.9 0 00.2-1.6c-.1-.2-.3-.3-.6-.4z" />
              <path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3a8.2 8.2 0 1113.7-6 8.2 8.2 0 01-6.7 9.8z" />
            </svg>
            Bagikan Undangan
          </button>
        </Reveal>
      </Section>

      <footer className="border-t border-sage/15 bg-cream-deep/60 py-6 text-center">
        <p className="text-[0.65rem] text-muted">
          Dibuat dengan sepenuh hati &middot; {couple.bride.nickname} &amp;{' '}
          {couple.groom.nickname} {new Date().getFullYear()}
        </p>
      </footer>
    </>
  )
}
