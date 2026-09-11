import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

const EASE = [0.22, 1, 0.36, 1] as const

export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

export function Section({
  id,
  children,
  className = '',
  containerClass = '',
}: {
  id?: string
  children: ReactNode
  className?: string
  containerClass?: string
}) {
  return (
    <section id={id} className={cn('relative overflow-hidden px-6 py-24 sm:px-8 sm:py-36', className)}>
      <div className={cn('mx-auto w-full max-w-2xl', containerClass)}>{children}</div>
    </section>
  )
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-center font-body text-[0.68rem] font-semibold uppercase tracking-[0.42em] text-gold-deep">
      {children}
    </p>
  )
}

export function SectionTitle({
  overline,
  title,
  desc,
  className = '',
}: {
  overline?: string
  title: string
  desc?: string
  className?: string
}) {
  return (
    <div className={cn('text-center', className)}>
      {overline && <Eyebrow>{overline}</Eyebrow>}
      <h2 className="font-display text-4xl font-medium leading-tight text-ink sm:text-5xl text-balance">
        {title}
      </h2>
      <div className="mx-auto mt-6 flex items-center justify-center gap-3 text-gold" aria-hidden>
        <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold/70" />
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
          <path d="M12 2c1 4 4 6 8 7-4 1-7 3-8 7-1-4-4-6-8-7 4-1 7-3 8-7z" opacity="0.9" />
        </svg>
        <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold/70" />
      </div>
      {desc && (
        <p className="mx-auto mt-6 max-w-md font-body text-[0.92rem] font-light leading-relaxed tracking-wide text-muted">
          {desc}
        </p>
      )}
    </div>
  )
}

export function PillButton({
  children,
  className = '',
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  return (
    <button
      {...rest}
      className={cn(
        'btn-fluid inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full px-8 py-3.5 font-body text-[0.8rem] font-semibold uppercase tracking-[0.18em] active:scale-[0.97]',
        className,
      )}
    >
      {children}
    </button>
  )
}
