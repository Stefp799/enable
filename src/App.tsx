import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProblemsSection from './components/ProblemsSection'
import TestimonialSection from './components/TestimonialSection'
import PartnershipsSection from './components/PartnershipsSection'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProblemsSection />
      <TestimonialSection />
      <PartnershipsSection />
    </div>
  )
}

export default App