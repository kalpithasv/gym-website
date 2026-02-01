'use client'

import { motion } from 'framer-motion'
import { Phone, Video, CheckCircle, Users } from 'lucide-react'
import BackgroundTransition from './BackgroundTransition'

const backgroundImages = [
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=1920&h=1080&fit=crop'
]

const trainers = [
  {
    name: 'Manikandan',
    specialty: 'Personal Training',
    phone: '+91 8883222349',
    experience: '8 years (2018–2026)',
    sessions: 'Custom Video Programs',
    color: 'from-blue-600 to-blue-400'
  },
  {
    name: 'Padmini Priya',
    specialty: 'Personal Training',
    phone: undefined,
    experience: '2 years (2023–2026)',
    sessions: 'Custom Video Programs',
    color: 'from-pink-500 to-rose-400'
  }
]

export default function AppDownload() {
  return (
    <BackgroundTransition 
      images={backgroundImages}
      interval={8000}
      className="py-20"
      overlay={false}
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cult-black mb-4">
            Online Personal Training
          </h2>
          <p className="text-lg sm:text-xl text-cult-black/80 max-w-2xl mx-auto">
            Get personalized coaching from certified trainers with one-on-one video calls and custom workout videos
          </p>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {[
            { icon: <Phone className="w-6 h-6" />, title: 'Book Trainer', desc: 'Choose your package & confirm booking' },
            { icon: <Video className="w-6 h-6" />, title: 'Custom Videos', desc: 'Receive personalized workout programs' },
            { icon: <CheckCircle className="w-6 h-6" />, title: 'Direct Support', desc: 'Direct contact with coach via phone' }
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="flex justify-center mb-3">
                <div className="text-cult-yellow bg-cult-black/10 p-3 rounded-full">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold text-cult-black mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trainers Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-cult-black text-center mb-12">
            Meet Our Trainers
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {trainers.map((trainer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Header with Color */}
                <div className={`h-28 bg-gradient-to-r ${trainer.color} relative`}>
                  <div className="absolute inset-0 opacity-80"></div>
                  <div className="relative z-10 flex items-end h-full p-4">
                    <div className="text-white">
                      <h4 className="text-xl font-bold">{trainer.name}</h4>
                      <p className="text-sm opacity-90">{trainer.specialty}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="text-cult-yellow">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Experience</p>
                        <p className="font-semibold text-cult-black">{trainer.experience}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-cult-yellow">
                        <Video className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Sessions Include</p>
                        <p className="font-semibold text-cult-black text-sm">{trainer.sessions}</p>
                      </div>
                    </div>

                    {trainer.phone && (
                      <div className="border-t pt-4 mt-4">
                        <p className="text-xs text-gray-500 mb-1">Contact</p>
                        <a 
                          href={`tel:${trainer.phone.replace(/\s/g, '')}`}
                          className="flex items-center gap-2 text-cult-yellow font-bold hover:text-cult-dark-yellow transition-colors"
                        >
                          <Phone className="w-4 h-4" />
                          {trainer.phone}
                        </a>
                      </div>
                    )}
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-cult-yellow text-cult-black py-3 rounded-lg font-bold hover:bg-cult-dark-yellow transition-colors"
                  >
                    Book Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-xl"
        >
          <h3 className="text-2xl font-bold text-cult-black mb-8 text-center">
            The Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '1',
                title: 'Book Package',
                desc: 'Choose your training package and confirm booking'
              },
              {
                step: '2',
                title: 'Payment to Coach',
                desc: 'Make direct payment to the coach'
              },
              {
                step: '3',
                title: 'Receive Videos',
                desc: 'Get personalized custom workout videos and guidance'
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cult-yellow text-cult-black font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  <h4 className="text-lg font-bold text-cult-black mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-6 -right-6 w-12 h-0.5 bg-cult-yellow"></div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-cult-black/80 mb-6">
            Questions? Call our support team to learn more
          </p>
          <a 
            href="tel:+919999999999"
            className="inline-flex items-center gap-2 bg-cult-yellow text-cult-black px-8 py-4 rounded-full font-bold hover:bg-cult-dark-yellow transition-all transform hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            +91 99999 99999
          </a>
        </motion.div>
      </div>
    </BackgroundTransition>
  )
}
