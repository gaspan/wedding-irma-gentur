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
      <div className="group relative h-full overflow-hidden rounded-[2.5rem] border border-gold/40 bg-emerald-void/80 backdrop-blur-xl p-8 pt-12 text-center shadow-[0_24px_50px_-20px_rgba(0,0,0,0.8)] transition-all duration-500 hover:-translate-y-3 hover:border-gold hover:shadow-[0_40px_80px_-20px_rgba(200,167,92,0.5)]">
        {/* Hairline Emas Atas Berlapis */}
        <span className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
        <span className="pointer-events-none absolute inset-x-16 top-[3px] h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
        
        {/* Bingkai Dalam Presisi */}
        <span className="pointer-events-none absolute inset-3 rounded-[2.1rem] border border-gold/30" />
        <span className="pointer-events-none absolute inset-4 rounded-[1.8rem] border border-gold/15" />

        {/* Medali Ilustrasi Berpendar */}
        <div className="relative mx-auto flex h-40 w-40 items-center justify-center">
          <span className="absolute inset-0 rounded-full bg-linear-to-br from-gold/20 via-transparent to-emerald/15 animate-pulse-glow" />
          <span className="absolute inset-0 rounded-full border border-gold/50 shadow-[0_0_20px_rgba(200,167,92,0.3)]" />
          <span className="absolute inset-[0.4rem] rounded-full border border-gold/25" />
          <span className="absolute inset-[0.8rem] rounded-full border border-gold/15" />
          <Art className="relative h-[6.5rem] w-[6.5rem] text-gold-deep transition-transform duration-700 group-hover:scale-110 drop-shadow-[0_4px_12px_rgba(200,167,92,0.3)]" />
        </div>

        <h3 className="mt-8 font-script text-[3rem] leading-[0.8] text-gold-gradient text-glow drop-shadow-xl sm:text-5xl">
          {person.name}
        </h3>

        <div className="mx-auto my-5 flex items-center justify-center gap-3">
          <span className="h-px w-12 hairline-gold opacity-80" />
          <span className="h-1.5 w-1.5 rotate-45 bg-gold shadow-[0_0_6px_#c8a75c]" />
          <span className="h-px w-12 hairline-gold opacity-80" />
        </div>

        <p className="text-[0.68rem] font-semibold tracking-[0.25em] text-muted/80 uppercase">
          {person.order} dari
        </p>
        <p className="mt-2.5 font-display text-xl leading-relaxed text-ink/90">
          {person.father}
          <br />
          &amp; {person.mother}
        </p>

        {person.instagram && (
          <a
            href={`https://instagram.com/${person.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-gold/45 bg-gold/[0.08] px-6 py-2.5 text-[0.72rem] font-semibold tracking-wider text-gold-deep transition duration-300 hover:border-gold hover:bg-gold hover:text-white hover:shadow-[0_0_20px_rgba(200,167,92,0.5)]"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" />
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
    <Section id="mempelai" className="relative bg-cream-deep text-ink">
      <div className="pointer-events-none absolute inset-0 bg-pattern-gold opacity-[0.05]" />
      <Sprig className="pointer-events-none absolute top-10 -left-10 h-64 text-gold opacity-[0.15]" />
      <Sprig className="pointer-events-none absolute -right-10 bottom-10 h-64 -scale-x-100 text-gold opacity-[0.15]" />
      <div className="pointer-events-none absolute top-0 left-1/2 h-64 w-full -translate-x-1/2 bg-radial-gold blur-[100px]" />

      <Reveal className="relative">
        <SectionTitle overline="Bismillahirrahmanirrahim" title="Kedua Mempelai" />
      </Reveal>

      <div className="relative mt-16 flex flex-col items-stretch gap-10 sm:flex-row sm:gap-8">
        <PersonCard person={couple.bride} Art={BrideIllustration} delay={0.05} />

        <div className="flex items-center justify-center sm:px-2 z-10">
          <span className="relative flex h-32 w-32 items-center justify-center rounded-full bg-emerald-void/80 border border-gold/40 shadow-[0_0_40px_rgba(200,167,92,0.4)] backdrop-blur-md">
            <span className="absolute inset-0 rounded-full border border-gold/50 shadow-[0_0_24px_rgba(200,167,92,0.3)] animate-[spin_10s_linear_infinite] border-dashed" />
            <span className="absolute inset-[0.45rem] rounded-full border border-gold/20" />
            <span
              className="font-display text-7xl text-gold sm:text-8xl drop-shadow-lg italic"
              style={{ textShadow: '0 0 30px rgba(200,167,92,.8)' }}
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

