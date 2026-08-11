import { useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useWishes } from '../../hooks/useWishes'
import { useGuestName } from '../../hooks/useGuestName'
import { isSupabaseReady } from '../../lib/supabase'
import { relativeTime } from '../../lib/utils'
import type { Attendance } from '../../types'
import { Reveal, Section, SectionTitle } from '../ui'

const OPTIONS: { value: Attendance; label: string }[] = [
  { value: 'hadir', label: 'Hadir' },
  { value: 'tidak_hadir', label: 'Tidak Hadir' },
  { value: 'ragu', label: 'Masih Ragu' },
]

const BADGE: Record<Attendance, string> = {
  hadir: 'bg-emerald/10 text-emerald',
  tidak_hadir: 'bg-muted/15 text-muted',
  ragu: 'bg-gold/15 text-gold-deep',
}

const BADGE_LABEL: Record<Attendance, string> = {
  hadir: 'Hadir',
  tidak_hadir: 'Tidak Hadir',
  ragu: 'Masih Ragu',
}

export function Wishes() {
  const guest = useGuestName()
  const { wishes, loading, submitting, error, submit } = useWishes()

  const [name, setName] = useState(guest ?? '')
  const [message, setMessage] = useState('')
  const [attendance, setAttendance] = useState<Attendance>('hadir')
  const [guestCount, setGuestCount] = useState(1)
  const [honeypot, setHoneypot] = useState('')
  const [sent, setSent] = useState(false)
  const [visible, setVisible] = useState(5)

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (honeypot) return // bot terdeteksi, diam-diam diabaikan
    if (!name.trim() || !message.trim()) return

    const ok = await submit({
      name: name.trim().slice(0, 60),
      message: message.trim().slice(0, 500),
      attendance,
      guest_count: attendance === 'hadir' ? guestCount : 0,
    })

    if (ok) {
      setMessage('')
      setSent(true)
      setTimeout(() => setSent(false), 4000)
    }
  }

  const inputClass =
    'w-full rounded-[0.9rem] border border-gold/25 bg-white/90 px-4 py-3 text-sm text-ink outline-none transition duration-300 placeholder:text-muted/45 focus:border-gold focus:ring-2 focus:ring-gold/25'

  const labelClass =
    'mb-2 block text-[0.68rem] font-semibold tracking-[0.2em] text-gold-deep uppercase'

  return (
    <Section id="rsvp" className="bg-cream-deep">
      <div className="pointer-events-none absolute inset-0 bg-pattern opacity-[0.1]" />

      <Reveal className="relative">
        <SectionTitle overline="RSVP" title="Ucapan & Doa" />
        <p className="mx-auto mt-6 max-w-md text-center text-[0.82rem] leading-loose text-balance text-muted/85">
          Sampaikan ucapan dan konfirmasi kehadiran Anda. Doa restu Anda sangat berarti
          bagi kami.
        </p>
      </Reveal>

      <Reveal delay={0.08} className="relative">
        <form
          onSubmit={onSubmit}
          className="relative mx-auto mt-12 max-w-lg overflow-hidden rounded-[1.75rem] border border-gold/25 bg-white/92 p-7 shadow-[0_26px_70px_-30px_rgba(10,49,37,.45)] backdrop-blur-sm sm:p-9"
        >
          <span className="pointer-events-none absolute inset-x-12 top-0 h-px hairline-gold" />
          {/* honeypot anti-bot */}
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            className="absolute -left-[9999px] h-0 w-0 opacity-0"
            aria-hidden
          />

          <label className={labelClass}>Nama</label>
          <input
            required
            maxLength={60}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama Anda"
            className={inputClass}
          />

          <label className={`mt-6 ${labelClass}`}>Konfirmasi Kehadiran</label>
          <div className="grid grid-cols-3 gap-2">
            {OPTIONS.map((o) => (
              <button
                key={o.value}
                type="button"
                onClick={() => setAttendance(o.value)}
                className={`rounded-xl border px-2 py-2.5 text-xs font-semibold transition duration-300 active:scale-95 ${
                  attendance === o.value
                    ? 'border-gold bg-linear-to-r from-gold-deep via-gold-light to-gold-deep text-emerald-night shadow-[0_6px_22px_-6px_rgba(200,167,92,.7)]'
                    : 'border-gold/25 bg-white/70 text-muted hover:border-gold/55'
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>

          <AnimatePresence>
            {attendance === 'hadir' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <label className={`mt-6 ${labelClass}`}>Jumlah Tamu</label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setGuestCount((c) => Math.max(1, c - 1))}
                    className="h-10 w-10 rounded-xl border border-gold/25 text-lg text-muted transition duration-300 hover:border-gold hover:text-gold-deep active:scale-95"
                    aria-label="Kurangi"
                  >
                    −
                  </button>
                  <span className="w-10 text-center font-display text-2xl text-ink tabular-nums">
                    {guestCount}
                  </span>
                  <button
                    type="button"
                    onClick={() => setGuestCount((c) => Math.min(10, c + 1))}
                    className="h-10 w-10 rounded-xl border border-gold/25 text-lg text-muted transition duration-300 hover:border-gold hover:text-gold-deep active:scale-95"
                    aria-label="Tambah"
                  >
                    +
                  </button>
                  <span className="text-xs text-muted">orang</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <label className={`mt-6 ${labelClass}`}>Ucapan &amp; Doa</label>
          <textarea
            required
            rows={4}
            maxLength={500}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tuliskan ucapan dan doa terbaik Anda…"
            className={`${inputClass} resize-none`}
          />
          <p className="mt-1 text-right text-[0.65rem] text-muted">{message.length}/500</p>

          {error && <p className="mt-3 text-center text-xs text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="relative mt-6 w-full overflow-hidden rounded-[0.9rem] bg-linear-to-r from-gold-deep via-gold-light to-gold-deep py-3.5 text-[0.78rem] font-semibold tracking-[0.14em] text-emerald-night uppercase shadow-[0_12px_36px_-10px_rgba(200,167,92,.75)] transition duration-300 hover:brightness-[1.06] active:scale-[0.98] disabled:opacity-50"
          >
            <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 animate-sheen bg-white/30 blur-md" />
            <span className="relative">
              {submitting ? 'Mengirim…' : sent ? 'Terkirim — Jazakallahu khairan' : 'Kirim Ucapan'}
            </span>
          </button>

          {!isSupabaseReady && (
            <p className="mt-3 text-center text-[0.65rem] leading-relaxed text-muted">
              Mode lokal aktif — ucapan hanya tersimpan di perangkat ini. Hubungkan
              Supabase agar tersimpan permanen.
            </p>
          )}
        </form>
      </Reveal>

      <div className="relative mx-auto mt-12 max-w-lg">
        {loading ? (
          <p className="text-center text-sm text-muted">Memuat ucapan…</p>
        ) : wishes.length === 0 ? (
          <p className="text-center text-sm text-muted italic">
            Belum ada ucapan. Jadilah yang pertama.
          </p>
        ) : (
          <>
            <p className="mb-6 text-center text-[0.68rem] font-semibold tracking-[0.28em] text-gold-deep uppercase">
              {wishes.length} Ucapan
            </p>

            <div className="space-y-3.5">
              <AnimatePresence initial={false}>
                {wishes.slice(0, visible).map((w) => (
                  <motion.article
                    key={w.id}
                    layout
                    initial={{ opacity: 0, y: 20, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                    className="rounded-[1.25rem] border border-gold/20 bg-white/92 px-6 py-5 shadow-[0_14px_44px_-24px_rgba(10,49,37,.4)] backdrop-blur-sm transition duration-500 hover:border-gold/45 hover:shadow-[0_20px_54px_-24px_rgba(157,122,51,.45)]"
                  >
                    <div className="flex items-start gap-3.5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-gold-deep via-gold-light to-gold-deep font-display text-base font-medium text-emerald-night shadow-[0_5px_16px_-4px_rgba(200,167,92,.7)]">
                        {(w.name.trim()[0] ?? '?').toUpperCase()}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h4 className="font-display text-xl font-normal text-ink">{w.name}</h4>
                          {w.attendance && (
                            <span
                              className={`rounded-full px-2.5 py-0.5 text-[0.65rem] font-medium ${BADGE[w.attendance]}`}
                            >
                              {BADGE_LABEL[w.attendance]}
                            </span>
                          )}
                        </div>
                        <p className="mt-2 text-sm leading-relaxed break-words whitespace-pre-line text-muted">
                          {w.message}
                        </p>
                        <p className="mt-2.5 text-[0.65rem] text-muted/70">
                          {relativeTime(w.created_at)}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>

            {visible < wishes.length && (
              <button
                onClick={() => setVisible((v) => v + 5)}
                className="mx-auto mt-7 block rounded-full border border-gold/30 px-7 py-2.5 text-[0.7rem] font-medium tracking-[0.16em] text-muted uppercase transition duration-300 hover:border-gold hover:text-gold-deep"
              >
                Lihat ucapan lainnya
              </button>
            )}
          </>
        )}
      </div>
    </Section>
  )
}
