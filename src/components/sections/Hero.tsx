import { motion } from 'framer-motion'
import { couple, events, hashtag } from '../../config/wedding'
import { Arch, Aurora, CornerFloral, RingsIllustration, Sparkles } from '../illustrations'

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-emerald-deep px-6 py-24">
      <Aurora />
      <div className="pointer-events-none absolute inset-0 bg-pattern-gold opacity-[0.13]" />
      <Sparkles className="text-gold-bright" />
      <Arch className="pointer-events-none absolute h-[84vh] w-auto opacity-70" />
      <CornerFloral className="pointer-events-none absolute -top-4 -left-4 w-36 rotate-180 text-gold-bright/40" />
      <CornerFloral className="pointer-events-none absolute -right-4 -bottom-4 w-36 text-gold-bright/40" />

      <div className="relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-arabic text-2xl text-gold-bright"
          style={{ textShadow: '0 0 30px rgba(240,217,160,.5)' }}
        >
          بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mx-auto mt-8 max-w-md text-sm leading-relaxed text-balance text-gold-light/80"
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
          <h1 className="font-display text-7xl leading-none font-medium text-gold-gradient text-gold-shimmer sm:text-8xl">
            {couple.bride.nickname}
          </h1>
          <div className="my-3 flex items-center justify-center gap-4">
            <span className="h-px w-14 bg-linear-to-r from-transparent to-gold/70" />
            <RingsIllustration className="h-10 w-auto animate-glow text-gold" />
            <span className="h-px w-14 bg-linear-to-l from-transparent to-gold/70" />
          </div>
          <h1 className="font-display text-7xl leading-none font-medium text-gold-gradient text-gold-shimmer sm:text-8xl">
            {couple.groom.nickname}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          className="mt-8 font-display text-xl tracking-[0.15em] text-gold-light"
        >
          {events[0].date}
        </motion.p>

        {hashtag && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-3 inline-block rounded-full border border-gold/35 bg-white/5 px-4 py-1 text-xs tracking-[0.2em] text-gold-bright backdrop-blur"
          >
            {hashtag}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-14 flex flex-col items-center gap-2 text-gold-light/70"
        >
          <span className="text-[0.6rem] tracking-[0.3em] uppercase">Gulir</span>
          <span className="block h-9 w-px animate-bounce-soft bg-linear-to-b from-gold to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
