import { motion } from 'framer-motion'
import { couple, events, hashtag } from '../../config/wedding'
import { Arch, CornerFloral, RingsIllustration } from '../illustrations'

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden px-6 py-24">
      <div className="pointer-events-none absolute inset-0 bg-pattern opacity-[0.15]" />
      <Arch className="pointer-events-none absolute h-[80vh] w-auto text-gold opacity-25" />
      <CornerFloral className="pointer-events-none absolute -top-4 -left-4 w-36 rotate-180 text-sage opacity-30" />
      <CornerFloral className="pointer-events-none absolute -right-4 -bottom-4 w-36 text-sage opacity-30" />

      <div className="relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-arabic text-2xl text-sage-deep"
        >
          بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mx-auto mt-8 max-w-md text-sm leading-relaxed text-balance text-muted"
        >
          Assalamu’alaikum Warahmatullahi Wabarakatuh. Dengan memohon rahmat dan ridha
          Allah SWT, kami bermaksud menyelenggarakan pernikahan putra-putri kami.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-10"
        >
          <h1 className="font-display text-6xl leading-none font-light text-ink sm:text-7xl">
            {couple.bride.nickname}
          </h1>
          <div className="my-3 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gold/50" />
            <RingsIllustration className="h-9 w-auto text-gold" />
            <span className="h-px w-12 bg-gold/50" />
          </div>
          <h1 className="font-display text-6xl leading-none font-light text-ink sm:text-7xl">
            {couple.groom.nickname}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          className="mt-8 font-display text-xl tracking-wide text-sage-deep"
        >
          {events[0].date}
        </motion.p>

        {hashtag && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-3 text-xs tracking-[0.2em] text-gold"
          >
            {hashtag}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-14 flex flex-col items-center gap-2 text-muted"
        >
          <span className="text-[0.6rem] tracking-[0.25em] uppercase">Gulir</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="block h-8 w-px bg-gradient-to-b from-gold to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
