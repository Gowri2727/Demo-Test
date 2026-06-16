import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import { HiOutlineGlobeAlt } from 'react-icons/hi'
import { useApp } from '../context/AppContext'

const navLinks = [
  { label: { en: 'Timeline', hi: 'समयरेखा' }, href: '#timeline' },
  { label: { en: 'Impact', hi: 'प्रभाव' }, href: '#dashboard' },
  { label: { en: 'Pillars', hi: 'स्तंभ' }, href: '#pillars' },
  { label: { en: 'Stories', hi: 'कहानियां' }, href: '#stories' },
  { label: { en: 'Gallery', hi: 'गैलरी' }, href: '#gallery' },
  { label: { en: 'Leadership', hi: 'नेतृत्व' }, href: '#leadership' },
  { label: { en: 'Contact', hi: 'संपर्क' }, href: '#contact' },
]

export default function Navbar() {
  const { darkMode, toggleDarkMode, language, toggleLanguage } = useApp()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 dark:bg-[#040f05]/90 backdrop-blur-xl shadow-card border-b border-primary-100/60 dark:border-primary-900/40'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-600 to-primary-400 flex items-center justify-center text-white font-bold text-base shadow-glow group-hover:shadow-glow-lg transition-all">
              S
            </div>
            <div className="leading-none">
              <div className={`font-poppins font-800 text-[0.95rem] font-extrabold tracking-tight leading-none ${scrolled ? 'text-primary-800 dark:text-primary-300' : 'text-white'}`}>
                Suryapura
              </div>
              <div className={`font-inter text-[0.65rem] font-semibold tracking-widest uppercase leading-none mt-0.5 ${scrolled ? 'text-primary-600 dark:text-accent-DEFAULT' : 'text-accent-light'}`}>
                2030 Vision
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`px-3 py-2 rounded-xl text-sm font-medium font-inter transition-all hover:bg-primary-50 dark:hover:bg-primary-900/30 ${
                  scrolled ? 'text-gray-700 dark:text-gray-300 hover:text-primary-700 dark:hover:text-primary-400' : 'text-white/85 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label[language]}
              </button>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold font-poppins transition-all ${
                scrolled
                  ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 hover:bg-primary-100'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              aria-label="Switch language"
            >
              <HiOutlineGlobeAlt className="text-base" />
              <span className="text-xs uppercase tracking-wide">{language === 'en' ? 'EN' : 'HI'}</span>
            </button>

            <button
              onClick={toggleDarkMode}
              className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                scrolled
                  ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 hover:bg-primary-100'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FiSun /> : <FiMoon />}
            </button>

            <button
              onClick={() => setMobileOpen(p => !p)}
              className={`lg:hidden w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                scrolled
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              aria-label="Mobile menu"
            >
              {mobileOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white/95 dark:bg-[#050f06]/95 backdrop-blur-2xl border-b border-primary-100 dark:border-primary-900/50 shadow-lg"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map(link => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="px-4 py-3 rounded-xl text-left text-sm font-medium font-inter text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-700 dark:hover:text-primary-400 transition-all"
                >
                  {link.label[language]}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
