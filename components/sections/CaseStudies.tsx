'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, TrendingUp } from 'lucide-react'

const caseStudies = [
  {
    brand: 'Swype Athletics',
    category: 'Sportswear brand',
    result: 'Just started campaign, generated 5M+ views across platforms in 4 weeks',
    metric: '5M+',
    metricLabel: 'Views',
  },
  {
    brand: 'Flyopia',
    category: 'Travel brand',
    result: 'Generated 100M+ views through Royce\'s campaigns in 3 months',
    metric: '100M+',
    metricLabel: 'Views',
  },
  {
    brand: 'Mealslash',
    category: 'Food/lifestyle',
    result: '$100,000 in a month from Jake\'s campaigns',
    metric: '$100K',
    metricLabel: 'Revenue',
  },
]

export default function CaseStudies() {
  const [currentStudy, setCurrentStudy] = useState(0)

  const nextStudy = () => {
    setCurrentStudy((prev) => (prev + 1) % caseStudies.length)
  }

  const prevStudy = () => {
    setCurrentStudy((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  return (
    <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-born-black mb-4">
            Case Studies
          </h2>
          <p className="text-lg text-gray-600">
            Real results from real brands
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStudy}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-born-blue/5 to-born-blue/10 rounded-3xl p-8 sm:p-12 shadow-lg"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-born-black mb-2">
                    {caseStudies[currentStudy].brand}
                  </h3>
                  <p className="text-gray-600">
                    {caseStudies[currentStudy].category}
                  </p>
                </div>
                <TrendingUp size={32} className="text-born-blue" />
              </div>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {caseStudies[currentStudy].result}
              </p>

              <div className="bg-white rounded-2xl p-6 inline-block">
                <p className="text-4xl font-bold text-born-blue mb-1">
                  {caseStudies[currentStudy].metric}
                </p>
                <p className="text-sm text-gray-600">
                  {caseStudies[currentStudy].metricLabel}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevStudy}
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
              aria-label="Previous case study"
            >
              <ChevronLeft size={24} className="text-born-black" />
            </button>

            <div className="flex space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStudy(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentStudy
                      ? 'w-8 bg-born-blue'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to case study ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextStudy}
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
              aria-label="Next case study"
            >
              <ChevronRight size={24} className="text-born-black" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}