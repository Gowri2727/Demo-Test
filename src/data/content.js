// ─── Chart data ────────────────────────────────────────────────
export const chartData = {
  education: [
    { year: '2018', enrollment: 72 }, { year: '2019', enrollment: 76 },
    { year: '2020', enrollment: 79 }, { year: '2021', enrollment: 82 },
    { year: '2022', enrollment: 88 }, { year: '2023', enrollment: 92 },
    { year: '2024', enrollment: 96 },
  ],
  income: [
    { year: '2018', income: 45 }, { year: '2019', income: 52 },
    { year: '2020', income: 56 }, { year: '2021', income: 65 },
    { year: '2022', income: 78 }, { year: '2023', income: 90 },
    { year: '2024', income: 108 },
  ],
  roads: [
    { year: '2018', km: 12 }, { year: '2019', km: 18 },
    { year: '2020', km: 28 }, { year: '2021', km: 38 },
    { year: '2022', km: 52 }, { year: '2023', km: 68 },
    { year: '2024', km: 82 },
  ],
  internet: [
    { year: '2018', pct: 15 }, { year: '2019', pct: 22 },
    { year: '2020', pct: 35 }, { year: '2021', pct: 48 },
    { year: '2022', pct: 60 }, { year: '2023', pct: 70 },
    { year: '2024', pct: 78 },
  ],
}

// ─── Timeline milestones ────────────────────────────────────────
export const timelineMilestones = [
  {
    year: '2018', emoji: '🌱', color: '#4CAF50',
    titleEn: 'Foundation Laid', titleHi: 'नींव रखी गई',
    descEn: 'Panchayat Development Plan approved. Village electrification completed. New primary school building constructed with two additional classrooms.',
    descHi: 'पंचायत विकास योजना स्वीकृत। गांव का विद्युतीकरण पूर्ण। नए प्राथमिक विद्यालय भवन का निर्माण।',
    achievements: ['100% Electrification', 'New School Building', 'Panchayat Master Plan'],
  },
  {
    year: '2020', emoji: '💧', color: '#2196F3',
    titleEn: 'Water & Connectivity', titleHi: 'जल एवं संपर्क',
    descEn: 'Modern drip irrigation installed for 250+ farmers. 28 km of rural roads paved. Primary healthcare center upgraded to full PHC standard.',
    descHi: '250+ किसानों के लिए ड्रिप सिंचाई। 28 किमी ग्रामीण सड़कें। प्राथमिक स्वास्थ्य केंद्र उन्नत।',
    achievements: ['250 Farmer Irrigation', '28 km Roads Paved', 'PHC Upgraded'],
  },
  {
    year: '2022', emoji: '☀️', color: '#FFB300',
    titleEn: 'Solar Revolution', titleHi: 'सौर क्रांति',
    descEn: '150 solar streetlights installed across all wards. Digital service center opened. Secondary school smart classrooms launched with 40 tablets.',
    descHi: '150 सौर स्ट्रीट लाइटें। डिजिटल सेवा केंद्र। स्मार्ट कक्षाएं 40 टैबलेट के साथ।',
    achievements: ['150 Solar Lights', 'Digital Service Center', 'Smart Classrooms'],
  },
  {
    year: '2024', emoji: '📡', color: '#9C27B0',
    titleEn: 'Digital Leap', titleHi: 'डिजिटल छलांग',
    descEn: 'High-speed broadband reaches 78% of homes. Women SHG groups digitized. FarmerConnect App launched with 340 active users.',
    descHi: '78% घरों में हाई-स्पीड इंटरनेट। महिला SHG डिजिटाइज़। FarmerConnect ऐप लॉन्च।',
    achievements: ['78% Broadband', '420 Women Empowered', 'FarmerConnect App'],
  },
  {
    year: '2030', emoji: '🏆', color: '#E91E63', isVision: true,
    titleEn: 'Vision 2030', titleHi: 'विजन 2030',
    descEn: 'Target: 100% renewable energy village, zero poverty index, complete digital inclusion, and become a replicable model for rural India.',
    descHi: 'लक्ष्य: 100% नवीकरणीय ऊर्जा, शून्य गरीबी, पूर्ण डिजिटल समावेश और राष्ट्रीय मॉडल।',
    achievements: ['100% Renewable', 'Zero Poverty Goal', 'National Model Village'],
  },
]

