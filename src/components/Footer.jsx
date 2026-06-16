import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useApp } from '../context/AppContext'
import { footerLinks } from '../data/content'
import { FiArrowRight } from 'react-icons/fi'

const socialLinks = [
  { name: 'Facebook', icon: '📘', color: '#1877F2' },
  { name: 'Twitter', icon: '🐦', color: '#1DA1F2' },
  { name: 'YouTube', icon: '▶️', color: '#FF0000' },
  { name: 'Instagram', icon: '📸', color: '#E1306C' },
  { name: 'WhatsApp', icon: '💬', color: '#25D366' },
]

const navScrollTo = (id) => {
  const el = document.querySelector(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  const { language } = useApp()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <footer className="bg-[#030a05] dark:bg-[#010601] relative overflow-hidden" ref={ref}>
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-700/50 to-transparent" />

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-[0.04] bg-primary-400" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-[0.03] bg-accent-DEFAULT" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.04]" />
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden mb-16 p-8 sm:p-10"
          style={{
            background: 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 40%, #388E3C 80%, #FFB30015 100%)',
          }}
        >
          <div className="absolute inset-0 animate-shimmer" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-poppins font-black text-white text-2xl sm:text-3xl leading-tight">
                {language === 'en' ? 'Join the Suryapura 2030 Mission' : 'सूर्यपुरा 2030 मिशन से जुड़ें'}
              </h3>
              <p className="text-white/70 font-inter text-sm mt-2 max-w-md">
                {language === 'en'
                  ? 'Together we can make Suryapura a nationally recognised model of rural transformation.'
                  : 'मिलकर हम सूर्यपुरा को ग्रामीण परिवर्तन का राष्ट्रीय मॉडल बना सकते हैं।'}
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <button
                onClick={() => navScrollTo('#contact')}
                className="flex items-center gap-2 bg-accent-DEFAULT text-gray-900 px-5 py-3 rounded-2xl font-poppins font-bold text-sm hover:bg-accent-light transition-all shadow-glow-accent hover:scale-105"
              >
                {language === 'en' ? 'Get Involved' : 'जुड़ें'}
                <FiArrowRight />
              </button>
              <button
                onClick={() => navScrollTo('#dashboard')}
                className="flex items-center gap-2 bg-white/15 text-white px-5 py-3 rounded-2xl font-poppins font-bold text-sm hover:bg-white/25 transition-all border border-white/20"
              >
                {language === 'en' ? 'View Impact' : 'प्रभाव देखें'}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="col-span-2 md:col-span-1"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-400 to-primary-700 flex items-center justify-center text-white font-black text-lg shadow-glow">
                S
              </div>
              <div>
                <div className="font-poppins font-black text-white text-lg leading-none">Suryapura</div>
                <div className="text-accent-DEFAULT font-poppins font-bold text-[0.65rem] uppercase tracking-widest leading-none mt-0.5">2030 Vision</div>
              </div>
            </div>
            <p className="text-gray-500 font-inter text-sm leading-relaxed mb-5">
              {language === 'en'
                ? 'A model smart village initiative transforming rural India through education, agriculture, and digital governance.'
                : 'ग्रामीण भारत को बदलने वाली एक मॉडल स्मार्ट ग्राम पहल।'}
            </p>
            <div className="flex gap-2 flex-wrap">
              {socialLinks.map(s => (
                <button
                  key={s.name}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-base transition-all hover:scale-110 hover:shadow-md"
                  style={{ background: `${s.color}20`, border: `1px solid ${s.color}30` }}
                  aria-label={s.name}
                >
                  {s.icon}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
          >
            <h4 className="font-poppins font-bold text-white text-sm uppercase tracking-widest mb-4">
              {language === 'en' ? 'Quick Links' : 'त्वरित लिंक'}
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.quick.map(link => (
                <li key={link.l}>
                  <button
                    onClick={() => link.h !== '#' && navScrollTo(link.h)}
                    className="text-gray-500 hover:text-primary-400 font-inter text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary-700 group-hover:bg-primary-400 transition-colors flex-shrink-0" />
                    {link.l}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-poppins font-bold text-white text-sm uppercase tracking-widest mb-4">
              {language === 'en' ? 'Resources' : 'संसाधन'}
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.resources.map(link => (
                <li key={link.l}>
                  <a href={link.h} className="text-gray-500 hover:text-primary-400 font-inter text-sm transition-colors flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-primary-700 group-hover:bg-primary-400 transition-colors flex-shrink-0" />
                    {link.l}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Programs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25 }}
          >
            <h4 className="font-poppins font-bold text-white text-sm uppercase tracking-widest mb-4">
              {language === 'en' ? 'Programs' : 'कार्यक्रम'}
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.programs.map(link => (
                <li key={link.l}>
                  <a href={link.h} className="text-gray-500 hover:text-primary-400 font-inter text-sm transition-colors flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-primary-700 group-hover:bg-primary-400 transition-colors flex-shrink-0" />
                    {link.l}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Achievement badges row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-2 justify-center mb-10"
        >
          {[
            { icon: '🏆', text: 'National Panchayat Award 2023' },
            { icon: '🌿', text: 'Green Village Initiative' },
            { icon: '📡', text: 'Digital India Champion' },
            { icon: '🌾', text: 'Best Agricultural Practices' },
            { icon: '📚', text: '96% School Enrollment' },
          ].map((b, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs font-poppins font-semibold text-gray-400 hover:border-primary-700/50 hover:text-gray-300 transition-all"
            >
              <span>{b.icon}</span>
              <span>{b.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 font-inter text-xs text-center sm:text-left">
            © 2024 Suryapura Gram Panchayat. {language === 'en' ? 'All rights reserved.' : 'सर्वाधिकार सुरक्षित।'}
            <span className="mx-2">·</span>
            {language === 'en' ? 'Built for Suryapura 2030 Vision' : 'सूर्यपुरा 2030 विजन के लिए निर्मित'}
          </p>
          <div className="flex items-center gap-4">
            {['Privacy Policy', 'Terms of Use', 'RTI'].map(l => (
              <a key={l} href="#" className="text-gray-600 hover:text-gray-400 font-inter text-xs transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="text-center mt-6">
          <p className="text-gray-700 font-poppins text-xs tracking-wider">
            🌱 {language === 'en'
              ? '"Every village that transforms, transforms the nation."'
              : '"जो गाँव बदलता है, वो देश बदलता है।"'}
          </p>
        </div>
      </div>
    </footer>
  )
}
