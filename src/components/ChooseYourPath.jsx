import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'

export default function ChooseYourPath() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section ref={ref} className="relative py-24 bg-[#050505] text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,201,167,0.16),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(142,124,255,0.16),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-10">
        <h3 className="text-4xl font-semibold">Choose Your Path</h3>
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          {[{
            title: 'Personal Growth & Life Direction',
            color: '#00C9A7'
          },{
            title: 'Emotional & Spiritual Alignment',
            color: '#8E7CFF'
          }].map((p, i) => (
            <motion.a key={p.title} href="#cta" initial={{ x: i === 0 ? -60 : 60, opacity: 0 }} animate={inView ? { x: 0, opacity: 1 } : {}} transition={{ duration: 0.7, delay: 0.1 * i }} className="relative block overflow-hidden group">
              <div className="relative h-56 md:h-64 border-2" style={{ borderColor: p.color, clipPath: 'polygon(6% 0, 100% 0, 100% 100%, 0 100%)' }}>
                <div className="absolute inset-0" style={{ background: `linear-gradient(140deg, ${p.color}33, transparent 60%)` }} />
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)' }} />
                <div className="absolute bottom-5 left-6 right-6 text-xl font-semibold">{p.title}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
