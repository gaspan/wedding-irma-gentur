import { useState } from 'react'
import { gift } from '../../config/wedding'
import { asset } from '../../lib/utils'
import { copyText } from '../../lib/utils'
import { EnvelopeIllustration } from '../illustrations'
import { Grain, Toast } from '../ui/Effects'
import { Reveal, Section, SectionTitle } from '../ui'

function BankCard({
  bank,
  number,
  holder,
  onCopied,
}: {
  bank: string
  number: string
  holder: string
  onCopied: (msg: string) => void
}) {
  return (
    <div className="glass rounded-[1.8rem] p-6 text-left">
      <div className="flex items-center justify-between">
        <span className="font-display text-2xl font-medium text-ink">{bank}</span>
        <EnvelopeIllustration className="h-7 w-auto text-gold-deep/60" />
      </div>
      <p className="mt-3 font-body text-lg font-bold tracking-[0.08em] text-ink tabular-nums break-all">
        {number}
      </p>
      <p className="mt-1 font-body text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-muted">
        {holder}
      </p>
      <button
        onClick={async () => {
          const ok = await copyText(number)
          onCopied(ok ? 'Nomor rekening tersalin' : 'Gagal menyalin')
        }}
        className="btn-fluid mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-ink/15 bg-white/80 py-3 font-body text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ink hover:bg-ink hover:text-ivory active:scale-[0.98]"
      >
        Salin Nomor
      </button>
    </div>
  )
}

export function Gift() {
  const [toast, setToast] = useState<string | null>(null)
  const [broken, setBroken] = useState(false)
  const qrSrc = asset(gift.qrisImage)

  const notify = (msg: string) => {
    setToast(msg)
    window.clearTimeout((notify as unknown as { t?: number }).t)
    ;(notify as unknown as { t?: number }).t = window.setTimeout(() => setToast(null), 2200)
  }

  return (
    <Section id="gift" className="bg-cream-deep/50">
      <Grain opacity={0.04} />
      <Reveal>
        <SectionTitle overline="Tanda Kasih" title="Wedding Gift" desc={gift.note} />
      </Reveal>

      <Reveal delay={0.08}>
        <div className="glass mx-auto mt-10 max-w-sm rounded-[2rem] p-5 text-center">
          <div className="overflow-hidden rounded-[1.5rem] bg-white p-4">
            {broken ? (
              <p className="px-4 py-10 font-body text-[0.82rem] text-muted">
                QRIS belum tersedia. Letakkan file di <code>public/{gift.qrisImage}</code>
              </p>
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
          <p className="mt-4 font-body text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-gold-deep">
            {gift.qrisLabel}
          </p>
          <p className="mt-1 font-body text-[0.8rem] font-light text-muted">
            Pindai dengan m-Banking / e-Wallet apa pun
          </p>
        </div>
      </Reveal>

      {gift.banks.length > 0 && (
        <div className="mx-auto mt-6 grid max-w-2xl gap-4 sm:grid-cols-2">
          {gift.banks.map((b, i) => (
            <Reveal key={b.bank + b.number} delay={i * 0.08}>
              <BankCard bank={b.bank} number={b.number} holder={b.holder} onCopied={notify} />
            </Reveal>
          ))}
        </div>
      )}

      <Toast message={toast} />
    </Section>
  )
}
