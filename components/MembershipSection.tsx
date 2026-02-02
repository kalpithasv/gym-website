'use client'

import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import BackgroundTransition from './BackgroundTransition'
import { useState } from 'react'

const membershipPlans = [
  {
    name: 'BASIC PLAN',
    description: 'CARDIO',
    prices: {
      '1 MONTH': 1500,
      '3 MONTH': 4000,
      '6 MONTH': 7500,
      '1 YEAR': 12000
    },
    features: [
      'Unlimited cardio access',
      'State-of-the-art equipment',
      'Open 24/7 access',
      'Member support'
    ],
    gradient: 'from-blue-600 to-blue-400',
    popular: false
  },
  {
    name: 'PREMIUM PLAN',
    description: 'CARDIO & STRENGTHENING',
    prices: {
      '1 MONTH': 2000,
      '3 MONTH': 5000,
      '6 MONTH': 9000,
      '1 YEAR': 15000
    },
    features: [
      'Full gym access',
      'Cardio & strength training',
      'All equipment available',
      'Member support',
      'Locker facilities'
    ],
    gradient: 'from-purple-600 to-purple-400',
    popular: true
  },
  {
    name: 'PLATINUM PLAN',
    description: 'CARDIO + STRENGTH + DIET',
    prices: {
      '1 MONTH': 2500,
      '3 MONTH': 6000,
      '6 MONTH': 12000,
      '1 YEAR': 20000
    },
    features: [
      'Complete fitness package',
      'All equipment access',
      'Personal diet consultation',
      'Priority support',
      'Locker & shower facilities',
      'Monthly fitness assessment'
    ],
    gradient: 'from-yellow-600 to-yellow-400',
    popular: false
  }
]

const additionalServices = [
  {
    title: 'PERSONAL TRAINING',
    price: 6000,
    duration: 'Monthly',
    description: 'Certified personal trainer',
    color: 'from-cult-yellow to-yellow-500'
  },
  {
    title: 'WESTERN DANCE (KIDS)',
    price: 1500,
    duration: 'Monthly',
    description: 'Kids dance classes',
    color: 'from-pink-500 to-pink-400'
  },
  {
    title: 'SENIOR CLASSES',
    price: 1800,
    duration: 'Monthly',
    description: 'Specialized for seniors',
    color: 'from-green-500 to-green-400'
  },
  {
    title: 'ZUMBA',
    price: 2000,
    duration: 'Monthly',
    description: 'Dance fitness classes',
    color: 'from-red-500 to-red-400'
  }
]

const backgroundImages = [
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=1920&h=1080&fit=crop',
]

