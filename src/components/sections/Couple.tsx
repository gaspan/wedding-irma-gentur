import { couple } from '../../config/wedding'
import { BrideIllustration, GroomIllustration, Sprig } from '../illustrations'
import { Reveal, Section, SectionTitle } from '../ui'

type Person = typeof couple.bride | typeof couple.groom

function PersonCard({
  person,
  Art,
  delay,
}: {
  person: Person
  Art: (p: { className?: string }) => React.ReactElement
  delay: number
}) {
  return (
    <Reveal delay={delay} className="flex-1">
      <div className="group relative h-full rounded-3xl border border-gold/25 bg-white/85 p-7 pt-9 text-center shadow-[0_16px_50px_-24px_rgba(13,58,42,.35)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_28px_70px_-24px_rgba(201,169,97,.55)]">
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-gold to-transparent" />
        <div className="pointer-events-none absolute inset-x-4 top-2 h-px bg-linear-to-r from-transparent via-gold/50 to-transparent" />

        <div className="relative mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-linear-to-br from-emerald/10 via-emerald-mid/10 to-gold/15">
          <Art className="h-24 w-24 text-gold-deep transition-transform duration-500 group-hover:scale-110" />
          <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-gold/30" />
        </div>

        <h3 className="mt-6 font-display text-3xl leading-tight font-medium text-ink">
          {person.name}
        </h3>

        <div className="mx-auto my-4 flex items-center gap-2">
          <span className="h-px w-10 bg-gold/40" />
          <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
          <span className="h-px w-10 bg-gold/40" />
        </div>

        <p className="text-sm text-muted">{person.order} dari</p>
        <p className="mt-1 text-sm leading-relaxed text-ink">
          {person.father}
          <br />
          &amp; {person.mother}
        </p>

        {person.instagram && (
          <a
            href={`https://instagram.com/${person.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-gold/40 px-4 py-1.5 text-xs font-medium text-gold-deep transition hover:bg-gold hover:text-white"
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.6">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
            </svg>
            @{person.instagram}
          </a>
        )}
      </div>
    </Reveal>
  )
}

export function Couple() {
  return (
    <Section id="mempelai" className="relative">
      <Sprig className="pointer-events-none absolute top-10 -left-8 h-56 text-gold opacity-15" />
      <Sprig className="pointer-events-none absolute -right-8 bottom-10 h-56 -scale-x-100 text-gold opacity-15" />

      <Reveal>
        <SectionTitle overline="Bismillah" title="Kedua Mempelai" />
      </Reveal>

      <div className="mt-14 flex flex-col items-stretch gap-6 sm:flex-row sm:gap-5">
        <PersonCard person={couple.bride} Art={BrideIllustration} delay={0.05} />

        <div className="flex items-center justify-center sm:px-1">
          <span
            className="font-display text-5xl text-gold italic"
            style={{ textShadow: '0 0 24px rgba(201,169,97,.6)' }}
          >
            &amp;
          </span>
        </div>

        <PersonCard person={couple.groom} Art={GroomIllustration} delay={0.15} />
      </div>
    </Section>
  )
}
