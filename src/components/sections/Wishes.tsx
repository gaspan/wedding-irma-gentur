import { useRef, useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { useWishes } from '../../hooks/useWishes'
import { useGuestName } from '../../hooks/useGuestName'
import { formatGuestTime } from '../../lib/guestbook'
import type { Kehadiran } from '../../types'
import { Grain, Toast } from '../ui/Effects'
import { Reveal, Section, SectionTitle } from '../ui'

const OPTIONS: { value: Kehadiran; label: string }[] = [
  { value: 'Hadir', label: 'Hadir' },
  { value: 'Tidak Hadir', label: 'Tidak Hadir' },
  { value: 'Ragu-ragu', label: 'Ragu-ragu' },
]

function badgeClass(kehadiran: string) {
  if (kehadiran === 'Hadir') return 'bg-sage-deep/10 text-sage-deep border-sage-deep/25'
  if (kehadiran === 'Tidak Hadir') return 'bg-ink/5 text-muted border-ink/10'
  return 'bg-gold/15 text-gold-deep border-gold/30'
}

function Skeleton() {
  return (
    <div className="space-y-3.5" aria-label="Memuat ucapan">
      {[0, 1, 2].map((i) => (
        <div key={i} className="flex animate-pulse gap-3">
          <span className="h-10 w-10 shrink-0 rounded-full bg-ink/10" />
          <div className="flex-1 rounded-2xl rounded-tl-md bg-ink/5 px-4 py-3">
            <div className="h-3.5 w-1/3 rounded-full bg-ink/10" />
            <div className="mt-2.5 h-3 w-full rounded-full bg-ink/10" />
            <div className="mt-2 h-3 w-2/3 rounded-full bg-ink/10" />
          </div>
        </div>
      ))}
    </div>
  )
}

export function Wishes() {
  const guest = useGuestName()
  const { wishes, loading, submitting, error, submit, reload } = useWishes()
  const [name, setName] = useState(guest ?? '')
  const [message, setMessage] = useState('')
  const [attendance, setAttendance] = useState<Kehadiran>('Hadir')
  const [visible, setVisible] = useState(6)
  const [toast, setToast] = useState<string | null>(null)
  const toastTimer = useRef(0)

  const notify = (msg: string) => {
    setToast(msg)
    window.clearTimeout(toastTimer.current)
    toastTimer.current = window.setTimeout(() => setToast(null), 2600)
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !message.trim() || submitting) return
    const ok = await submit({
      nama: name.trim().slice(0, 60),
      kehadiran: attendance,
      ucapan: message.trim().slice(0, 500),
    })
    if (ok) {
      setMessage('')
      notify('Ucapan terkirim, terima kasih')
    }
  }

  const input =
    'w-full rounded-2xl border border-ink/12 bg-white/85 px-4 py-3 font-body text-[0.9rem] text-ink outline-none transition placeholder:text-muted/60 focus:border-sage-deep/50 focus:ring-4 focus:ring-sage-light/40'

  return (
    <Section id="ucapan" className="bg-ivory">
      <Grain opacity={0.04} />
      <Reveal>
        <SectionTitle
          overline="RSVP & Doa Restu"
          title="Ucapan Bahagia"
          desc="Sampaikan ucapan dan konfirmasi kehadiran Anda dengan penuh ketulusan."
        />
      </Reveal>

      <Reveal delay={0.08}>
        <form onSubmit={onSubmit} className="glass mx-auto mt-10 max-w-lg rounded-[2rem] p-6 sm:p-8">
          <label htmlFor="wish-nama" className="mb-2 block font-body text-[0.66rem] font-bold uppercase tracking-[0.26em] text-muted">
            Nama Tamu
          </label>
          <input
            id="wish-nama"
            required
            maxLength={60}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tuliskan nama Anda"
            autoComplete="name"
            className={input}
          />

          <span id="wish-hadir-label" className="mb-2 mt-5 block font-body text-[0.66rem] font-bold uppercase tracking-[0.26em] text-muted">
            Konfirmasi Kehadiran
          </span>
          <div className="grid grid-cols-3 gap-2" role="radiogroup" aria-labelledby="wish-hadir-label">
            {OPTIONS.map((o) => (
              <button
                key={o.value}
                type="button"
                role="radio"
                aria-checked={attendance === o.value}
                onClick={() => setAttendance(o.value)}
                className={`btn-fluid rounded-full px-2 py-2.5 font-body text-[0.74rem] font-semibold ${
                  attendance === o.value
                    ? 'bg-ink text-ivory'
                    : 'border border-ink/12 bg-white/70 text-ink/60 hover:border-ink/30'
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>

          <label htmlFor="wish-ucapan" className="mb-2 mt-5 block font-body text-[0.66rem] font-bold uppercase tracking-[0.26em] text-muted">
            Doa & Ucapan
          </label>
          <textarea
            id="wish-ucapan"
            required
            rows={4}
            maxLength={500}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tuliskan ucapan serta doa terbaik Anda…"
            className={`${input} resize-none`}
          />

          {error && <p className="mt-3 text-center font-body text-[0.78rem] text-red-500">{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="btn-fluid mt-5 w-full rounded-full bg-sage-deep py-4 font-body text-[0.78rem] font-bold uppercase tracking-[0.2em] text-white hover:bg-ink disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? 'Mengirim...' : 'Kirim Ucapan'}
          </button>
        </form>
      </Reveal>

      <div className="mx-auto mt-10 max-w-lg">
        {loading ? (
          <Skeleton />
        ) : error && wishes.length === 0 ? (
          <div className="text-center">
            <p className="font-body text-[0.86rem] text-red-500">{error}</p>
            <button
              onClick={reload}
              className="btn-fluid mt-4 rounded-full border border-ink/15 px-7 py-2.5 font-body text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ink hover:bg-ink hover:text-ivory"
            >
              Coba Lagi
            </button>
          </div>
        ) : wishes.length === 0 ? (
          <p className="text-center font-body text-[0.86rem] italic text-muted">
            Belum ada ucapan. Jadilah yang pertama.
          </p>
        ) : (
          <>
            <p className="mb-5 text-center font-body text-[0.7rem] font-bold uppercase tracking-[0.3em] text-muted">
              {wishes.length} Ucapan Masuk
            </p>
            <div className="space-y-3.5">
              {wishes.slice(0, visible).map((w, i) => (
                <motion.div
                  key={`${w.timestamp}-${w.nama}-${i}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex gap-3"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage-deep/90 font-display text-lg text-white">
                    {(w.nama.trim()[0] ?? '?').toUpperCase()}
                  </span>
                  <div className="min-w-0 flex-1 rounded-2xl rounded-tl-md border border-ink/8 bg-white/85 px-4 py-3 shadow-[0_10px_30px_-18px_rgb(44_44_44/0.25)] backdrop-blur-md">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="font-body text-[0.84rem] font-bold text-ink">{w.nama}</p>
                      <span className="font-body text-[0.66rem] text-muted">{formatGuestTime(w.timestamp)}</span>
                    </div>
                    <span className={`mt-2 inline-block rounded-full border px-2.5 py-0.5 font-body text-[0.64rem] font-semibold ${badgeClass(w.kehadiran)}`}>
                      {w.kehadiran}
                    </span>
                    <p className="mt-1.5 font-body text-[0.88rem] font-light leading-relaxed text-ink/80 whitespace-pre-line break-words">
                      {w.ucapan}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            {visible < wishes.length && (
              <button
                onClick={() => setVisible((v) => v + 6)}
                className="btn-fluid mx-auto mt-6 block rounded-full border border-ink/15 px-7 py-2.5 font-body text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ink hover:bg-ink hover:text-ivory"
              >
                Lihat Lainnya
              </button>
            )}
          </>
        )}
      </div>

      <Toast message={toast} />
    </Section>
  )
}
