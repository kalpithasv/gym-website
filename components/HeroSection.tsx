'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'

// Fitness video background - using a reliable free video source
const fitnessVideo = 'https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4'

export default function HeroSection() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, -150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Fitness Video */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-cult-black via-cult-gray to-cult-yellow relative overflow-hidden">
          {/* Main Hero Video */}
          <motion.div 
            className="absolute inset-0"
            style={{ y, opacity }}
          >
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop"
            >
              <source src={fitnessVideo} type="video/mp4" />
              {/* Fallback for browsers that don't support video */}
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ 
                  backgroundImage: 'url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop)'
                }}
              ></div>
            </video>
            
            {/* Video Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-cult-black/60 to-transparent"></div>
            <motion.div
              className="absolute inset-0 bg-cult-yellow/10"
              animate={{ 
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          
          {/* Overlay Content */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <div className="text-white text-center max-w-4xl px-4">
              <motion.div 
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-4 sm:mb-6 bg-cult-yellow/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.15,
                  backgroundColor: "rgba(255, 215, 0, 0.3)",
                  rotate: 360
                }}
                transition={{ duration: 0.6 }}
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, -5, 0]
                }}
                style={{
                  animation: "pulse 3s ease-in-out infinite"
                }}
              >
                <span className="text-2xl sm:text-3xl md:text-4xl">💪</span>
              </motion.div>
              <motion.p 
                className="text-sm sm:text-base md:text-lg mb-4 font-semibold px-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
              >
                Transform Your Body, Transform Your Life
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
            we-are-nexus
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-8 sm:mb-12 text-gray-200 px-4">
            A fitness movement that is worth breaking a sweat for
          </h2>
          <button className="bg-cult-yellow hover:bg-cult-dark-yellow text-cult-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-colors duration-300 transform hover:scale-105 mx-4 sm:mx-0">
            EXPLORE NEXUS PASS
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-8"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-center">
            <ChevronDown className="w-8 h-8 mx-auto text-cult-yellow" />
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-cult-yellow rounded-full opacity-60 float-animation"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-cult-white rounded-full opacity-60 float-animation" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-cult-yellow rounded-full opacity-60 float-animation" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-60 right-10 w-5 h-5 bg-cult-white rounded-full opacity-60 float-animation" style={{ animationDelay: '3s' }}></div>
    </section>
  )
}
