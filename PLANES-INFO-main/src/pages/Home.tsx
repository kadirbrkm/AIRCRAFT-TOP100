import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Search, Plane, Zap, Globe, Award } from 'lucide-react'
import { aircraftData } from '../data/aircraft'

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const featuredAircraft = aircraftData.slice(0, 6)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Navigate to aircraft page with search query
      window.location.href = `/aircraft?search=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 hero-gradient">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-950/50" />
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary-500/20 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-6"
            >
              <Plane className="h-16 w-16 text-primary-500 mx-auto" />
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-aviation font-bold mb-6">
              <span className="gradient-text">Top 100</span>
              <br />
              <span className="text-white">Aircraft</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-dark-300 mb-8 max-w-2xl mx-auto">
              Explore the world's most iconic aircraft, from commercial airliners to military fighters, 
              with detailed specifications, history, and interactive features.
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-dark-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search aircraft by name, manufacturer, or category..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-dark-800/80 backdrop-blur-sm border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md transition-colors duration-200"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {['commercial', 'military', 'private', 'helicopter'].map((type) => (
                <Link
                  key={type}
                  to={`/aircraft?type=${type}`}
                  className="px-6 py-3 bg-dark-800/80 backdrop-blur-sm border border-dark-600 rounded-lg text-white hover:bg-primary-600 hover:border-primary-500 transition-all duration-300 capitalize"
                >
                  {type} Aircraft
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-500 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-aviation font-bold mb-4">
              Why Choose <span className="gradient-text">Top 100 Aircraft</span>?
            </h2>
            <p className="text-xl text-dark-300 max-w-3xl mx-auto">
              Comprehensive database with interactive features, detailed specifications, 
              and fascinating aviation history at your fingertips.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: 'Comprehensive Database',
                description: 'Explore 100+ aircraft with detailed specifications, history, and achievements.'
              },
              {
                icon: Globe,
                title: 'Interactive World Map',
                description: 'Discover aircraft origins and manufacturing locations around the globe.'
              },
              {
                icon: Award,
                title: 'Compare & Analyze',
                description: 'Side-by-side comparison tool to evaluate different aircraft specifications.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-6 group-hover:bg-primary-500 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-dark-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Aircraft Section */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-aviation font-bold mb-4">
              Featured <span className="gradient-text">Aircraft</span>
            </h2>
            <p className="text-xl text-dark-300">
              Discover some of the most iconic aircraft in aviation history
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredAircraft.map((aircraft, index) => (
              <motion.div
                key={aircraft.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={aircraft.image}
                    alt={aircraft.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-3 py-1 bg-primary-600 text-white text-sm rounded-full capitalize">
                      {aircraft.type}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-400 transition-colors duration-200">
                  {aircraft.name}
                </h3>
                <p className="text-dark-300 mb-4">{aircraft.manufacturer}</p>
                
                <div className="flex justify-between items-center text-sm text-dark-400">
                  <span>{aircraft.year}</span>
                  <span>{aircraft.specs.maxSpeed} km/h</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/aircraft"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>View All Aircraft</span>
              <Plane className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home