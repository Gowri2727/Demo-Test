import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Timeline from './components/Timeline'
import Dashboard from './components/Dashboard'
import Pillars from './components/Pillars'
import SuccessStories from './components/SuccessStories'
import BeforeAfter from './components/BeforeAfter'
import Gallery from './components/Gallery'
import Leadership from './components/Leadership'
import Sustainability from './components/Sustainability'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#030a05] transition-colors duration-500 overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Timeline />
        <Dashboard />
        <Pillars />
        <SuccessStories />
        <BeforeAfter />
        <Gallery />
        <Leadership />
        <Sustainability />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
