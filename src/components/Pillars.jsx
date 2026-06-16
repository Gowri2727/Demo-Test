import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useApp } from '../context/AppContext'
import { pillarsData } from '../data/content'

function PillarCard({ pillar, index, inView, language }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 + index * 0.13, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group relative glass-card rounded-3xl p-7 shadow-card card-hover overflow-hidden cursor-default"
    >
      {/* BG glow on hover */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(ellipse at 30% 30%, ${pillar.from}10, transparent 60%)` }}
      />

      {/* Top decoration */}
      <div
        className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-10 group-hover:opacity-25 transition-opacity"
        style={{ background: pillar.to, transform: 'translate(25%, -25%)' }}
      />

      <div className="relative z-10">
        {/* Icon */}
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-5 shadow-card transition-transform group-hover:scale-110 group-hover:rotate-3 duration-300"
          style={{ background: `linear-gradient(135deg, ${pillar.from}22, ${pillar.to}40)` }}
        >
          {pillar.icon}
        </div>

        {/* Title */}
        <h3 className="font-poppins font-bold text-xl text-gray-800 dark:text-gray-100 mb-2">
          {language === 'en' ? pillar.titleEn : pillar.titleHi}
        </h3>

        {/* Desc */}
        <p className="text-gray-500 dark:text-gray-400 font-inter text-sm leading-relaxed mb-5">
          {language === 'en' ? pillar.descEn : pillar.descHi}
        </p>

        {/* Divider */}
        <div
          className="h-px mb-5 rounded-full transition-all duration-300"
          style={{ background: `linear-gradient(90deg, ${pillar.from}50, transparent)` }}
        />

        {/* Achievements */}
        <div className="space-y-2">
          <div className="text-[0.7rem] font-bold font-poppins uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
            {language === 'en' ? 'Key Achievements' : 'उपलब्धियां'}
          </div>
          {pillar.achievements.map((ach, ai) => (
            <div key={ai} className="flex items-center gap-2.5">
              <div
                className="w-5 h-5 rounded-lg flex items-center justify-center flex-shrink-0 text-[0.6rem]"
                style={{ background: `${pillar.from}18`, color: pillar.from }}
              >
                ✓
              </div>
              <span className="font-inter text-sm text-gray-700 dark:text-gray-300">{ach}</span>
            </div>
          ))}
        </div>

        {/* Color bar at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
          style={{ background: `linear-gradient(90deg, ${pillar.from}, ${pillar.to})` }}
        />
      </div>
    </motion.div>
  )
}

export default function Pillars() {
  const { language } = useApp()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="pillars" className="py-24 bg-white dark:bg-[#030a05] relative overflow-hidden" ref={ref}>
      <div className="absolute -top-20 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.04] bg-primary-500 dark:opacity-[0.06]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-tag mx-auto mb-4">
            <span>🏛️</span>
            <span>{language === 'en' ? 'Four Pillars' : 'चार स्तंभ'}</span>
          </div>
          <h2 className="section-title">
            {language === 'en' ? 'Development Pillars' : 'विकास के स्तंभ'}
          </h2>
          <p className="section-sub mx-auto mt-4 text-center">
            {language === 'en'
              ? 'Our four-pillar strategy ensures holistic, sustainable, and measurable progress across every dimension of village life.'
              : 'हमारी चार-स्तंभीय रणनीति ग्रामीण जीवन के हर आयाम में समग्र प्रगति सुनिश्चित करती है।'}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillarsData.map((pillar, i) => (
            <PillarCard key={pillar.id} pillar={pillar} index={i} inView={inView} language={language} />
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-1 bg-gradient-to-r from-primary-800 to-primary-600 dark:from-primary-950 dark:to-primary-800 rounded-3xl p-1 shadow-glow overflow-hidden"
        >
          {[
            { v: '4', l: { en: 'Development Sectors', hi: 'विकास क्षेत्र' } },
            { v: '28', l: { en: 'Active Programs', hi: 'सक्रिय कार्यक्रम' } },
            { v: '₹12Cr', l: { en: 'Total Investment', hi: 'कुल निवेश' } },
            { v: '5,200+', l: { en: 'Families Benefited', hi: 'लाभान्वित परिवार' } },
          ].map((s, i) => (
            <div key={i} className="text-center py-5 px-3 rounded-[20px] bg-white/5 hover:bg-white/10 transition-colors">
              <div className="text-2xl font-black font-poppins text-white">{s.v}</div>
              <div className="text-white/60 text-[0.72rem] font-inter mt-1">{s.l[language]}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
