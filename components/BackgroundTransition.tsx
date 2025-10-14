'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

interface BackgroundTransitionProps {
  images: string[]
  interval?: number
  className?: string
  overlay?: boolean
  children?: React.ReactNode
}

export default function BackgroundTransition({ 
  images, 
  interval = 4000, 
  className = "",
  overlay = true,
  children
}: BackgroundTransitionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
          initial={{ opacity: 0, scale: 1.2, x: 50 }}
          animate={{ opacity: 0.4, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.8, x: -50 }}
          transition={{ 
            duration: 3,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          {overlay && (
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-cult-black/50 via-cult-gray/40 to-cult-yellow/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            />
          )}
        </motion.div>
      </AnimatePresence>
      
      {/* Additional overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20 z-5"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
