import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProblemsSection from './components/ProblemsSection'
import TestimonialSection from './components/TestimonialSection'
import PartnershipsSection from './components/PartnershipsSection'
import Services from './pages/Services'

// Homepage component
const HomePage = () => (
  <div className="min-h-screen bg-white">
    <Header />
    <HeroSection />
    <ProblemsSection />
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