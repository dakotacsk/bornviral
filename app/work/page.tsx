'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import { Play, Eye, Heart } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Swype Athletics',
    category: 'Sportswear',
    description: 'Transforming athletic wear into viral content',
    metrics: { views: '5.2M', likes: '423K', engagement: '8.7%' },
    color: 'from-blue-500 to-purple-600',
    featured: true,
  },
  {
    id: 2,
    title: 'Flyopia',
    category: 'Travel',
    description: 'Making wanderlust go viral',
    metrics: { views: '102M', likes: '8.1M', engagement: '12.3%' },
    color: 'from-green-500 to-teal-600',
    featured: true,
  },
  {
    id: 3,
    title: 'MealSlash',
    category: 'Food & Lifestyle',
    description: 'Serving up viral food content',
    metrics: { views: '23M', likes: '1.8M', engagement: '9.2%' },
    color: 'from-orange-500 to-red-600',
    featured: true,
  },
  {
    id: 4,
    title: 'TechFlow',
    category: 'Technology',
    description: 'Making tech trendy',
    metrics: { views: '8.9M', likes: '673K', engagement: '7.5%' },
    color: 'from-purple-500 to-pink-600',
  },
  {
    id: 5,
    title: 'StyleSync',
    category: 'Fashion',
    description: 'Fashion that breaks the internet',
    metrics: { views: '15.4M', likes: '1.2M', engagement: '10.1%' },
    color: 'from-pink-500 to-rose-600',
  },
  {
    id: 6,
    title: 'FitPulse',
    category: 'Fitness',
    description: 'Fitness content that motivates millions',
    metrics: { views: '11.7M', likes: '892K', engagement: '11.8%' },
    color: 'from-indigo-500 to-blue-600',
  },
]

const categories = ['All', 'Sportswear', 'Travel', 'Food & Lifestyle', 'Technology', 'Fashion', 'Fitness']

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

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
          >
            <h1 className="text-5xl sm:text-7xl font-bold text-born-black mb-6">
              Our Work
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              From concept to viral sensation. Explore how we've helped brands 
              capture attention and drive engagement across social platforms.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-born-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className={`group relative ${
                    project.featured ? 'lg:col-span-2 lg:row-span-2' : ''
                  }`}
                >
                  <div className={`relative h-full min-h-[400px] ${
                    project.featured ? 'lg:min-h-[600px]' : ''
                  } rounded-3xl overflow-hidden hover-lift`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`} />
                    
                    {/* Hover Overlay */}
                    <AnimatePresence>
                      {hoveredProject === project.id && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 bg-black/50 flex items-center justify-center"
                        >
                          <motion.button
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="w-20 h-20 bg-white rounded-full flex items-center justify-center"
                          >
                            <Play className="text-born-black ml-1" size={32} />
                          </motion.button>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <p className="text-sm font-medium mb-2 opacity-80">{project.category}</p>
                      <h3 className={`font-bold mb-2 ${
                        project.featured ? 'text-3xl lg:text-4xl' : 'text-2xl'
                      }`}>
                        {project.title}
                      </h3>
                      <p className={`mb-6 opacity-90 ${
                        project.featured ? 'text-lg' : 'text-base'
                      }`}>
                        {project.description}
                      </p>
                      
                      {/* Metrics */}
                      <div className="flex gap-6 text-sm">
                        <div className="flex items-center gap-2">
                          <Eye size={16} />
                          <span>{project.metrics.views}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Heart size={16} />
                          <span>{project.metrics.likes}</span>
                        </div>
                        <div>
                          <span className="font-medium">{project.metrics.engagement}</span>
                          <span className="opacity-80"> engagement</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-born-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-born-black mb-4">
              Want to see your brand here?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's create content that gets results.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-born-blue text-white font-semibold rounded-full hover:bg-blue-600 transition-all duration-200 transform hover:scale-105"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}