import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Globe2, Brain, Sparkles } from 'lucide-react'
import React, { useRef } from 'react'

const SacredLines = ({ className = '' }) => (
  <svg className={`absolute inset-0 w-full h-full ${className}`} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
    <g stroke="#F3C87A" strokeWidth="0.15" opacity="0.35">
      <circle cx="50" cy="50" r="18" fill="none" />
      <circle cx="50" cy="50" r="32" fill="none" />
      <circle cx="50" cy="50" r="45" fill="none" />
      <path d="M10 90 L90 10" />
      <path d="M15 70 L85 30" />
      <path d="M30 95 L95 30" />
      <path d="M5 50 L95 50" />
      <path d="M50 5 L50 95" />
      <polygon points="50,15 70,50 50,85 30,50" fill="none" />
    </g>
  </svg>
)

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -120])
  const yPortrait = useTransform(scrollYProgress, [0, 1], [0, -60])
  const yHalo = useTransform(scrollYProgress, [0, 1], [0, -30])

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden bg-[#050505] text-white">
      {/* Aurora gradient layers with grain and angled streaks */}
      <motion.div style={{ y: yBg }} className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,201,167,0.25),transparent_50%),radial-gradient(circle_at_80%_60%,rgba(142,124,255,0.25),transparent_45%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(243,200,122,0.10)_10%,transparent_30%,transparent_70%,rgba(243,200,122,0.08)_90%)] mix-blend-screen" />
        <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.04),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.25]" style={{ backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)' }} />
        <SacredLines />
      </motion.div>

      {/* Content grid */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 pt-24 pb-16 md:pb-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-[clamp(2.6rem,6vw,5rem)] leading-[0.95] tracking-[-0.02em] font-semibold">Life Without Limits.</h1>
          <div className="mt-4">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00C9A7] via-[#00C9A7] to-[#8E7CFF] font-[700]" style={{ fontFamily: 'Allura, cursive', fontSize: 'clamp(2rem,4.2vw,3.25rem)', letterSpacing: '0.02em' }}>
              Transform from the inside out.
            </span>
          </div>
          <p className="mt-6 max-w-xl text-neutral-300 leading-relaxed" style={{ fontFamily: '"Playfair Display", serif' }}>
            Johannes Siedelmann blends evidence-based psychology with grounded spiritual practice to create profound, lasting transformation. Precision, depth, and meaning — tailored to high-performing humans.
          </p>

          <div className="mt-6 flex items-center gap-6 text-sm text-neutral-300">
            <div className="flex items-center gap-2"><Brain className="w-4 h-4 text-[#F3C87A]" /><span>Psychology</span></div>
            <div className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-[#F3C87A]" /><span>Spirituality</span></div>
            <div className="flex items-center gap-2"><Globe2 className="w-4 h-4 text-[#F3C87A]" /><span>Worldwide</span></div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#cta" className="px-6 py-3 bg-[#00C9A7] text-black font-semibold uppercase tracking-wide border-2 border-[#00C9A7] hover:bg-transparent hover:text-[#00C9A7] transition-colors" style={{ boxShadow: '0 0 0 1px #00C9A7 inset' }}>Book a Free Clarity Call</a>
            <a href="#method" className="px-6 py-3 bg-transparent text-white font-semibold uppercase tracking-wide border-2 border-white/40 hover:border-white/80 transition-colors">How I Work</a>
          </div>
        </div>

        {/* Portrait with halo and floating geometry */}
        <div className="relative min-h-[420px] md:min-h-[560px]">
          <motion.div style={{ y: yHalo }} className="absolute -top-8 right-6 md:right-12 w-64 h-64 md:w-96 md:h-96 rounded-full">
            <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden>
              <defs>
                <radialGradient id="halo" cx="50%" cy="50%" r="50%">
                  <stop offset="60%" stopColor="rgba(243,200,122,0.6)" />
                  <stop offset="100%" stopColor="rgba(243,200,122,0)" />
                </radialGradient>
              </defs>
              <circle cx="100" cy="100" r="90" fill="url(#halo)" />
              <circle cx="100" cy="100" r="86" fill="none" stroke="#F3C87A" strokeOpacity="0.5" strokeWidth="1" />
            </svg>
          </motion.div>

          <motion.div style={{ y: yPortrait }} className="absolute bottom-0 right-0 w-[320px] md:w-[420px]">
            <div className="relative select-none">
              <img src="https://images.unsplash.com/photo-1606335543042-57c525922933?q=80&w=1400&auto=format&fit=crop" alt="Johannes Siedelmann" className="w-full object-cover [clip-path:polygon(10%_0,100%_0,100%_100%,0_100%)] border-2 border-[#F3C87A]/60" />
              <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="absolute -left-10 -top-8">
                <svg width="120" height="120" viewBox="0 0 120 120" aria-hidden>
                  <g fill="none" stroke="#F3C87A" strokeOpacity="0.8">
                    <circle cx="60" cy="60" r="28" />
                    <path d="M60 28 L85 60 L60 92 L35 60 Z" />
                    <path d="M60 12 L60 108" strokeOpacity="0.5" />
                    <path d="M12 60 L108 60" strokeOpacity="0.5" />
                  </g>
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll prompt */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        <motion.div animate={{ y: [0, 6, 0], opacity: [0.7, 1, 0.7] }} transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}>
          <ChevronDown className="w-7 h-7 text-[#F3C87A]" />
        </motion.div>
      </div>
    </section>
  )
}
