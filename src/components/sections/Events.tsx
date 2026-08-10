import { events } from '../../config/wedding'
import type { EventDetail } from '../../types'
import { MosqueIllustration, Sprig } from '../illustrations'
import { Reveal, Section, SectionTitle } from '../ui'

function EventCard({ ev, delay }: { ev: EventDetail; delay: number }) {
  return (
    <Reveal delay={delay}>
      <article className="overflow-hidden rounded-2xl border border-sage/20 bg-white/70 shadow-sm backdrop-blur-sm">
        <div className="px-7 py-9 text-center">
          <MosqueIllustration className="mx-auto h-16 w-auto text-gold" />

          <h3 className="mt-5 font-display text-3xl font-light text-ink">{ev.label}</h3>
          <div className="mx-auto my-4 h-px w-12 bg-gold/50" />

          <p className="font-display text-xl text-ink">{ev.date}</p>
          <p className="mt-1.5 text-sm text-muted">
            {ev.timeStart} – {ev.timeEnd} WIB
          </p>

          <p className="mt-6 text-base font-medium text-ink">{ev.venue}</p>
          <p className="mx-auto mt-1.5 max-w-xs text-sm leading-relaxed text-balance text-muted">
            {ev.address}
          </p>

          <a
            href={ev.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-sage-deep px-6 py-2.5 text-sm font-medium text-white transition hover:bg-sage active:scale-95"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M12 21s-7-6.3-7-11a7 7 0 1114 0c0 4.7-7 11-7 11z" />
              <circle cx="12" cy="10" r="2.6" />
            </svg>
            Buka Peta
          </a>
        </div>

        <div className="h-52 w-full border-t border-sage/15 sm:h-60">
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
    <Section id="acara" className="relative">
      <Sprig className="pointer-events-none absolute top-16 -right-10 h-52 -scale-x-100 text-sage opacity-15" />

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
