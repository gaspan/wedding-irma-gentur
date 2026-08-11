import { motion } from 'framer-motion'
import { couple, events, hashtag } from '../../config/wedding'
import { Arch, Aurora, CornerOrnate, Mandala, Sparkles } from '../illustrations'
import { CircularText, Particles } from '../ui/Effects'

const EASE = [0.22, 1, 0.36, 1] as const

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-emerald-night px-6 py-24">
      <Aurora />
      <div className="pointer-events-none absolute inset-0 bg-damask opacity-[0.09]" />
      <div className="pointer-events-none absolute inset-0 bg-pattern-gold opacity-[0.09]" />
      <Sparkles className="text-gold-bright" />
      <Particles count={22} />
      <div className="pointer-events-none absolute inset-0 vignette" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[90vh] w-[90vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/15 blur-[140px]" />

      <Arch className="pointer-events-none absolute h-[82vh] max-h-[660px] w-auto opacity-70 drop-shadow-[0_0_20px_rgba(200,167,92,0.3)]" />
      
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 200, repeat: Infinity, ease: 'linear' }}
        className="pointer-events-none absolute top-1/2 left-1/2 h-[75vh] w-[75vh] max-w-none -translate-x-1/2 -translate-y-1/2 text-gold opacity-[0.15]"
      >
        <Mandala className="h-full w-full" />
      </motion.div>

      <CornerOrnate className="pointer-events-none absolute top-4 left-4 w-20 text-gold-bright/70 sm:w-32 drop-shadow" />
      <CornerOrnate className="pointer-events-none absolute top-4 right-4 w-20 rotate-90 text-gold-bright/70 sm:w-32 drop-shadow" />
      <CornerOrnate className="pointer-events-none absolute right-4 bottom-4 w-20 rotate-180 text-gold-bright/70 sm:w-32 drop-shadow" />
      <CornerOrnate className="pointer-events-none absolute bottom-4 left-4 w-20 -rotate-90 text-gold-bright/70 sm:w-32 drop-shadow" />

      {/* Angka tahun outline raksasa */}
      <span
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[42vw] leading-none font-light text-stroke-gold opacity-[0.14] sm:text-[26vw]"
      >
        2027
      </span>

      <div className="relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-arabic text-3xl text-gold-bright drop-shadow-[0_0_30px_rgba(246,229,184,0.6)]"
        >
          بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mx-auto mt-8 max-w-md text-[0.85rem] leading-loose text-balance text-gold-light/80"
        >
          Assalamu&rsquo;alaikum Warahmatullahi Wabarakatuh. Dengan memohon rahmat dan ridha
          Allah SWT, kami bermaksud menyelenggarakan pernikahan putra-putri kami.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(16px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ delay: 0.5, duration: 1.3, ease: EASE }}
          className="mt-10"
        >
          <h1 className="font-script text-[5rem] leading-[0.8] text-gold-gradient text-gold-shimmer text-glow drop-shadow-2xl sm:text-[7rem]">
            {couple.bride.nickname}
          </h1>

          <div className="relative mx-auto my-6 h-36 w-36 sm:h-44 sm:w-44">
            <span className="absolute inset-0 rounded-full border-2 border-gold/40 border-dashed animate-[spin_20s_linear_infinite] shadow-[0_0_24px_rgba(200,167,92,0.3)]" />
            <span className="absolute inset-[0.45rem] rounded-full border border-gold/20" />
            <span className="absolute inset-[0.85rem] rounded-full border border-gold/15" />
            <CircularText
              text={`${couple.bride.nickname} & ${couple.groom.nickname} • ${events[0].date} • `}
              className="absolute inset-0 text-gold-light/70 font-medium"
            />
            <span
              className="absolute inset-0 flex items-center justify-center font-display text-5xl text-gold-bright sm:text-6xl drop-shadow-lg italic"
              style={{ textShadow: '0 0 30px rgba(246,229,184,.8)' }}
            >
              &amp;
            </span>
          </div>

          <h1 className="font-script text-[5rem] leading-[0.8] text-gold-gradient text-gold-shimmer text-glow drop-shadow-2xl sm:text-[7rem]">
            {couple.groom.nickname}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <span className="h-px w-12 hairline-gold sm:w-20" />
          <p className="font-display text-xl tracking-[0.24em] text-gold-light">{events[0].date}</p>
          <span className="h-px w-12 hairline-gold sm:w-20" />
        </motion.div>

        {hashtag && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.95 }}
            className="mt-6 inline-block rounded-full border border-gold/35 bg-gold/[0.08] px-6 py-2 text-[0.72rem] font-semibold tracking-[0.3em] text-gold-bright/90 backdrop-blur-md shadow-[0_0_20px_rgba(200,167,92,0.2)]"
          >
            {hashtag}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.25 }}
          className="mt-14 flex flex-col items-center gap-2.5 text-gold-light/65"
        >
          <span className="text-[0.58rem] font-bold tracking-[0.45em] uppercase">Gulir ke Bawah</span>
          <span className="block h-10 w-0.5 animate-bounce-soft bg-linear-to-b from-gold-light via-gold to-transparent shadow-[0_0_8px_rgba(246,229,184,0.6)]" />
        </motion.div>
      </div>
    </section>
  )
}

