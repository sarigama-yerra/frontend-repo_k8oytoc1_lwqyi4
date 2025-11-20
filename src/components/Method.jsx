import { motion, useInView } from 'framer-motion'
import { Brain, Activity, Stars } from 'lucide-react'
import React, { useRef } from 'react'

const columns = [
  { icon: Brain, title: 'Evidence-Based Psychology', text: 'Cognitive and behavioral frameworks, attachment theory, and performance psychology applied with rigor.' },
  { icon: Activity, title: 'Nervous System Inner Work', text: 'Bottom-up regulation, somatic awareness, and trauma-informed pacing for durable change.' },
  { icon: Stars, title: 'Spiritual Alignment & Meaning', text: 'Archetypes, ritual, and contemplative practice — grounded, not woo.' },
]

export default function Method() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section id="method" ref={ref} className="relative py-28 bg-[#050505] text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(142,124,255,0.25),transparent_50%)]" />
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(90deg, rgba(0,201,167,0.18) 5%, transparent 5%, transparent 35%, rgba(142,124,255,0.18) 35%, transparent 65%, transparent 95%, rgba(243,200,122,0.18) 95%)' }} />
      </div>
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10">
        <h3 className="text-4xl md:text-5xl font-semibold tracking-tight">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C9A7] to-[#8E7CFF]" style={{ fontFamily: 'Allura, cursive' }}>Method</span>
        </h3>
        <div className="grid md:grid-cols-3 gap-10 mt-10">
          {columns.map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.15 * i, duration: 0.7, ease: 'easeOut' }} className="pt-6 border-t border-white/15">
              <c.icon className="w-6 h-6 text-[#F3C87A]" />
              <h4 className="mt-4 text-xl font-semibold">{c.title}</h4>
              <p className="mt-2 text-neutral-300" style={{ fontFamily: 'Playfair Display, serif' }}>{c.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