// ─── Development Pillars ────────────────────────────────────────
export const pillarsData = [
  {
    id: 'education', icon: '🎓',
    titleEn: 'Education', titleHi: 'शिक्षा',
    descEn: 'Smart classrooms, digital resources, and scholarship programs ensuring every child gets quality education on par with urban schools.',
    descHi: 'स्मार्ट कक्षाएं, डिजिटल संसाधन और छात्रवृत्ति कार्यक्रम।',
    achievements: ['3 Smart Schools', '96% Enrollment', '₹50L Scholarships', 'Computer Labs'],
    from: '#3F51B5', to: '#5C6BC0', light: 'rgba(63,81,181,0.08)',
  },
  {
    id: 'agriculture', icon: '🌾',
    titleEn: 'Agriculture', titleHi: 'कृषि',
    descEn: 'Modern irrigation, organic farming training, and Farmer Producer Organisation support have more than doubled farmer incomes since 2018.',
    descHi: 'आधुनिक सिंचाई, जैविक खेती प्रशिक्षण और FPO सहायता।',
    achievements: ['2.4× Income Growth', 'Drip Irrigation', 'FPO Formation', 'Organic Certified'],
    from: '#2E7D32', to: '#4CAF50', light: 'rgba(46,125,50,0.08)',
  },
  {
    id: 'infrastructure', icon: '🏗️',
    titleEn: 'Infrastructure', titleHi: 'बुनियादी ढांचा',
    descEn: 'All-weather roads, solar streetlights, modern health center, and community halls connecting every neighbourhood of the village.',
    descHi: 'पक्की सड़कें, सौर प्रकाश, आधुनिक स्वास्थ्य केंद्र।',
    achievements: ['82 km Roads', '150 Solar Lights', 'Modern PHC', '4 Community Halls'],
    from: '#E65100', to: '#FF9800', light: 'rgba(230,81,0,0.08)',
  },
  {
    id: 'digital', icon: '💻',
    titleEn: 'Digital Governance', titleHi: 'डिजिटल गवर्नेंस',
    descEn: 'CSC center, e-governance training, online service delivery, and broadband connectivity empowering every citizen.',
    descHi: 'CSC केंद्र, ई-गवर्नेंस प्रशिक्षण, ऑनलाइन सेवाएं।',
    achievements: ['78% Online', 'CSC Center', '200+ e-Services', 'Free WiFi Zones'],
    from: '#6A1B9A', to: '#9C27B0', light: 'rgba(106,27,154,0.08)',
  },
]

// ─── Success stories ────────────────────────────────────────────
export const successStories = [
  {
    id: 'farming',
    img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=640&q=80',
    catEn: '🌾 Agriculture', catHi: '🌾 कृषि',
    titleEn: 'Smart Farming Revolution', titleHi: 'स्मार्ट खेती क्रांति',
    quote: '"The drip irrigation system changed everything. My water usage dropped 60% and my yield doubled in just two seasons."',
    author: '— Ramesh Patel, Farmer since 1998',
    stats: [
      { v: '2.4×', l: 'Income Growth' }, { v: '340', l: 'Farmers Trained' }, { v: '60%', l: 'Water Saved' },
    ],
    from: '#1B5E20', to: '#2E7D32',
  },
  {
    id: 'classroom',
    img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=640&q=80',
    catEn: '📚 Education', catHi: '📚 शिक्षा',
    titleEn: 'Digital Classroom Initiative', titleHi: 'डिजिटल कक्षा पहल',
    quote: '"My students now have access to the best content from anywhere. Their test scores jumped 35% this year alone."',
    author: '— Priya Sharma, Teacher, Govt School',
    stats: [
      { v: '96%', l: 'Enrollment Rate' }, { v: '3', l: 'Smart Schools' }, { v: '+35%', l: 'Test Scores' },
    ],
    from: '#0D47A1', to: '#1565C0',
  },
  {
    id: 'women',
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=640&q=80',
    catEn: '👩‍💼 Empowerment', catHi: '👩‍💼 सशक्तिकरण',
    titleEn: 'Women Entrepreneurship', titleHi: 'महिला उद्यमिता',
    quote: '"The SHG training program gave me skills to start my own tailoring unit. I now employ 8 women from my village."',
    author: '— Savita Devi, SHG Leader',
    stats: [
      { v: '420', l: 'Women Trained' }, { v: '68', l: 'New Businesses' }, { v: '₹2.1Cr', l: 'Revenue' },
    ],
    from: '#880E4F', to: '#C2185B',
  },
]

