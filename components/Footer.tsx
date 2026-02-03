'use client'

import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react'
import Image from 'next/image'

const footerSections = [
  {
    title: 'Company',
    links: [
      'About Us',
      'Careers',
      'Press',
      'Blog',
      'Contact Us'
    ]
  },
  {
    title: 'Services',
    links: [
      'Cult Pass',
      'Group Classes',
      'Personal Training',
      'Nutrition',
      'Mental Wellness'
    ]
  },
  {
    title: 'Support',
    links: [
      'Help Center',
      'FAQ',
      'Terms & Conditions',
      'Privacy Policy',
      'Refund Policy'
    ]
  },
  {
    title: 'Connect',
    links: [
      'Instagram',
      'Facebook',
      'Twitter',
      'YouTube',
      'LinkedIn'
    ]
  }
]

const socialLinks = [
  { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
  { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
  { icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/nexufitness/', label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="bg-cult-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-span-2 lg:col-span-2"
          >
            <div className="mb-4 sm:mb-6">
              <div className="relative h-16 w-56 sm:h-20 sm:w-72">
                <Image
                  src="/logo-full.png"
                  alt="Nexu Fitness Studio"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
            <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              At Nexu Fitness Studio, we make group workouts fun, daily food healthy & tasty, 
              mental fitness easy with yoga & meditation, and medical & lifestyle care hassle-free.
            </p>
            <div className="text-xl sm:text-2xl font-bold text-cult-yellow mb-4">
              #BeBetterEveryDay
            </div>
            
            {/* Contact Info */}
            <div className="space-y-2 text-xs sm:text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                <a
                  href="mailto:nexufitnessstudio@gmail.com"
                  className="hover:text-white transition-colors duration-300"
                >
                  nexufitnessstudio@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>+91 8883222349</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Tirupur, Tamil Nadu</span>
              </div>
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{section.title}</h3>
              <ul className="space-y-2 sm:space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-xs sm:text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800"
        >
          <div className="max-w-md">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-3 sm:mb-4 text-xs sm:text-sm">
              Subscribe to get updates on new features and offers.
            </p>
            <form
              action="mailto:nexufitnessstudio@gmail.com"
              method="post"
              encType="text/plain"
              className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="flex-1 px-3 sm:px-4 py-2.5 sm:py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cult-yellow focus:border-transparent text-sm sm:text-base"
              />
              <button
                type="submit"
                className="bg-cult-yellow text-cult-black px-4 sm:px-6 py-2.5 sm:py-2 rounded-lg hover:bg-cult-dark-yellow active:bg-cult-dark-yellow transition-colors duration-300 text-sm sm:text-base font-semibold touch-manipulation"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <div className="text-xs sm:text-sm text-gray-400">
              © 2024 Nexu Fitness Studio. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href !== '#' ? '_blank' : undefined}
                  rel={social.href !== '#' ? 'noopener noreferrer' : undefined}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label={social.label}
                >
                  <div className="w-4 h-4 sm:w-5 sm:h-5">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
