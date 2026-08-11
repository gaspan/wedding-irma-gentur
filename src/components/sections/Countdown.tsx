import { mainDate } from '../../config/wedding'
import { useCountdown } from '../../hooks/useCountdown'
import { downloadIcs } from '../../lib/utils'
import { couple, events } from '../../config/wedding'
import { Aurora, CalendarIllustration, Divider, Sparkles } from '../illustrations'
import { FlipDigit } from '../ui/Effects'
import { Reveal, Section } from '../ui'
import type { CSSProperties } from 'react'

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div
      className="card-conic relative flex min-w-[74px] flex-col items-center rounded-2xl px-3.5 py-5 sm:min-w-[98px] sm:px-6 sm:py-6"
      style={{ '--card-bg': 'rgba(8,42,31,.82)' } as CSSProperties}
    >
      <span className="pointer-events-none absolute inset-x-6 top-0 h-px hairline-gold" />
      <span className="pointer-events-none absolute inset-x-9 bottom-0 h-px hairline-gold opacity-40" />
      <FlipDigit
        value={value}
        className="font-display text-[2.4rem] leading-none font-light text-gold-gradient text-gold-shimmer tabular-nums sm:text-[3.4rem]"
      />
      <span className="mt-3 text-[0.55rem] font-semibold tracking-[0.32em] text-gold-light/60 uppercase">
        {label}
      </span>
    </div>
  )
}

export function Countdown() {
  const { days, hours, minutes, seconds, done } = useCountdown(mainDate)

  const save = () =>
    downloadIcs({
      title: `Pernikahan ${couple.bride.nickname} & ${couple.groom.nickname}`,
      description: `${events[0].label} — ${events[0].venue}`,
      location: events[0].address,
      start: mainDate,
      durationHours: 3,
    })

  return (
    <Section className="bg-emerald-night">
      <Aurora />
      <div className="pointer-events-none absolute inset-0 bg-damask opacity-[0.07]" />
      <div className="pointer-events-none absolute inset-0 bg-pattern-gold opacity-[0.07]" />
      <Sparkles className="text-gold-bright" />
      <div className="pointer-events-none absolute inset-0 vignette" />
      <div className="pointer-events-none absolute top-0 left-1/2 h-80 w-[38rem] max-w-full -translate-x-1/2 rounded-full bg-gold/10 blur-[110px]" />

      <Reveal className="relative text-center">
        <CalendarIllustration className="mx-auto h-14 w-14 animate-float text-gold-bright" />

        <p className="mt-6 text-[0.6rem] font-semibold tracking-[0.45em] text-gold-light/60 uppercase">
          Save the Date
        </p>

        <h2 className="mt-4 font-display text-[2.6rem] leading-[1.08] font-light text-gold-gradient text-gold-shimmer text-glow sm:text-6xl">
          {done ? 'Alhamdulillah, Hari Bahagia Telah Tiba' : 'Menuju Hari Bahagia'}
        </h2>

        <Divider className="mx-auto mt-7 w-40 text-gold" />

        {!done && (
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-5">
            <Unit value={days} label="Hari" />
            <Unit value={hours} label="Jam" />
            <Unit value={minutes} label="Menit" />
            <Unit value={seconds} label="Detik" />
          </div>
        )}

        <button
          onClick={save}
          className="animate-glow relative mt-14 inline-flex items-center gap-2 overflow-hidden rounded-full bg-linear-to-r from-gold-deep via-gold-light to-gold-deep px-8 py-3.5 text-[0.78rem] font-semibold tracking-[0.12em] text-emerald-night uppercase transition duration-300 hover:scale-105 active:scale-95"
        >
          <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 animate-sheen bg-white/35 blur-md" />
          <svg viewBox="0 0 24 24" className="relative h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="3" y="5" width="18" height="16" rx="2" />
            <path d="M3 10h18M8 3v4M16 3v4" strokeLinecap="round" />
          </svg>
          <span className="relative">Simpan Tanggal</span>
        </button>
      </Reveal>
    </Section>
  )
}
