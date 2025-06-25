'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-born-black mb-6"
        >
          Scale your brand through high-impact short-form content
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
        >
          We match you with top creators who deliver 75M+ organic views across TikTok & IG.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-born-blue text-white font-semibold rounded-3xl hover:bg-blue-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get Started
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
        >
          <div>
            <p className="text-3xl font-bold text-born-blue">500M+</p>
            <p className="text-gray-600 mt-1">Organic Views</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-born-blue">150+</p>
            <p className="text-gray-600 mt-1">Videos/Month</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-born-blue">5</p>
            <p className="text-gray-600 mt-1">Dedicated Creators</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}