import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

const variants: Variants = {
  hidden: { opacity: 0, y: 32, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

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
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay }}
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
    <section
      id={id}
      className={cn('relative overflow-hidden px-5 py-24 sm:px-8 sm:py-36', className)}
    >
      <div className={cn('mx-auto w-full max-w-3xl', containerClass)}>{children}</div>
    </section>
  )
}

export function SectionTitle({
  overline,
  title,
  dark = false,
  className = '',
}: {
  overline?: string
  title: string
  dark?: boolean
  className?: string
}) {
  return (
    <div className={cn('text-center', className)}>
      {overline && (
        <p
          className={cn(
            'mb-4 text-[0.6rem] font-semibold tracking-[0.45em] uppercase',
            dark ? 'text-gold-light/70' : 'text-gold-deep/80',
          )}
        >
          {overline}
        </p>
      )}
      <h2
        className={cn(
          'font-display text-[2.6rem] leading-[1.08] font-light sm:text-6xl',
          dark ? 'text-gold-gradient text-gold-shimmer text-glow' : 'text-ink',
        )}
      >
        {title}
      </h2>
      {/* ornamen hairline di bawah judul */}
      <span className="mx-auto mt-6 flex items-center justify-center gap-3">
        <span className={cn('h-px w-12 hairline-gold', dark ? 'opacity-80' : 'opacity-60')} />
        <span className={cn('h-1 w-1 rotate-45', dark ? 'bg-gold-bright' : 'bg-gold')} />
        <span className={cn('h-px w-12 hairline-gold', dark ? 'opacity-80' : 'opacity-60')} />
      </span>
    </div>
  )
}
