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
  hadir: 'bg-emerald/15 text-emerald-deep font-semibold border border-emerald/30',
  tidak_hadir: 'bg-muted/15 text-muted font-medium border border-muted/20',
  ragu: 'bg-gold/20 text-gold-deep font-semibold border border-gold/40',
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
  const [visible, setVisible] = useState(6)
  const [likes, setLikes] = useState<Record<string, boolean>>({})

  const toggleLike = (id: string) => {
    setLikes((prev) => ({ ...prev, [id]: !prev[id] }))
  }

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
      setTimeout(() => setSent(false), 4500)
    }
  }

  const inputClass =
    'w-full rounded-[1rem] border border-gold/30 bg-white/95 px-4.5 py-3.5 text-sm text-ink outline-none transition duration-300 placeholder:text-muted/45 focus:border-gold focus:ring-2 focus:ring-gold/30 shadow-inner'

  const labelClass =
    'mb-2 block text-[0.68rem] font-bold tracking-[0.22em] text-gold-deep uppercase'

  return (
    <Section id="rsvp" className="relative bg-emerald-void text-ink">
      <div className="pointer-events-none absolute inset-0 bg-pattern-gold opacity-[0.05]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[40vh] w-[40vh] rounded-full bg-gold/5 blur-[100px]" />

      <Reveal className="relative">
        <SectionTitle overline="RSVP & Doa Restu" title="Ucapan Bahagia" />
        <p className="mx-auto mt-6 max-w-md text-center text-[0.85rem] leading-loose text-balance text-gold-light/70">
          Sampaikan ucapan dan konfirmasi kehadiran Anda. Doa restu Anda merupakan karunia yang sangat berarti bagi kami.
        </p>
      </Reveal>

      <Reveal delay={0.08} className="relative">
        <form
          onSubmit={onSubmit}
          className="relative mx-auto mt-14 max-w-lg overflow-hidden rounded-[2.5rem] border border-gold/40 bg-emerald-night/80 p-8 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl sm:p-10"
        >
          <span className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          {/* Honeypot anti-bot */}
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            className="absolute -left-[9999px] h-0 w-0 opacity-0"
            aria-hidden
          />

          <label className={labelClass}>Nama Lengkap</label>
          <input
            required
            maxLength={60}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tuliskan nama Anda"
            className={`${inputClass} bg-emerald-void border-gold/30 text-gold-light placeholder:text-gold-light/30 focus:border-gold`}
          />

          <label className={`mt-6 ${labelClass}`}>Konfirmasi Kehadiran</label>
          <div className="grid grid-cols-3 gap-2.5">
            {OPTIONS.map((o) => (
              <motion.button
                key={o.value}
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setAttendance(o.value)}
                className={`rounded-xl border px-2 py-3 text-xs font-bold transition-colors duration-300 cursor-pointer ${
                  attendance === o.value
                    ? 'border-gold bg-gradient-to-r from-gold-deep via-gold-bright to-gold-deep text-emerald-night shadow-[0_0_20px_rgba(200,167,92,0.5)]'
                    : 'border-gold/30 bg-emerald-void/50 text-gold-light/60 hover:border-gold/60'
                }`}
              >
                {o.label}
              </motion.button>
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
                <label className={`mt-6 ${labelClass}`}>Jumlah Tamu Hadir</label>
                <div className="flex items-center gap-3.5">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.85 }}
                    onClick={() => setGuestCount((c) => Math.max(1, c - 1))}
                    className="h-11 w-11 rounded-xl border border-gold/40 bg-emerald-void text-xl font-bold text-gold-light transition-colors duration-300 hover:border-gold hover:text-gold-bright cursor-pointer"
                    aria-label="Kurangi"
                  >
                    −
                  </motion.button>
                  <span className="w-10 text-center font-display text-3xl font-light text-gold-light tabular-nums">
                    {guestCount}
                  </span>
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.85 }}
                    onClick={() => setGuestCount((c) => Math.min(10, c + 1))}
                    className="h-11 w-11 rounded-xl border border-gold/40 bg-emerald-void text-xl font-bold text-gold-light transition-colors duration-300 hover:border-gold hover:text-gold-bright cursor-pointer"
                    aria-label="Tambah"
                  >
                    +
                  </motion.button>
                  <span className="text-xs font-medium text-gold-light/60">Orang</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <label className={`mt-6 ${labelClass}`}>Ucapan &amp; Doa Restu</label>
          <textarea
            required
            rows={4}
            maxLength={500}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tuliskan ucapan serta doa restu Anda untuk kedua mempelai…"
            className={`${inputClass} resize-none bg-emerald-void border-gold/30 text-gold-light placeholder:text-gold-light/30 focus:border-gold`}
          />
          <p className="mt-1 text-right text-[0.68rem] text-gold-light/50">{message.length}/500</p>

          {error && <p className="mt-3 text-center text-xs font-medium text-red-400">{error}</p>}

          <motion.button
            type="submit"
            disabled={submitting}
            whileHover={!submitting ? { scale: 1.05 } : {}}
            whileTap={!submitting ? { scale: 0.95 } : {}}
            className="group animate-glow relative mt-7 w-full overflow-hidden rounded-[1rem] bg-gradient-to-r from-gold-deep via-gold-bright to-gold-deep py-4 text-[0.85rem] font-bold tracking-[0.2em] text-emerald-night uppercase shadow-[0_0_40px_rgba(200,167,92,0.6)] transition-shadow duration-500 hover:brightness-[1.1] hover:shadow-[0_0_70px_rgba(200,167,92,0.9)] disabled:opacity-50 cursor-pointer"
          >
            <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 animate-sheen bg-white/50 blur-md" />
            <span className="relative">
              {submitting ? 'Mengirim…' : sent ? 'Terkirim — Jazakumullahu Khairan' : 'Kirim Ucapan & Restu'}
            </span>
          </motion.button>

          {!isSupabaseReady && (
            <p className="mt-4 text-center text-[0.68rem] leading-relaxed text-gold-light/40">
              Mode lokal aktif — ucapan tersimpan di browser ini. Hubungkan Supabase untuk simpan permanen.
            </p>
          )}
        </form>
      </Reveal>

      <div className="relative mx-auto mt-16 max-w-lg">
        {loading ? (
          <p className="text-center text-sm text-gold-light/60">Memuat ucapan…</p>
        ) : wishes.length === 0 ? (
          <p className="text-center text-sm text-gold-light/60 italic">
            Belum ada ucapan. Jadilah yang pertama memberikan doa restu.
          </p>
        ) : (
          <>
            <p className="mb-8 text-center text-[0.75rem] font-bold tracking-[0.3em] text-gold-light uppercase">
              {wishes.length} Ucapan &amp; Doa Restu
            </p>

            <div className="space-y-6">
              <AnimatePresence initial={false}>
                {wishes.slice(0, visible).map((w) => {
                  const isLiked = likes[w.id]
                  return (
                    <motion.article
                      key={w.id}
                      layout
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                      className="rounded-[2rem] border border-gold/30 bg-emerald-night/60 px-7 py-6 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl transition duration-500 hover:border-gold hover:shadow-[0_20px_60px_-20px_rgba(200,167,92,0.4)]"
                    >
                      <div className="flex items-start gap-5">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-deep via-gold-bright to-gold-deep font-display text-xl font-bold text-emerald-night shadow-[0_0_20px_rgba(200,167,92,0.6)]">
                          {(w.name.trim()[0] ?? '?').toUpperCase()}
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h4 className="font-display text-2xl font-normal text-gold-light">{w.name}</h4>
                            {w.attendance && (
                              <span
                                className={`rounded-full px-3 py-0.5 text-[0.65rem] ${BADGE[w.attendance]}`}
                              >
                                {BADGE_LABEL[w.attendance]}
                              </span>
                            )}
                          </div>
                          <p className="mt-3 text-[0.88rem] leading-relaxed break-words whitespace-pre-line text-gold-light/80">
                            {w.message}
                          </p>
                          <div className="mt-3 flex items-center justify-between">
                            <span className="text-[0.68rem] text-muted/70">
                              {relativeTime(w.created_at)}
                            </span>
                            <motion.button
                              onClick={() => toggleLike(w.id)}
                              whileHover={{ scale: 1.2 }}
                              whileTap={{ scale: 0.8 }}
                              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                              className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs transition-colors duration-300 cursor-pointer ${
                                isLiked ? 'text-red-500 bg-red-50' : 'text-muted/60 hover:text-red-400'
                              }`}
                            >
                              <svg viewBox="0 0 24 24" className="h-4 w-4" fill={isLiked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.6">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                              </svg>
                              <span>{isLiked ? 1 : 0}</span>
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  )
                })}
              </AnimatePresence>
            </div>

            {visible < wishes.length && (
              <motion.button
                onClick={() => setVisible((v) => v + 5)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mx-auto mt-8 block rounded-full border border-gold/40 px-8 py-3 text-[0.72rem] font-bold tracking-[0.18em] text-muted uppercase transition-colors duration-300 hover:border-gold hover:text-gold-deep cursor-pointer"
              >
                Lihat Ucapan Lainnya
              </motion.button>
            )}
          </>
        )}
      </div>
    </Section>
  )
}

