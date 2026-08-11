import { motion } from 'framer-motion'
import { couple, events, hashtag } from '../../config/wedding'
import { Arch, Aurora, CornerFloral, Sparkles } from '../illustrations'
import { CircularText, Particles } from '../ui/Effects'

const EASE = [0.22, 1, 0.36, 1] as const

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-emerald-night px-6 py-24">
      <Aurora />
      <div className="pointer-events-none absolute inset-0 bg-pattern-gold opacity-[0.1]" />
      <Sparkles className="text-gold-bright" />
      <Particles count={18} />
      <Arch className="pointer-events-none absolute h-[84vh] w-auto opacity-60" />
      <CornerFloral className="pointer-events-none absolute -top-4 -left-4 w-36 rotate-180 text-gold-bright/35 sm:w-48" />
      <CornerFloral className="pointer-events-none absolute -right-4 -bottom-4 w-36 text-gold-bright/35 sm:w-48" />
      <div className="pointer-events-none absolute inset-0 vignette" />

      {/* angka tahun outline raksasa */}
      <span
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[42vw] leading-none font-light text-stroke-gold opacity-[0.1] sm:text-[26vw]"
      >
        2027
      </span>

      <div className="relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-arabic text-2xl text-gold-bright"
          style={{ textShadow: '0 0 34px rgba(246,229,184,.45)' }}
        >
          بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mx-auto mt-8 max-w-md text-[0.82rem] leading-loose text-balance text-gold-light/70"
        >
          Assalamu&rsquo;alaikum Warahmatullahi Wabarakatuh. Dengan memohon rahmat dan ridha
          Allah SWT, kami bermaksud menyelenggarakan pernikahan putra-putri kami.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.97, filter: 'blur(14px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ delay: 0.5, duration: 1.2, ease: EASE }}
          className="mt-10"
        >
          <h1 className="font-display text-[4.6rem] leading-[0.95] font-light text-gold-gradient text-gold-shimmer text-glow sm:text-[7.5rem]">
            {couple.bride.nickname}
          </h1>

          <div className="relative mx-auto my-3 h-28 w-28 sm:h-32 sm:w-32">
            <CircularText
              text={`${couple.bride.nickname} & ${couple.groom.nickname} • ${events[0].date} • `}
              className="absolute inset-0 text-gold-light/70"
            />
            <span
              className="absolute inset-0 flex items-center justify-center font-script text-5xl text-gold-bright sm:text-6xl"
              style={{ textShadow: '0 0 34px rgba(246,229,184,.7)' }}
            >
              &amp;
            </span>
          </div>

          <h1 className="font-display text-[4.6rem] leading-[0.95] font-light text-gold-gradient text-gold-shimmer text-glow sm:text-[7.5rem]">
            {couple.groom.nickname}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <span className="h-px w-10 hairline-gold sm:w-16" />
          <p className="font-display text-lg tracking-[0.2em] text-gold-light">
            {events[0].date}
          </p>
          <span className="h-px w-10 hairline-gold sm:w-16" />
        </motion.div>

        {hashtag && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.95 }}
            className="mt-5 inline-block rounded-full border border-gold/25 bg-gold/[0.06] px-5 py-1.5 text-[0.7rem] tracking-[0.25em] text-gold-bright/90 backdrop-blur"
          >
            {hashtag}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.25 }}
          className="mt-14 flex flex-col items-center gap-2.5 text-gold-light/55"
        >
          <span className="text-[0.55rem] tracking-[0.4em] uppercase">Gulir</span>
          <span className="block h-10 w-px animate-bounce-soft bg-linear-to-b from-gold-light to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
