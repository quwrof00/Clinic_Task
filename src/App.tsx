import Hero from './components/Hero'
import WhySection from './components/WhySection'
import SpecializedTreatments from './components/SpecializedTreatments'
import TreatmentAccordion from './components/TreatmentAccordion'
import Testimonials from './components/Testimonials'
import DoctorsSection from './components/DoctorsSection'
import BlogsSection from './components/BlogsSection'
import FaqSection from './components/FaqSection'
import Footer from './components/Footer'
import ContactStrip from './components/ContactStrip'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className="flex flex-col w-full bg-bg-cream">
      <Navbar />
      <Hero />
      <SpecializedTreatments />
      <WhySection />
      <TreatmentAccordion />
      <Testimonials />
      <DoctorsSection />
      <FaqSection />
      <BlogsSection />
      <ContactStrip />
      <Footer />
    </div>
  )
}
