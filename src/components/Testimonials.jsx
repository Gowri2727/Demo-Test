import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useApp } from '../context/AppContext'
import { testimonials } from '../data/content'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-accent-DEFAULT text-sm">★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const { language } = useApp()
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const prev = () => setCurrent(p => (p === 0 ? testimonials.length - 1 : p - 1))
  const next = () => setCurrent(p => (p === testimonials.length - 1 ? 0 : p + 1))

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-[#030a05] relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary-50 dark:bg-primary-950/30 blur-3xl opacity-60" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30 dark:opacity-10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-tag mx-auto mb-4">
            <span>💬</span>
            <span>{language === 'en' ? 'Testimonials' : 'प्रशंसापत्र'}</span>
          </div>
          <h2 className="section-title">
            {language === 'en' ? 'Citizens Speak' : 'नागरिक बोलते हैं'}
          </h2>
          <p className="section-sub mx-auto mt-4 text-center">
            {language === 'en'
              ? 'Hear directly from the people of Suryapura — the farmers, teachers, students, and entrepreneurs who are living the transformation.'
              : 'सूर्यपुरा के लोगों की आवाज़ — किसान, शिक्षक, छात्र और उद्यमी।'}
          </p>
        </motion.div>

        {/* Desktop: 2-col grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.13, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="group glass-card rounded-3xl p-6 shadow-card card-hover flex flex-col"
            >
              {/* Quote icon */}
              <div
                className="w-10 h-10 rounded-2xl flex items-center justify-center text-xl text-white mb-4 flex-shrink-0"
                style={{ background: `linear-gradient(135deg, ${t.from}, ${t.to})` }}
              >
                "
              </div>

              <StarRating count={t.rating} />

              <p className="font-inter text-gray-600 dark:text-gray-400 text-sm leading-relaxed mt-3 flex-1 italic">
                "{t.quote}"
              </p>

              <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-sm flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.from}, ${t.to})` }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-poppins font-semibold text-sm text-gray-800 dark:text-gray-200 leading-tight">
                    {language === 'en' ? t.nameEn : t.nameHi}
                  </div>
                  <div className="font-inter text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    {language === 'en' ? t.roleEn : t.roleHi}
                  </div>
                  <div className="font-inter text-[0.65rem] text-gray-400 dark:text-gray-500 mt-0.5">{t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Carousel */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="glass-card rounded-3xl p-7 shadow-card"
            >
              <div
                className="w-10 h-10 rounded-2xl flex items-center justify-center text-xl text-white mb-4"
                style={{ background: `linear-gradient(135deg, ${testimonials[current].from}, ${testimonials[current].to})` }}
              >
                "
              </div>
              <StarRating count={testimonials[current].rating} />
              <p className="font-inter text-gray-600 dark:text-gray-400 text-base leading-relaxed mt-3 italic">
                "{testimonials[current].quote}"
              </p>
              <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black"
                  style={{ background: `linear-gradient(135deg, ${testimonials[current].from}, ${testimonials[current].to})` }}
                >
                  {testimonials[current].initials}
                </div>
                <div>
                  <div className="font-poppins font-semibold text-gray-800 dark:text-gray-200">
                    {language === 'en' ? testimonials[current].nameEn : testimonials[current].nameHi}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 font-inter">
                    {language === 'en' ? testimonials[current].roleEn : testimonials[current].roleHi}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={prev} className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary-50 hover:text-primary-600 transition-all">
              <FiChevronLeft />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`h-1.5 rounded-full transition-all ${i === current ? 'w-6 bg-primary-500' : 'w-1.5 bg-gray-200 dark:bg-gray-700'}`} />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary-50 hover:text-primary-600 transition-all">
              <FiChevronRight />
            </button>
          </div>
        </div>

        {/* Aggregate rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-12 glass-card rounded-3xl p-6 sm:p-8 shadow-card flex flex-col sm:flex-row items-center gap-6 justify-between"
        >
          <div className="text-center sm:text-left">
            <div className="text-5xl font-black font-poppins text-primary-700 dark:text-primary-400">4.9</div>
            <StarRating count={5} />
            <div className="text-sm font-inter text-gray-500 dark:text-gray-400 mt-1">
              {language === 'en' ? 'Average satisfaction score from 850+ citizens surveyed' : '850+ नागरिकों का औसत संतुष्टि स्कोर'}
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { v: '95%', l: { en: 'Infrastructure Satisfaction', hi: 'बुनियादी ढांचा' } },
              { v: '97%', l: { en: 'Education Approval', hi: 'शिक्षा अनुमोदन' } },
              { v: '91%', l: { en: 'Healthcare Access', hi: 'स्वास्थ्य सेवा' } },
              { v: '89%', l: { en: 'Digital Services', hi: 'डिजिटल सेवाएं' } },
            ].map((s, i) => (
              <div key={i} className="text-center bg-primary-50 dark:bg-primary-950/50 rounded-2xl px-3 py-3">
                <div className="font-poppins font-black text-primary-700 dark:text-primary-400 text-xl">{s.v}</div>
                <div className="text-[0.65rem] font-inter text-gray-500 dark:text-gray-400 mt-0.5 leading-tight">{s.l[language]}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
