import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'

const steps = [
  { n: '01', t: 'Clarity Call', d: 'A focused conversation to define outcomes, constraints, and commitment.' },
  { n: '02', t: 'Deep Sessions', d: 'Structured, immersive work blending psychology and spiritual alignment.' },
  { n: '03', t: 'Integration Work', d: 'Applied practice, rituals, and adjustments that lock in the changes.' },
]

export default function Process() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section ref={ref} className="relative py-24 bg-[#050505] text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] to-black" />
      <svg className="absolute left-1/2 -translate-x-1/2 top-0 h-full" width="4" height="100%" aria-hidden>
        <defs>
          <linearGradient id="zig" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#F3C87A" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#F3C87A" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path d="M2 0 L2 40 L-40 80 L2 120 L2 160 L40 200 L2 240 L2 280" stroke="url(#zig)" strokeWidth="2" fill="none" />
      </svg>

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-10">
        <h3 className="text-4xl font-semibold">Process</h3>
        <div className="mt-10 grid gap-10">
          {steps.map((s, i) => (
            <motion.div key={s.n} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.15 * i }} className="grid md:grid-cols-[120px_1fr] items-baseline gap-6">
              <div className="text-5xl font-serif text-[#F3C87A]">{s.n}</div>
              <div>
                <div className="text-2xl font-semibold">{s.t}</div>
                <p className="text-neutral-300 mt-2" style={{ fontFamily: 'Playfair Display, serif' }}>{s.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
