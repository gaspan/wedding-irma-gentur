import { events } from '../../config/wedding'
import type { EventDetail } from '../../types'
import { MosqueIllustration, Sprig } from '../illustrations'
import { Reveal, Section, SectionTitle } from '../ui'

function EventCard({ ev, delay }: { ev: EventDetail; delay: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gold/25 bg-white/85 shadow-[0_16px_50px_-24px_rgba(13,58,42,.35)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_28px_70px_-24px_rgba(201,169,97,.55)]">
        <div className="relative overflow-hidden bg-emerald-deep px-7 py-8 text-center">
          <div className="pointer-events-none absolute inset-0 bg-pattern-gold opacity-10" />
          <div className="pointer-events-none absolute -top-16 left-1/2 h-40 w-72 -translate-x-1/2 rounded-full bg-gold/20 blur-[70px]" />

          <MosqueIllustration className="relative mx-auto h-14 w-auto text-gold-bright" />
          <h3 className="relative mt-4 font-display text-3xl font-medium text-gold-gradient text-gold-shimmer">
            {ev.label}
          </h3>
          <p className="relative mt-2 text-sm tracking-wide text-gold-light/90">{ev.date}</p>
          <span className="relative mt-3 inline-block rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-xs font-semibold tracking-wider text-gold-bright">
            {ev.timeStart} – {ev.timeEnd} WIB
          </span>
        </div>

        <div className="flex flex-1 flex-col items-center px-7 py-7 text-center">
          <p className="text-base font-semibold text-ink">{ev.venue}</p>
          <p className="mx-auto mt-1.5 max-w-xs text-sm leading-relaxed text-balance text-muted">
            {ev.address}
          </p>

          <a
            href={ev.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center gap-2 rounded-full bg-linear-to-r from-gold-deep via-gold to-gold-bright px-6 py-2.5 text-sm font-semibold text-emerald-night transition hover:scale-105 active:scale-95"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
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
            className="h-full w-full grayscale-[35%] transition duration-500 hover:grayscale-0"
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
