import { Routes, Route } from 'react-router-dom'
import Services from './pages/Services'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  )
}

export default App
