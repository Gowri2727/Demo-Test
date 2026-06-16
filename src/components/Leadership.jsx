import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useApp } from '../context/AppContext'
import { leadershipData } from '../data/content'
import { FiAward } from 'react-icons/fi'

export default function Leadership() {
  const { language } = useApp()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="leadership" className="py-24 bg-white dark:bg-[#030a05] relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full blur-3xl opacity-[0.06] bg-primary-400" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full blur-3xl opacity-[0.04] bg-accent-DEFAULT" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40 dark:opacity-10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-tag mx-auto mb-4">
            <span>👤</span>
            <span>{language === 'en' ? 'Leadership' : 'नेतृत्व'}</span>
          </div>
          <h2 className="section-title">
            {language === 'en' ? 'Panchayat Leadership' : 'पंचायत नेतृत्व'}
          </h2>
        </motion.div>

        {/* Profile card */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: Portrait card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="glass-card rounded-3xl p-8 shadow-card-hover">
              {/* Avatar */}
              <div className="relative inline-block mb-6">
                <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-primary-600 to-primary-400 flex items-center justify-center shadow-glow overflow-hidden">
                  {/* Stylized portrait placeholder */}
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 flex flex-col items-center justify-end pb-2">
                      <div className="w-14 h-14 rounded-full bg-white/25 mb-0.5" />
                      <div className="w-20 h-10 rounded-t-full bg-white/20" />
                    </div>
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white/30 overflow-hidden flex items-center justify-center">
                      <span className="font-poppins font-black text-white text-xl">
                        {leadershipData.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-9 h-9 rounded-xl bg-accent-DEFAULT flex items-center justify-center shadow-glow-accent">
                  <FiAward className="text-white text-base" />
                </div>
              </div>

              {/* Name & Title */}
              <h3 className="font-poppins font-black text-2xl text-gray-800 dark:text-gray-100">
                {leadershipData.name}
              </h3>
              <p className="font-inter text-primary-600 dark:text-primary-400 font-semibold text-sm mt-1">
                {language === 'en' ? leadershipData.titleEn : leadershipData.titleHi}
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500 font-inter mt-0.5 mb-6">
                {leadershipData.since}
              </p>

              {/* Vision quote */}
              <div className="relative bg-primary-50 dark:bg-primary-950/50 rounded-2xl p-5 mb-6">
                <div className="absolute -top-3 left-4 text-4xl text-primary-300 dark:text-primary-700 leading-none font-serif">"</div>
                <p className="font-inter text-gray-700 dark:text-gray-300 text-sm leading-relaxed pt-2 italic">
                  {leadershipData.vision.replace(/^"|"$/g, '')}
                </p>
              </div>

              {/* Awards */}
              <div>
                <div className="text-xs font-bold font-poppins uppercase tracking-widest text-gray-400 mb-3">
                  {language === 'en' ? 'Awards & Recognition' : 'पुरस्कार'}
                </div>
                <div className="space-y-2">
                  {leadershipData.awards.map((award, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <span className="text-accent-DEFAULT text-sm">🏆</span>
                      <span className="font-inter text-sm text-gray-600 dark:text-gray-400">{award}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Initiatives + Message */}
          <div className="space-y-6">
            {/* Key Initiatives */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="glass-card rounded-3xl p-6 shadow-card"
            >
              <h4 className="font-poppins font-bold text-gray-800 dark:text-gray-100 text-lg mb-5">
                {language === 'en' ? 'Key Initiatives' : 'प्रमुख पहल'}
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {leadershipData.initiatives.map((init, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="group flex items-start gap-3 bg-gradient-to-br from-primary-50 to-white dark:from-primary-950/50 dark:to-transparent rounded-2xl p-4 border border-primary-100/60 dark:border-primary-800/30 hover:border-primary-300 dark:hover:border-primary-600 transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                      {init.icon}
                    </div>
                    <div>
                      <div className="font-poppins font-semibold text-sm text-gray-800 dark:text-gray-200">
                        {language === 'en' ? init.en : init.hi}
                      </div>
                      <div className="font-inter text-xs text-gray-500 dark:text-gray-400 mt-0.5">{init.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Community message */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="relative bg-gradient-to-br from-primary-700 to-primary-900 rounded-3xl p-6 sm:p-8 overflow-hidden shadow-glow"
            >
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-10 bg-white transform translate-x-16 -translate-y-12" />
              <div className="relative z-10">
                <div className="text-4xl font-serif text-primary-300 leading-none mb-3">"</div>
                <p className="font-inter text-white/85 text-base leading-relaxed mb-4">
                  {leadershipData.message}
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-white/15">
                  <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center text-white text-sm font-bold">
                    {leadershipData.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-poppins font-semibold text-white text-sm">{leadershipData.name}</div>
                    <div className="text-white/50 text-xs font-inter">{language === 'en' ? leadershipData.titleEn : leadershipData.titleHi}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
