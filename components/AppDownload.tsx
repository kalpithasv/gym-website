'use client'

import { motion } from 'framer-motion'
import { Smartphone, Download, Star } from 'lucide-react'
import BackgroundTransition from './BackgroundTransition'

const appDownloadBackgroundImages = [
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=1920&h=1080&fit=crop'
]

export default function AppDownload() {
  return (
    <BackgroundTransition 
      images={appDownloadBackgroundImages}
      interval={8000}
      className="py-20"
      overlay={false}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-cult-black"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Download the most loved fitness app
            </h2>
            <p className="text-lg sm:text-xl text-cult-black/80 mb-6 sm:mb-8 leading-relaxed">
              Start your fitness journey with us. Join Nexus Gym!
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
              <button className="bg-cult-white text-cult-black px-4 sm:px-6 py-3 sm:py-4 rounded-xl flex items-center justify-center hover:bg-gray-200 transition-colors duration-300 transform hover:scale-105">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-cult-black rounded-lg flex items-center justify-center">
                    <span className="text-cult-white font-bold text-xs sm:text-sm">📱</span>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-600">Download on the</div>
                    <div className="text-xs sm:text-sm font-semibold">App Store</div>
                  </div>
                </div>
              </button>

              <button className="bg-cult-white text-cult-black px-4 sm:px-6 py-3 sm:py-4 rounded-xl flex items-center justify-center hover:bg-gray-200 transition-colors duration-300 transform hover:scale-105">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-cult-black rounded-lg flex items-center justify-center">
                    <span className="text-cult-white font-bold text-xs sm:text-sm">🤖</span>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-600">GET IT ON</div>
                    <div className="text-xs sm:text-sm font-semibold">Google Play</div>
                  </div>
                </div>
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-xs sm:text-sm text-cult-black">4.8/5</span>
              </div>
              <div className="text-xs sm:text-sm text-cult-black">
                <span className="font-semibold">1M+</span> downloads
              </div>
            </div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ 
              duration: 1, 
              delay: 0.3,
              ease: "easeOut"
            }}
            viewport={{ once: true }}
            className="relative"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            <div className="relative mx-auto max-w-xs sm:max-w-sm">
              {/* Phone Frame */}
              <div className="bg-black rounded-[3rem] p-4 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Screen Content */}
                  <div className="h-80 sm:h-96 bg-gradient-to-br from-cult-pink to-cult-aqua relative">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10 p-4 sm:p-6 text-white text-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                        <span className="text-xl sm:text-2xl">💪</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Nexus Gym</h3>
                      <p className="text-xs sm:text-sm opacity-90">Your fitness journey starts here</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-8 h-8 bg-cult-yellow rounded-full"
                animate={{ 
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <motion.div 
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-cult-white rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </BackgroundTransition>
  )
}
