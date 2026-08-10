import { useState } from 'react'
import { gift } from '../../config/wedding'
import { asset } from '../../lib/utils'
import { EnvelopeIllustration } from '../illustrations'
import { Reveal, Section, SectionTitle } from '../ui'

export function Gift() {
  const [broken, setBroken] = useState(false)
  const qrSrc = asset(gift.qrisImage)

  return (
    <Section id="gift">
      <Reveal>
        <SectionTitle overline="Tanda Kasih" title="Wedding Gift" />
      </Reveal>

      <Reveal delay={0.08}>
        <p className="mx-auto mt-6 max-w-md text-center text-sm leading-relaxed text-balance text-muted">
          {gift.note}
        </p>
      </Reveal>

      <Reveal delay={0.16}>
        <div className="mx-auto mt-12 max-w-xs">
          <div className="rounded-2xl border border-sage/20 bg-white/80 p-7 text-center shadow-sm backdrop-blur-sm">
            <EnvelopeIllustration className="mx-auto h-12 w-auto text-gold" />

            <p className="mt-4 text-sm font-medium tracking-wide text-ink">
              {gift.qrisLabel}
            </p>

            <div className="mt-5 rounded-xl border border-sage/15 bg-cream p-3">
              {broken ? (
                <div className="flex aspect-square w-full flex-col items-center justify-center gap-2 text-center">
                  <svg viewBox="0 0 24 24" className="h-9 w-9 text-sage/50" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                    <path d="M14 14h3v3h-3zM19 19h2v2h-2z" />
                  </svg>
                  <p className="px-2 text-xs leading-relaxed text-muted">
                    Gambar QRIS belum tersedia.
                    <br />
                    Letakkan file di
                    <br />
                    <code className="text-[0.65rem] text-sage-deep">
                      public/{gift.qrisImage}
                    </code>
                  </p>
                </div>
              ) : (
                <img
                  src={qrSrc}
                  alt={gift.qrisLabel}
                  loading="lazy"
                  onError={() => setBroken(true)}
                  className="aspect-square w-full rounded-lg object-contain"
                />
              )}
            </div>

            <p className="mt-4 text-xs leading-relaxed text-muted">
              Pindai menggunakan aplikasi bank atau e-wallet apa pun yang mendukung QRIS.
            </p>

            {!broken && (
              <a
                href={qrSrc}
                download
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold/50 px-5 py-2.5 text-sm font-medium text-ink transition hover:bg-gold hover:text-white active:scale-95"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 3v12M7 11l5 5 5-5M4 21h16" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Unduh QRIS
              </a>
            )}
          </div>

          <p className="mt-6 text-center text-xs text-muted italic">
            Jazakumullahu khairan katsiran atas doa dan tanda kasih Anda.
          </p>
        </div>
      </Reveal>
    </Section>
  )
}
