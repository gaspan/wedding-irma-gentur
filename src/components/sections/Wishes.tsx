import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { useWishes } from '../../hooks/useWishes'
import { useGuestName } from '../../hooks/useGuestName'
import { relativeTime } from '../../lib/utils'
import type { Attendance } from '../../types'
import { Grain, Toast } from '../ui/Effects'
import { Reveal, Section, SectionTitle } from '../ui'

const OPTIONS: { value: Attendance; label: string }[] = [
  { value: 'hadir', label: 'Hadir' },
  { value: 'tidak_hadir', label: 'Tidak' },
  { value: 'ragu', label: 'Ragu' },
]

export function Wishes() {
  const guest = useGuestName()
  const { wishes, loading, submitting, error, submit } = useWishes()
  const [name, setName] = useState(guest ?? '')
  const [message, setMessage] = useState('')
  const [attendance, setAttendance] = useState<Attendance>('hadir')
  const [visible, setVisible] = useState(6)
  const [toast, setToast] = useState<string | null>(null)

  const notify = (msg: string) => {
    setToast(msg)
    window.setTimeout(() => setToast(null), 2400)
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !message.trim()) return
    const ok = await submit({
      name: name.trim().slice(0, 60),
      message: message.trim().slice(0, 500),
      attendance,
      guest_count: 1,
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
          <label className="mb-2 block font-body text-[0.66rem] font-bold uppercase tracking-[0.26em] text-muted">
            Nama Lengkap
          </label>
          <input
            required
            maxLength={60}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tuliskan nama Anda"
            className={input}
          />

          <label className="mb-2 mt-5 block font-body text-[0.66rem] font-bold uppercase tracking-[0.26em] text-muted">
            Konfirmasi Kehadiran
          </label>
          <div className="grid grid-cols-3 gap-2">
            {OPTIONS.map((o) => (
              <button
                key={o.value}
                type="button"
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

          <label className="mb-2 mt-5 block font-body text-[0.66rem] font-bold uppercase tracking-[0.26em] text-muted">
            Ucapan & Doa Restu
          </label>
          <textarea
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
            className="btn-fluid mt-5 w-full rounded-full bg-sage-deep py-4 font-body text-[0.78rem] font-bold uppercase tracking-[0.2em] text-white hover:bg-ink disabled:opacity-50"
          >
            {submitting ? 'Mengirim…' : 'Kirim Ucapan'}
          </button>
        </form>
      </Reveal>

      <div className="mx-auto mt-10 max-w-lg">
        {loading ? (
          <p className="text-center font-body text-[0.86rem] text-muted">Memuat ucapan…</p>
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
              {wishes.slice(0, visible).map((w) => (
                <motion.div
                  key={w.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex gap-3"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage-deep/90 font-display text-lg text-white">
                    {(w.name.trim()[0] ?? '?').toUpperCase()}
                  </span>
                  <div className="min-w-0 flex-1 rounded-2xl rounded-tl-md border border-ink/8 bg-white/85 px-4 py-3 shadow-[0_10px_30px_-18px_rgb(44_44_44/0.25)] backdrop-blur-md">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="font-body text-[0.84rem] font-bold text-ink">{w.name}</p>
                      <span className="font-body text-[0.66rem] text-muted">{relativeTime(w.created_at)}</span>
                    </div>
                    <p className="mt-1.5 font-body text-[0.88rem] font-light leading-relaxed text-ink/80 whitespace-pre-line break-words">
                      {w.message}
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