export default function MembershipSection() {
  const [selectedDuration, setSelectedDuration] = useState('1 YEAR')

  return (
    <div id="membership">
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
          className="text-center mb-8 sm:mb-12 px-4"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-4">
            <div className="hidden sm:block w-2 h-12 bg-cult-yellow rounded-full"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-cult-black">
              FEES STRUCTURE
            </h2>
            <div className="hidden lg:block text-cult-black text-xl lg:text-2xl font-bold">
              NEXU <span className="text-cult-yellow">FITNESS STUDIO</span>
            </div>
          </div>
          <p className="text-cult-yellow text-base sm:text-lg md:text-xl font-semibold mt-4 sm:mt-6 px-2">
            "If you want better results, make better choices."
          </p>
        </motion.div>

        {/* Duration Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-4"
        >
          {['1 MONTH', '3 MONTH', '6 MONTH', '1 YEAR'].map((duration) => (
            <button
              key={duration}
              onClick={() => setSelectedDuration(duration)}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 border-2 touch-manipulation ${
                selectedDuration === duration
                  ? 'bg-cult-yellow text-cult-black border-cult-yellow shadow-lg'
                  : 'border-cult-yellow text-cult-yellow hover:bg-cult-yellow/10 active:bg-cult-yellow/20'
              }`}
            >
              {duration}
            </button>
          ))}
        </motion.div>

        {/* Membership Plans Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 px-4">
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
                y: -15,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className={`relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col ${
                plan.popular ? 'ring-3 ring-cult-yellow scale-105 lg:scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-4 right-4 z-10 bg-cult-yellow text-cult-black px-4 py-2 rounded-full font-bold flex items-center gap-2">
                  <Star className="w-4 h-4 fill-cult-black" />
                  POPULAR
                </div>
              )}

              {/* Gradient Header */}
              <div className={`h-32 bg-gradient-to-r ${plan.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                  <p className="text-sm opacity-90">{plan.description}</p>
                </div>
              </div>

              {/* Price Display */}
              <div className="bg-gray-800 p-6">
                <motion.div
                  key={selectedDuration}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <div className="text-4xl sm:text-5xl font-bold text-cult-yellow mb-2">
                    ₹{plan.prices[selectedDuration as keyof typeof plan.prices]}
                  </div>
                  <div className="text-gray-400 text-sm">{selectedDuration}</div>
                </motion.div>
              </div>

              {/* Features */}
              <div className="p-6 bg-gray-900 flex-1 flex flex-col">
                <ul className="space-y-3 mb-6 flex-1">
                  {plan.features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <Check className="w-5 h-5 text-cult-yellow flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.button 
                  className="w-full bg-cult-yellow text-cult-black py-3 sm:py-3.5 rounded-lg text-sm sm:text-base font-bold hover:bg-cult-dark-yellow transition-colors touch-manipulation"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  JOIN NOW
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="px-4"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center mb-6 sm:mb-8">
            Additional Services
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {additionalServices.map((service, index) => {
              const isYellow = index % 2 === 0;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <motion.div 
                    className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full"
                    whileHover={{ 
                      y: -12,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Corner accent */}
                    <motion.div 
                      className={`absolute top-0 left-0 w-20 h-20 ${isYellow ? 'bg-cult-yellow' : 'bg-cult-black'} rounded-br-[60px]`}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    />

                    {/* Side stripe */}
                    <div className={`absolute right-0 top-0 bottom-0 w-2 ${isYellow ? 'bg-cult-yellow' : 'bg-cult-black'}`} />

                    {/* Content */}
                    <div className="relative p-6">
                      {/* Title section */}
                      <motion.div 
                        className="mb-4 pt-6"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                      >
                        <h4 className={`text-lg font-extrabold ${service.title === 'WESTERN DANCE (KIDS)' || service.title === 'ZUMBA' ? 'text-cult-yellow' : 'text-cult-black'} mb-2 tracking-tight leading-tight min-h-[56px] flex items-center`}>
                          {service.title}
                        </h4>
                        <p className="text-sm text-gray-600">{service.description}</p>
                      </motion.div>

                      {/* Divider with dots */}
                      <div className="flex items-center gap-1 my-4">
                        <div className={`w-2 h-2 rounded-full ${isYellow ? 'bg-cult-yellow' : 'bg-cult-black'}`} />
                        <div className={`flex-1 h-px ${isYellow ? 'bg-cult-yellow' : 'bg-cult-black'} opacity-30`} />
                        <div className={`w-2 h-2 rounded-full ${isYellow ? 'bg-cult-yellow' : 'bg-cult-black'}`} />
                      </div>

                      {/* Price section */}
                      <motion.div 
                        className="mt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                      >
                        <div className="flex items-end justify-between">
                          <div>
                            <div className={`text-3xl font-black ${isYellow ? 'text-cult-black' : 'text-cult-black'} mb-1`}>
                              ₹{service.price}
                            </div>
                            <div className={`text-sm font-semibold ${isYellow ? 'text-cult-yellow' : 'text-cult-black'} uppercase tracking-wide`}>
                              {service.duration}
                            </div>
                          </div>
                          
                          {/* Action indicator */}
                          <motion.div 
                            className={`w-10 h-10 rounded-full ${isYellow ? 'bg-cult-yellow' : 'bg-cult-black'} flex items-center justify-center`}
                            whileHover={{ 
                              scale: 1.2,
                              rotate: 90,
                              transition: { duration: 0.3 }
                            }}
                          >
                            <svg 
                              className={`w-5 h-5 ${isYellow ? 'text-cult-black' : 'text-cult-yellow'}`} 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* Bottom highlight bar */}
                      <motion.div 
                        className={`mt-6 h-1.5 ${isYellow ? 'bg-cult-yellow' : 'bg-cult-black'} rounded-full`}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ delay: 0.9 + index * 0.1, duration: 0.8 }}
                        viewport={{ once: true }}
                        style={{ transformOrigin: 'left' }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16 px-4"
        >
          <button className="bg-cult-yellow text-cult-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:bg-cult-dark-yellow transition-all duration-300 transform hover:scale-105 active:scale-95 touch-manipulation w-full sm:w-auto">
            EXPLORE ALL PLANS
          </button>
        </motion.div>
      </div>
    </BackgroundTransition>
    </div>
  )
}
  