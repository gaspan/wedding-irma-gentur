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
      <div className="group relative h-full overflow-hidden rounded-[1.75rem] border border-gold/25 bg-linear-to-b from-white to-cream p-8 pt-10 text-center shadow-[0_20px_60px_-28px_rgba(10,49,37,.35)] transition duration-500 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-[0_32px_80px_-28px_rgba(157,122,51,.45)]">
        {/* hairline atas berlapis */}
        <span className="pointer-events-none absolute inset-x-10 top-0 h-px hairline-gold" />
        <span className="pointer-events-none absolute inset-x-16 top-[3px] h-px hairline-gold opacity-40" />
        {/* bingkai dalam */}
        <span className="pointer-events-none absolute inset-3 rounded-[1.35rem] border border-gold/15" />

        {/* medali ilustrasi */}
        <div className="relative mx-auto flex h-36 w-36 items-center justify-center">
          <span className="absolute inset-0 rounded-full bg-linear-to-br from-gold/15 via-transparent to-emerald/10" />
          <span className="absolute inset-0 rounded-full border border-gold/40" />
          <span className="absolute inset-[0.35rem] rounded-full border border-gold/20" />
          <span className="absolute inset-[0.7rem] rounded-full border border-gold/10" />
          <Art className="relative h-[6rem] w-[6rem] text-gold-deep transition-transform duration-700 group-hover:scale-110" />
        </div>

        <h3 className="mt-7 font-display text-[2rem] leading-tight font-light italic text-ink sm:text-4xl">
          {person.name}
        </h3>

        <div className="mx-auto my-5 flex items-center justify-center gap-2.5">
          <span className="h-px w-10 hairline-gold opacity-70" />
          <span className="h-1 w-1 rotate-45 bg-gold" />
          <span className="h-px w-10 hairline-gold opacity-70" />
        </div>

        <p className="text-[0.7rem] tracking-[0.2em] text-muted/70 uppercase">
          {person.order} dari
        </p>
        <p className="mt-2 font-display text-lg leading-relaxed text-ink/85">
          {person.father}
          <br />
          &amp; {person.mother}
        </p>

        {person.instagram && (
          <a
            href={`https://instagram.com/${person.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/35 px-5 py-2 text-[0.7rem] font-medium tracking-wide text-gold-deep transition duration-300 hover:border-gold hover:bg-gold hover:text-white"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
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
    <Section id="mempelai" className="relative bg-cream">
      <div className="pointer-events-none absolute inset-0 bg-pattern opacity-[0.08]" />
      <Sprig className="pointer-events-none absolute top-10 -left-10 h-60 text-gold opacity-[0.12]" />
      <Sprig className="pointer-events-none absolute -right-10 bottom-10 h-60 -scale-x-100 text-gold opacity-[0.12]" />

      <Reveal className="relative">
        <SectionTitle overline="Bismillahirrahmanirrahim" title="Kedua Mempelai" />
      </Reveal>

      <div className="relative mt-16 flex flex-col items-stretch gap-7 sm:flex-row sm:gap-5">
        <PersonCard person={couple.bride} Art={BrideIllustration} delay={0.05} />

        <div className="flex items-center justify-center sm:px-2">
          <span className="relative flex h-24 w-24 items-center justify-center">
            <span className="absolute inset-0 rounded-full border border-gold/40" />
            <span className="absolute inset-[0.4rem] rounded-full border border-gold/15" />
            <span
              className="font-script text-5xl text-gold sm:text-6xl"
              style={{ textShadow: '0 0 26px rgba(200,167,92,.45)' }}
            >
              &amp;
            </span>
          </span>
        </div>

        <PersonCard person={couple.groom} Art={GroomIllustration} delay={0.15} />
      </div>
    </Section>
  )
}
