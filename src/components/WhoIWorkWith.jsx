import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'

export default function WhoIWorkWith() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })
  const word = (text, delay = 0) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: 'easeOut', delay }}
      className="overflow-hidden"
    >
      <div className="whitespace-nowrap text-[clamp(2.4rem,10vw,7rem)] leading-[0.9] tracking-tight font-semibold">
        {text}
      </div>
    </motion.div>
  )

  return (
    <section ref={ref} className="relative py-24 md:py-36 bg-[#050505] text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black opacity-60" />
      <div className="absolute inset-0" style={{backgroundImage:'linear-gradient(120deg,rgba(243,200,122,0.08)_0%,transparent_40%),linear-gradient(300deg,rgba(243,200,122,0.08)_0%,transparent_40%)'}} />
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 relative z-10">
        <div className="mb-8">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00C9A7] to-[#8E7CFF]" style={{ fontFamily: 'Allura, cursive', fontSize: 'clamp(2rem,4vw,3rem)' }}>
            Who I Work With
          </span>
        </div>

        <div className="border-t border-b border-white/10 py-10">
          {word('PERFORMERS', 0)}
          <p className="mt-3 text-neutral-300 max-w-2xl" style={{ fontFamily: '"Playfair Display", serif' }}>
            Driven creators, leaders, and athletes seeking inner congruence to unlock sustainable peak performance.
          </p>
        </div>

        <div className="border-b border-white/10 py-10">
          {word('SEEKERS', 0.15)}
          <p className="mt-3 text-neutral-300 max-w-2xl" style={{ fontFamily: '"Playfair Display", serif' }}>
            Conscious minds who value depth, truth, and embodied spirituality grounded in lived experience.
          </p>
        </div>

        <div className="py-10">
          {word('ALIGNMENT', 0.3)}
          <p className="mt-3 text-neutral-300 max-w-2xl" style={{ fontFamily: '"Playfair Display", serif' }}>
            Those ready to integrate identity, emotion, relationships, and purpose — aligned from the inside out.
          </p>
        </div>
      </div>
    </section>
  )
}
