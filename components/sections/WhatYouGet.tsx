'use client'

import { motion } from 'framer-motion'
import { Video, Users, Smartphone, BarChart3, Edit3 } from 'lucide-react'

const features = [
  {
    icon: Video,
    title: '150 Organic Short-Form Videos / Month',
    description: 'Consistent, high-quality content tailored to your brand voice',
  },
  {
    icon: Users,
    title: '5 Dedicated Creators',
    description: 'Hand-picked Gen Z creators with proven viral success',
  },
  {
    icon: Smartphone,
    title: 'Custom Brand Accounts',
    description: 'Strategic sub-accounts to scale your presence',
  },
  {
    icon: Edit3,
    title: 'UGC + Edited Content Mix',
    description: 'Perfect blend of authentic and polished content',
  },
  {
    icon: BarChart3,
    title: 'Full Access to Performance Metrics',
    description: 'Track your growth with detailed analytics',
  },
]

export default function WhatYouGet() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-born-black mb-4">
            What You Get
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to dominate short-form content
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <div className="w-14 h-14 bg-born-blue/10 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon size={28} className="text-born-blue" />
              </div>
              <h3 className="text-xl font-bold text-born-black mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}