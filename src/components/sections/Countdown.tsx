import { mainDate } from '../../config/wedding'
import { useCountdown } from '../../hooks/useCountdown'
import { downloadIcs } from '../../lib/utils'
import { couple, events } from '../../config/wedding'
import { CalendarIllustration, Divider } from '../illustrations'
import { Reveal, Section } from '../ui'

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex min-w-[68px] flex-col items-center rounded-xl border border-sage/20 bg-white/70 px-3 py-4 shadow-sm backdrop-blur-sm sm:min-w-[84px] sm:px-5">
      <span className="font-display text-3xl leading-none font-light text-ink tabular-nums sm:text-4xl">
        {String(value).padStart(2, '0')}
      </span>
      <span className="mt-2 text-[0.6rem] tracking-[0.18em] text-muted uppercase">
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
    <Section className="bg-cream-deep/50">
      <div className="pointer-events-none absolute inset-0 bg-pattern opacity-[0.1]" />

      <Reveal className="relative text-center">
        <CalendarIllustration className="mx-auto h-14 w-14 text-gold" />

        <h2 className="mt-5 font-display text-3xl font-light text-ink sm:text-4xl">
          {done ? 'Alhamdulillah, Hari Bahagia Telah Tiba' : 'Menuju Hari Bahagia'}
        </h2>

        <Divider className="mx-auto mt-5 w-36 text-gold" />

        {!done && (
          <div className="mt-9 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
            <Unit value={days} label="Hari" />
            <Unit value={hours} label="Jam" />
            <Unit value={minutes} label="Menit" />
            <Unit value={seconds} label="Detik" />
          </div>
        )}

        <button
          onClick={save}
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-gold/50 px-6 py-3 text-sm font-medium text-ink transition hover:bg-gold hover:text-white active:scale-95"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="3" y="5" width="18" height="16" rx="2" />
            <path d="M3 10h18M8 3v4M16 3v4" strokeLinecap="round" />
          </svg>
          Simpan Tanggal
        </button>
      </Reveal>
    </Section>
  )
}
