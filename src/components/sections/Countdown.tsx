import { mainDate } from '../../config/wedding'
import { useCountdown } from '../../hooks/useCountdown'
import { downloadIcs } from '../../lib/utils'
import { couple, events } from '../../config/wedding'
import { Aurora, CalendarIllustration, Divider, Sparkles } from '../illustrations'
import { Reveal, Section } from '../ui'

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="relative flex min-w-[72px] flex-col items-center rounded-2xl border border-gold/30 bg-white/5 px-3 py-4 backdrop-blur-md sm:min-w-[92px] sm:px-5 sm:py-5">
      <span className="pointer-events-none absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-gold/70 to-transparent" />
      <span className="font-display text-4xl font-medium text-gold-gradient text-gold-shimmer tabular-nums sm:text-5xl">
        {String(value).padStart(2, '0')}
      </span>
      <span className="mt-2 text-[0.6rem] font-semibold tracking-[0.2em] text-gold-light/70 uppercase">
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
    <Section className="bg-emerald-deep">
      <Aurora />
      <div className="pointer-events-none absolute inset-0 bg-pattern-gold opacity-10" />
      <Sparkles className="text-gold-bright" />

      <Reveal className="relative text-center">
        <CalendarIllustration className="mx-auto h-14 w-14 animate-float text-gold-bright" />

        <h2 className="mt-5 font-display text-4xl font-medium text-gold-gradient text-gold-shimmer sm:text-5xl">
          {done ? 'Alhamdulillah, Hari Bahagia Telah Tiba' : 'Menuju Hari Bahagia'}
        </h2>

        <Divider className="mx-auto mt-5 w-36 text-gold" />

        {!done && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-5">
            <Unit value={days} label="Hari" />
            <Unit value={hours} label="Jam" />
            <Unit value={minutes} label="Menit" />
            <Unit value={seconds} label="Detik" />
          </div>
        )}

        <button
          onClick={save}
          className="animate-glow mt-12 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-gold-deep via-gold to-gold-bright px-8 py-3.5 text-sm font-semibold text-emerald-night transition hover:scale-105 active:scale-95"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3" y="5" width="18" height="16" rx="2" />
            <path d="M3 10h18M8 3v4M16 3v4" strokeLinecap="round" />
          </svg>
          Simpan Tanggal
        </button>
      </Reveal>
    </Section>
  )
}
