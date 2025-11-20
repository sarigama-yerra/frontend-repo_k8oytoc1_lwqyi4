import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'

export default function Testimonial() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [30, -30])

  return (
    <section ref={ref} className="relative py-28 bg-[#050505] text-white overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)' , opacity: 0.25}} />
      <div className="absolute inset-0 bg-[radial-gradient(1200px_200px_at_50%_0%,rgba(255,255,255,0.08),transparent)]" />
      <motion.div style={{ y }} className="absolute -top-16 left-1/2 -translate-x-1/2 text-[220px] leading-none font-serif text-[#F3C87A]/15 select-none pointer-events-none">“</motion.div>

      <div className="relative z-10 max-w-[1000px] mx-auto px-6 md:px-10">
        <blockquote className="text-2xl md:text-3xl font-serif leading-relaxed">
          “Working with Johannes felt like precision surgery for the soul. My performance rose, but more importantly, my life made sense.”
        </blockquote>
        <div className="mt-6 flex items-center gap-4">
          <img src="https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=200&auto=format&fit=crop" alt="Client" className="w-14 h-14 object-cover border-2 border-[#F3C87A]/60 [clip-path:polygon(10%_0,100%_0,100%_100%,0_100%)]" />
          <div>
            <div className="text-lg" style={{ fontFamily: 'Allura, cursive' }}>A.M.</div>
            <div className="text-neutral-400 text-sm">Founder & Creator</div>
          </div>
        </div>
        <div className="mt-10 h-px bg-gradient-to-r from-transparent via-[#F3C87A] to-transparent" />
      </div>
    </section>
  )
}
