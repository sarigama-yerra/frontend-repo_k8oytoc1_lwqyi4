import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'

export default function FinalCTA() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [30, -30])

  return (
    <section id="cta" ref={ref} className="relative py-32 bg-[#050505] text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(0,201,167,0.15),transparent_40%,rgba(142,124,255,0.15))]" />
        <motion.div style={{ y }} className="absolute inset-0 opacity-25" style={{ backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)' }} />
      </div>
      <div className="relative z-10 max-w-[900px] mx-auto px-6 md:px-10 text-center">
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C9A7] to-[#8E7CFF]" style={{ fontFamily: 'Allura, cursive', fontSize: 'clamp(2.4rem,8vw,4rem)' }}>READY?</div>
        <h3 className="mt-3 text-[clamp(1.8rem,4.6vw,3rem)] font-serif">Let’s Create Your Life Without Limits.</h3>
        <div className="mt-8">
          <a href="#" className="px-8 py-4 bg-[#00C9A7] text-black font-semibold uppercase tracking-wide border-2 border-[#00C9A7] hover:bg-transparent hover:text-[#00C9A7] transition-colors">Book a Free Clarity Call</a>
        </div>
      </div>
    </section>
  )
}
