import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, MapPin, Calendar, Zap, Users, Settings, Award, Lightbulb } from 'lucide-react'
import { getAircraftById } from '../data/aircraft'

const AircraftDetail = () => {
  const { id } = useParams<{ id: string }>()
  const aircraft = getAircraftById(id || '')

  if (!aircraft) {
    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Aircraft not found</h1>
          <Link to="/aircraft" className="btn-primary">
            Back to Aircraft List
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark-950 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/aircraft"
            className="inline-flex items-center space-x-2 text-dark-300 hover:text-white transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Aircraft List</span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="relative">
              <img
                src={aircraft.image}
                alt={aircraft.name}
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-block px-4 py-2 bg-primary-600 text-white rounded-full capitalize font-medium">
                  {aircraft.type}
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-aviation font-bold mb-4">
                  {aircraft.name}
                </h1>
                <p className="text-2xl text-primary-400 font-semibold mb-4">
                  {aircraft.manufacturer}
                </p>
                <p className="text-xl text-dark-300 mb-6">
                  {aircraft.category}
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-primary-400" />
                  <div>
                    <p className="text-sm text-dark-400">Year</p>
                    <p className="font-semibold">{aircraft.year}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary-400" />
                  <div>
                    <p className="text-sm text-dark-400">Country</p>
                    <p className="font-semibold">{aircraft.country}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="h-5 w-5 text-primary-400" />
                  <div>
                    <p className="text-sm text-dark-400">Max Speed</p>
                    <p className="font-semibold">{aircraft.specs.maxSpeed} km/h</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Settings className="h-5 w-5 text-primary-400" />
                  <div>
                    <p className="text-sm text-dark-400">Engines</p>
                    <p className="font-semibold">{aircraft.specs.engines}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-aviation font-bold mb-8">
            <span className="gradient-text">Specifications</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="text-lg font-semibold mb-4">Performance</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-dark-300">Max Speed:</span>
                  <span className="font-semibold">{aircraft.specs.maxSpeed} km/h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark-300">Range:</span>
                  <span className="font-semibold">{aircraft.specs.range.toLocaleString()} km</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark-300">Ceiling:</span>
                  <span className="font-semibold">{aircraft.specs.ceiling.toLocaleString()} m</span>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold mb-4">Dimensions</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-dark-300">Length:</span>
                  <span className="font-semibold">{aircraft.specs.length} m</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark-300">Wingspan:</span>
                  <span className="font-semibold">{aircraft.specs.wingspan} m</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark-300">Height:</span>
                  <span className="font-semibold">{aircraft.specs.height} m</span>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold mb-4">Weight & Power</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-dark-300">Weight:</span>
                  <span className="font-semibold">{aircraft.specs.weight.toLocaleString()} kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark-300">Engines:</span>
                  <span className="font-semibold">{aircraft.specs.engines}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark-300">Engine Type:</span>
                  <span className="font-semibold">{aircraft.specs.engineType}</span>
                </div>
                {aircraft.specs.passengers && (
                  <div className="flex justify-between">
                    <span className="text-dark-300">Passengers:</span>
                    <span className="font-semibold">{aircraft.specs.passengers}</span>
                  </div>
                )}
                {aircraft.specs.crew && (
                  <div className="flex justify-between">
                    <span className="text-dark-300">Crew:</span>
                    <span className="font-semibold">{aircraft.specs.crew}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* History */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-aviation font-bold mb-8">
            <span className="gradient-text">History</span>
          </h2>
          <div className="card">
            <p className="text-lg leading-relaxed text-dark-200">
              {aircraft.history}
            </p>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-aviation font-bold mb-8 flex items-center">
            <Award className="h-8 w-8 text-primary-400 mr-3" />
            <span className="gradient-text">Achievements</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {aircraft.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="card"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-dark-200">{achievement}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-aviation font-bold mb-8 flex items-center">
            <Lightbulb className="h-8 w-8 text-primary-400 mr-3" />
            <span className="gradient-text">Fun Facts</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {aircraft.funFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="card bg-gradient-to-r from-primary-600/10 to-accent-600/10 border-primary-500/30"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-dark-200">{fact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Variants and Operators */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div>
            <h2 className="text-2xl font-aviation font-bold mb-6">
              <span className="gradient-text">Variants</span>
            </h2>
            <div className="card">
              <div className="flex flex-wrap gap-2">
                {aircraft.variants.map((variant, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-dark-700 text-white rounded-full text-sm"
                  >
                    {variant}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-aviation font-bold mb-6">
              <span className="gradient-text">Operators</span>
            </h2>
            <div className="card">
              <div className="flex flex-wrap gap-2">
                {aircraft.operators.map((operator, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary-600/20 text-primary-400 rounded-full text-sm border border-primary-500/30"
                  >
                    {operator}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AircraftDetail