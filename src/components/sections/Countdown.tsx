import { couple, events, mainDate } from '../../config/wedding'
import { useCountdown } from '../../hooks/useCountdown'
import { googleCalendarUrl } from '../../lib/utils'
import { Grain, SoftBloom } from '../ui/Effects'
import { Reveal, Section } from '../ui'

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="glass flex min-w-[72px] flex-1 flex-col items-center rounded-[1.4rem] px-3 py-5 sm:min-w-[92px]">
      <span className="font-body text-3xl font-bold tabular-nums text-ink sm:text-4xl">
        {String(value).padStart(2, '0')}
      </span>
      <span className="mt-1.5 font-body text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-muted">
        {label}
      </span>
    </div>
  )
}

export function Countdown() {
  const { days, hours, minutes, seconds, done } = useCountdown(mainDate)
  const gcal = googleCalendarUrl({
    title: `Pernikahan ${couple.bride.nickname} & ${couple.groom.nickname}`,
    description: `${events[0].label} — ${events[0].venue}, ${events[0].address}`,
    location: events[0].address,
    start: mainDate,
    durationHours: 3,
  })

  return (
    <Section className="bg-ivory">
      <SoftBloom />
      <Grain opacity={0.04} />
      <Reveal className="relative text-center">
        <p className="font-body text-[0.66rem] font-semibold uppercase tracking-[0.42em] text-gold-deep">
          Save the Date
        </p>
        <h2 className="mx-auto mt-3 max-w-md font-display text-4xl font-medium leading-tight text-ink sm:text-5xl">
          {done ? 'Hari Bahagia Telah Tiba' : 'Menuju Hari Bahagia'}
        </h2>
        {!done && (
          <div className="mx-auto mt-10 flex max-w-md items-stretch justify-center gap-2.5 sm:gap-3.5">
            <Unit value={days} label="Hari" />
            <Unit value={hours} label="Jam" />
            <Unit value={minutes} label="Menit" />
            <Unit value={seconds} label="Detik" />
          </div>
        )}
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={gcal}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-fluid inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-3.5 font-body text-[0.76rem] font-semibold uppercase tracking-[0.16em] text-ivory hover:bg-sage-deep active:scale-[0.98]"
          >
            Tambahkan ke Google Calendar
          </a>
        </div>
      </Reveal>
    </Section>
  )
}
