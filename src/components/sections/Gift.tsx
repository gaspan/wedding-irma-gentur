import { useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { couple, gift } from '../../config/wedding'
import { asset } from '../../lib/utils'
import { Aurora, EnvelopeIllustration, Sparkles } from '../illustrations'
import { Reveal, Section, SectionTitle } from '../ui'

const EASE = [0.22, 1, 0.36, 1] as const

function BankCard({ bank, number, holder }: { bank: string; number: string; holder: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(number)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      /* clipboard tidak tersedia — abaikan */
    }
  }

  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-gold/40 bg-emerald-void/80 p-7 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-gold hover:shadow-[0_30px_70px_-20px_rgba(200,167,92,0.5)]">
      <span className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="flex items-center justify-between">
        <span className="font-display text-2xl font-bold tracking-wide text-gold-gradient text-glow">
          {bank}
        </span>
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-gold-light/70" fill="none" stroke="currentColor" strokeWidth="1.4">
          <path d="M3 9.5L12 4l9 5.5M5 9.5V19h14V9.5M9.5 19v-6h5v6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <p className="mt-6 font-display text-[1.55rem] leading-snug tracking-[0.06em] text-gold-light tabular-nums break-all drop-shadow-sm">
        {number}
      </p>
      <p className="mt-2.5 text-[0.68rem] font-bold tracking-[0.25em] text-gold-light/60 uppercase">
        {holder}
      </p>
      <button
        type="button"
        onClick={copy}
        className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border py-3 text-[0.72rem] font-bold tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer ${
          copied
            ? 'border-gold bg-gradient-to-r from-gold-deep via-gold-bright to-gold-deep text-emerald-night shadow-[0_0_24px_rgba(200,167,92,0.6)]'
            : 'border-gold/40 bg-gold/[0.08] text-gold-light hover:border-gold hover:bg-gold hover:text-emerald-night'
        }`}
      >
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.7">
          <rect x="9" y="9" width="12" height="12" rx="2" />
          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" strokeLinecap="round" />
        </svg>
        {copied ? 'Nomor Tersalin' : 'Salin Nomor Rekening'}
      </button>
    </div>
  )
}

export function Gift() {
  const [broken, setBroken] = useState(false)
  const qrSrc = asset(gift.qrisImage)
  const initials = `${couple.bride.nickname[0]}${couple.groom.nickname[0]}`.toUpperCase()

  // Amplop terbuka otomatis saat section masuk layar
  const envRef = useRef<HTMLDivElement>(null)
  const open = useInView(envRef, { once: true, amount: 0.35 })

  return (
    <Section id="gift" className="relative bg-emerald-night text-ink">
      <Aurora />
      <div className="pointer-events-none absolute inset-0 bg-damask opacity-[0.05]" />
      <div className="pointer-events-none absolute inset-0 bg-pattern-gold opacity-[0.05]" />
      <Sparkles className="text-gold-bright" />
      <div className="pointer-events-none absolute inset-0 vignette" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[50vh] w-full -translate-x-1/2 -translate-y-1/2 bg-radial-gold blur-[120px] opacity-60" />

      <Reveal className="relative">
        <SectionTitle overline="Tanda Kasih" title="Wedding Gift" />
      </Reveal>

      <Reveal delay={0.08} className="relative">
        <p className="mx-auto mt-7 max-w-md text-center text-[0.85rem] leading-loose text-balance text-gold-light/70">
          {gift.note}
        </p>
      </Reveal>

      <Reveal delay={0.16} className="relative">
        <div className="mx-auto mt-14 max-w-sm">
          <div
            ref={envRef}
            className="card-conic relative rounded-[2.5rem] p-5 text-center shadow-[0_0_100px_-20px_rgba(200,167,92,.4)] sm:p-7"
            style={{ '--card-bg': 'rgba(3,10,7,.95)', perspective: 1400 } as CSSProperties}
          >
            <span className="pointer-events-none absolute inset-x-10 top-0 h-px hairline-gold opacity-90" />

            {/* Surat: QRIS — meluncur keluar saat amplop terbuka */}
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  key="letter"
                  initial={{ y: 80, opacity: 0, scale: 0.94 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  exit={{ y: 80, opacity: 0, scale: 0.94 }}
                  transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.55 }}
                  className="relative z-10 pb-6"
                >
                  <div className="relative overflow-hidden rounded-[1.4rem] border border-gold/45 bg-white p-4 shadow-[0_20px_60px_-20px_rgba(0,0,0,.6),inset_0_0_40px_rgba(200,167,92,.2)]">
                    <span className="absolute inset-x-8 top-0 h-[3px] bg-linear-to-r from-gold-deep via-gold-bright to-gold-deep" />
                    {broken ? (
                      <div className="flex aspect-square w-full flex-col items-center justify-center gap-2 text-center">
                        <svg viewBox="0 0 24 24" className="h-10 w-10 text-gold/60" fill="none" stroke="currentColor" strokeWidth="1.4">
                          <rect x="3" y="3" width="7" height="7" rx="1" />
                          <rect x="14" y="3" width="7" height="7" rx="1" />
                          <rect x="3" y="14" width="7" height="7" rx="1" />
                          <path d="M14 14h3v3h-3zM19 19h2v2h-2z" />
                        </svg>
                        <p className="px-2 text-xs leading-relaxed text-gold-deep">
                          Gambar QRIS belum tersedia.
                          <br />
                          Letakkan file di
                          <br />
                          <code className="text-[0.68rem] bg-gold/10 px-1 py-0.5 rounded">public/{gift.qrisImage}</code>
                        </p>
                      </div>
                    ) : (
                      <img
                        src={qrSrc}
                        alt={gift.qrisLabel}
                        loading="lazy"
                        onError={() => setBroken(true)}
                        className="aspect-square w-full rounded-xl object-contain shadow-inner"
                      />
                    )}
                  </div>

                  <p className="mt-4 text-[0.72rem] leading-loose text-gold-light/70">
                    Pindai menggunakan aplikasi m-Banking atau e-Wallet apa pun yang mendukung QRIS.
                  </p>

                  <div className="mt-5 flex items-center justify-center gap-3">
                    {!broken && (
                      <motion.a
                        href={qrSrc}
                        download
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.92 }}
                        className="animate-glow relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-linear-to-r from-gold-deep via-gold-light to-gold-deep px-6 py-3 text-[0.76rem] font-bold tracking-[0.1em] text-emerald-night uppercase shadow-[0_0_24px_rgba(200,167,92,0.4)] transition-shadow duration-300 hover:shadow-[0_0_36px_rgba(200,167,92,0.8)] cursor-pointer"
                      >
                        <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 animate-sheen bg-white/40 blur-md" />
                        <svg viewBox="0 0 24 24" className="relative h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7">
                          <path d="M12 3v12M7 11l5 5 5-5M4 21h16" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="relative">Unduh QRIS</span>
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Badan Amplop */}
            <div className="relative block w-full text-center">
              <span className="relative z-10 block overflow-hidden rounded-[1.3rem] border border-gold/40 bg-linear-to-b from-emerald-mid via-emerald-deep to-emerald-void px-6 pt-14 pb-7 shadow-2xl">
                <span className="pointer-events-none absolute inset-0 bg-pattern-gold opacity-[0.12]" />
                {/* Lipatan Saku Amplop Kerajaan */}
                <svg viewBox="0 0 300 160" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full text-gold/50">
                  <path d="M0 0L150 88L300 0" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M150 88V160" fill="none" stroke="currentColor" strokeWidth="1.4" opacity="0.6" />
                  <path d="M0 0l150 88M300 0l-150 88" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
                </svg>

                <EnvelopeIllustration className="relative mx-auto h-11 w-auto text-gold-bright drop-shadow-[0_0_12px_rgba(246,229,184,0.5)]" />
                <span className="relative mt-3.5 block text-[0.72rem] font-bold tracking-[0.32em] text-gold-light/90 uppercase">
                  {gift.qrisLabel}
                </span>
              </span>

              {/* Penutup Amplop Kerajaan (Wax Seal Flap) */}
              <motion.span
                aria-hidden
                animate={{ rotateX: open ? -180 : 0 }}
                transition={{ duration: 1.5, ease: EASE }}
                style={{ transformOrigin: 'top', backfaceVisibility: 'hidden', perspective: 1000 }}
                className="absolute inset-x-0 top-0 z-20 block h-[64%]"
              >
                <span
                  className="block h-full w-full shadow-lg"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                    background: 'linear-gradient(180deg, #7d5f24, #c8a75c 55%, #f6e5b8)',
                  }}
                />
                {/* Segel Lilin Monogram */}
                <span className="absolute top-[70%] left-1/2 flex h-13 w-13 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-gold-light/80 bg-linear-to-br from-gold-deep via-gold to-gold-bright text-emerald-night shadow-[0_6px_20px_rgba(0,0,0,0.7)]">
                  {!open && (
                    <span className="pointer-events-none absolute -inset-2 animate-glow-soft rounded-full border border-gold/50" />
                  )}
                  <span className="font-display text-base font-semibold italic tracking-[0.15em] drop-shadow">
                    {initials}
                  </span>
                </span>
              </motion.span>
            </div>
          </div>

          <p className="mt-8 text-center font-display text-lg text-gold-light/70 italic">
            Jazakumullahu khairan katsiran atas doa dan tanda kasih Anda.
          </p>
        </div>
      </Reveal>

      {gift.banks.length > 0 && (
        <Reveal delay={0.2} className="relative">
          <div className="mx-auto mt-14 grid max-w-2xl gap-6 sm:grid-cols-2">
            {gift.banks.map((b) => (
              <BankCard key={b.bank + b.number} bank={b.bank} number={b.number} holder={b.holder} />
            ))}
          </div>
        </Reveal>
      )}
    </Section>
  )
}

