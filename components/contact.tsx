'use client'

import { useRef, useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Contact() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section id="contact" ref={sectionRef} className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <p className="text-center text-gray-700 dark:text-gray-300 text-lg mb-16">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>

        <div className={`grid md:grid-cols-2 gap-12 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Contact Info */}
          <div className="space-y-8">
            <a href="mailto:suryansh78140@gmail.com" className="flex items-start gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                <p className="text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  suryansh78140@gmail.com
                </p>
              </div>
            </a>

            <a href="tel:+917814029288" className="flex items-start gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Phone</p>
                <p className="text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  +91 7814029288
                </p>
              </div>
            </a>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Location</p>
                <p className="text-gray-600 dark:text-gray-400">Delhi, India</p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="https://www.linkedin.com/in/suryansh-dhatwalia-8b137428b/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 dark:from-gray-400 dark:to-gray-600 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-purple-200 dark:border-purple-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-purple-200 dark:border-purple-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-purple-200 dark:border-purple-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 resize-none"
                placeholder="Your message..."
              />
            </div>
            <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
