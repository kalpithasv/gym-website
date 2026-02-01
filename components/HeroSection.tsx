'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const fitnessVideo = '/hero-video.mp4'

export default function HeroSection() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, -150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <motion.div className="absolute inset-0" style={{ y, opacity }}>
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={fitnessVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-cult-black/60 to-transparent" />
        </motion.div>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* CONTENT */}
      <div className="relative z-20 w-full max-w-4xl mx-auto px-4 text-white flex flex-col items-center">
        
        {/* TEXT GROUP */}
        <div className="flex flex-col items-center text-center pt-24 sm:pt-0">
          <motion.h1
            className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-bold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            we-are-nexu
          </motion.h1>

          <p className="mt-24 text-sm sm:text-base font-semibold opacity-90">
            Transform Your Body, Transform Your Life
          </p>
        </div>

        {/* CTA BUTTON (pushed down like desktop) */}
        <a
          href="#membership"
          className="mt-24 sm:mt-16 inline-block bg-cult-yellow hover:bg-cult-dark-yellow text-cult-black px-8 py-4 rounded-full text-lg font-semibold transition transform hover:scale-105"
        >
          EXPLORE NEXUS PASS
        </a>

        {/* Arrow BELOW button */}
        <motion.div
          className="mt-12"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-cult-yellow" />
        </motion.div>
      </div>
    </section>
  )
}
