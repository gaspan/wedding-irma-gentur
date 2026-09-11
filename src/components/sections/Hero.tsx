import { motion } from 'framer-motion'
import { couple, events, hashtag } from '../../config/wedding'
import { Arch } from '../illustrations'
import { Grain, SoftBloom } from '../ui/Effects'
import { Reveal } from '../ui'

const EASE = [0.22, 1, 0.36, 1] as const

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ivory px-6 pb-24 pt-16 sm:pt-24">
      <SoftBloom />
      <Grain opacity={0.05} />

      <div className="relative mx-auto w-full max-w-2xl text-center">
        <Reveal>
          <p className="font-arabic text-2xl text-sage-deep">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
          <p className="mx-auto mt-5 max-w-md font-body text-[0.9rem] font-light leading-relaxed tracking-wide text-muted">
            Assalamu’alaikum Warahmatullahi Wabarakatuh. Dengan memohon rahmat dan ridha Allah
            SWT, kami bermaksud menyelenggarakan pernikahan putra-putri kami.
          </p>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.2 }}
          className="mt-12"
        >
          <div className="relative mx-auto w-fit">
            <Arch className="pointer-events-none absolute -inset-6 h-auto w-[calc(100%+3rem)] text-gold/40" />
            <h1 className="font-display text-6xl font-medium leading-[0.95] text-ink sm:text-7xl">
              {couple.bride.nickname}
            </h1>
            <div className="my-2 font-script text-6xl leading-none text-gold-deep">&</div>
            <h1 className="font-display text-6xl font-medium leading-[0.95] text-ink sm:text-7xl">
              {couple.groom.nickname}
            </h1>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <span className="h-px w-14 bg-gradient-to-r from-transparent to-gold/70" />
            <p className="font-body text-[0.78rem] font-semibold uppercase tracking-[0.32em] text-ink/70">
              {events[0].date}
            </p>
            <span className="h-px w-14 bg-gradient-to-l from-transparent to-gold/70" />
          </div>

          {hashtag && (
            <p className="glass mt-6 inline-block rounded-full px-6 py-2 font-body text-[0.7rem] font-semibold tracking-[0.28em] text-sage-deep uppercase">
              {hashtag}
            </p>
          )}

          <div className="mt-12 flex flex-col items-center gap-2 text-muted">
            <span className="font-body text-[0.62rem] font-semibold uppercase tracking-[0.4em]">Gulir ke bawah</span>
            <span className="block h-9 w-px animate-pulse bg-gradient-to-b from-gold-deep to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
