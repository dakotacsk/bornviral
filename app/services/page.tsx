'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import { 
  Video, 
  Users, 
  Smartphone, 
  BarChart3, 
  Edit3, 
  Zap,
  TrendingUp,
  Target,
  Sparkles,
  ArrowRight
} from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Content Creation',
    icon: Video,
    description: 'High-quality, platform-native content designed to capture attention and drive engagement.',
    features: [
      '150+ videos per month',
      'Multi-platform optimization',
      'Trend-jacking strategy',
      'Professional editing',
    ],
    color: 'from-blue-500 to-purple-600',
  },
  {
    id: 2,
    title: 'Creator Management',
    icon: Users,
    description: 'Access to our network of proven Gen Z creators who know how to make content go viral.',
    features: [
      '5 dedicated creators',
      'Creator matching',
      'Performance tracking',
      'Content coaching',
    ],
    color: 'from-green-500 to-teal-600',
  },
  {
    id: 3,
    title: 'Account Strategy',
    icon: Target,
    description: 'Strategic planning and execution to grow your social media presence exponentially.',
    features: [
      'Custom growth strategy',
      'Sub-account creation',
      'Audience analysis',
      'Competitor research',
    ],
    color: 'from-orange-500 to-red-600',
  },
  {
    id: 4,
    title: 'Performance Analytics',
    icon: BarChart3,
    description: 'Deep insights and reporting to understand what works and scale success.',
    features: [
      'Real-time dashboards',
      'ROI tracking',
      'Engagement metrics',
      'Monthly reports',
    ],
    color: 'from-purple-500 to-pink-600',
  },
]

const packages = [
  {
    name: 'Pricing',
    price: '$1,500',
    period: 'per creator / month',
    description: 'Scale your content with predictable costs',
    features: [
      'Up to 5 creators available',
      '30 videos per creator per month',
      'Hand-picked viral creators',
      'Custom content strategy',
      'Performance analytics',
      'Dedicated account management',
      'Content rights included',
    ],
    popular: true,
  },
]

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null)

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-7xl font-bold text-born-black mb-6">
              Services That Scale
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From content creation to strategic growth, we offer everything you need 
              to dominate social media and drive real business results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
                className="relative group hover-lift cursor-pointer"
              >
                <div className="h-full p-8 bg-white border border-gray-200 rounded-3xl hover:border-born-blue transition-all duration-300">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-0.5 mb-6`}>
                    <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                      <service.icon className="text-born-black" size={28} />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-born-black mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <AnimatePresence>
                    {selectedService === service.id && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-2 overflow-hidden"
                      >
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <Sparkles size={16} className="text-born-blue mt-1 mr-2 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                  
                  <div className="mt-6 flex items-center text-born-blue font-medium">
                    <span>Learn more</span>
                    <ArrowRight 
                      className={`ml-2 transition-transform duration-300 ${
                        selectedService === service.id ? 'rotate-90' : ''
                      }`} 
                      size={16} 
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-born-black mb-4">How We Work</h2>
            <p className="text-xl text-gray-600">Our proven process for viral success</p>
          </motion.div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 -translate-y-1/2 hidden md:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {[
                { icon: Target, title: 'Strategy', description: 'Define goals and target audience' },
                { icon: Zap, title: 'Create', description: 'Produce platform-native content' },
                { icon: TrendingUp, title: 'Distribute', description: 'Launch across all channels' },
                { icon: BarChart3, title: 'Optimize', description: 'Analyze and scale success' },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white rounded-3xl p-6 text-center relative z-10">
                    <div className="w-16 h-16 bg-born-blue rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-born-black mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-born-black mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Scale your content with predictable costs</p>
          </motion.div>

          <div className="max-w-lg mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative ${pkg.popular ? 'md:-mt-4' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-born-blue text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className={`h-full p-8 rounded-3xl border-2 ${
                  pkg.popular 
                    ? 'border-born-blue bg-gradient-to-b from-born-blue/5 to-transparent' 
                    : 'border-gray-200 bg-white'
                }`}>
                  <h3 className="text-2xl font-bold text-born-black mb-2">{pkg.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-born-black">{pkg.price}</span>
                    <span className="text-gray-600 ml-2">{pkg.period}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Sparkles size={16} className="text-born-blue mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/contact"
                    className={`block w-full text-center px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                      pkg.popular
                        ? 'bg-born-blue text-white hover:bg-blue-600'
                        : 'bg-gray-100 text-born-black hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}