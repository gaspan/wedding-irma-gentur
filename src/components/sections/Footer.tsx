import { closingWords, couple, hashtag, meta } from '../../config/wedding'
import { shareWhatsApp } from '../../lib/utils'
import { Grain, SoftBloom } from '../ui/Effects'
import { Reveal, Section } from '../ui'

export function Footer() {
  const share = () =>
    shareWhatsApp(
      `Assalamu'alaikum. Kami mengundang Anda ke pernikahan ${couple.bride.nickname} & ${couple.groom.nickname}. Berikut undangan digitalnya:`,
      meta.siteUrl,
    )

  return (
    <>
      <Section className="bg-cream-deep/50 pb-32">
        <SoftBloom />
        <Grain opacity={0.04} />
        <Reveal className="relative text-center">
          <p className="mx-auto max-w-md font-body text-[0.9rem] font-light leading-relaxed text-ink/70">
            {closingWords}
          </p>
          <p className="mt-8 font-arabic text-2xl leading-relaxed text-sage-deep">
            وَالسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللّٰهِ وَبَرَكَاتُهُ
          </p>
          <p className="mt-2 font-body text-[0.74rem] tracking-[0.14em] text-muted">
            Wassalamu’alaikum Warahmatullahi Wabarakatuh
          </p>
          <p className="mt-10 font-body text-[0.66rem] font-bold uppercase tracking-[0.36em] text-muted">
            Kami yang berbahagia
          </p>
          <h2 className="mt-4 font-display text-5xl font-medium text-ink sm:text-6xl">
            {couple.bride.nickname} <span className="font-script text-5xl text-gold-deep">&</span>{' '}
            {couple.groom.nickname}
          </h2>
          {hashtag && (
            <p className="glass mt-6 inline-block rounded-full px-6 py-2 font-body text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-sage-deep">
              {hashtag}
            </p>
          )}
          <div>
            <button
              onClick={share}
              className="btn-fluid mt-9 inline-flex items-center gap-2.5 rounded-full bg-ink px-8 py-3.5 font-body text-[0.76rem] font-semibold uppercase tracking-[0.16em] text-ivory hover:bg-sage-deep"
            >
              Bagikan Undangan
            </button>
          </div>
        </Reveal>
      </Section>
      <footer className="border-t border-ink/10 bg-ivory py-7 text-center">
        <p className="font-body text-[0.7rem] tracking-wider text-muted">
          {couple.bride.nickname} & {couple.groom.nickname} © {new Date().getFullYear()}
        </p>
      </footer>
    </>
  )
}
