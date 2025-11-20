import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'

const items = [
  {
    title: 'IDENTITY',
    text: 'Rebuild from core principles. Clarify values, roles, and self-concept that drives consistent behavior.'
  },
  {
    title: 'EMOTION',
    text: 'Regulate and refine. Develop nervous-system literacy and emotional mastery to respond, not react.'
  },
  {
    title: 'RELATIONSHIP',
    text: 'Create resonance. Upgrade attachment patterns and boundaries for deeper relational integrity.'
  },
  {
    title: 'PURPOSE',
    text: 'Aim with meaning. Align craft, service, and spirit toward a direction you can stand behind.'
  }
]

export default function WhatWeWorkOn() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section ref={ref} className="relative py-28 bg-[#050505] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)]" />
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)' }} />
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative z-10">
        <div className="grid md:grid-cols-4 gap-10">
          {items.map((it, idx) => (
            <div key={it.title} className="">
              <motion.h4 initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 * idx }} className="text-[clamp(2rem,4vw,3rem)] font-serif" style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '-0.02em' }}>
                {it.title}
              </motion.h4>
              <motion.p initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 * idx + 0.1 }} className="mt-3 text-neutral-300 leading-relaxed">
                {it.text}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
