import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useApp } from '../context/AppContext'
import { sustainabilityGoals } from '../data/content'

function RingProgress({ goal, inView, size = 120 }) {
  const [progress, setProgress] = useState(0)
  const radius = (size - 16) / 2
  const circ = 2 * Math.PI * radius
  const offset = circ - (progress / 100) * circ

  useEffect(() => {
    if (!inView) return
    const timer = setTimeout(() => {
      let start = 0
      const step = () => {
        start += 2
        setProgress(Math.min(start, goal.progress))
        if (start < goal.progress) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }, 300)
    return () => clearTimeout(timer)
  }, [inView, goal.progress])

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          {/* Track */}
          <circle
            cx={size / 2} cy={size / 2} r={radius}
            fill="none" stroke={goal.trackColor} strokeWidth="10"
          />
          {/* Progress */}
          <circle
            cx={size / 2} cy={size / 2} r={radius}
            fill="none" stroke={goal.color} strokeWidth="10"
            strokeLinecap="round" strokeDasharray={circ}
            strokeDashoffset={offset}
            className="ring-progress"
            style={{ transition: 'stroke-dashoffset 0.05s linear' }}
          />
        </svg>
        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xl">{goal.icon}</span>
          <span className="font-poppins font-black text-lg leading-none mt-0.5" style={{ color: goal.color }}>
            {progress}%
          </span>
        </div>
      </div>
      <div className="text-center">
        <div className="font-poppins font-semibold text-sm text-gray-800 dark:text-gray-200 leading-tight">
          {goal.titleEn}
        </div>
        <div className="font-inter text-xs text-gray-500 dark:text-gray-400 mt-0.5">{goal.target}</div>
      </div>
    </div>
  )
}

const sdgs = [
  { n: '01', label: 'No Poverty', color: '#E5243B' },
  { n: '02', label: 'Zero Hunger', color: '#DDA63A' },
  { n: '04', label: 'Quality Education', color: '#C5192D' },
  { n: '07', label: 'Clean Energy', color: '#FCC30B' },
  { n: '09', label: 'Infrastructure', color: '#FD6925' },
  { n: '11', label: 'Sustainable Cities', color: '#FD9D24' },
  { n: '13', label: 'Climate Action', color: '#3F7E44' },
  { n: '17', label: 'Partnerships', color: '#19486A' },
]

export default function Sustainability() {
  const { language } = useApp()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="sustainability" className="py-24 bg-primary-50/40 dark:bg-[#050f06] relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-200 dark:via-primary-800 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-tag mx-auto mb-4">
            <span>🌍</span>
            <span>{language === 'en' ? 'Sustainability' : 'स्थिरता'}</span>
          </div>
          <h2 className="section-title">
            {language === 'en' ? 'Sustainability Goals 2030' : 'स्थिरता लक्ष्य 2030'}
          </h2>
          <p className="section-sub mx-auto mt-4 text-center">
            {language === 'en'
              ? 'Aligned with UN SDGs, our sustainability roadmap ensures Suryapura grows responsibly and serves as a green model village.'
              : 'संयुक्त राष्ट्र के SDGs के अनुरूप, हमारी स्थिरता रोडमैप सूर्यपुरा को एक हरित मॉडल गांव बनाएगी।'}
          </p>
        </motion.div>

        {/* Progress rings */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass-card rounded-3xl p-8 sm:p-12 shadow-card-hover mb-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 justify-items-center">
            {sustainabilityGoals.map((goal, i) => (
              <motion.div
                key={goal.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.5, type: 'spring' }}
              >
                <RingProgress goal={goal} inView={inView} size={130} />
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <div className="mt-10 pt-8 border-t border-gray-100 dark:border-gray-800">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              {[
                { v: '2030', l: { en: 'Target Year', hi: 'लक्ष्य वर्ष' }, c: '#2E7D32' },
                { v: '8', l: { en: 'SDGs Aligned', hi: 'SDGs संरेखित' }, c: '#FFB300' },
                { v: '₹8Cr', l: { en: 'Green Investment', hi: 'हरित निवेश' }, c: '#9C27B0' },
              ].map((s, i) => (
                <div key={i}>
                  <div className="text-3xl font-black font-poppins" style={{ color: s.c }}>{s.v}</div>
                  <div className="text-sm font-inter text-gray-500 dark:text-gray-400 mt-1">{s.l[language]}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* SDG badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="glass-card rounded-3xl p-6 shadow-card"
        >
          <div className="text-sm font-bold font-poppins uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-5 text-center">
            {language === 'en' ? 'Aligned with UN Sustainable Development Goals' : 'संयुक्त राष्ट्र SDGs के साथ संरेखित'}
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {sdgs.map(sdg => (
              <div
                key={sdg.n}
                className="flex items-center gap-2 px-3 py-2 rounded-xl text-white text-xs font-bold font-poppins"
                style={{ background: sdg.color }}
              >
                <span>SDG {sdg.n}</span>
                <span className="opacity-80 hidden sm:inline">– {sdg.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
