import { useState } from 'react'
import type { CSSProperties } from 'react'
import { gift } from '../../config/wedding'
import { asset } from '../../lib/utils'
import { Aurora, EnvelopeIllustration, Sparkles } from '../illustrations'
import { Reveal, Section, SectionTitle } from '../ui'

export function Gift() {
  const [broken, setBroken] = useState(false)
  const qrSrc = asset(gift.qrisImage)

  return (
    <Section id="gift" className="bg-emerald-night">
      <Aurora />
      <div className="pointer-events-none absolute inset-0 bg-pattern-gold opacity-[0.09]" />
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
        <div className="mx-auto mt-14 max-w-xs">
          <div
            className="card-conic relative rounded-[1.75rem] p-8 text-center shadow-[0_0_90px_-26px_rgba(200,167,92,.6)]"
            style={{ '--card-bg': 'rgba(8,42,31,.85)' } as CSSProperties}
          >
            <span className="pointer-events-none absolute inset-x-10 top-0 h-px hairline-gold" />

            <EnvelopeIllustration className="mx-auto h-12 w-auto animate-float text-gold-bright" />

            <p className="mt-5 text-[0.72rem] font-semibold tracking-[0.25em] text-gold-light/85 uppercase">
              {gift.qrisLabel}
            </p>

            <div className="mt-5 rounded-[1.25rem] border border-gold/40 bg-white p-3.5 shadow-[inset_0_0_34px_rgba(200,167,92,.18)]">
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

            <p className="mt-5 text-[0.7rem] leading-loose text-gold-light/60">
              Pindai menggunakan aplikasi bank atau e-wallet apa pun yang mendukung QRIS.
            </p>

            {!broken && (
              <a
                href={qrSrc}
                download
                className="animate-glow relative mt-6 inline-flex items-center gap-2 overflow-hidden rounded-full bg-linear-to-r from-gold-deep via-gold-light to-gold-deep px-6 py-3 text-[0.75rem] font-semibold tracking-[0.1em] text-emerald-night uppercase transition duration-300 hover:scale-105 active:scale-95"
              >
                <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 animate-sheen bg-white/35 blur-md" />
                <svg viewBox="0 0 24 24" className="relative h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 3v12M7 11l5 5 5-5M4 21h16" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="relative">Unduh QRIS</span>
              </a>
            )}
          </div>

          <p className="mt-7 text-center font-display text-base text-gold-light/60 italic">
            Jazakumullahu khairan katsiran atas doa dan tanda kasih Anda.
          </p>
        </div>
      </Reveal>
    </Section>
  )
}
