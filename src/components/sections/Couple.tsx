import { couple } from '../../config/wedding'
import { BrideIllustration, GroomIllustration } from '../illustrations'
import { Grain, SoftBloom } from '../ui/Effects'
import { Reveal, Section, SectionTitle } from '../ui'

function Person({
  name,
  order,
  father,
  mother,
  instagram,
  Art,
  delay,
}: {
  name: string
  order: string
  father: string
  mother: string
  instagram?: string
  Art: (p: { className?: string }) => React.ReactElement
  delay: number
}) {
  return (
    <Reveal delay={delay} className="flex-1">
      <div className="glass rounded-[2.2rem] p-7 pt-9 text-center sm:p-9">
        <div className="arch mx-auto w-fit bg-gradient-to-b from-cream-deep to-white p-2">
          <div className="arch flex h-52 w-40 items-center justify-center bg-ivory">
            <Art className="h-28 w-28 text-gold-deep/80" />
          </div>
        </div>
        <h3 className="mt-7 font-display text-4xl font-medium text-ink">{name}</h3>
        <p className="mt-3 font-body text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-muted">
          {order} dari
        </p>
        <p className="mt-2 font-body text-[0.95rem] font-medium leading-relaxed text-ink/85">
          {father} <span className="font-script text-2xl text-gold-deep">&</span> {mother}
        </p>
        {instagram && (
          <a
            href={`https://instagram.com/${instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-fluid mt-5 inline-flex items-center gap-2 rounded-full border border-sage-deep/25 px-5 py-2 font-body text-[0.72rem] font-semibold tracking-wider text-sage-deep hover:bg-sage-deep hover:text-white"
          >
            @{instagram}
          </a>
        )}
      </div>
    </Reveal>
  )
}

export function Couple() {
  return (
    <Section id="mempelai" className="bg-ivory">
      <SoftBloom />
      <Grain opacity={0.04} />
      <Reveal>
        <SectionTitle
          overline="Bismillahirrahmanirrahim"
          title="Kedua Mempelai"
          desc="Dengan penuh syukur, kami memperkenalkan dua insan yang dipersatukan dalam ikatan suci."
        />
      </Reveal>
      <div className="relative mt-14 flex flex-col items-stretch gap-8 sm:flex-row sm:gap-6">
        <Person
          name={couple.bride.name}
          order={couple.bride.order}
          father={couple.bride.father}
          mother={couple.bride.mother}
          instagram={couple.bride.instagram || undefined}
          Art={BrideIllustration}
          delay={0.05}
        />
        <div className="flex items-center justify-center">
          <span className="glass flex h-20 w-20 items-center justify-center rounded-full font-script text-5xl text-gold-deep">
            &
          </span>
        </div>
        <Person
          name={couple.groom.name}
          order={couple.groom.order}
          father={couple.groom.father}
          mother={couple.groom.mother}
          instagram={couple.groom.instagram || undefined}
          Art={GroomIllustration}
          delay={0.15}
        />
      </div>
    </Section>
  )
}
