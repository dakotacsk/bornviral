import Link from 'next/link'
import { Mail, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-6">
            <a
              href="mailto:contact@bornviral.com"
              className="text-gray-600 hover:text-born-blue transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://www.linkedin.com/company/bornviral"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-born-blue transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Made by{' '}
              <span className="font-semibold text-born-blue">Born Viral</span>
            </p>
            <p className="text-xs text-gray-500 mt-2">
              © {new Date().getFullYear()} Born Viral. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}