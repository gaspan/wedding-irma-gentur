import { useState } from 'react'
import type { CSSProperties } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { couple, gift } from '../../config/wedding'
import { asset } from '../../lib/utils'
import { Aurora, EnvelopeIllustration, Sparkles } from '../illustrations'
import { Reveal, Section, SectionTitle } from '../ui'

const EASE = [0.22, 1, 0.36, 1] as const

export function Gift() {
  const [broken, setBroken] = useState(false)
  const [open, setOpen] = useState(false)
  const [pinned, setPinned] = useState(false)
  const qrSrc = asset(gift.qrisImage)
  const initials = `${couple.bride.nickname[0]}${couple.groom.nickname[0]}`.toUpperCase()

  const toggle = () => {
    setPinned(true)
    setOpen((o) => !o)
  }

  return (
    <Section id="gift" className="bg-emerald-night">
      <Aurora />
      <div className="pointer-events-none absolute inset-0 bg-damask opacity-[0.07]" />
      <div className="pointer-events-none absolute inset-0 bg-pattern-gold opacity-[0.07]" />
      <Sparkles className="text-gold-bright" />
      <div className="pointer-events-none absolute inset-0 vignette" />

      <Reveal className="relative">
        <SectionTitle overline="Tanda Kasih" title="Wedding Gift" dark />
      </Reveal>

      <Reveal delay={0.08} className="relative">
        <p className="mx-auto mt-7 max-w-md text-center text-[0.82rem] leading-loose text-balance text-gold-light/75">
          {gift.note}
        </p>
      </Reveal>

      <Reveal delay={0.16} className="relative">
        <div className="mx-auto mt-14 max-w-sm">
          <div
            className="card-conic relative rounded-[1.75rem] p-5 text-center shadow-[0_0_90px_-26px_rgba(200,167,92,.6)] sm:p-6"
            style={{ '--card-bg': 'rgba(8,42,31,.92)' } as CSSProperties}
          >
            <span className="pointer-events-none absolute inset-x-10 top-0 h-px hairline-gold" />

            {/* Surat: QRIS — muncul saat amplop dibuka */}
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  key="letter"
                  initial={{ y: 70, opacity: 0, scale: 0.96 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  exit={{ y: 70, opacity: 0, scale: 0.96 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 26 }}
                  className="relative z-10 pb-6"
                >
                  <div className="relative overflow-hidden rounded-[1.25rem] border border-gold/40 bg-white p-3.5 shadow-[0_18px_50px_-20px_rgba(0,0,0,.55),inset_0_0_34px_rgba(200,167,92,.18)]">
                    <span className="absolute inset-x-8 top-0 h-[3px] bg-linear-to-r from-gold-deep via-gold-light to-gold-deep" />
                    {broken ? (
                      <div className="flex aspect-square w-full flex-col items-center justify-center gap-2 text-center">
                        <svg viewBox="0 0 24 24" className="h-9 w-9 text-gold/60" fill="none" stroke="currentColor" strokeWidth="1.4">
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
                          <code className="text-[0.65rem]">public/{gift.qrisImage}</code>
                        </p>
                      </div>
                    ) : (
                      <img
                        src={qrSrc}
                        alt={gift.qrisLabel}
                        loading="lazy"
                        onError={() => setBroken(true)}
                        className="aspect-square w-full rounded-xl object-contain"
                      />
                    )}
                  </div>

                  <p className="mt-4 text-[0.7rem] leading-loose text-gold-light/60">
                    Pindai menggunakan aplikasi bank atau e-wallet apa pun yang mendukung QRIS.
                  </p>

                  {!broken && (
                    <a
                      href={qrSrc}
                      download
                      className="animate-glow relative mt-5 inline-flex items-center gap-2 overflow-hidden rounded-full bg-linear-to-r from-gold-deep via-gold-light to-gold-deep px-6 py-3 text-[0.75rem] font-semibold tracking-[0.1em] text-emerald-night uppercase transition duration-300 hover:scale-105 active:scale-95"
                    >
                      <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 animate-sheen bg-white/35 blur-md" />
                      <svg viewBox="0 0 24 24" className="relative h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <path d="M12 3v12M7 11l5 5 5-5M4 21h16" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="relative">Unduh QRIS</span>
                    </a>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Amplop */}
            <button
              type="button"
              onClick={toggle}
              onMouseEnter={() => {
                if (!pinned) setOpen(true)
              }}
              onMouseLeave={() => {
                if (!pinned) setOpen(false)
              }}
              aria-expanded={open}
              aria-label={open ? 'Tutup amplop wedding gift' : 'Buka amplop wedding gift'}
              className="group relative block w-full text-center outline-none"
              style={{ perspective: 1400 }}
            >
              {/* badan amplop */}
              <span className="relative z-10 block overflow-hidden rounded-[1.2rem] border border-gold/35 bg-linear-to-b from-emerald-mid via-emerald-deep to-emerald-void px-6 pt-14 pb-6">
                <span className="pointer-events-none absolute inset-0 bg-pattern-gold opacity-[0.1]" />
                {/* lipatan saku */}
                <svg viewBox="0 0 300 160" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full text-gold/45">
                  <path d="M0 0L150 88L300 0" fill="none" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M150 88V160" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
                  <path d="M0 0l150 88M300 0l-150 88" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
                </svg>

                <EnvelopeIllustration className="relative mx-auto h-10 w-auto text-gold-bright transition-transform duration-500 group-hover:-translate-y-0.5" />
                <span className="relative mt-3 block text-[0.7rem] font-semibold tracking-[0.3em] text-gold-light/85 uppercase">
                  {open ? 'Amplop Terbuka' : gift.qrisLabel}
                </span>
                <span className="relative mt-1.5 block text-[0.62rem] tracking-[0.18em] text-gold-light/55 uppercase">
                  {open ? 'Klik untuk menutup' : 'Klik untuk membuka'}
                </span>
              </span>

              {/* penutup amplop */}
              <motion.span
                aria-hidden
                animate={{ rotateX: open ? -180 : 0 }}
                transition={{ duration: 0.7, ease: EASE }}
                style={{ transformOrigin: 'top', backfaceVisibility: 'hidden', perspective: 1000 }}
                className="absolute inset-x-0 top-0 z-20 block h-[62%]"
              >
                <span
                  className="block h-full w-full"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                    background: 'linear-gradient(180deg, #7d5f24, #c8a75c 55%, #e3cd96)',
                  }}
                />
                {/* segel */}
                <span className="absolute top-[70%] left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold-light/70 bg-linear-to-br from-gold-deep via-gold to-gold-light text-emerald-night shadow-[0_4px_16px_-4px_rgba(0,0,0,.6)]">
                  <span className="font-display text-sm font-medium italic tracking-[0.15em]">
                    {initials}
                  </span>
                </span>
              </motion.span>
            </button>
          </div>

          <p className="mt-7 text-center font-display text-base text-gold-light/60 italic">
            Jazakumullahu khairan katsiran atas doa dan tanda kasih Anda.
          </p>
        </div>
      </Reveal>
    </Section>
  )
}