// ─── Gallery images ─────────────────────────────────────────────
export const galleryImages = [
  { id: 1,  cat: 'agriculture',  title: 'Drip Irrigation Fields',   url: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=500&q=75', tall: true  },
  { id: 2,  cat: 'education',    title: 'Smart Classroom',           url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=500&q=75', tall: false },
  { id: 3,  cat: 'infrastructure',title:'Village Paved Roads',       url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=500&q=75', tall: true  },
  { id: 4,  cat: 'community',    title: 'Community Meeting',         url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&q=75', tall: false },
  { id: 5,  cat: 'agriculture',  title: 'Organic Farm',              url: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=500&q=75', tall: false },
  { id: 6,  cat: 'infrastructure',title:'Solar Street Lights',       url: 'https://images.unsplash.com/photo-1497436072909-60f360ba1ca5?auto=format&fit=crop&w=500&q=75', tall: true  },
  { id: 7,  cat: 'education',    title: 'School Children',           url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=500&q=75', tall: true  },
  { id: 8,  cat: 'community',    title: "Women's SHG Group",         url: 'https://images.unsplash.com/photo-1522661067900-ab829854a57f?auto=format&fit=crop&w=500&q=75', tall: false },
  { id: 9,  cat: 'agriculture',  title: 'Harvest Season',            url: 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&w=500&q=75', tall: false },
  { id: 10, cat: 'infrastructure',title:'Health Centre',             url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=500&q=75', tall: true  },
  { id: 11, cat: 'education',    title: 'Computer Lab',              url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=75', tall: false },
  { id: 12, cat: 'community',    title: 'Village Festival',          url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=500&q=75', tall: false },
]

// ─── Sustainability goals ────────────────────────────────────────
export const sustainabilityGoals = [
  { id: 'solar',   icon: '☀️', titleEn: 'Solar Energy Expansion',  titleHi: 'सौर ऊर्जा विस्तार',   progress: 72, target: '100% Renewable',    color: '#FFB300', trackColor: '#FFF8E1' },
  { id: 'water',   icon: '💧', titleEn: 'Water Conservation',       titleHi: 'जल संरक्षण',           progress: 65, target: '50% Usage Reduction', color: '#2196F3', trackColor: '#E3F2FD' },
  { id: 'waste',   icon: '♻️', titleEn: 'Waste Management',         titleHi: 'कचरा प्रबंधन',         progress: 58, target: 'Zero Landfill Goal',  color: '#4CAF50', trackColor: '#E8F5E9' },
  { id: 'digital', icon: '📱', titleEn: 'Digital Inclusion',        titleHi: 'डिजिटल समावेश',        progress: 78, target: '100% Connected',      color: '#9C27B0', trackColor: '#F3E5F5' },
]

// ─── Testimonials ────────────────────────────────────────────────
export const testimonials = [
  {
    id: 't1', initials: 'RP', rating: 5,
    nameEn: 'Ramesh Patel',    nameHi: 'रमेश पटेल',
    roleEn: 'Farmer',          roleHi: 'किसान',
    location: 'Ward 3, Suryapura',
    quote: 'The transformation of Suryapura has changed my life completely. With smart irrigation, my income tripled and my children now study in a proper school with computers.',
    from: '#2E7D32', to: '#4CAF50',
  },
  {
    id: 't2', initials: 'PS', rating: 5,
    nameEn: 'Priya Sharma',    nameHi: 'प्रिया शर्मा',
    roleEn: 'School Teacher',  roleHi: 'विद्यालय शिक्षिका',
    location: 'Govt Primary School',
    quote: 'The digital classrooms have revolutionized how I teach. Students are more engaged, scores have improved, and we are connected to resources that city schools have.',
    from: '#1565C0', to: '#1976D2',
  },
  {
    id: 't3', initials: 'AK', rating: 5,
    nameEn: 'Arjun Kumar',     nameHi: 'अर्जुन कुमार',
    roleEn: 'Class 10 Student', roleHi: 'कक्षा 10 छात्र',
    location: 'Suryapura Secondary School',
    quote: 'I used to walk 5 km to use a library. Now I have the internet at home and can study anything I want. I want to become an engineer and help my village!',
    from: '#6A1B9A', to: '#7B1FA2',
  },
  {
    id: 't4', initials: 'SD', rating: 5,
    nameEn: 'Savita Devi',      nameHi: 'सविता देवी',
    roleEn: 'Entrepreneur',     roleHi: 'उद्यमी महिला',
    location: 'Ward 7, Suryapura',
    quote: 'The SHG training and micro-loan program helped me start my tailoring unit. I now have 8 employees and supply products to shops in three nearby cities.',
    from: '#880E4F', to: '#C2185B',
  },
]

// ─── Leadership ──────────────────────────────────────────────────
export const leadershipData = {
  name: 'Rajesh Kumar',
  titleEn: 'Village Development Ambassador & Sarpanch',
  titleHi: 'ग्राम विकास दूत एवं सरपंच',
  since: 'Serving since 2016',
  vision: '"Every child in Suryapura should have the same opportunities as children in the best cities. Every farmer should earn fairly for their hard work. Every citizen should be connected, heard, and empowered to shape their future."',
  initiatives: [
    { icon: '🏫', en: 'School 2X Program', hi: 'स्कूल 2X कार्यक्रम', desc: 'Doubled school capacity in 4 years' },
    { icon: '💧', en: 'Jal Jeevan Mission', hi: 'जल जीवन मिशन', desc: 'Piped water to 100% of households' },
    { icon: '⚡', en: 'Solar Village 2030', hi: 'सोलर विलेज 2030', desc: 'Rooftop solar on all public buildings' },
    { icon: '📱', en: 'Digital Suryapura', hi: 'डिजिटल सूर्यपुरा', desc: 'Free Wi-Fi in all public spaces' },
  ],
  message: 'Suryapura is not just a village—it is a promise. A promise that rural India can lead, not just follow. We are building a future where our young people choose to stay here, because the opportunities they deserve are right here.',
  awards: ['National Panchayat Award 2023', 'Digital India Champion 2022', 'Green Village Initiative 2021'],
}

// ─── Contact ────────────────────────────────────────────────────
export const contactData = {
  phone: '+91 99876 54321',
  email: 'panchayat@suryapura2030.in',
  address: 'Suryapura Gram Panchayat, Block Rd\nDist. Gonda, Uttar Pradesh – 271001',
  hours: 'Mon–Sat: 9:00 AM – 5:00 PM',
}

// ─── Footer links ─────────────────────────────────────────────────
export const footerLinks = {
  quick: [
    { l: 'Home', h: '#' }, { l: 'Timeline', h: '#timeline' },
    { l: 'Impact Dashboard', h: '#dashboard' }, { l: 'Development Pillars', h: '#pillars' },
    { l: 'Success Stories', h: '#stories' }, { l: 'Gallery', h: '#gallery' },
  ],
  resources: [
    { l: 'Panchayat Documents', h: '#' }, { l: 'Budget Reports', h: '#' },
    { l: 'Scheme Information', h: '#' }, { l: 'MGNREGA Updates', h: '#' }, { l: 'RTI Portal', h: '#' },
  ],
  programs: [
    { l: 'PM Awas Yojana', h: '#' }, { l: 'PM Kisan Samman', h: '#' },
    { l: 'Digital India', h: '#' }, { l: 'Swachh Bharat', h: '#' }, { l: 'Jal Jeevan Mission', h: '#' },
  ],
}
