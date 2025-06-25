'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import { getImagePath } from '@/lib/utils'

const team = [
  {
    name: 'Royce Myers',
    role: 'Co-Founder & Creative Director',
    bio: 'Junior @ Babson College, co-creator of 100M+ organic views, led Flyopia\'s short-form content to over 100M views.',
    image: 'img/royce.PNG',
  },
  {
    name: 'Jake Davidson',
    role: 'Co-Founder & Strategy Lead',
    bio: 'Sophomore @ Babson College, generated $100,000 in a single month for MealSlash.',
    image: 'img/jake_davidson.jpg',
  },
  {
    name: 'Tommy Duquette',
    role: 'Co-Founder & Business Development',
    bio: 'Co-founder of FightCamp (backed by NEA, CAA, Mike Tyson), now bringing his expertise to Born Viral.',
    image: 'img/tommy.png',
  },
]

const values = [
  {
    title: 'Authenticity First',
    description: 'We believe in creating content that resonates because it\'s real, not manufactured.',
  },
  {
    title: 'Data-Driven Creativity',
    description: 'Every creative decision is backed by insights and analytics to maximize impact.',
  },
  {
    title: 'Platform Native',
    description: 'We speak the language of each platform, optimizing content for where it lives.',
  },
  {
    title: 'Speed & Scale',
    description: 'Move fast, test often, and scale what works. That\'s how virality happens.',
  },
]

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-7xl font-bold text-born-black mb-6">
              We Are Born Viral
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A collective of creators, strategists, and growth hackers obsessed with 
              making brands impossible to ignore on social media.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center"
          >
            {[
              { number: '500M+', label: 'Combined Views' },
              { number: '3', label: 'Co-Founders' },
              { number: '50+', label: 'Brands Scaled' },
              { number: '2021', label: 'Founded' },
            ].map((stat, index) => (
              <div key={index}>
                <h3 className="text-4xl font-bold text-born-blue mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={containerRef} className="py-20 bg-white relative overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 opacity-10"
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-born-blue rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        </motion.div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-born-black mb-8">Our Mission</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Some people can post for years without traction—others know how to go viral. 
              We work with Gen Z creators who understand social algorithms, your audience, 
              and have proven viral success to bring that same energy to your brand. 
              We launch strategic sub-accounts, run your main account, and scale content that connects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-born-black mb-4">The Founders</h2>
            <p className="text-xl text-gray-600">Meet the minds behind the virality</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-born-blue to-purple-600 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white">
                      {member.image ? (
                        <Image
                          src={getImagePath(member.image)}
                          alt={member.name}
                          width={192}
                          height={192}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-born-blue/10 to-purple-600/10" />
                      )}
                    </div>
                  </div>
                  
                </div>

                <h3 className="text-2xl font-bold text-born-black mb-2">{member.name}</h3>
                <p className="text-born-blue font-medium mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-born-black text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-400">What drives us every day</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 border border-gray-800 rounded-3xl hover:border-born-blue transition-colors duration-300"
              >
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}