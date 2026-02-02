'use client'

import { useState } from 'react'
import { Menu, X, MapPin, Bell, ShoppingCart } from 'lucide-react'
import Image from 'next/image'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showLaunchingSoon, setShowLaunchingSoon] = useState(false)

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {/* Mobile Logo */}
              <div className="md:hidden relative h-8 w-8">
                <Image
                  src="/logo.png"
                  alt="Nexu Logo"
                  fill
                  className="object-contain"
                />
              </div>
              {/* Desktop Logo */}
              <div className="hidden md:block relative h-10 w-40">
                <Image
                  src="/logo-full.png"
                  alt="Nexu Fitness"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#membership" className="text-cult-black hover:text-cult-yellow px-3 py-2 text-sm font-medium">
                SUBSCRIPTION
              </a>
              <a href="#wellness" className="text-cult-black hover:text-cult-yellow px-3 py-2 text-sm font-medium">
                WELLNESS HUB
              </a>
            </div>
          </div>

          {/* Right side items */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <a 
              href="https://maps.google.com/?q=Nexu+Fitness+Studio+Tirupur"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 lg:space-x-2 text-gray-600 hover:text-cult-yellow transition-colors"
            >
              <MapPin className="w-3 h-3 lg:w-4 lg:h-4" />
              <span className="text-xs lg:text-sm">TIRUPUR</span>
            </a>
            <button 
              onClick={() => setShowLaunchingSoon(true)}
              className="bg-cult-yellow text-cult-black px-3 lg:px-4 py-1.5 lg:py-2 rounded-full text-xs lg:text-sm font-medium hover:bg-cult-dark-yellow transition-colors"
            >
              GET APP
            </button>
            <button className="p-1.5 lg:p-2 text-gray-600 hover:text-gray-900">
              <Bell className="w-4 h-4 lg:w-5 lg:h-5" />
            </button>
            <button 
              onClick={() => setShowLaunchingSoon(true)}
              className="p-1.5 lg:p-2 text-gray-600 hover:text-gray-900"
            >
              <ShoppingCart className="w-4 h-4 lg:w-5 lg:h-5" />
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t shadow-lg">
            <a 
              href="#membership" 
              onClick={() => setIsMenuOpen(false)}
              className="text-cult-black hover:text-cult-yellow block px-3 py-2.5 text-base font-medium transition-colors active:bg-gray-100 rounded-lg"
            >
              SUBSCRIPTION
            </a>
            <a 
              href="#wellness" 
              onClick={() => setIsMenuOpen(false)}
              className="text-cult-black hover:text-cult-yellow block px-3 py-2.5 text-base font-medium transition-colors active:bg-gray-100 rounded-lg"
            >
              WELLNESS HUB
            </a>
            <a 
              href="https://maps.google.com/?q=Nexu+Fitness+Studio+Tirupur"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 px-3 py-2.5 hover:text-cult-yellow transition-colors active:bg-gray-100 rounded-lg"
            >
              <MapPin className="w-4 h-4" />
              <span className="text-sm">TIRUPUR</span>
            </a>
            <div className="px-3 pt-2">
              <button 
                onClick={() => {
                  setShowLaunchingSoon(true)
                  setIsMenuOpen(false)
                }}
                className="w-full bg-cult-yellow text-cult-black px-4 py-2.5 rounded-full text-sm font-medium hover:bg-cult-dark-yellow active:bg-cult-dark-yellow transition-colors touch-manipulation"
              >
                GET APP
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Launching Soon Modal */}
      {showLaunchingSoon && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 sm:p-8 text-center max-w-sm w-full mx-4">
            <h3 className="text-xl sm:text-2xl font-bold text-cult-black mb-3 sm:mb-4">Coming Soon</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">This feature is launching soon!</p>
            <button
              onClick={() => setShowLaunchingSoon(false)}
              className="bg-cult-yellow text-cult-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-cult-dark-yellow active:bg-cult-dark-yellow transition-colors touch-manipulation"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
