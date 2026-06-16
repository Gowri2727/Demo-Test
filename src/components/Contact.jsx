import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useApp } from '../context/AppContext'
import { contactData } from '../data/content'
import { FiPhone, FiMail, FiMapPin, FiClock, FiExternalLink } from 'react-icons/fi'
import { HiOutlineOfficeBuilding } from 'react-icons/hi'

const contactItems = [
  { icon: FiPhone,    key: 'phone',   label: { en: 'Phone', hi: 'फोन' },      color: '#2E7D32', bg: 'rgba(46,125,50,0.1)' },
  { icon: FiMail,     key: 'email',   label: { en: 'Email', hi: 'ईमेल' },     color: '#1565C0', bg: 'rgba(21,101,192,0.1)' },
  { icon: FiMapPin,   key: 'address', label: { en: 'Address', hi: 'पता' },    color: '#E65100', bg: 'rgba(230,81,0,0.1)'   },
  { icon: FiClock,    key: 'hours',   label: { en: 'Office Hours', hi: 'समय' }, color: '#6A1B9A', bg: 'rgba(106,27,154,0.1)'},
]

export default function Contact() {
  const { language } = useApp()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="py-24 bg-primary-50/40 dark:bg-[#050f06] relative overflow-hidden" ref={ref}>
      <div className="absolute -bottom-32 right-0 w-96 h-96 rounded-full blur-3xl opacity-[0.05] bg-primary-500" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-tag mx-auto mb-4">
            <span>📞</span>
            <span>{language === 'en' ? 'Get in Touch' : 'संपर्क करें'}</span>
          </div>
          <h2 className="section-title">
            {language === 'en' ? 'Contact the Panchayat' : 'पंचायत से संपर्क करें'}
          </h2>
          <p className="section-sub mx-auto mt-4 text-center">
            {language === 'en'
              ? 'Have questions, want to collaborate, or need information about development programs? We are here to help.'
              : 'प्रश्न, सहयोग, या विकास कार्यक्रमों की जानकारी चाहिए? हम यहां हैं।'}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="space-y-4"
          >
            {contactItems.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="glass-card rounded-2xl p-5 shadow-card flex items-start gap-4 group hover:shadow-card-hover transition-all"
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                    style={{ background: item.bg }}
                  >
                    <Icon style={{ color: item.color, fontSize: '1.2rem' }} />
                  </div>
                  <div>
                    <div className="text-xs font-bold font-poppins uppercase tracking-widest text-gray-400 mb-1">
                      {item.label[language]}
                    </div>
                    <div className="font-inter text-gray-700 dark:text-gray-300 font-medium text-sm whitespace-pre-line">
                      {contactData[item.key]}
                    </div>
                  </div>
                </motion.div>
              )
            })}

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="glass-card rounded-2xl p-5 shadow-card"
            >
              <div className="text-xs font-bold font-poppins uppercase tracking-widest text-gray-400 mb-3">
                {language === 'en' ? 'Follow Us' : 'हमें फॉलो करें'}
              </div>
              <div className="flex gap-2">
                {[
                  { name: 'Facebook', color: '#1877F2', icon: '📘' },
                  { name: 'Twitter/X', color: '#000000', icon: '🐦' },
                  { name: 'YouTube', color: '#FF0000', icon: '▶️' },
                  { name: 'WhatsApp', color: '#25D366', icon: '💬' },
                ].map(s => (
                  <button
                    key={s.name}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold font-poppins transition-all hover:scale-105 hover:shadow-md text-white"
                    style={{ background: s.color }}
                    aria-label={s.name}
                  >
                    <span>{s.icon}</span>
                    <span className="hidden sm:inline text-xs">{s.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Map placeholder + Quick form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-5"
          >
            {/* Map placeholder */}
            <div className="rounded-3xl overflow-hidden shadow-card h-64 relative">
              <div
                className="absolute inset-0 flex flex-col items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 50%, #388E3C 100%)' }}
              >
                {/* Decorative grid */}
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: `repeating-linear-gradient(0deg, rgba(255,255,255,0.1) 0, rgba(255,255,255,0.1) 1px, transparent 0, transparent 30px), repeating-linear-gradient(90deg, rgba(255,255,255,0.1) 0, rgba(255,255,255,0.1) 1px, transparent 0, transparent 30px)`,
                }} />
                {/* Pin */}
                <div className="relative z-10 text-center">
                  <div className="text-5xl mb-3 animate-float-1">📍</div>
                  <div className="font-poppins font-bold text-white text-lg">Suryapura, UP</div>
                  <div className="text-white/70 text-sm font-inter mt-1">Dist. Gonda, Uttar Pradesh</div>
                  <button className="mt-4 flex items-center gap-2 mx-auto bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-white/30 transition-all border border-white/20">
                    <FiExternalLink />
                    <span>{language === 'en' ? 'Open in Maps' : 'मानचित्र में खोलें'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="glass-card rounded-3xl p-6 shadow-card">
              <h4 className="font-poppins font-bold text-gray-800 dark:text-gray-100 text-lg mb-5 flex items-center gap-2">
                <HiOutlineOfficeBuilding className="text-primary-600" />
                {language === 'en' ? 'Send a Message' : 'संदेश भेजें'}
              </h4>
              <div className="space-y-3">
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { ph: { en: 'Your Name', hi: 'आपका नाम' } },
                    { ph: { en: 'Phone / Email', hi: 'फोन / ईमेल' } },
                  ].map((f, i) => (
                    <input
                      key={i}
                      type="text"
                      placeholder={f.ph[language]}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm font-inter focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all placeholder-gray-400"
                    />
                  ))}
                </div>
                <textarea
                  placeholder={language === 'en' ? 'Your message or inquiry...' : 'आपका संदेश या प्रश्न...'}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm font-inter focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 transition-all placeholder-gray-400 resize-none"
                />
                <button className="btn-primary w-full justify-center">
                  {language === 'en' ? 'Send Message' : 'संदेश भेजें'} →
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
