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
    <Section id="gift" className="bg-emerald-deep">
      <Aurora />
      <div className="pointer-events-none absolute inset-0 bg-pattern-gold opacity-10" />
      <Sparkles className="text-gold-bright" />

      <Reveal className="relative">
        <SectionTitle overline="Tanda Kasih" title="Wedding Gift" dark />
      </Reveal>

      <Reveal delay={0.08} className="relative">
        <p className="mx-auto mt-6 max-w-md text-center text-sm leading-relaxed text-balance text-gold-light/85">
          {gift.note}
        </p>
      </Reveal>

      <Reveal delay={0.16} className="relative">
        <div className="mx-auto mt-12 max-w-xs">
          <div
            className="card-conic relative rounded-3xl p-7 text-center shadow-[0_0_80px_-24px_rgba(201,169,97,.7)]"
            style={{ '--card-bg': 'rgba(13,58,42,.72)' } as CSSProperties}
          >
            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-linear-to-r from-transparent via-gold to-transparent" />

            <EnvelopeIllustration className="mx-auto h-12 w-auto animate-float text-gold-bright" />

            <p className="mt-4 text-sm font-semibold tracking-wide text-gold-light">
              {gift.qrisLabel}
            </p>

            <div className="mt-5 rounded-2xl border border-gold/40 bg-white p-3 shadow-[inset_0_0_30px_rgba(201,169,97,.15)]">
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

            <p className="mt-4 text-xs leading-relaxed text-gold-light/70">
              Pindai menggunakan aplikasi bank atau e-wallet apa pun yang mendukung QRIS.
            </p>

            {!broken && (
              <a
                href={qrSrc}
                download
                className="animate-glow mt-5 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-gold-deep via-gold to-gold-bright px-6 py-3 text-sm font-semibold text-emerald-night transition hover:scale-105 active:scale-95"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 3v12M7 11l5 5 5-5M4 21h16" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Unduh QRIS
              </a>
            )}
          </div>

          <p className="mt-6 text-center text-xs text-gold-light/60 italic">
            Jazakumullahu khairan katsiran atas doa dan tanda kasih Anda.
          </p>
        </div>
      </Reveal>
    </Section>
  )
}
