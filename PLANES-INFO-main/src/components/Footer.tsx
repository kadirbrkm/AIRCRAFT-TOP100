import { Link } from 'react-router-dom'
import { Plane, Github, Twitter, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-dark-900 border-t border-dark-700 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Plane className="h-6 w-6 text-primary-500" />
              <div>
                <h3 className="text-xl font-aviation font-bold gradient-text">
                  Top 100 Aircraft
                </h3>
                <p className="text-sm text-dark-300">
                  Exploring aviation excellence
                </p>
              </div>
            </div>
            <p className="text-dark-400 mb-4 max-w-md">
              Discover the world's most iconic aircraft, from commercial airliners to military fighters, 
              with detailed specifications, history, and interactive features.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-dark-400 hover:text-primary-500 transition-colors duration-200"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-dark-400 hover:text-primary-500 transition-colors duration-200"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-dark-400 hover:text-primary-500 transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-dark-400 hover:text-white transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/aircraft"
                  className="text-dark-400 hover:text-white transition-colors duration-200"
                >
                  Aircraft Database
                </Link>
              </li>
              <li>
                <Link
                  to="/compare"
                  className="text-dark-400 hover:text-white transition-colors duration-200"
                >
                  Compare Aircraft
                </Link>
              </li>
              <li>
                <Link
                  to="/world-map"
                  className="text-dark-400 hover:text-white transition-colors duration-200"
                >
                  World Map
                </Link>
              </li>
              <li>
                <Link
                  to="/fun-facts"
                  className="text-dark-400 hover:text-white transition-colors duration-200"
                >
                  Fun Facts
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/aircraft?type=commercial"
                  className="text-dark-400 hover:text-white transition-colors duration-200"
                >
                  Commercial Aircraft
                </Link>
              </li>
              <li>
                <Link
                  to="/aircraft?type=military"
                  className="text-dark-400 hover:text-white transition-colors duration-200"
                >
                  Military Aircraft
                </Link>
              </li>
              <li>
                <Link
                  to="/aircraft?type=private"
                  className="text-dark-400 hover:text-white transition-colors duration-200"
                >
                  Private Jets
                </Link>
              </li>
              <li>
                <Link
                  to="/aircraft?type=helicopter"
                  className="text-dark-400 hover:text-white transition-colors duration-200"
                >
                  Helicopters
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-dark-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-dark-400 text-sm">
            © 2024 Top 100 Aircraft. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-dark-400 hover:text-white text-sm transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-dark-400 hover:text-white text-sm transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-dark-400 hover:text-white text-sm transition-colors duration-200"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer