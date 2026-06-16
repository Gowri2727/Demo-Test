Suryapura 2030 — Smart Village Transformation Portal
A highly polished, award-winning React.js frontend for a model smart village transformation initiative.

🚀 Quick Start
bash
# Unzip and enter the project
unzip suryapura-2030-source.zip
cd suryapura-2030

# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

🏗️ Tech Stack
Technology	Version	Purpose
React	18.x	UI framework
Vite	5.x	Build tool + dev server
Tailwind CSS	3.x	Utility-first styling
Framer Motion	10.x	Animations
React Icons	5.x	Icon library
Recharts	2.x	Data charts

🎨 Design System
Colors:​

Primary: #2E7D32 (Deep Forest Green)
Secondary: #4CAF50 (Leaf Green)
Accent: #FFB300 (Golden Harvest)
Typography:​

Headings: Poppins (800 weight)
Body: Inter (400–600 weight)
Visual Style:​

Glassmorphism cards with backdrop-blur
Soft gradient overlays
16–24px border radius
Subtle box shadows with glow effects
Scroll-triggered Framer Motion animations
📁 Project Structure
code
suryapura-2030/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx            # Entry point
    ├── App.jsx             # Root component
    ├── index.css           # Global styles + Tailwind
    ├── context/
    │   └── AppContext.jsx  # Dark mode + Language state
    ├── data/
    │   └── content.js      # All static content / data
    └── components/
        ├── Navbar.jsx           # Sticky nav + dark/lang toggle
        ├── Hero.jsx             # Full-screen hero + animated counters
        ├── Timeline.jsx         # Interactive 2018–2030 timeline
        ├── Dashboard.jsx        # Recharts analytics dashboard
        ├── Pillars.jsx          # 4 development pillar cards
        ├── SuccessStories.jsx   # Impact story carousel
        ├── BeforeAfter.jsx      # Drag-to-compare split view
        ├── Gallery.jsx          # Masonry category gallery
        ├── Leadership.jsx       # Panchayat leadership profile
        ├── Sustainability.jsx   # SVG progress ring goals
        ├── Testimonials.jsx     # Citizen testimonial cards
        ├── Contact.jsx          # Contact form + map placeholder
        ├── Footer.jsx           # Multi-column footer + CTA
        ├── ScrollProgress.jsx   # Top scroll progress bar
        └── BackToTop.jsx        # Floating back-to-top button

✅ Sections Implemented
Section	Features
Navbar	Sticky glass, dark mode toggle, EN/HI language switcher, mobile hamburger
Hero	Animated counters, floating achievement badges, scroll indicator, glass stat dashboard
Timeline	5 milestones (2018–2030), AnimatePresence card, swipe navigation
Dashboard	4 Recharts (Area/Bar/Line/Radar), 4 KPI cards
Pillars	Education, Agriculture, Infrastructure, Digital Governance — hover effects
Success Stories	3 impact stories, quote carousel, featured quote block
Before vs After	Drag slider comparison + comparison lists
Gallery	Masonry grid, category filter tabs, zoom-on-hover
Leadership	Profile card, initiatives grid, community message
Sustainability	SVG animated progress rings, SDG badge row
Testimonials	4-card desktop grid, mobile carousel with arrows
Contact	Info cards, social links, contact form, map placeholder
Footer	CTA banner, 4-column links, social icons, copyright

🌟 Bonus Features
 Dark Mode Toggle — class-based, persisted to localStorage
 Language Switcher — English / Hindi (EN/HI) throughout
 Animated Statistics Counter — smooth count-up on scroll-into-view
 Scroll Progress Indicator — gradient bar at top (Framer Motion spring)
 Back-to-Top Button — animated floating button appears after scroll
📊 Production Build Output
code
dist/index.html                   1.28 kB │ gzip:   0.64 kB
dist/assets/index-B_cndbsr.css   43.76 kB │ gzip:   7.88 kB
dist/assets/index-CmZyVKJf.js   771.83 kB │ gzip: 221.26 kB
✓ built in 4.66s  (1144 modules transformed)

♿ Accessibility
Semantic HTML5 elements (<header>, <main>, <section>, <nav>, <footer>)
aria-label on interactive buttons
alt text on all images
Keyboard-navigable controls
WCAG AA contrast ratios on all text
Focus-visible outlines via Tailwind
📱 Responsive Breakpoints
Breakpoint	Layout
Mobile < 640px	Single column, touch carousel
Tablet 640–1024px	2-column grids
Desktop > 1024px	Full multi-column layouts

🌍 Customisation
Edit src/data/content.js to update:

Timeline milestones
Chart data
Success stories
Gallery images (uses Unsplash URLs)
Leadership info
Testimonials
Contact details
📄 License
Built for the Suryapura 2030 Smart Village Initiative.
© 2024 Suryapura Gram Panchayat — Demo / Showcase build.
