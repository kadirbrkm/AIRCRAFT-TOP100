import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Plane, MapPin, Calendar, Zap } from 'lucide-react'
import { Aircraft } from '../data/aircraft'

interface AircraftCardProps {
  aircraft: Aircraft
}

const AircraftCard = ({ aircraft }: AircraftCardProps) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'commercial':
        return 'bg-blue-600'
      case 'military':
        return 'bg-red-600'
      case 'private':
        return 'bg-green-600'
      case 'helicopter':
        return 'bg-purple-600'
      default:
        return 'bg-gray-600'
    }
  }

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Link to={`/aircraft/${aircraft.id}`}>
        <div className="card h-full cursor-pointer group-hover:border-primary-500/50">
          {/* Image */}
          <div className="relative overflow-hidden rounded-lg mb-4">
            <img
              src={aircraft.image}
              alt={aircraft.name}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent" />
            
            {/* Type Badge */}
            <div className="absolute top-4 left-4">
              <span className={`inline-block px-3 py-1 ${getTypeColor(aircraft.type)} text-white text-sm rounded-full capitalize font-medium`}>
                {aircraft.type}
              </span>
            </div>

            {/* Speed Badge */}
            <div className="absolute top-4 right-4">
              <div className="flex items-center space-x-1 bg-dark-900/80 backdrop-blur-sm px-3 py-1 rounded-full">
                <Zap className="h-4 w-4 text-primary-400" />
                <span className="text-white text-sm font-medium">
                  {aircraft.specs.maxSpeed} km/h
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold group-hover:text-primary-400 transition-colors duration-200 line-clamp-2">
              {aircraft.name}
            </h3>
            
            <p className="text-dark-300 font-medium">
              {aircraft.manufacturer}
            </p>

            <p className="text-dark-400 text-sm line-clamp-2">
              {aircraft.category}
            </p>

            {/* Details */}
            <div className="flex items-center justify-between text-sm text-dark-400">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{aircraft.year}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>{aircraft.country}</span>
              </div>
            </div>

            {/* Specs Preview */}
            <div className="grid grid-cols-2 gap-2 text-xs text-dark-400">
              <div>
                <span className="font-medium">Range:</span> {aircraft.specs.range.toLocaleString()} km
              </div>
              <div>
                <span className="font-medium">Ceiling:</span> {aircraft.specs.ceiling.toLocaleString()} m
              </div>
              {aircraft.specs.passengers && (
                <div>
                  <span className="font-medium">Passengers:</span> {aircraft.specs.passengers}
                </div>
              )}
              <div>
                <span className="font-medium">Engines:</span> {aircraft.specs.engines}
              </div>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default AircraftCard