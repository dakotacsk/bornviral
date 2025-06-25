'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const steps = [
  {
    number: 1,
    title: 'Tell us about your brand',
    description: 'Share your brand story, target audience, and content goals. We\'ll understand your unique voice and vision.',
  },
  {
    number: 2,
    title: 'We handpick top-performing creators',
    description: 'Our team matches you with Gen Z creators who have proven viral success and align with your brand values.',
  },
  {
    number: 3,
    title: 'You receive 150+ short-form videos/month',
    description: 'Get a steady stream of engaging content optimized for TikTok and Instagram Reels to scale your presence.',
  },
]

export default function HowItWorks() {
  const [currentStep, setCurrentStep] = useState(0)

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length)
  }

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length)
  }

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-born-black mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600">
            Your journey to viral success in three simple steps
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-born-blue text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  {steps[currentStep].number}
                </div>
                <h3 className="text-2xl font-bold text-born-black ml-4">
                  {steps[currentStep].title}
                </h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                {steps[currentStep].description}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevStep}
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
              aria-label="Previous step"
            >
              <ChevronLeft size={24} className="text-born-black" />
            </button>

            <div className="flex space-x-2">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentStep
                      ? 'w-8 bg-born-blue'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to step ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextStep}
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
              aria-label="Next step"
            >
              <ChevronRight size={24} className="text-born-black" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}