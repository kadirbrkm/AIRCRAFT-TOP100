import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search, Filter, Plane } from 'lucide-react'
import { aircraftData, Aircraft } from '../data/aircraft'
import AircraftCard from '../components/AircraftCard'

const AircraftList = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [filteredAircraft, setFilteredAircraft] = useState<Aircraft[]>(aircraftData)

  const searchFromUrl = searchParams.get('search') || ''
  const typeFromUrl = searchParams.get('type') || 'all'

  useEffect(() => {
    setSearchQuery(searchFromUrl)
    setSelectedType(typeFromUrl)
  }, [searchFromUrl, typeFromUrl])

  useEffect(() => {
    let filtered = aircraftData

    // Filter by type
    if (selectedType !== 'all') {
      filtered = filtered.filter(aircraft => aircraft.type === selectedType)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(aircraft =>
        aircraft.name.toLowerCase().includes(query) ||
        aircraft.manufacturer.toLowerCase().includes(query) ||
        aircraft.category.toLowerCase().includes(query) ||
        aircraft.country.toLowerCase().includes(query)
      )
    }

    setFilteredAircraft(filtered)
  }, [searchQuery, selectedType])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams(searchParams)
    if (searchQuery.trim()) {
      params.set('search', searchQuery)
    } else {
      params.delete('search')
    }
    setSearchParams(params)
  }

  const handleTypeFilter = (type: string) => {
    setSelectedType(type)
    const params = new URLSearchParams(searchParams)
    if (type !== 'all') {
      params.set('type', type)
    } else {
      params.delete('type')
    }
    setSearchParams(params)
  }

  const aircraftTypes = [
    { value: 'all', label: 'All Aircraft', count: aircraftData.length },
    { value: 'commercial', label: 'Commercial', count: aircraftData.filter(a => a.type === 'commercial').length },
    { value: 'military', label: 'Military', count: aircraftData.filter(a => a.type === 'military').length },
    { value: 'private', label: 'Private Jets', count: aircraftData.filter(a => a.type === 'private').length },
    { value: 'helicopter', label: 'Helicopters', count: aircraftData.filter(a => a.type === 'helicopter').length },
  ]

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
            Aircraft <span className="gradient-text">Database</span>
          </h1>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            Explore our comprehensive collection of the world's most iconic aircraft, 
            from commercial airliners to military fighters and everything in between.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="mb-6">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-dark-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search aircraft by name, manufacturer, category, or country..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md transition-colors duration-200"
              >
                Search
              </button>
            </div>
          </form>

          {/* Type Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {aircraftTypes.map((type) => (
              <button
                key={type.value}
                onClick={() => handleTypeFilter(type.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedType === type.value
                    ? 'bg-primary-600 text-white'
                    : 'bg-dark-800 text-dark-300 hover:bg-dark-700 hover:text-white border border-dark-600'
                }`}
              >
                {type.label}
                <span className="ml-2 px-2 py-1 bg-dark-700 rounded-full text-xs">
                  {type.count}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8 text-center"
        >
          <p className="text-dark-300">
            Showing <span className="text-primary-400 font-semibold">{filteredAircraft.length}</span> aircraft
            {searchQuery && (
              <>
                {' '}for "<span className="text-primary-400 font-semibold">{searchQuery}</span>"
              </>
            )}
            {selectedType !== 'all' && (
              <>
                {' '}in <span className="text-primary-400 font-semibold capitalize">{selectedType}</span> category
              </>
            )}
          </p>
        </motion.div>

        {/* Aircraft Grid */}
        {filteredAircraft.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredAircraft.map((aircraft, index) => (
              <motion.div
                key={aircraft.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AircraftCard aircraft={aircraft} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center py-20"
          >
            <Plane className="h-16 w-16 text-dark-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">No aircraft found</h3>
            <p className="text-dark-300 mb-6">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchQuery('')
                setSelectedType('all')
                setSearchParams({})
              }}
              className="btn-secondary"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default AircraftList