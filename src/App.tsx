import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProblemsSection from './components/ProblemsSection'
import TestimonialSection from './components/TestimonialSection'
import PartnershipsSection from './components/PartnershipsSection'
import { InteractiveAccordion } from './lib'
import { enableServicesAccordion } from './data/pageData'
import Services from './pages/Services'

// Homepage component
const HomePage = () => (
  <div className="min-h-screen bg-white">
    <Header />
    <HeroSection />
    <ProblemsSection />

    {/* Interactive Services Accordion */}
    <section className="py-16 bg-gray-50">
      <div className="mx-auto px-6" style={{maxWidth: '1260px'}}>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hover over each service to learn more about how we can help transform your business with Zoho
          </p>
        </div>
        <InteractiveAccordion items={enableServicesAccordion} className="h-96" />
      </div>
    </section>

    <TestimonialSection />
    <PartnershipsSection />
  </div>
)

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  )
}

export default App