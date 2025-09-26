import { Routes, Route } from 'react-router-dom'
import Services from './pages/Services'
import Home from './pages/Home'
import ZohoConsulting from './pages/ZohoConsulting'
import ZohoDeveloper from './pages/ZohoDeveloper'
import ZohoApps from './pages/ZohoApps'
import ZohoOne from './pages/ZohoOne'
import ZohoOneCompleteGuide from './pages/ZohoOneCompleteGuide'
import EmilyFlynnAI from './components/EmilyFlynnAI'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/zoho-consulting" element={<ZohoConsulting />} />
        <Route path="/services/zoho-developer" element={<ZohoDeveloper />} />
        <Route path="/zoho-apps" element={<ZohoApps />} />
        <Route path="/zoho-apps/zoho-one" element={<ZohoOne />} />
        <Route path="/zoho-apps/zoho-one-complete-guide" element={<ZohoOneCompleteGuide />} />
      </Routes>
      <EmilyFlynnAI />
    </div>
  )
}

export default App
