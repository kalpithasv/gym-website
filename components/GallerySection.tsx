'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'

// Gallery categories with images and videos - Place your files in public/gallery/
const galleryCategories = [
  {
    title: 'Strength Training',
    items: [
      { src: '/gallery/1.jpg', type: 'image' },
      { src: '/gallery/6.mp4', fallback: '/gallery/6.jpg', type: 'video' },
      { src: '/gallery/3.mp4', fallback: '/gallery/3.jpg', type: 'video' },
      { src: '/gallery/4.mp4', fallback: '/gallery/4.jpg', type: 'video' }
    ]
  },
  {
    title: 'Cardio Zone',
    items: [
      { src: '/gallery/8.mp4', fallback: '/gallery/8.jpg', type: 'video' },
      { src: '/gallery/2.mp4', fallback: '/gallery/2.jpg', type: 'video' },
      { src: '/gallery/7.mp4', fallback: '/gallery/7.jpg', type: 'video' },
      { src: '/gallery/5.mp4', fallback: '/gallery/5.jpg', type: 'video' }
    ]
  },
  {
    title: 'Group Classes',
    items: [
      { src: '/gallery/9.jpeg', type: 'image' },
      { src: '/gallery/10.jpeg', type: 'image' },
      { src: '/gallery/7.mp4', fallback: '/gallery/7.jpg', type: 'video' },
      { src: '/gallery/12.jpeg', type: 'image' }
    ]
  }
]

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState(0) // Default to Strength Training
  const [hoveredImage, setHoveredImage] = useState<number | null>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  // Auto-play videos when they come into view
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    videoRefs.current.forEach((video, index) => {
      if (video) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                video.play().catch((error) => {
                  console.log('Autoplay prevented:', error)
                })
              } else {
                video.pause()
              }
            })
          },
          { threshold: 0.5 } // Play when 50% of video is visible
        )

        observer.observe(video)
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [selectedCategory])

  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 px-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-cult-black mb-3 sm:mb-4">
            Experience Nexu Fitness Studio
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 px-2">
            Take a visual tour through our world-class facilities
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-4"
        >
          {galleryCategories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedCategory(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 touch-manipulation ${
                selectedCategory === index
                  ? 'bg-cult-yellow text-cult-black shadow-lg'
                  : 'bg-white text-cult-black hover:bg-gray-50 active:bg-gray-100 shadow-md'
              }`}
            >
              {category.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid - Modern Asymmetric Layout */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-3 sm:space-y-4 px-4"
        >
          {/* Top Row - Large Left + Two Small Right */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4">
            {/* Large Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl"
              onMouseEnter={() => setHoveredImage(0)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] bg-gray-300">
                {galleryCategories[selectedCategory].items[0].type === 'video' ? (
                  <video
                    ref={(el) => { videoRefs.current[0] = el }}
                    key={`video-0-${selectedCategory}`}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    preload="auto"
                    webkit-playsinline="true"
                    onError={(e) => console.error('Video 0 error:', e)}
                  >
                    <source src={galleryCategories[selectedCategory].items[0].src} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={galleryCategories[selectedCategory].items[0].src}
                    alt={`${galleryCategories[selectedCategory].title} - Main`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-cult-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                {galleryCategories[selectedCategory].items[0].type === 'video' && (
                  <div className="absolute top-4 right-4 bg-cult-yellow text-cult-black px-3 py-1 rounded-full text-xs font-bold">
                    VIDEO
                  </div>
                )}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: hoveredImage === 0 ? 1 : 0, 
                    y: hoveredImage === 0 ? 0 : 20 
                  }}
                  className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white"
                >
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">
                    {galleryCategories[selectedCategory].title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base opacity-90">
                    Explore our premium facilities
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Two Stacked Images */}
            <div className="space-y-3 sm:space-y-4">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg"
                onMouseEnter={() => setHoveredImage(1)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <div className="relative h-32 sm:h-40 md:h-48 lg:h-60 bg-gray-300">
                  {galleryCategories[selectedCategory].items[1].type === 'video' ? (
                    <video
                      ref={(el) => { videoRefs.current[1] = el }}
                      key={`video-1-${selectedCategory}`}
                      className="w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                      preload="auto"
                      webkit-playsinline="true"
                      onError={(e) => console.error('Video 1 error:', e)}
                    >
                      <source src={galleryCategories[selectedCategory].items[1].src} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={galleryCategories[selectedCategory].items[1].src}
                      alt={`${galleryCategories[selectedCategory].title} - 2`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                  {galleryCategories[selectedCategory].items[1].type === 'video' && (
                    <div className="absolute top-2 right-2 bg-cult-yellow text-cult-black px-2 py-1 rounded-full text-xs font-bold">
                      VIDEO
                    </div>
                  )}
                  <div className={`absolute inset-0 bg-cult-yellow/30 transition-opacity duration-300 ${
                    hoveredImage === 1 ? 'opacity-100' : 'opacity-0'
                  }`}></div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg"
                onMouseEnter={() => setHoveredImage(2)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <div className="relative h-32 sm:h-40 md:h-48 lg:h-60 bg-gray-300">
                  {galleryCategories[selectedCategory].items[2].type === 'video' ? (
                    <video
                      ref={(el) => { videoRefs.current[2] = el }}
                      key={`video-2-${selectedCategory}`}
                      className="w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                      preload="auto"
                      webkit-playsinline="true"
                      onError={(e) => console.error('Video 2 error:', e)}
                    >
                      <source src={galleryCategories[selectedCategory].items[2].src} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={galleryCategories[selectedCategory].items[2].src}
                      alt={`${galleryCategories[selectedCategory].title} - 3`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                  {galleryCategories[selectedCategory].items[2].type === 'video' && (
                    <div className="absolute top-2 right-2 bg-cult-yellow text-cult-black px-2 py-1 rounded-full text-xs font-bold">
                      VIDEO
                    </div>
                  )}
                  <div className={`absolute inset-0 bg-cult-yellow/30 transition-opacity duration-300 ${
                    hoveredImage === 2 ? 'opacity-100' : 'opacity-0'
                  }`}></div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Wide Panoramic Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl"
            onMouseEnter={() => setHoveredImage(3)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <div className="relative h-48 sm:h-64 md:h-72 lg:h-80 bg-gray-300">
              {galleryCategories[selectedCategory].items[3].type === 'video' ? (
                <video
                  ref={(el) => { videoRefs.current[3] = el }}
                  key={`video-3-${selectedCategory}`}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  preload="auto"
                  webkit-playsinline="true"
                  onError={(e) => console.error('Video 3 error:', e)}
                >
                  <source src={galleryCategories[selectedCategory].items[3].src} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={galleryCategories[selectedCategory].items[3].src}
                  alt="Wide view"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-cult-black/70 via-transparent to-cult-black/70"></div>
              <div className="absolute top-4 left-4 bg-white/90 text-cult-black px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                Wide view
                {galleryCategories[selectedCategory].items[3].type === 'video' && (
                  <span className="bg-cult-yellow text-cult-black px-2 py-0.5 rounded-full text-xs font-bold">
                    VIDEO
                  </span>
                )}
              </div>
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ 
                  scale: hoveredImage === 3 ? 1 : 0.9, 
                  opacity: hoveredImage === 3 ? 1 : 0 
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center text-white px-4">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                    Join The Movement
                  </h3>
                  <button className="bg-cult-yellow text-cult-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-bold hover:bg-cult-dark-yellow transition-all transform hover:scale-105 active:scale-95 touch-manipulation">
                    Book a Tour
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-12 sm:mt-16 px-4"
        >
          {[
            { number: '500+', label: 'Premium Equipment' },
            { number: '10K+', label: 'Happy Members' },
            { number: '50+', label: 'Expert Trainers' },
            { number: '24/7', label: 'Open Access' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-cult-yellow mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-700 font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
