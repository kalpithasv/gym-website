'use client'

import { motion } from 'framer-motion'
import { ShoppingBag, Heart, Activity, Utensils } from 'lucide-react'
import BackgroundTransition from './BackgroundTransition'

const wellnessItems = [
  {
    title: 'WORKOUT GEAR',
    description: 'Everything you need for your fitness journey',
    icon: <ShoppingBag className="w-6 h-6" />,
    color: 'text-cult-yellow',
    bgColor: 'bg-yellow-100'
  },
  {
    title: 'NUTRITION',
    description: 'Healthy and tasty daily food',
    icon: <Utensils className="w-6 h-6" />,
    color: 'text-cult-black',
    bgColor: 'bg-gray-100'
  },
  {
    title: 'MENTAL FITNESS',
    description: 'Yoga & meditation made easy',
    icon: <Heart className="w-6 h-6" />,
    color: 'text-cult-yellow',
    bgColor: 'bg-yellow-100'
  },
  {
    title: 'MEDICAL CARE',
    description: 'Hassle-free medical & lifestyle care',
    icon: <Activity className="w-6 h-6" />,
    color: 'text-cult-black',
    bgColor: 'bg-gray-100'
  }
]

const wellnessBackgroundImages = [
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=1920&h=1080&fit=crop'
]

export default function WellnessHub() {
  return (
    <div id="wellness">
      <BackgroundTransition 
        images={wellnessBackgroundImages}
        interval={7000}
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Wellness Hub
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            One place for all your well-being needs
          </p>
        </motion.div>

        {/* Wellness Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {wellnessItems.map((item, index) => (
            <motion.div
              key={item.title}
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
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="group cursor-pointer"
            >
              <motion.div 
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                whileHover={{ 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  borderColor: "#FFD700"
                }}
              >
                <motion.div 
                  className={`w-10 h-10 sm:w-12 sm:h-12 ${item.bgColor} rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6`}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 10,
                    transition: { duration: 0.3 }
                  }}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                >
                  <div className={item.color}>
                    {item.icon}
                  </div>
                </motion.div>
                <motion.h3 
                  className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-cult-yellow transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                >
                  {item.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600 text-xs sm:text-sm leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                >
                  {item.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Product Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            Featured Products
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
            {[
              { id: 1, name: 'Protein Shaker', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop' },
              { id: 2, name: 'Yoga Mat', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=300&fit=crop' },
              { id: 3, name: 'Dumbbells', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300&h=300&fit=crop' },
              { id: 4, name: 'Resistance Bands', image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=300&h=300&fit=crop' },
              { id: 5, name: 'Fitness Tracker', image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=300&h=300&fit=crop' }
            ].map((item, index) => (
              <motion.div 
                key={item.id} 
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -5,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="bg-cover bg-center rounded-xl aspect-square relative overflow-hidden"
                  style={{ backgroundImage: `url(${item.image})` }}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div 
                    className="w-full h-full bg-black/20 rounded-xl flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.span 
                      className="text-white font-semibold text-sm bg-cult-yellow text-cult-black px-3 py-1 rounded-full"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      View Details
                    </motion.span>
                  </motion.div>
                </motion.div>
                <motion.p 
                  className="text-center text-sm text-gray-600 mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                >
                  {item.name}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      </BackgroundTransition>
    </div>
  )
}
