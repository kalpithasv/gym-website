'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Play } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const fitnessVideo = 'https://res.cloudinary.com/dqvxkbvov/video/upload/hero-video_vgp61m.mp4'

export default function HeroSection() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, -150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3])
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoPlaying, setVideoPlaying] = useState(false)
  const [showPlayButton, setShowPlayButton] = useState(true)

  useEffect(() => {
    if (videoRef.current) {
      // Try to autoplay
      const playPromise = videoRef.current.play()
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setVideoPlaying(true)
            setShowPlayButton(false)
          })
          .catch((error) => {
            console.log('Autoplay prevented, showing play button:', error)
            setShowPlayButton(true)
          })
      }
    }
  }, [])

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setVideoPlaying(true)
      setShowPlayButton(false)
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <motion.div className="absolute inset-0" style={{ y, opacity }}>
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            webkit-playsinline="true"
          >
            <source src={fitnessVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-cult-black/60 to-transparent" />
          
          {/* Play Button Overlay - Shows if autoplay is blocked */}
          {showPlayButton && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center bg-black/40 z-10 cursor-pointer"
              onClick={handlePlayClick}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-cult-yellow text-cult-black p-6 rounded-full shadow-2xl"
              >
                <Play className="w-12 h-12" fill="currentColor" />
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* CONTENT */}
      <div className="relative z-20 w-full max-w-4xl mx-auto px-4 sm:px-6 text-white flex flex-col items-center">
        
        {/* TEXT GROUP */}
        <div className="flex flex-col items-center text-center pt-20 sm:pt-0">
          <motion.h1
            className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            we-are-nexu
          </motion.h1>

          <p className="mt-16 sm:mt-20 md:mt-24 text-base sm:text-lg md:text-xl font-semibold opacity-90 px-4">
            Transform Your Body, Transform Your Life
          </p>
        </div>

        {/* CTA BUTTON (pushed down like desktop) */}
        <a
          href="#membership"
          className="mt-16 sm:mt-20 md:mt-24 inline-block bg-cult-yellow hover:bg-cult-dark-yellow text-cult-black px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition transform hover:scale-105 active:scale-95 touch-manipulation"
        >
          EXPLORE NEXUS PASS
        </a>

        {/* Arrow BELOW button */}
        <motion.div
          className="mt-8 sm:mt-12"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-cult-yellow" />
        </motion.div>
      </div>
    </section>
  )
}
