import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, ArrowRight, Zap, MapPin, Calendar, Settings, Users } from 'lucide-react'
import { aircraftData, Aircraft } from '../data/aircraft'

const Compare = () => {
  const [selectedAircraft1, setSelectedAircraft1] = useState<Aircraft | null>(null)
  const [selectedAircraft2, setSelectedAircraft2] = useState<Aircraft | null>(null)
  const [searchQuery1, setSearchQuery1] = useState('')
  const [searchQuery2, setSearchQuery2] = useState('')
  const [filteredAircraft1, setFilteredAircraft1] = useState<Aircraft[]>([])
  const [filteredAircraft2, setFilteredAircraft2] = useState<Aircraft[]>([])

  const handleSearch1 = (query: string) => {
    setSearchQuery1(query)
    if (query.trim()) {
      const filtered = aircraftData.filter(aircraft =>
        aircraft.name.toLowerCase().includes(query.toLowerCase()) ||
        aircraft.manufacturer.toLowerCase().includes(query.toLowerCase())
      )
      setFilteredAircraft1(filtered)
    } else {
      setFilteredAircraft1([])
    }
  }

  const handleSearch2 = (query: string) => {
    setSearchQuery2(query)
    if (query.trim()) {
      const filtered = aircraftData.filter(aircraft =>
        aircraft.name.toLowerCase().includes(query.toLowerCase()) ||
        aircraft.manufacturer.toLowerCase().includes(query.toLowerCase())
      )
      setFilteredAircraft2(filtered)
    } else {
      setFilteredAircraft2([])
    }
  }

  const selectAircraft1 = (aircraft: Aircraft) => {
    setSelectedAircraft1(aircraft)
    setSearchQuery1('')
    setFilteredAircraft1([])
  }

  const selectAircraft2 = (aircraft: Aircraft) => {
    setSelectedAircraft2(aircraft)
    setSearchQuery2('')
    setFilteredAircraft2([])
  }

  const clearSelection = (side: 1 | 2) => {
    if (side === 1) {
      setSelectedAircraft1(null)
    } else {
      setSelectedAircraft2(null)
    }
  }

  const getComparisonValue = (aircraft: Aircraft | null, field: keyof Aircraft['specs']) => {
    if (!aircraft) return 'N/A'
    const value = aircraft.specs[field]
    if (typeof value === 'number') {
      return value.toLocaleString()
    }
    return value
  }

  const getComparisonWinner = (value1: number, value2: number, higherIsBetter: boolean = true) => {
    if (value1 === value2) return 'tie'
    if (higherIsBetter) {
      return value1 > value2 ? 'left' : 'right'
    } else {
      return value1 < value2 ? 'left' : 'right'
    }
  }

  return (
    <div className="min-h-screen bg-dark-950 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-aviation font-bold mb-4">
            Compare <span className="gradient-text">Aircraft</span>
          </h1>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            Select two aircraft to compare their specifications, performance, and features side-by-side.
          </p>
        </motion.div>

        {/* Aircraft Selection */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        >
          {/* Aircraft 1 Selection */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-center">Aircraft 1</h2>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-dark-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for aircraft..."
                value={searchQuery1}
                onChange={(e) => handleSearch1(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Search Results */}
            {filteredAircraft1.length > 0 && (
              <div className="absolute z-10 w-full bg-dark-800 border border-dark-600 rounded-lg max-h-60 overflow-y-auto">
                {filteredAircraft1.map((aircraft) => (
                  <button
                    key={aircraft.id}
                    onClick={() => selectAircraft1(aircraft)}
                    className="w-full p-4 text-left hover:bg-dark-700 transition-colors duration-200 border-b border-dark-600 last:border-b-0"
                  >
                    <div className="font-semibold">{aircraft.name}</div>
                    <div className="text-sm text-dark-300">{aircraft.manufacturer}</div>
                  </button>
                ))}
              </div>
            )}

            {/* Selected Aircraft 1 */}
            {selectedAircraft1 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">{selectedAircraft1.name}</h3>
                  <button
                    onClick={() => clearSelection(1)}
                    className="text-dark-400 hover:text-white transition-colors duration-200"
                  >
                    ×
                  </button>
                </div>
                <img
                  src={selectedAircraft1.image}
                  alt={selectedAircraft1.name}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-dark-300">Manufacturer:</span>
                    <span>{selectedAircraft1.manufacturer}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-dark-300">Type:</span>
                    <span className="capitalize">{selectedAircraft1.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-dark-300">Year:</span>
                    <span>{selectedAircraft1.year}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Aircraft 2 Selection */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-center">Aircraft 2</h2>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-dark-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for aircraft..."
                value={searchQuery2}
                onChange={(e) => handleSearch2(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Search Results */}
            {filteredAircraft2.length > 0 && (
              <div className="absolute z-10 w-full bg-dark-800 border border-dark-600 rounded-lg max-h-60 overflow-y-auto">
                {filteredAircraft2.map((aircraft) => (
                  <button
                    key={aircraft.id}
                    onClick={() => selectAircraft2(aircraft)}
                    className="w-full p-4 text-left hover:bg-dark-700 transition-colors duration-200 border-b border-dark-600 last:border-b-0"
                  >
                    <div className="font-semibold">{aircraft.name}</div>
                    <div className="text-sm text-dark-300">{aircraft.manufacturer}</div>
                  </button>
                ))}
              </div>
            )}

            {/* Selected Aircraft 2 */}
            {selectedAircraft2 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">{selectedAircraft2.name}</h3>
                  <button
                    onClick={() => clearSelection(2)}
                    className="text-dark-400 hover:text-white transition-colors duration-200"
                  >
                    ×
                  </button>
                </div>
                <img
                  src={selectedAircraft2.image}
                  alt={selectedAircraft2.name}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-dark-300">Manufacturer:</span>
                    <span>{selectedAircraft2.manufacturer}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-dark-300">Type:</span>
                    <span className="capitalize">{selectedAircraft2.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-dark-300">Year:</span>
                    <span>{selectedAircraft2.year}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Comparison Table */}
        {selectedAircraft1 && selectedAircraft2 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Performance Comparison */}
            <div>
              <h2 className="text-2xl font-aviation font-bold mb-6">
                <span className="gradient-text">Performance Comparison</span>
              </h2>
              <div className="card overflow-hidden">
                <div className="grid grid-cols-3 gap-4 p-6">
                  <div className="text-center">
                    <h3 className="font-semibold mb-2">{selectedAircraft1.name}</h3>
                    <div className="w-16 h-16 mx-auto mb-2">
                      <img
                        src={selectedAircraft1.image}
                        alt={selectedAircraft1.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="text-center text-dark-400">
                    <ArrowRight className="h-8 w-8 mx-auto mb-2" />
                    <span className="text-sm">vs</span>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold mb-2">{selectedAircraft2.name}</h3>
                    <div className="w-16 h-16 mx-auto mb-2">
                      <img
                        src={selectedAircraft2.image}
                        alt={selectedAircraft2.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t border-dark-700">
                  {[
                    { label: 'Max Speed', field: 'maxSpeed', unit: 'km/h', higherIsBetter: true },
                    { label: 'Range', field: 'range', unit: 'km', higherIsBetter: true },
                    { label: 'Ceiling', field: 'ceiling', unit: 'm', higherIsBetter: true },
                    { label: 'Length', field: 'length', unit: 'm', higherIsBetter: false },
                    { label: 'Wingspan', field: 'wingspan', unit: 'm', higherIsBetter: false },
                    { label: 'Height', field: 'height', unit: 'm', higherIsBetter: false },
                    { label: 'Weight', field: 'weight', unit: 'kg', higherIsBetter: false },
                    { label: 'Engines', field: 'engines', unit: '', higherIsBetter: false },
                  ].map((spec) => {
                    const value1 = selectedAircraft1.specs[spec.field as keyof Aircraft['specs']] as number
                    const value2 = selectedAircraft2.specs[spec.field as keyof Aircraft['specs']] as number
                    const winner = getComparisonWinner(value1, value2, spec.higherIsBetter)
                    
                    return (
                      <div key={spec.field} className="grid grid-cols-3 gap-4 p-4 border-b border-dark-700 last:border-b-0">
                        <div className={`text-center ${winner === 'left' ? 'text-primary-400 font-semibold' : ''}`}>
                          {getComparisonValue(selectedAircraft1, spec.field as keyof Aircraft['specs'])} {spec.unit}
                        </div>
                        <div className="text-center text-dark-400 text-sm">
                          {spec.label}
                        </div>
                        <div className={`text-center ${winner === 'right' ? 'text-primary-400 font-semibold' : ''}`}>
                          {getComparisonValue(selectedAircraft2, spec.field as keyof Aircraft['specs'])} {spec.unit}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Engine Type</h3>
                <div className="card">
                  <div className="flex justify-between items-center">
                    <span>{selectedAircraft1.specs.engineType}</span>
                    <ArrowRight className="h-5 w-5 text-dark-400" />
                    <span>{selectedAircraft2.specs.engineType}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Country of Origin</h3>
                <div className="card">
                  <div className="flex justify-between items-center">
                    <span>{selectedAircraft1.country}</span>
                    <ArrowRight className="h-5 w-5 text-dark-400" />
                    <span>{selectedAircraft2.country}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Instructions */}
        {(!selectedAircraft1 || !selectedAircraft2) && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center py-20"
          >
            <div className="max-w-md mx-auto">
              <h3 className="text-2xl font-semibold mb-4">Select Aircraft to Compare</h3>
              <p className="text-dark-300 mb-6">
                Choose two aircraft from the search boxes above to see a detailed comparison of their specifications and performance.
              </p>
              <div className="flex justify-center space-x-4">
                <div className="w-4 h-4 bg-primary-500 rounded-full"></div>
                <div className="w-4 h-4 bg-accent-500 rounded-full"></div>
                <div className="w-4 h-4 bg-primary-500 rounded-full"></div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Compare