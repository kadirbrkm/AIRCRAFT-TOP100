import { useState } from 'react'
import { motion } from 'framer-motion'
import { Lightbulb, Zap, Plane, Award, Clock, Users, Globe, TrendingUp } from 'lucide-react'

const FunFacts = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const funFacts = [
    {
      id: 1,
      category: 'speed',
      title: 'Speed Records',
      facts: [
        'The SR-71 Blackbird could fly at Mach 3.3 (3,540 km/h) - fast enough to outrun missiles!',
        'The Concorde could cross the Atlantic in just 3.5 hours, while regular jets take 7-8 hours.',
        'The fastest helicopter, the Eurocopter X3, reached 472 km/h in 2013.',
        'The Wright brothers\' first flight covered only 120 feet - shorter than a Boeing 747\'s wingspan!'
      ]
    },
    {
      id: 2,
      category: 'size',
      title: 'Size Matters',
      facts: [
        'The Airbus A380 is so large that its wingspan (79.8m) is longer than the Wright brothers\' first flight distance.',
        'A Boeing 747 can carry enough fuel to fly from New York to Tokyo non-stop.',
        'The Antonov An-225 Mriya is the largest aircraft ever built, with a wingspan of 88.4 meters.',
        'The smallest jet aircraft, the Bede BD-5, has a wingspan of only 4.27 meters.'
      ]
    },
    {
      id: 3,
      category: 'history',
      title: 'Historical Milestones',
      facts: [
        'The first commercial flight took place in 1914, carrying one passenger across Tampa Bay for $5.',
        'The Boeing 747 was originally designed to carry cargo, with passenger transport as a secondary consideration.',
        'The first supersonic passenger flight was in 1976 with the Concorde.',
        'The first helicopter flight was in 1939, but the concept was first sketched by Leonardo da Vinci in 1480.'
      ]
    },
    {
      id: 4,
      category: 'technology',
      title: 'Amazing Technology',
      facts: [
        'Modern aircraft can fly for over 20 hours non-stop, covering distances of 15,000+ km.',
        'The F-22 Raptor\'s radar cross-section is equivalent to a marble.',
        'Some aircraft can land and take off vertically, like the Harrier Jump Jet and F-35B.',
        'The Boeing 787 Dreamliner is made of 50% composite materials, making it lighter and more fuel-efficient.'
      ]
    },
    {
      id: 5,
      category: 'passengers',
      title: 'Passenger Facts',
      facts: [
        'The Airbus A380 can carry up to 853 passengers in a single-class configuration.',
        'The average commercial flight has about 150 passengers.',
        'The longest commercial flight route is Singapore to New York, covering 15,344 km.',
        'Some private jets can fly higher than commercial airliners, reaching altitudes of 15,000+ meters.'
      ]
    },
    {
      id: 6,
      category: 'military',
      title: 'Military Aviation',
      facts: [
        'The B-2 Spirit stealth bomber costs $2.1 billion per aircraft.',
        'The F-35 Lightning II is the most expensive weapons program in history.',
        'Some military aircraft can fly at altitudes of 25,000+ meters.',
        'The AC-130 gunship can stay airborne for over 12 hours providing close air support.'
      ]
    }
  ]

  const categories = [
    { value: 'all', label: 'All Facts', icon: Lightbulb },
    { value: 'speed', label: 'Speed', icon: Zap },
    { value: 'size', label: 'Size', icon: Plane },
    { value: 'history', label: 'History', icon: Clock },
    { value: 'technology', label: 'Technology', icon: TrendingUp },
    { value: 'passengers', label: 'Passengers', icon: Users },
    { value: 'military', label: 'Military', icon: Award }
  ]

  const filteredFacts = selectedCategory === 'all' 
    ? funFacts 
    : funFacts.filter(fact => fact.category === selectedCategory)

  const aviationStats = [
    {
      icon: Plane,
      number: '100,000+',
      label: 'Commercial Flights Daily',
      description: 'Every day, over 100,000 commercial flights take off worldwide'
    },
    {
      icon: Users,
      number: '4.5 Billion',
      label: 'Passengers Annually',
      description: 'The aviation industry carries billions of passengers each year'
    },
    {
      icon: Globe,
      number: '15,000+',
      label: 'Aircraft Types',
      description: 'There are thousands of different aircraft models in existence'
    },
    {
      icon: Clock,
      number: '1903',
      label: 'First Powered Flight',
      description: 'The Wright brothers made history with the first controlled flight'
    }
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
            Aviation <span className="gradient-text">Fun Facts</span>
          </h1>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            Discover fascinating trivia, amazing statistics, and incredible stories from the world of aviation.
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-aviation font-bold mb-8 text-center">
            <span className="gradient-text">Aviation Statistics</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aviationStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                className="card text-center group hover:border-primary-500/50"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-6 group-hover:bg-primary-500 transition-colors duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-2 gradient-text">{stat.number}</h3>
                <p className="text-lg font-semibold mb-2">{stat.label}</p>
                <p className="text-dark-300 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.value
                    ? 'bg-primary-600 text-white'
                    : 'bg-dark-800 text-dark-300 hover:bg-dark-700 hover:text-white border border-dark-600'
                }`}
              >
                <category.icon className="h-4 w-4" />
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Fun Facts Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-8"
        >
          {filteredFacts.map((factGroup, groupIndex) => (
            <motion.div
              key={factGroup.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 + groupIndex * 0.1 }}
              className="card"
            >
              <h3 className="text-2xl font-aviation font-bold mb-6 flex items-center">
                <Lightbulb className="h-6 w-6 text-primary-400 mr-3" />
                <span className="gradient-text">{factGroup.title}</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {factGroup.facts.map((fact, factIndex) => (
                  <motion.div
                    key={factIndex}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1 + groupIndex * 0.1 + factIndex * 0.1 }}
                    className="flex items-start space-x-3 p-4 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors duration-200"
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-dark-200 leading-relaxed">{fact}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Quiz Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16"
        >
          <div className="card text-center">
            <h2 className="text-3xl font-aviation font-bold mb-6">
              <span className="gradient-text">Did You Know?</span>
            </h2>
            <p className="text-lg text-dark-200 mb-8 max-w-3xl mx-auto">
              Aviation is full of incredible stories and amazing achievements. From the first powered flight 
              to modern supersonic jets, every aircraft has a unique story to tell.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gradient-to-br from-primary-600/10 to-transparent rounded-lg border border-primary-500/20">
                <Zap className="h-8 w-8 text-primary-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Speed</h3>
                <p className="text-dark-300 text-sm">
                  Modern aircraft can travel faster than the speed of sound and reach altitudes where the sky turns black.
                </p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-accent-600/10 to-transparent rounded-lg border border-accent-500/20">
                <Globe className="h-8 w-8 text-accent-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Global Reach</h3>
                <p className="text-dark-300 text-sm">
                  Aircraft connect every corner of the world, making global travel possible in hours instead of months.
                </p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-primary-600/10 to-transparent rounded-lg border border-primary-500/20">
                <Award className="h-8 w-8 text-primary-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Innovation</h3>
                <p className="text-dark-300 text-sm">
                  Aviation drives technological advancement, from materials science to computer systems and beyond.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default FunFacts