import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useApp } from '../context/AppContext'
import { timelineMilestones } from '../data/content'

export default function Timeline() {
  const { language } = useApp()
  const [active, setActive] = useState(2)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const m = timelineMilestones[active]

  return (
    <section id="timeline" className="py-24 bg-white dark:bg-[#030a05] relative overflow-hidden" ref={ref}>
      {/* BG grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 dark:opacity-20" />
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-20 bg-primary-300 dark:bg-primary-900" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-tag mx-auto mb-4">
            <span>📅</span>
            <span>{language === 'en' ? 'Our Journey' : 'हमारी यात्रा'}</span>
          </div>
          <h2 className="section-title">
            {language === 'en' ? 'Transformation Timeline' : 'परिवर्तन समयरेखा'}
          </h2>
          <p className="section-sub mx-auto mt-4 text-center">
            {language === 'en'
              ? 'Six years of consistent development — every milestone a step closer to our 2030 vision.'
              : 'छह साल का निरंतर विकास — हर मील का पत्थर 2030 विजन के करीब।'}
          </p>
        </motion.div>

        {/* Timeline bar */}
        <div className="relative mb-12">
          {/* Track */}
          <div className="hidden sm:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-200 to-transparent dark:via-primary-800 mx-16" />

          <div className="flex justify-between items-start gap-2 sm:gap-0 overflow-x-auto no-scrollbar pb-2">
            {timelineMilestones.map((milestone, i) => (
              <motion.button
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.12, duration: 0.5 }}
                onClick={() => setActive(i)}
                className="flex flex-col items-center gap-2 min-w-[80px] sm:flex-1 group focus:outline-none"
                aria-label={`Timeline ${milestone.year}`}
              >
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 shadow-lg ${
                    active === i
                      ? 'scale-110 shadow-glow-lg ring-4 ring-primary-400/30'
                      : 'scale-100 opacity-70 hover:opacity-100 hover:scale-105'
                  }`}
                  style={{
                    background: active === i
                      ? `linear-gradient(135deg, ${milestone.color}cc, ${milestone.color})`
                      : 'linear-gradient(135deg, #e8f5e9, #c8e6c9)',
                  }}
                >
                  {milestone.emoji}
                </div>
                <span
                  className={`font-poppins font-bold text-sm transition-colors ${
                    active === i ? 'text-primary-700 dark:text-primary-400' : 'text-gray-400 dark:text-gray-600'
                  }`}
                >
                  {milestone.year}
                </span>
                {milestone.isVision && (
                  <span className="text-[0.6rem] font-bold font-poppins text-accent-DEFAULT uppercase tracking-widest -mt-1">Vision</span>
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Content card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card rounded-3xl p-6 sm:p-10 shadow-card-hover"
          >
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left side */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${m.color}22, ${m.color}44)` }}
                  >
                    {m.emoji}
                  </div>
                  <div>
                    <div
                      className="text-4xl font-black font-poppins leading-none"
                      style={{ color: m.color }}
                    >
                      {m.year}
                    </div>
                    <div className="font-poppins font-semibold text-gray-800 dark:text-gray-200 text-lg leading-tight mt-1">
                      {language === 'en' ? m.titleEn : m.titleHi}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 font-inter leading-relaxed text-base">
                  {language === 'en' ? m.descEn : m.descHi}
                </p>

                {m.isVision && (
                  <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-accent-DEFAULT/10 to-primary-500/10 border border-accent-DEFAULT/20">
                    <div className="text-accent-dark dark:text-accent-DEFAULT font-poppins font-bold text-sm mb-1">🎯 2030 Target</div>
                    <div className="text-gray-700 dark:text-gray-300 font-inter text-sm">
                      Suryapura will serve as a national replicable model for rural transformation — measurable, sustainable, and community-driven.
                    </div>
                  </div>
                )}
              </div>

              {/* Right side: achievements */}
              <div className="lg:w-64 flex flex-col gap-3">
                <div className="font-poppins font-semibold text-sm text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-1">
                  {language === 'en' ? 'Key Achievements' : 'प्रमुख उपलब्धियां'}
                </div>
                {m.achievements.map((a, ai) => (
                  <motion.div
                    key={ai}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + ai * 0.1 }}
                    className="flex items-center gap-3 bg-white dark:bg-primary-950/50 rounded-2xl px-4 py-3 shadow-card"
                  >
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: m.color }}
                    />
                    <span className="font-inter text-sm text-gray-700 dark:text-gray-300 font-medium">{a}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Progress dots */}
            <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
              <div className="flex gap-1.5">
                {timelineMilestones.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === active ? 'w-8 bg-primary-500' : 'w-1.5 bg-gray-200 dark:bg-gray-700'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setActive(p => Math.max(0, p - 1))}
                  disabled={active === 0}
                  className="w-8 h-8 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-sm hover:bg-primary-50 hover:text-primary-600 transition-all disabled:opacity-30"
                >
                  ‹
                </button>
                <button
                  onClick={() => setActive(p => Math.min(timelineMilestones.length - 1, p + 1))}
                  disabled={active === timelineMilestones.length - 1}
                  className="w-8 h-8 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-sm hover:bg-primary-50 hover:text-primary-600 transition-all disabled:opacity-30"
                >
                  ›
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
