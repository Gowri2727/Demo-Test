import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useApp } from '../context/AppContext'
import { chartData } from '../data/content'
import {
  ResponsiveContainer, AreaChart, Area, BarChart, Bar, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, RadarChart, Radar, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis,
} from 'recharts'

const CustomTooltip = ({ active, payload, label, unit = '' }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-card-hover border border-gray-100 dark:border-gray-800 p-3">
        <p className="font-poppins font-bold text-primary-700 dark:text-primary-400 text-sm">{label}</p>
        <p className="font-inter text-gray-700 dark:text-gray-300 text-sm mt-0.5">
          <span className="font-bold">{payload[0].value}</span>{unit}
        </p>
      </div>
    )
  }
  return null
}

const charts = [
  {
    id: 'education', icon: '🎓', color: '#3F51B5',
    titleEn: 'School Enrollment', titleHi: 'विद्यालय नामांकन',
    descEn: 'Students enrolled (%)', descHi: 'नामांकित छात्र (%)',
    data: chartData.education, key: 'enrollment', unit: '%',
    type: 'area', from: '#3F51B580', to: '#3F51B520',
  },
  {
    id: 'income', icon: '💰', color: '#2E7D32',
    titleEn: 'Farmer Income', titleHi: 'किसान आय',
    descEn: 'Average income (₹ thou/yr)', descHi: 'औसत आय (₹ हजार/वर्ष)',
    data: chartData.income, key: 'income', unit: 'K',
    type: 'bar', from: '#4CAF5080', to: '#4CAF5020',
  },
  {
    id: 'roads', icon: '🛣️', color: '#E65100',
    titleEn: 'Road Development', titleHi: 'सड़क विकास',
    descEn: 'Paved road length (km)', descHi: 'पक्की सड़क (किमी)',
    data: chartData.roads, key: 'km', unit: ' km',
    type: 'line', from: '#FF980080', to: '#FF980020',
  },
  {
    id: 'internet', icon: '📡', color: '#9C27B0',
    titleEn: 'Internet Connectivity', titleHi: 'इंटरनेट संपर्क',
    descEn: 'Households connected (%)', descHi: 'जुड़े घर (%)',
    data: chartData.internet, key: 'pct', unit: '%',
    type: 'area', from: '#9C27B080', to: '#9C27B020',
  },
]

const radarData = [
  { subject: 'Education', value: 96 },
  { subject: 'Agriculture', value: 82 },
  { subject: 'Healthcare', value: 78 },
  { subject: 'Connectivity', value: 78 },
  { subject: 'Infrastructure', value: 92 },
  { subject: 'Governance', value: 74 },
]

