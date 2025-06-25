'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check } from 'lucide-react'

const pricingFeatures = [
  '30 videos per creator per month',
  'Hand-picked viral creators',
  'Custom content strategy',
  'Performance analytics',
  'Dedicated account management',
  'Content rights included',
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-born-black mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600">
            Scale your content with predictable costs
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 sm:p-12 shadow-xl"
        >
          <div className="text-center mb-8">
            <div className="flex items-baseline justify-center mb-4">
              <span className="text-5xl font-bold text-born-black">$1,500</span>
              <span className="text-xl text-gray-600 ml-2">per creator / month</span>
            </div>
            <p className="text-gray-600">Up to 5 creators available</p>
          </div>

          <ul className="space-y-4 mb-10">
            {pricingFeatures.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check size={20} className="text-born-blue mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>

          <Link
            href="#contact"
            className="block w-full text-center px-8 py-4 bg-born-blue text-white font-semibold rounded-3xl hover:bg-blue-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Book a consultation to find the right creator package for your brand
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-sm text-gray-500 mt-8"
        >
          All packages include a 30-day satisfaction guarantee
        </motion.p>
      </div>
    </section>
  )
}