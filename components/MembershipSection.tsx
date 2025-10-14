'use client'

import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import BackgroundTransition from './BackgroundTransition'

const membershipPlans = [
  {
    name: 'ELITE',
    price: 'Unlimited access to',
    features: [
      'At-center group classes',
      'All ELITE & PRO gyms',
      'At-home live workouts'
    ],
    gradient: 'from-cult-black to-cult-yellow',
    buttonText: 'TRY FOR FREE',
    popular: true
  },
  {
    name: 'PRO',
    price: 'Unlimited access to',
    features: [
      'All PRO gyms',
      '2 Sessions/month at ELITE gyms & group classes',
      'At-home live workouts'
    ],
    gradient: 'from-cult-gray to-cult-white',
    buttonText: 'TRY FOR FREE',
    popular: false
  },
  {
    name: 'PLAY',
    price: 'Unlimited access to',
    features: [
      'Badminton, swimming & other sports',
      'Guaranteed playing partner',
      'Guided sessions with experts'
    ],
    gradient: 'from-cult-yellow to-cult-white',
    buttonText: 'TRY FOR FREE',
    popular: false
  },
  {
    name: 'SELECT',
    price: 'Unlimited access to',
    features: [
      'One center that you choose',
      'Limited sessions* in other centers & gyms in your city',
      'At-home live workouts'
    ],
    gradient: 'from-cult-dark to-cult-yellow',
    buttonText: 'TRY FOR FREE',
    popular: false
  }
]

const backgroundImages = [
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=1920&h=1080&fit=crop'
]

export default function MembershipSection() {
  return (
    <BackgroundTransition 
      images={backgroundImages}
      interval={5000}
      className="py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            NEXUS PASS
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 mb-3 sm:mb-4 px-4">
            One membership for all your fitness needs
          </h3>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Fun, trainer led group classes
          </p>
        </motion.div>

        {/* Membership Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {membershipPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform ${
                plan.popular ? 'ring-2 ring-cult-yellow scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-cult-yellow text-cult-black px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    POPULAR
                  </div>
                </div>
              )}

              {/* Gradient Header */}
              <motion.div 
                className={`h-24 sm:h-28 md:h-32 bg-gradient-to-r ${plan.gradient} relative overflow-hidden`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-black/20"
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
                <motion.div 
                  className="relative z-10 p-4 sm:p-5 md:p-6 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                >
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">{plan.name}</h4>
                  <p className="text-xs sm:text-sm opacity-90">{plan.price}</p>
                </motion.div>
              </motion.div>

              {/* Content */}
              <div className="p-4 sm:p-5 md:p-6">
                <motion.ul 
                  className="space-y-2 sm:space-y-3 mb-6 sm:mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                >
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: 1 + index * 0.1 + featureIndex * 0.1, 
                        duration: 0.4 
                      }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-cult-yellow mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                      </motion.div>
                      <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.button 
                  className={`w-full py-2 sm:py-3 px-4 sm:px-6 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                    plan.popular
                      ? 'bg-cult-yellow text-cult-black hover:bg-cult-dark-yellow'
                      : 'bg-cult-light-gray text-cult-black hover:bg-gray-200'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {plan.buttonText}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learn More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-cult-black text-cult-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-cult-gray transition-colors duration-300">
            LEARN MORE
          </button>
        </motion.div>
      </div>
    </BackgroundTransition>
  )
}
