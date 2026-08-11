import { events } from '../../config/wedding'
import type { EventDetail } from '../../types'
import { MosqueIllustration, Sprig } from '../illustrations'
import { Reveal, Section, SectionTitle } from '../ui'

function EventCard({ ev, delay }: { ev: EventDetail; delay: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-gold/25 bg-white/90 shadow-[0_20px_60px_-28px_rgba(10,49,37,.35)] backdrop-blur transition duration-500 hover:-translate-y-1.5 hover:border-gold/55 hover:shadow-[0_32px_80px_-28px_rgba(157,122,51,.45)]">
        <div className="relative overflow-hidden bg-emerald-night px-7 py-9 text-center">
          <div className="pointer-events-none absolute inset-0 bg-pattern-gold opacity-[0.09]" />
          <div className="pointer-events-none absolute -top-16 left-1/2 h-40 w-72 -translate-x-1/2 rounded-full bg-gold/15 blur-[70px]" />
          <span className="pointer-events-none absolute inset-x-8 top-4 h-px hairline-gold opacity-60" />

          <MosqueIllustration className="relative mx-auto h-14 w-auto text-gold-bright" />
          <h3 className="relative mt-5 font-display text-3xl leading-tight font-light text-gold-gradient text-gold-shimmer sm:text-4xl">
            {ev.label}
          </h3>

          <span className="relative mx-auto mt-4 flex items-center justify-center gap-2.5">
            <span className="h-px w-8 hairline-gold opacity-70" />
            <span className="h-1 w-1 rotate-45 bg-gold-bright" />
            <span className="h-px w-8 hairline-gold opacity-70" />
          </span>

          <p className="relative mt-4 text-[0.8rem] tracking-[0.12em] text-gold-light/85">
            {ev.date}
          </p>
          <span className="relative mt-3.5 inline-block rounded-full border border-gold/30 bg-gold/[0.08] px-4 py-1.5 text-[0.7rem] font-semibold tracking-[0.14em] text-gold-bright">
            {ev.timeStart} – {ev.timeEnd} WIB
          </span>
        </div>

        <div className="flex flex-1 flex-col items-center px-7 py-8 text-center">
          <p className="font-display text-xl font-normal text-ink">{ev.venue}</p>
          <p className="mx-auto mt-2.5 max-w-xs text-[0.8rem] leading-loose text-balance text-muted/85">
            {ev.address}
          </p>

          <a
            href={ev.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center gap-2 rounded-full bg-linear-to-r from-gold-deep via-gold-light to-gold-deep px-6 py-2.5 text-[0.75rem] font-semibold tracking-[0.1em] text-emerald-night uppercase transition duration-300 hover:scale-105 active:scale-95"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M12 21s-7-6.3-7-11a7 7 0 1114 0c0 4.7-7 11-7 11z" />
              <circle cx="12" cy="10" r="2.6" />
            </svg>
            Buka Peta
          </a>
        </div>

        <div className="h-48 w-full border-t border-gold/15 sm:h-56">
          <iframe
            src={ev.mapsEmbed}
            title={`Peta ${ev.venue}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full grayscale-[45%] transition duration-700 hover:grayscale-0"
            style={{ border: 0 }}
            allowFullScreen
          />
        </div>
      </article>
    </Reveal>
  )
}

export function Events() {
  return (
    <Section id="acara" className="relative bg-cream">
      <Sprig className="pointer-events-none absolute top-16 -right-10 h-52 -scale-x-100 text-gold opacity-20" />

      <Reveal>
        <SectionTitle overline="Save the Date" title="Rangkaian Acara" />
      </Reveal>

      <div className="mt-14 grid gap-7 sm:grid-cols-2">
        {events.map((ev, i) => (
          <EventCard key={ev.key} ev={ev} delay={i * 0.1} />
        ))}
      </div>
    </Section>
  )
}
