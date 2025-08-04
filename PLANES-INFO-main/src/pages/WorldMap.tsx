import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Plane, Globe } from 'lucide-react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { aircraftData, Aircraft } from '../data/aircraft'
import 'leaflet/dist/leaflet.css'

// Fix for default markers in React Leaflet
import L from 'leaflet'
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

const WorldMap = () => {
  const [selectedType, setSelectedType] = useState<string>('all')
  const [filteredAircraft, setFilteredAircraft] = useState<Aircraft[]>(aircraftData)

  useEffect(() => {
    if (selectedType === 'all') {
      setFilteredAircraft(aircraftData)
    } else {
      setFilteredAircraft(aircraftData.filter(aircraft => aircraft.type === selectedType))
    }
  }, [selectedType])

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'commercial':
        return '#3b82f6' // blue
      case 'military':
        return '#ef4444' // red
      case 'private':
        return '#10b981' // green
      case 'helicopter':
        return '#8b5cf6' // purple
      default:
        return '#6b7280' // gray
    }
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
            Aircraft <span className="gradient-text">World Map</span>
          </h1>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            Explore the global origins of aircraft manufacturing and discover where the world's most iconic planes are built.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {aircraftTypes.map((type) => (
              <button
                key={type.value}
                onClick={() => setSelectedType(type.value)}
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

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <div className="card max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-4 text-center">Legend</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { type: 'commercial', label: 'Commercial Aircraft' },
                { type: 'military', label: 'Military Aircraft' },
                { type: 'private', label: 'Private Jets' },
                { type: 'helicopter', label: 'Helicopters' },
              ].map((item) => (
                <div key={item.type} className="flex items-center space-x-2">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: getTypeColor(item.type) }}
                  />
                  <span className="text-sm text-dark-300">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="card p-0 overflow-hidden"
        >
          <div className="h-[600px] w-full">
            <MapContainer
              center={[20, 0]}
              zoom={2}
              style={{ height: '100%', width: '100%' }}
              className="rounded-lg"
            >
              <TileLayer
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              />
              
              {filteredAircraft.map((aircraft) => (
                <Marker
                  key={aircraft.id}
                  position={aircraft.coordinates}
                  icon={L.divIcon({
                    className: 'custom-marker',
                    html: `<div style="
                      width: 20px;
                      height: 20px;
                      background-color: ${getTypeColor(aircraft.type)};
                      border: 2px solid white;
                      border-radius: 50%;
                      box-shadow: 0 2px 4px rgba(0,0,0,0.3);
                      cursor: pointer;
                    "></div>`,
                    iconSize: [20, 20],
                    iconAnchor: [10, 10],
                  })}
                >
                  <Popup className="aircraft-popup">
                    <div className="p-4 bg-dark-900 text-white rounded-lg">
                      <div className="flex items-center space-x-3 mb-3">
                        <img
                          src={aircraft.image}
                          alt={aircraft.name}
                          className="w-16 h-12 object-cover rounded"
                        />
                        <div>
                          <h3 className="font-semibold text-lg">{aircraft.name}</h3>
                          <p className="text-sm text-dark-300">{aircraft.manufacturer}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-dark-300">Type:</span>
                          <span className="capitalize">{aircraft.type}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-dark-300">Year:</span>
                          <span>{aircraft.year}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-dark-300">Max Speed:</span>
                          <span>{aircraft.specs.maxSpeed} km/h</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-dark-300">Range:</span>
                          <span>{aircraft.specs.range.toLocaleString()} km</span>
                        </div>
                      </div>
                      
                      <div className="mt-3 pt-3 border-t border-dark-700">
                        <span className="inline-block px-2 py-1 bg-primary-600 text-white text-xs rounded capitalize">
                          {aircraft.type}
                        </span>
                      </div>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card text-center">
              <Globe className="h-8 w-8 text-primary-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">{filteredAircraft.length}</h3>
              <p className="text-dark-300">Aircraft Shown</p>
            </div>
            
            <div className="card text-center">
              <MapPin className="h-8 w-8 text-primary-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">
                {new Set(filteredAircraft.map(a => a.country)).size}
              </h3>
              <p className="text-dark-300">Countries</p>
            </div>
            
            <div className="card text-center">
              <Plane className="h-8 w-8 text-primary-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">
                {new Set(filteredAircraft.map(a => a.manufacturer)).size}
              </h3>
              <p className="text-dark-300">Manufacturers</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default WorldMap