function ChartCard({ chart, inView, language }) {
  const isBar = chart.type === 'bar'
  const isLine = chart.type === 'line'
  const isArea = chart.type === 'area'
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card rounded-3xl p-6 shadow-card card-hover"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-3"
            style={{ background: `${chart.color}18` }}
          >
            {chart.icon}
          </div>
          <h3 className="font-poppins font-bold text-gray-800 dark:text-gray-100 text-base">
            {language === 'en' ? chart.titleEn : chart.titleHi}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-xs font-inter mt-0.5">
            {language === 'en' ? chart.descEn : chart.descHi}
          </p>
        </div>
        <div
          className="text-2xl font-black font-poppins"
          style={{ color: chart.color }}
        >
          {chart.data[chart.data.length - 1][chart.key]}{chart.unit}
        </div>
      </div>

      <div className="h-36">
        {inView && (
          <ResponsiveContainer width="100%" height="100%">
            {isBar ? (
              <BarChart data={chart.data} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
                <XAxis dataKey="year" tick={{ fontSize: 10, fill: '#888' }} />
                <YAxis tick={{ fontSize: 10, fill: '#888' }} />
                <Tooltip content={<CustomTooltip unit={chart.unit} />} />
                <Bar dataKey={chart.key} fill={chart.color} radius={[6, 6, 0, 0]} />
              </BarChart>
            ) : isLine ? (
              <LineChart data={chart.data} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
                <XAxis dataKey="year" tick={{ fontSize: 10, fill: '#888' }} />
                <YAxis tick={{ fontSize: 10, fill: '#888' }} />
                <Tooltip content={<CustomTooltip unit={chart.unit} />} />
                <Line type="monotone" dataKey={chart.key} stroke={chart.color} strokeWidth={2.5} dot={{ r: 4, fill: chart.color }} />
              </LineChart>
            ) : (
              <AreaChart data={chart.data} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id={`grad-${chart.id}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={chart.color} stopOpacity={0.35} />
                    <stop offset="95%" stopColor={chart.color} stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
                <XAxis dataKey="year" tick={{ fontSize: 10, fill: '#888' }} />
                <YAxis tick={{ fontSize: 10, fill: '#888' }} />
                <Tooltip content={<CustomTooltip unit={chart.unit} />} />
                <Area
                  type="monotone" dataKey={chart.key}
                  stroke={chart.color} strokeWidth={2.5}
                  fill={`url(#grad-${chart.id})`}
                />
              </AreaChart>
            )}
          </ResponsiveContainer>
        )}
      </div>
    </motion.div>
  )
}

const kpis = [
  { v: '2.4×', l: { en: 'Farmer Income Growth', hi: 'किसान आय वृद्धि' }, c: '#2E7D32' },
  { v: '82km', l: { en: 'Roads Paved', hi: 'सड़कें बनीं' }, c: '#E65100' },
  { v: '150+', l: { en: 'Solar Lights', hi: 'सौर बत्तियां' }, c: '#FFB300' },
  { v: '₹2.1Cr', l: { en: 'Women Revenue', hi: 'महिला राजस्व' }, c: '#880E4F' },
]

export default function Dashboard() {
  const { language } = useApp()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="dashboard" className="py-24 bg-primary-50/50 dark:bg-[#050f06] relative overflow-hidden" ref={ref}>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full blur-3xl opacity-20 bg-primary-300 dark:bg-primary-900" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <div className="section-tag mx-auto mb-4">
            <span>📊</span>
            <span>{language === 'en' ? 'Data & Impact' : 'डेटा और प्रभाव'}</span>
          </div>
          <h2 className="section-title">
            {language === 'en' ? 'Village Impact Dashboard' : 'ग्राम प्रभाव डैशबोर्ड'}
          </h2>
          <p className="section-sub mx-auto mt-4 text-center">
            {language === 'en'
              ? 'Real data, real impact — tracking progress across every sector of village development.'
              : 'वास्तविक डेटा, वास्तविक प्रभाव — विकास के हर क्षेत्र में प्रगति की निगरानी।'}
          </p>
        </motion.div>

        {/* KPI row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {kpis.map((k, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="glass-card rounded-2xl p-4 text-center shadow-card"
            >
              <div className="text-3xl font-black font-poppins" style={{ color: k.c }}>{k.v}</div>
              <div className="text-xs font-inter text-gray-500 dark:text-gray-400 mt-1">{k.l[language]}</div>
            </motion.div>
          ))}
        </div>

        {/* Charts grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {charts.map(chart => (
            <ChartCard key={chart.id} chart={chart} inView={inView} language={language} />
          ))}
        </div>

        {/* Radar chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="glass-card rounded-3xl p-6 sm:p-10 shadow-card"
        >
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-1">
              <h3 className="font-poppins font-bold text-gray-800 dark:text-gray-100 text-xl mb-2">
                {language === 'en' ? 'Village Development Index' : 'ग्राम विकास सूचकांक'}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-inter mb-4 max-w-xs">
                {language === 'en'
                  ? 'A composite view of development across all six sectors, benchmarked against national average of 55%.'
                  : 'छह क्षेत्रों में विकास का समग्र दृष्टिकोण।'}
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                {radarData.map(r => (
                  <div key={r.subject} className="flex items-center gap-2 bg-primary-50 dark:bg-primary-950/50 rounded-xl px-3 py-1.5">
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: r.value >= 90 ? '#2E7D32' : r.value >= 75 ? '#4CAF50' : '#FFB300' }}
                    />
                    <span className="text-xs font-inter text-gray-700 dark:text-gray-300">{r.subject}</span>
                    <span className="text-xs font-bold font-poppins text-primary-700 dark:text-primary-400">{r.value}%</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-80 h-64">
              {inView && (
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="rgba(76,175,80,0.2)" />
                    <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11, fill: '#666' }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 9, fill: '#999' }} />
                    <Radar name="Score" dataKey="value" stroke="#2E7D32" fill="#4CAF50" fillOpacity={0.35} />
                  </RadarChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
