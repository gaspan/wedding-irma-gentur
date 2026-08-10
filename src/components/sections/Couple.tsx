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
      <div className="group relative rounded-2xl border border-sage/20 bg-white/60 px-7 py-10 text-center shadow-sm backdrop-blur-sm transition hover:border-gold/40 hover:shadow-md">
        <Art className="mx-auto h-32 w-32 text-sage transition-transform duration-500 group-hover:scale-105" />

        <h3 className="mt-6 font-display text-3xl leading-tight font-light text-ink">
          {person.name}
        </h3>

        <div className="mx-auto my-4 h-px w-12 bg-gold/50" />

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
            className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-sage/30 px-4 py-1.5 text-xs text-sage-deep transition hover:border-gold hover:text-gold"
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
      <Sprig className="pointer-events-none absolute top-10 -left-8 h-56 text-sage opacity-15" />
      <Sprig className="pointer-events-none absolute -right-8 bottom-10 h-56 -scale-x-100 text-sage opacity-15" />

      <Reveal>
        <SectionTitle overline="Bismillah" title="Kedua Mempelai" />
      </Reveal>

      <div className="mt-14 flex flex-col items-stretch gap-6 sm:flex-row sm:gap-5">
        <PersonCard person={couple.bride} Art={BrideIllustration} delay={0.05} />

        <div className="flex items-center justify-center sm:px-1">
          <span className="font-display text-4xl text-gold italic">&amp;</span>
        </div>

        <PersonCard person={couple.groom} Art={GroomIllustration} delay={0.15} />
      </div>
    </Section>
  )
}
