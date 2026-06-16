import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useApp } from '../context/AppContext'
import { galleryImages } from '../data/content'

const categories = [
  { key: 'all',            label: { en: 'All', hi: 'सभी' } },
  { key: 'agriculture',    label: { en: 'Agriculture', hi: 'कृषि' } },
  { key: 'education',      label: { en: 'Education', hi: 'शिक्षा' } },
  { key: 'infrastructure', label: { en: 'Infrastructure', hi: 'बुनियादी ढांचा' } },
  { key: 'community',      label: { en: 'Community', hi: 'समुदाय' } },
]

function GalleryItem({ img, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: index * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      layout
      className={`relative overflow-hidden rounded-2xl shadow-card group cursor-pointer ${img.tall ? 'row-span-2' : ''}`}
      style={{ height: img.tall ? '340px' : '160px' }}
    >
      <img
        src={img.url}
        alt={img.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4">
        <div>
          <p className="font-poppins font-semibold text-white text-sm">{img.title}</p>
          <p className="font-inter text-white/60 text-xs capitalize mt-0.5">{img.cat}</p>
        </div>
      </div>
      {/* Zoom icon */}
      <div className="absolute top-3 right-3 w-7 h-7 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
        <span className="text-white text-xs">⊕</span>
      </div>
    </motion.div>
  )
}

export default function Gallery() {
  const { language } = useApp()
  const [activeCat, setActiveCat] = useState('all')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const filtered = activeCat === 'all'
    ? galleryImages
    : galleryImages.filter(g => g.cat === activeCat)

  return (
    <section id="gallery" className="py-24 bg-primary-50/40 dark:bg-[#050f06] relative overflow-hidden" ref={ref}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="section-tag mx-auto mb-4">
            <span>📸</span>
            <span>{language === 'en' ? 'Community Gallery' : 'सामुदायिक गैलरी'}</span>
          </div>
          <h2 className="section-title">
            {language === 'en' ? 'Moments of Transformation' : 'परिवर्तन के पल'}
          </h2>
          <p className="section-sub mx-auto mt-4 text-center">
            {language === 'en'
              ? 'A visual journey through the lives, landscapes, and landmarks of Suryapura.'
              : 'सूर्यपुरा के जीवन, परिदृश्य और स्थलों की दृश्य यात्रा।'}
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map(cat => (
            <button
              key={cat.key}
              onClick={() => setActiveCat(cat.key)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold font-poppins transition-all duration-300 ${
                activeCat === cat.key
                  ? 'bg-primary-600 text-white shadow-glow'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-700'
              }`}
            >
              {cat.label[language]}
            </button>
          ))}
        </motion.div>

        {/* Masonry grid */}
        <div
          className="grid gap-3"
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gridAutoRows: '160px',
            gridAutoFlow: 'dense',
          }}
        >
          {filtered.map((img, i) => (
            <GalleryItem key={img.id} img={img} index={i} inView={inView} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-10"
        >
          <button className="btn-primary mx-auto">
            {language === 'en' ? 'View Full Gallery' : 'पूरी गैलरी देखें'} →
          </button>
        </motion.div>
      </div>
    </section>
  )
}
