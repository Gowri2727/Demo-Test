import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useApp } from '../context/AppContext'

function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (ts) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])
  return count
}

const stats = [
  { label: { en: 'Population', hi: 'जनसंख्या' }, value: 12500, suffix: '', prefix: '' },
  { label: { en: 'Digital Literacy', hi: 'डिजिटल साक्षरता' }, value: 78, suffix: '%', prefix: '' },
  { label: { en: 'Road Connectivity', hi: 'सड़क संपर्क' }, value: 92, suffix: '%', prefix: '' },
  { label: { en: 'School Enrollment', hi: 'स्कूल नामांकन' }, value: 96, suffix: '%', prefix: '' },
]

const badges = [
  { icon: '🏆', text: 'National Panchayat Award 2023', color: 'from-yellow-400 to-orange-400', delay: 0 },
  { icon: '🌿', text: 'Green Village Initiative', color: 'from-green-400 to-emerald-500', delay: 0.3 },
  { icon: '📡', text: 'Digital India Champion', color: 'from-blue-400 to-indigo-500', delay: 0.6 },
]

function StatCard({ stat, index, started, language }) {
  const value = useCounter(stat.value, 1800 + index * 100, started)
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={started ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.6 + index * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="glass rounded-2xl px-4 py-3 text-center min-w-[120px] flex-1"
    >
      <div className="text-2xl font-black font-poppins text-white leading-none tabular-nums">
        {stat.prefix}{value.toLocaleString()}{stat.suffix}
      </div>
      <div className="text-[0.7rem] text-white/70 font-inter mt-1 font-medium">{stat.label[language]}</div>
    </motion.div>
  )
}

export default function Hero() {
  const { language } = useApp()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (inView) setStarted(true)
  }, [inView])

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1f0b] via-[#1B5E20] to-[#0d2e12]" />
        {/* Aerial village visual effect with layered gradients */}
        <div className="absolute inset-0 opacity-40" style={{
          background: `
            radial-gradient(ellipse 60% 40% at 70% 30%, rgba(139,195,74,0.25) 0%, transparent 60%),
            radial-gradient(ellipse 40% 60% at 20% 60%, rgba(255,179,0,0.15) 0%, transparent 50%),
            radial-gradient(ellipse 50% 30% at 50% 80%, rgba(46,125,50,0.3) 0%, transparent 60%)
          `
        }} />
        {/* Field rows – SVG pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="fields" x="0" y="0" width="80" height="40" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="80" height="18" fill="rgba(76,175,80,0.4)" rx="2" />
              <rect x="0" y="22" width="80" height="14" fill="rgba(139,195,74,0.3)" rx="2" />
            </pattern>
            <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="15" cy="15" r="1.5" fill="rgba(255,255,255,0.3)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#fields)" />
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
        {/* Vignette */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.65) 100%)'
        }} />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white dark:from-[#030a05] to-transparent z-10" />
      </div>

      {/* Floating badges */}
      <div className="absolute top-28 right-6 md:right-16 flex flex-col gap-3 z-20">
        {badges.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 + i * 0.2, duration: 0.6 }}
            className={`animate-float-${i + 1}`}
          >
            <div className={`glass rounded-2xl px-3 py-2 flex items-center gap-2 shadow-lg border border-white/20 max-w-[200px]`}>
              <span className="text-lg">{b.icon}</span>
              <span className="text-[0.7rem] font-semibold font-poppins text-white/90 leading-tight">{b.text}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Hero content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 flex flex-col items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="section-tag mb-6 bg-accent-DEFAULT/20 text-accent-light border-accent-DEFAULT/30"
        >
          <span>🌟</span>
          <span>{language === 'en' ? 'Smart Village Initiative' : 'स्मार्ट ग्राम पहल'}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-poppins font-black text-white leading-[1.1] tracking-tight"
          style={{ fontSize: 'clamp(2.2rem, 6vw, 4.2rem)' }}
        >
          {language === 'en' ? (
            <>Transforming <span className="text-accent-DEFAULT">Suryapura</span><br />
              into a Model Smart<br />
              <span className="text-gradient">Village by 2030</span>
            </>
          ) : (
            <>सूर्यपुरा को बदलना<br />
              <span className="text-accent-DEFAULT">स्मार्ट</span> ग्राम<br />
              <span className="text-gradient">2030 तक</span>
            </>
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-6 text-white/75 max-w-xl font-inter"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', lineHeight: 1.75 }}
        >
          {language === 'en'
            ? 'Empowering farmers, educating youth, building infrastructure, and connecting every citizen through technology.'
            : 'किसानों को सशक्त बनाना, युवाओं को शिक्षित करना, बुनियादी ढांचे का निर्माण और प्रौद्योगिकी के माध्यम से हर नागरिक को जोड़ना।'}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <button
            className="btn-primary"
            onClick={() => document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {language === 'en' ? 'Explore Impact' : 'प्रभाव देखें'}
            <span>→</span>
          </button>
          <button
            className="btn-outline"
            onClick={() => document.getElementById('leadership')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {language === 'en' ? 'Meet the Panchayat' : 'पंचायत से मिलें'}
          </button>
        </motion.div>

        {/* Stats dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7 }}
          className="mt-14 w-full"
        >
          <div className="glass rounded-3xl p-1 inline-flex flex-wrap gap-1 w-full max-w-2xl shadow-glow">
            {stats.map((s, i) => (
              <StatCard key={s.label.en} stat={s} index={i} started={started} language={language} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs font-inter tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
          <motion.div
            className="w-1 h-2 bg-white/60 rounded-full"
            animate={{ y: [0, 10, 0], opacity: [1, 0.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
