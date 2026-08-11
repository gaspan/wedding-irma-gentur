import { events } from '../../config/wedding'
import type { EventDetail } from '../../types'
import { MosqueIllustration, Sprig } from '../illustrations'
import { Reveal, Section, SectionTitle } from '../ui'

function EventCard({ ev, delay }: { ev: EventDetail; delay: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="group relative flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-gold/40 bg-emerald-void/80 shadow-[0_24px_50px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-gold hover:shadow-[0_40px_80px_-20px_rgba(200,167,92,0.5)]">
        <div className="relative overflow-hidden bg-black/40 px-8 py-10 text-center">
          <div className="pointer-events-none absolute inset-0 bg-damask opacity-[0.1]" />
          <div className="pointer-events-none absolute inset-0 bg-pattern-gold opacity-[0.1]" />
          <div className="pointer-events-none absolute -top-16 left-1/2 h-44 w-80 -translate-x-1/2 rounded-full bg-gold/15 blur-[80px]" />
          <span className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-80" />

          <MosqueIllustration className="relative mx-auto h-16 w-auto text-gold-bright drop-shadow-[0_0_15px_rgba(246,229,184,0.5)] transition-transform duration-500 group-hover:scale-110" />
          <h3 className="relative mt-6 font-display text-[2.2rem] leading-tight text-gold-gradient text-glow sm:text-4xl">
            {ev.label}
          </h3>

          <span className="relative mx-auto mt-5 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold opacity-80" />
            <span className="h-1.5 w-1.5 rotate-45 bg-gold-bright shadow-[0_0_10px_#f6e5b8]" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold opacity-80" />
          </span>

          <p className="relative mt-5 font-display text-[1.1rem] tracking-[0.2em] text-gold-light">
            {ev.date}
          </p>
          <span className="relative mt-4 inline-block rounded-full border border-gold/40 bg-gold/[0.08] px-6 py-2 text-[0.75rem] font-bold tracking-[0.2em] text-gold-bright shadow-[0_0_20px_rgba(200,167,92,0.3)]">
            {ev.timeStart} – {ev.timeEnd} WIB
          </span>
        </div>

        <div className="flex flex-1 flex-col items-center px-8 py-10 text-center">
          <p className="font-display text-[1.6rem] font-medium text-gold-light">{ev.venue}</p>
          <p className="mx-auto mt-4 max-w-xs text-[0.85rem] leading-relaxed text-balance text-gold-light/60">
            {ev.address}
          </p>

          <a
            href={ev.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-linear-to-r from-gold-deep via-gold-light to-gold-deep px-7 py-3 text-[0.78rem] font-bold tracking-[0.12em] text-emerald-night uppercase shadow-[0_8px_24px_-6px_rgba(200,167,92,0.5)] transition duration-300 hover:scale-105 active:scale-95"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7">
              <path d="M12 21s-7-6.3-7-11a7 7 0 1114 0c0 4.7-7 11-7 11z" />
              <circle cx="12" cy="10" r="2.6" />
            </svg>
            Buka Peta Google Maps
          </a>
        </div>

        <div className="h-52 w-full border-t border-gold/20 sm:h-60">
          <iframe
            src={ev.mapsEmbed}
            title={`Peta ${ev.venue}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full grayscale-[30%] transition duration-700 hover:grayscale-0"
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
    <Section id="acara" className="relative bg-emerald-night text-ink">
      <div className="pointer-events-none absolute inset-0 bg-pattern-gold opacity-[0.05]" />
      <Sprig className="pointer-events-none absolute top-16 -right-10 h-60 -scale-x-100 text-gold opacity-25" />
      <div className="pointer-events-none absolute top-0 left-1/2 h-[40vh] w-full -translate-x-1/2 bg-radial-gold blur-[100px]" />

      <Reveal>
        <SectionTitle overline="Save the Date" title="Rangkaian Acara" />
      </Reveal>

      <div className="mt-16 grid gap-10 sm:grid-cols-2">
        {events.map((ev, i) => (
          <EventCard key={ev.key} ev={ev} delay={i * 0.15} />
        ))}
      </div>
    </Section>
  )
}

