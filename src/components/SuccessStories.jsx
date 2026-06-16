import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useApp } from '../context/AppContext'
import { successStories } from '../data/content'

function StoryCard({ story, isActive, onClick, language }) {
  return (
    <motion.div
      layout
      onClick={onClick}
      className={`relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-500 ${
        isActive ? 'shadow-glow-lg' : 'shadow-card hover:shadow-card-hover'
      }`}
      style={{ minWidth: 0 }}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={story.img}
          alt={story.titleEn}
          loading="lazy"
          className={`w-full h-full object-cover transition-transform duration-700 ${isActive ? 'scale-110' : 'scale-100 hover:scale-105'}`}
        />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(to top, ${story.from}ee 0%, ${story.from}66 40%, transparent 100%)` }}
        />
        <div className="absolute top-4 left-4">
          <span className="text-xs font-bold font-poppins bg-white/20 backdrop-blur-md text-white px-3 py-1.5 rounded-full border border-white/20">
            {language === 'en' ? story.catEn : story.catHi}
          </span>
        </div>
        {isActive && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-4 right-4 w-8 h-8 rounded-xl bg-accent-DEFAULT flex items-center justify-center text-white text-sm font-bold shadow-glow-accent"
          >
            ✓
          </motion.div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 bg-white dark:bg-[#0a1f0b]">
        <h3 className="font-poppins font-bold text-gray-800 dark:text-gray-100 text-lg leading-tight mb-2">
          {language === 'en' ? story.titleEn : story.titleHi}
        </h3>
        <p className="font-inter text-gray-500 dark:text-gray-400 text-sm leading-relaxed italic line-clamp-2 mb-4">
          {story.quote}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {story.stats.map((s, i) => (
            <div
              key={i}
              className="text-center bg-gray-50 dark:bg-primary-950/50 rounded-xl py-2"
            >
              <div
                className="text-lg font-black font-poppins leading-none"
                style={{ color: story.from }}
              >
                {s.v}
              </div>
              <div className="text-[0.6rem] text-gray-400 font-inter mt-0.5 leading-tight">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="text-xs font-semibold font-inter text-gray-400 dark:text-gray-500 mb-3">{story.author}</div>

        <button
          className="w-full py-2.5 rounded-xl text-sm font-semibold font-poppins transition-all"
          style={{
            background: isActive ? `linear-gradient(135deg, ${story.from}, ${story.to})` : 'transparent',
            color: isActive ? '#fff' : story.from,
            border: `2px solid ${story.from}40`,
          }}
        >
          {language === 'en' ? 'Read More →' : 'और पढ़ें →'}
        </button>
      </div>
    </motion.div>
  )
}

export default function SuccessStories() {
  const { language } = useApp()
  const [active, setActive] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="stories" className="py-24 bg-primary-50/40 dark:bg-[#050f06] relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-200 dark:via-primary-800 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-tag mx-auto mb-4">
            <span>✨</span>
            <span>{language === 'en' ? 'Success Stories' : 'सफलता की कहानियां'}</span>
          </div>
          <h2 className="section-title">
            {language === 'en' ? 'Real People, Real Change' : 'असली लोग, असली बदलाव'}
          </h2>
          <p className="section-sub mx-auto mt-4 text-center">
            {language === 'en'
              ? 'Behind every statistic is a family whose life has been transformed. Here are their stories.'
              : 'हर आंकड़े के पीछे एक परिवार है जिसका जीवन बदल गया है।'}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {successStories.map((story, i) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.15, duration: 0.65 }}
            >
              <StoryCard
                story={story}
                isActive={active === i}
                onClick={() => setActive(i)}
                language={language}
              />
            </motion.div>
          ))}
        </div>

        {/* Featured quote */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="mt-10 glass-card rounded-3xl p-8 shadow-card"
          >
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-2xl font-black flex-shrink-0"
                style={{ background: `linear-gradient(135deg, ${successStories[active].from}, ${successStories[active].to})` }}
              >
                "
              </div>
              <div>
                <p className="font-inter text-lg text-gray-700 dark:text-gray-300 leading-relaxed italic">
                  {successStories[active].quote}
                </p>
                <p className="mt-3 font-poppins font-semibold text-sm text-gray-500 dark:text-gray-400">
                  {successStories[active].author}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
