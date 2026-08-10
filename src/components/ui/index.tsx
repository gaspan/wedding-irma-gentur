import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
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
      className={cn('relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28', className)}
    >
      <div className={cn('mx-auto w-full max-w-3xl', containerClass)}>{children}</div>
    </section>
  )
}

export function SectionTitle({
  overline,
  title,
  className = '',
}: {
  overline?: string
  title: string
  className?: string
}) {
  return (
    <div className={cn('text-center', className)}>
      {overline && (
        <p className="mb-3 text-[0.7rem] font-medium tracking-[0.32em] text-sage-deep uppercase">
          {overline}
        </p>
      )}
      <h2 className="font-display text-4xl font-light text-ink sm:text-5xl">{title}</h2>
    </div>
  )
}
