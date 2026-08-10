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
    'w-full rounded-xl border border-gold/25 bg-white/85 px-4 py-3 text-sm text-ink outline-none transition placeholder:text-muted/50 focus:border-gold focus:ring-2 focus:ring-gold/30'

  return (
    <Section id="rsvp" className="bg-cream-deep">
      <div className="pointer-events-none absolute inset-0 bg-pattern opacity-[0.1]" />

      <Reveal className="relative">
        <SectionTitle overline="RSVP" title="Ucapan & Doa" />
        <p className="mx-auto mt-5 max-w-md text-center text-sm leading-relaxed text-balance text-muted">
          Sampaikan ucapan dan konfirmasi kehadiran Anda. Doa restu Anda sangat berarti
          bagi kami.
        </p>
      </Reveal>

      <Reveal delay={0.08} className="relative">
        <form
          onSubmit={onSubmit}
          className="mx-auto mt-10 max-w-lg rounded-3xl border border-gold/30 bg-white/85 p-6 shadow-[0_20px_60px_-26px_rgba(13,58,42,.4)] backdrop-blur-sm sm:p-8"
        >
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

          <label className="mb-1.5 block text-xs font-medium tracking-wide text-sage-deep">
            Nama
          </label>
          <input
            required
            maxLength={60}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama Anda"
            className={inputClass}
          />

          <label className="mt-5 mb-1.5 block text-xs font-medium tracking-wide text-sage-deep">
            Konfirmasi Kehadiran
          </label>
          <div className="grid grid-cols-3 gap-2">
            {OPTIONS.map((o) => (
              <button
                key={o.value}
                type="button"
                onClick={() => setAttendance(o.value)}
                className={`rounded-xl border px-2 py-2.5 text-xs font-semibold transition active:scale-95 ${
                  attendance === o.value
                    ? 'border-gold bg-linear-to-r from-gold-deep via-gold to-gold-bright text-emerald-night shadow-[0_6px_20px_-6px_rgba(201,169,97,.7)]'
                    : 'border-gold/25 bg-white/60 text-muted hover:border-gold/60'
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
                <label className="mt-5 mb-1.5 block text-xs font-medium tracking-wide text-sage-deep">
                  Jumlah Tamu
                </label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setGuestCount((c) => Math.max(1, c - 1))}
                    className="h-10 w-10 rounded-xl border border-sage/25 text-lg text-muted transition hover:border-gold hover:text-gold active:scale-95"
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
                    className="h-10 w-10 rounded-xl border border-sage/25 text-lg text-muted transition hover:border-gold hover:text-gold active:scale-95"
                    aria-label="Tambah"
                  >
                    +
                  </button>
                  <span className="text-xs text-muted">orang</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <label className="mt-5 mb-1.5 block text-xs font-medium tracking-wide text-sage-deep">
            Ucapan & Doa
          </label>
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
            className="mt-5 w-full rounded-xl bg-linear-to-r from-gold-deep via-gold to-gold-bright py-3.5 text-sm font-semibold text-emerald-night shadow-[0_10px_34px_-10px_rgba(201,169,97,.8)] transition hover:brightness-105 active:scale-[0.98] disabled:opacity-50"
          >
            {submitting ? 'Mengirim…' : sent ? 'Terkirim — Jazakallahu khairan' : 'Kirim Ucapan'}
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
            <p className="mb-5 text-center text-xs tracking-[0.2em] text-sage-deep uppercase">
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
                    className="rounded-2xl border border-gold/20 bg-white/85 px-5 py-4 shadow-[0_10px_36px_-20px_rgba(13,58,42,.35)] backdrop-blur-sm transition hover:border-gold/50 hover:shadow-[0_16px_44px_-20px_rgba(201,169,97,.5)]"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-display text-lg text-ink">{w.name}</h4>
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
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>

            {visible < wishes.length && (
              <button
                onClick={() => setVisible((v) => v + 5)}
                className="mx-auto mt-6 block rounded-full border border-sage/30 px-6 py-2 text-xs text-muted transition hover:border-gold hover:text-gold"
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
