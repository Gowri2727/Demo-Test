import { useRef, useState, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'
import { useApp } from '../context/AppContext'

const beforeItems = [
  { icon: '🛤️', en: 'Unpaved muddy roads', hi: 'कच्ची मिट्टी की सड़कें' },
  { icon: '🏫', en: 'Single-room school, no power', hi: 'एकल कमरे का स्कूल, बिजली नहीं' },
  { icon: '🌾', en: 'Rain-dependent farming', hi: 'वर्षा-निर्भर खेती' },
  { icon: '🕯️', en: 'Kerosene lamps, no street light', hi: 'मिट्टी का तेल, स्ट्रीट लाइट नहीं' },
  { icon: '📵', en: 'No internet access', hi: 'कोई इंटरनेट नहीं' },
  { icon: '🏥', en: 'Basic dispensary only', hi: 'केवल बेसिक दवाखाना' },
]

const afterItems = [
  { icon: '🛣️', en: '82 km all-weather paved roads', hi: '82 किमी पक्की सड़कें' },
  { icon: '🖥️', en: '3 smart schools, 40 tablets', hi: '3 स्मार्ट स्कूल, 40 टैबलेट' },
  { icon: '💧', en: 'Drip irrigation, 250+ farmers', hi: 'ड्रिप सिंचाई, 250+ किसान' },
  { icon: '☀️', en: '150 solar LED street lights', hi: '150 सौर LED स्ट्रीट लाइट' },
  { icon: '📡', en: '78% homes with broadband', hi: '78% घरों में ब्रॉडबैंड' },
  { icon: '🏥', en: 'Full PHC, 24×7 telemedicine', hi: 'पूर्ण PHC, 24×7 टेलीमेडिसिन' },
]

export default function BeforeAfter() {
  const { language } = useApp()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [sliderX, setSliderX] = useState(50)
  const [dragging, setDragging] = useState(false)
  const containerRef = useRef(null)

  const updateSlider = useCallback((clientX) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = Math.max(5, Math.min(95, ((clientX - rect.left) / rect.width) * 100))
    setSliderX(x)
  }, [])

  const onMouseDown = (e) => { e.preventDefault(); setDragging(true) }
  const onMouseMove = (e) => { if (dragging) updateSlider(e.clientX) }
  const onMouseUp = () => setDragging(false)
  const onTouchMove = (e) => updateSlider(e.touches[0].clientX)

  return (
    <section id="before-after" className="py-24 bg-white dark:bg-[#030a05] relative overflow-hidden" ref={ref}>
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-64 rounded-full blur-3xl opacity-[0.04] bg-primary-500" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-tag mx-auto mb-4">
            <span>⚡</span>
            <span>{language === 'en' ? 'Before vs After' : 'पहले बनाम बाद'}</span>
          </div>
          <h2 className="section-title">
            {language === 'en' ? 'The Suryapura Transformation' : 'सूर्यपुरा का कायापलट'}
          </h2>
          <p className="section-sub mx-auto mt-4 text-center">
            {language === 'en'
              ? 'Drag the slider to compare how Suryapura looked in 2018 versus today in 2024.'
              : 'स्लाइडर को ड्रैग करें और 2018 बनाम 2024 का फर्क देखें।'}
          </p>
        </motion.div>

        {/* Interactive slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden shadow-card-hover select-none mb-12"
          ref={containerRef}
          style={{ aspectRatio: '16/7', minHeight: '240px' }}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        >
          {/* Before side */}
          <div className="absolute inset-0 flex">
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #37474F 0%, #546E7A 50%, #607D8B 100%)',
              }}
            >
              {/* Grayscale filter to simulate "before" */}
              <div className="absolute inset-0 opacity-30 bg-repeat" style={{
                backgroundImage: `repeating-linear-gradient(45deg, rgba(0,0,0,0.05) 0, rgba(0,0,0,0.05) 1px, transparent 0, transparent 50%)`,
                backgroundSize: '8px 8px',
              }} />
              <div className="text-center z-10 px-8">
                <div className="text-7xl mb-4 opacity-60">🌧️</div>
                <div className="font-poppins font-black text-white/80 text-4xl mb-2">2018</div>
                <div className="font-inter text-white/50 text-sm">Before Transformation</div>
              </div>
            </div>
            {/* Clipper */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - sliderX}% 0 0)` }}
            >
              {/* Dark BG for "before" */}
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #263238 0%, #37474F 100%)' }}>
                <div className="absolute inset-0 opacity-20 bg-repeat" style={{
                  backgroundImage: `repeating-linear-gradient(0deg, rgba(0,0,0,0.1) 0, rgba(0,0,0,0.1) 1px, transparent 0, transparent 20px)`,
                }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-4">
                    <div className="text-6xl mb-3 grayscale opacity-50">🏚️</div>
                    <div className="font-poppins font-black text-white/70 text-5xl">2018</div>
                    <div className="font-inter text-white/40 text-sm mt-1">Before</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* After side */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              clipPath: `inset(0 0 0 ${sliderX}%)`,
              background: 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 50%, #388E3C 100%)',
            }}
          >
            <div className="absolute inset-0 opacity-15" style={{
              backgroundImage: `radial-gradient(circle, rgba(76,175,80,0.3) 1px, transparent 1px)`,
              backgroundSize: '20px 20px',
            }} />
            <div className="text-center z-10 px-8">
              <div className="text-7xl mb-4">🌟</div>
              <div className="font-poppins font-black text-white text-4xl mb-2">2024</div>
              <div className="font-inter text-white/70 text-sm">After Transformation</div>
            </div>
          </div>

          {/* Divider line */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-white z-30 pointer-events-none"
            style={{ left: `${sliderX}%` }}
          />

          {/* Drag handle */}
          <div
            className="absolute top-1/2 z-40 -translate-y-1/2 -translate-x-1/2 cursor-ew-resize"
            style={{ left: `${sliderX}%` }}
            onMouseDown={onMouseDown}
            onTouchStart={() => setDragging(true)}
            onTouchMove={onTouchMove}
            onTouchEnd={() => setDragging(false)}
          >
            <div className="w-10 h-10 rounded-2xl bg-white shadow-glow-lg flex items-center justify-center text-primary-700 text-lg font-bold border border-white/50 animate-pulse-ring">
              ⟺
            </div>
          </div>

          {/* Labels */}
          <div className="absolute top-4 left-4 z-20 bg-black/50 backdrop-blur-md text-white text-xs font-bold font-poppins px-3 py-1.5 rounded-xl border border-white/20">
            BEFORE 2018
          </div>
          <div className="absolute top-4 right-4 z-20 bg-primary-700/80 backdrop-blur-md text-white text-xs font-bold font-poppins px-3 py-1.5 rounded-xl border border-primary-400/30">
            AFTER 2024
          </div>
        </motion.div>

        {/* Comparison grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Before card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-card"
          >
            <div className="bg-gray-800 dark:bg-gray-900 px-6 py-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gray-600 flex items-center justify-center text-white text-sm">🕰️</div>
              <span className="font-poppins font-bold text-white">
                {language === 'en' ? 'Suryapura in 2018' : '2018 का सूर्यपुरा'}
              </span>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900/50 p-4 space-y-2">
              {beforeItems.map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white dark:bg-gray-800/50 rounded-xl px-4 py-3">
                  <span className="text-xl grayscale">{item.icon}</span>
                  <span className="font-inter text-sm text-gray-600 dark:text-gray-400">{language === 'en' ? item.en : item.hi}</span>
                  <span className="ml-auto text-red-400 text-xs">✗</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* After card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-card"
          >
            <div className="bg-gradient-to-r from-primary-700 to-primary-600 px-6 py-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-primary-500/50 flex items-center justify-center text-white text-sm">🌟</div>
              <span className="font-poppins font-bold text-white">
                {language === 'en' ? 'Suryapura Today 2024' : 'आज का सूर्यपुरा 2024'}
              </span>
            </div>
            <div className="bg-primary-50 dark:bg-primary-950/30 p-4 space-y-2">
              {afterItems.map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white dark:bg-primary-950/50 rounded-xl px-4 py-3">
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-inter text-sm text-gray-700 dark:text-gray-300 font-medium">{language === 'en' ? item.en : item.hi}</span>
                  <span className="ml-auto text-primary-500 text-xs font-bold">✓</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
