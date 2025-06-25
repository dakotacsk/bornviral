'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { getImagePath } from '@/lib/utils'

const founders = [
  {
    name: 'Royce Myers',
    title: 'Co-Founder',
    description: 'Junior @ Babson College, co-creator of 100M+ organic views, led Flyopia\'s short-form content to over 100M views.',
    image: null, // No image file for Royce
  },
  {
    name: 'Jake Davidson',
    title: 'Co-Founder',
    description: 'Sophomore @ Babson College, generated $100,000 in a single month for MealSlash.',
    image: 'img/jake_davidson.jpg',
  },
  {
    name: 'Tommy Duquette',
    title: 'Co-Founder',
    description: 'Co-founder of FightCamp (backed by NEA, CAA, Mike Tyson), now a co-founder at Born Viral.',
    image: 'img/tommy.png',
  },
]

export default function AboutFounders() {
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
            About the Founders
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            Combined 500M+ organic views
          </p>
          <p className="text-lg text-gray-600">
            Proven results in growth and storytelling
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              {founder.image ? (
                <div className="w-20 h-20 relative rounded-full mb-6 mx-auto overflow-hidden">
                  <Image
                    src={getImagePath(founder.image)}
                    alt={founder.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="w-20 h-20 bg-born-blue rounded-full mb-6 mx-auto" />
              )}
              <h3 className="text-xl font-bold text-born-black mb-2 text-center">
                {founder.name}
              </h3>
              <p className="text-sm text-born-blue font-medium mb-4 text-center">
                {founder.title}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                {founder.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-700 mb-4 font-medium">
            Our Mission
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Some people can post for years without traction—others know how to go viral. We work with Gen Z creators who understand social algorithms, your audience and have proven viral success to bring that same energy to your brand, launching strategic sub-accounts, running your main account and scaling content that connects.
          </p>
        </motion.div>
      </div>
    </section>
  )
}