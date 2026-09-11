import { events, mainDate } from '../../config/wedding'
import type { EventDetail } from '../../types'
import { googleCalendarUrl } from '../../lib/utils'
import { MosqueIllustration } from '../illustrations'
import { Grain } from '../ui/Effects'
import { Reveal, Section, SectionTitle } from '../ui'

function EventCard({ ev, delay }: { ev: EventDetail; delay: number }) {
  const gcal = googleCalendarUrl({
    title: `${ev.label} — Irma & Gentur`,
    description: `${ev.label} pernikahan Irma & Gentur di ${ev.venue}`,
    location: ev.address,
    start: mainDate,
    durationHours: 2,
  })

  return (
    <Reveal delay={delay} className="h-full">
      <article className="glass flex h-full flex-col overflow-hidden rounded-[2rem]">
        <div className="px-7 pb-7 pt-9 text-center">
          <MosqueIllustration className="mx-auto h-12 w-auto text-sage-deep/80" />
          <h3 className="mt-4 font-display text-3xl font-medium text-ink">{ev.label}</h3>
          <p className="mt-2 font-body text-[0.8rem] font-semibold uppercase tracking-[0.22em] text-gold-deep">
            {ev.date}
          </p>
          <p className="mt-1.5 inline-block rounded-full bg-ink px-4 py-1.5 font-body text-[0.72rem] font-semibold tracking-[0.14em] text-ivory">
            {ev.timeStart} – {ev.timeEnd} WIB
          </p>
          <p className="mt-4 font-display text-xl text-ink">{ev.venue}</p>
          <p className="mx-auto mt-1.5 max-w-xs font-body text-[0.85rem] font-light leading-relaxed text-muted">
            {ev.address}
          </p>
          <div className="mt-6 flex flex-col gap-2.5">
            <a
              href={ev.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fluid inline-flex items-center justify-center gap-2 rounded-full bg-sage-deep px-6 py-3 font-body text-[0.74rem] font-semibold uppercase tracking-[0.14em] text-white hover:bg-ink active:scale-[0.98]"
            >
              Buka di Google Maps
            </a>
            <a
              href={gcal}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fluid inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-white/70 px-6 py-3 font-body text-[0.74rem] font-semibold uppercase tracking-[0.14em] text-ink hover:border-ink/40 active:scale-[0.98]"
            >
              Tambah ke Kalender
            </a>
          </div>
        </div>
        <div className="px-4 pb-4">
          <iframe
            src={ev.mapsEmbed}
            title={`Peta ${ev.venue}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-48 w-full rounded-[1.4rem] border border-ink/10 grayscale-[20%]"
            style={{ borderWidth: 1 }}
            allowFullScreen
          />
        </div>
      </article>
    </Reveal>
  )
}

export function Events() {
  return (
    <Section id="acara" containerClass="max-w-3xl" className="bg-cream-deep/50">
      <Grain opacity={0.04} />
      <Reveal>
        <SectionTitle
          overline="Save the Date"
          title="Rangkaian Acara"
          desc="Kami menanti kehadiran Anda pada kedua momen istimewa berikut."
        />
      </Reveal>
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {events.map((ev, i) => (
          <EventCard key={ev.key} ev={ev} delay={i * 0.1} />
        ))}
      </div>
    </Section>
  )
}
