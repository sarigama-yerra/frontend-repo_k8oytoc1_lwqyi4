import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'

export default function FreeGuide() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section ref={ref} className="relative py-24 bg-[#050505] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(160deg,transparent_40%,rgba(0,201,167,0.12)_40%,rgba(0,201,167,0.12)_65%,transparent_65%)]" />
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 relative z-10 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ x: 80, opacity: 0 }} animate={inView ? { x: 0, opacity: 1 } : {}} transition={{ duration: 0.8, ease: 'easeOut' }} className="order-2 md:order-1">
          <h3 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00C9A7] to-[#8E7CFF]" style={{ fontFamily: 'Allura, cursive' }}>Start Your Inner Work</span>
          </h3>
          <p className="mt-4 text-neutral-300 max-w-lg" style={{ fontFamily: '\"Playfair Display\", serif' }}>
            A concise, potent primer to align your nervous system, mindset, and spiritual compass — designed for immediate clarity and practical action.
          </p>

          <form className="mt-8 grid gap-4 max-w-md">
            {['Full Name','Email','What do you want to change?'].map((label, i) => (
              <motion.div key={label} initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 * i + 0.2 }}>
                {label !== 'What do you want to change?' ? (
                  <input placeholder={label} className="w-full bg-transparent border-2 border-white/30 focus:border-white/80 outline-none px-4 py-3 uppercase tracking-wide text-sm" />
                ) : (
                  <textarea placeholder={label} rows={3} className="w-full bg-transparent border-2 border-white/30 focus:border-white/80 outline-none px-4 py-3 uppercase tracking-wide text-sm" />
                )}
              </motion.div>
            ))}

            <button type="button" className="mt-2 px-6 py-3 bg-[#00C9A7] text-black font-semibold uppercase tracking-wide border-2 border-[#00C9A7] hover:bg-transparent hover:text-[#00C9A7] transition-colors">
              Get the Free Guide
            </button>
          </form>
        </motion.div>

        <motion.div initial={{ x: -80, opacity: 0 }} animate={inView ? { x: 0, opacity: 1 } : {}} transition={{ duration: 0.8, ease: 'easeOut' }} className="order-1 md:order-2">
          <div className="relative w-full h-[420px]">
            <div className="absolute -top-8 -left-8 w-40 h-40 border border-[#F3C87A]/60" />
            <div className="absolute top-0 left-6 right-0 bottom-6 bg-[#0A0A0A] border-2 border-[#F3C87A]/60" style={{ clipPath: 'polygon(8% 0, 100% 0, 100% 100%, 0 100%)' }}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,201,167,0.20),transparent_55%),radial-gradient(circle_at_80%_60%,rgba(142,124,255,0.20),transparent_55%)]" />
              <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)' }} />
              <div className="absolute bottom-6 left-6 text-sm uppercase tracking-wide text-neutral-300">Life Without Limits — Guide</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
