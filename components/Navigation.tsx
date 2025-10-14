'use client'

import { useState } from 'react'
import { Menu, X, MapPin, Bell, ShoppingCart, User } from 'lucide-react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-cult-black to-cult-yellow rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs sm:text-sm">N</span>
                </div>
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-cult-black">NEXUS</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-cult-black hover:text-cult-yellow px-3 py-2 text-sm font-medium">
                FITNESS
              </a>
              <a href="#" className="text-cult-black hover:text-cult-yellow px-3 py-2 text-sm font-medium">
                SPORTS
              </a>
              <a href="#" className="text-cult-black hover:text-cult-yellow px-3 py-2 text-sm font-medium">
                STORE
              </a>
            </div>
          </div>

          {/* Right side items */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <div className="flex items-center space-x-1 lg:space-x-2 text-gray-600">
              <MapPin className="w-3 h-3 lg:w-4 lg:h-4" />
              <span className="text-xs lg:text-sm">TIRUPUR</span>
            </div>
            <button className="bg-cult-yellow text-cult-black px-3 lg:px-4 py-1.5 lg:py-2 rounded-full text-xs lg:text-sm font-medium hover:bg-cult-dark-yellow transition-colors">
              GET APP
            </button>
            <button className="p-1.5 lg:p-2 text-gray-600 hover:text-gray-900">
              <Bell className="w-4 h-4 lg:w-5 lg:h-5" />
            </button>
            <button className="p-1.5 lg:p-2 text-gray-600 hover:text-gray-900">
              <ShoppingCart className="w-4 h-4 lg:w-5 lg:h-5" />
            </button>
            <button className="p-1.5 lg:p-2 text-gray-600 hover:text-gray-900">
              <User className="w-4 h-4 lg:w-5 lg:h-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <a href="#" className="text-cult-black hover:text-cult-yellow block px-3 py-2 text-base font-medium">
              FITNESS
            </a>
            <a href="#" className="text-cult-black hover:text-cult-yellow block px-3 py-2 text-base font-medium">
              SPORTS
            </a>
            <a href="#" className="text-cult-black hover:text-cult-yellow block px-3 py-2 text-base font-medium">
              STORE
            </a>
            <div className="flex items-center space-x-2 text-gray-600 px-3 py-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">TIRUPUR</span>
            </div>
            <button className="bg-cult-yellow text-cult-black px-4 py-2 rounded-full text-sm font-medium hover:bg-cult-dark-yellow transition-colors mx-3">
              GET APP
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
