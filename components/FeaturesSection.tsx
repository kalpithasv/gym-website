'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Dumbbell, Heart, ShoppingBag, Activity } from 'lucide-react'
import BackgroundTransition from './BackgroundTransition'

const features = [
  {
    title: 'NEXUS TRANSFORM',
    description: 'Get coached to lose weight for good',
    icon: <Dumbbell className="w-8 h-8" />,
    gradient: 'from-cult-black to-cult-yellow',
    link: 'The .fit way'
  },
  {
    title: 'Making health easy',
    description: 'Making health easy, one day at a time',
    icon: <Heart className="w-8 h-8" />,
    gradient: 'from-cult-gray to-cult-white',
    link: 'arrow'
  },
  {
    title: 'Workout Gear',
    description: 'Everything you need for your workout',
    icon: <ShoppingBag className="w-8 h-8" />,
    gradient: 'from-cult-yellow to-cult-white',
    link: 'arrow'
  },
  {
    title: 'Sugar.fit',
    description: 'Reverse Type 2 Diabetes and Prediabetes',
    icon: <Activity className="w-8 h-8" />,
    gradient: 'from-cult-dark to-cult-yellow',
    link: 'arrow'
  }
]

const featuresBackgroundImages = [
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=1920&h=1080&fit=crop'
]

export default function FeaturesSection() {
  return (
    <BackgroundTransition 
      images={featuresBackgroundImages}
      interval={6000}
      className="py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
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
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="group cursor-pointer"
            >
              <motion.div 
                className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100"
                whileHover={{ 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  borderColor: "#FFD700"
                }}
              >
                {/* Icon */}
                <motion.div 
                  className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${feature.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-6`}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                >
                  {feature.icon}
                </motion.div>

                {/* Content */}
                <motion.h3 
                  className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-cult-yellow transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                >
                  {feature.description}
                </motion.p>

                {/* Link */}
                <motion.div 
                  className="flex items-center text-cult-yellow font-semibold group-hover:translate-x-2 transition-transform duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
                  whileHover={{ x: 10 }}
                >
                  <span className="mr-2">{feature.link}</span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </BackgroundTransition>
  )
}
