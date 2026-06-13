import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'
import DoctorProfile from './components/DoctorProfile'
import HairServices from './components/HairServices'
import SkinServices from './components/SkinServices'
import EMISection from './components/EMISection'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import ConsultationForm from './components/ConsultationForm'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import LoadingScreen from './components/LoadingScreen'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {!loading && (
        <div className="w-full overflow-x-hidden">
          <Navbar />
          <main className="w-full overflow-x-hidden">
            <Hero />
            <WhyChooseUs />
            <DoctorProfile />
            <HairServices />
            <SkinServices />
            <EMISection />
            <Gallery />
            <Testimonials />
            <ConsultationForm />
            <Contact />
          </main>
          <Footer />
          <FloatingButtons />
        </div>
      )}
    </>
  )
}
