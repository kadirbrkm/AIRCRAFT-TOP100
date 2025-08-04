import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AircraftList from './pages/AircraftList'
import AircraftDetail from './pages/AircraftDetail'
import Compare from './pages/Compare'
import WorldMap from './pages/WorldMap'
import FunFacts from './pages/FunFacts'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-dark-950">
      <Navbar />
      <main className="pt-16">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aircraft" element={<AircraftList />} />
            <Route path="/aircraft/:id" element={<AircraftDetail />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/world-map" element={<WorldMap />} />
            <Route path="/fun-facts" element={<FunFacts />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default App