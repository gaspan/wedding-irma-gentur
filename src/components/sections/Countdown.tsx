import { motion } from 'framer-motion'
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
      className="card-conic relative flex min-w-[78px] flex-col items-center rounded-2xl px-4 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] sm:min-w-[105px] sm:px-7 sm:py-6"
      style={{ '--card-bg': 'rgba(6,32,23,.92)' } as CSSProperties}
    >
      <span className="pointer-events-none absolute inset-x-6 top-0 h-px hairline-gold opacity-90" />
      <span className="pointer-events-none absolute inset-x-9 bottom-0 h-px hairline-gold opacity-50" />
      <FlipDigit
        value={value}
        className="font-display text-[2.6rem] leading-none font-light text-gold-gradient text-gold-shimmer text-glow tabular-nums sm:text-[3.6rem]"
      />
      <span className="mt-3 text-[0.58rem] font-bold tracking-[0.35em] text-gold-light/75 uppercase">
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
      <div className="pointer-events-none absolute inset-0 bg-damask opacity-[0.09]" />
      <div className="pointer-events-none absolute inset-0 bg-pattern-gold opacity-[0.09]" />
      <Sparkles className="text-gold-bright" />
      <div className="pointer-events-none absolute inset-0 vignette" />
      <div className="pointer-events-none absolute top-0 left-1/2 h-80 w-[42rem] max-w-full -translate-x-1/2 rounded-full bg-gold/15 blur-[120px]" />

      <Reveal className="relative text-center">
        <CalendarIllustration className="mx-auto h-16 w-16 animate-float text-gold-bright drop-shadow-[0_0_20px_rgba(246,229,184,0.5)]" />

        <p className="mt-6 text-[0.65rem] font-bold tracking-[0.5em] text-gold-light/70 uppercase">
          Save the Date
        </p>

        <h2 className="mt-4 font-display text-[2.8rem] leading-[1.06] font-light text-gold-gradient text-gold-shimmer text-glow sm:text-6xl">
          {done ? 'Alhamdulillah, Hari Bahagia Telah Tiba' : 'Menuju Hari Bahagia'}
        </h2>

        <Divider className="mx-auto mt-7 w-48 text-gold drop-shadow" />

        {!done && (
          <div className="mt-14 flex flex-wrap items-center justify-center gap-3.5 sm:gap-6">
            <Unit value={days} label="Hari" />
            <Unit value={hours} label="Jam" />
            <Unit value={minutes} label="Menit" />
            <Unit value={seconds} label="Detik" />
          </div>
        )}

        <motion.button
          onClick={save}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="animate-glow relative mt-14 inline-flex items-center gap-3 overflow-hidden rounded-full bg-linear-to-r from-gold-deep via-gold-light to-gold-deep px-9 py-4 text-[0.8rem] font-bold tracking-[0.14em] text-emerald-night uppercase shadow-[0_0_36px_rgba(200,167,92,0.5)] transition-shadow duration-300 hover:shadow-[0_0_60px_rgba(200,167,92,0.8)] cursor-pointer"
        >
          <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 animate-sheen bg-white/40 blur-md" />
          <svg viewBox="0 0 24 24" className="relative h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.7">
            <rect x="3" y="5" width="18" height="16" rx="2" />
            <path d="M3 10h18M8 3v4M16 3v4" strokeLinecap="round" />
          </svg>
          <span className="relative">Simpan Tanggal</span>
        </motion.button>
      </Reveal>
    </Section>
  )
}

