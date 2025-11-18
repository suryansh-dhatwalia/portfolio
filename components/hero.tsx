'use client'

import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface HeroProps {
  scrollY: number
}

export default function Hero({ scrollY }: HeroProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-white via-purple-50 to-blue-50 dark:from-slate-950 dark:via-purple-950 dark:to-slate-900 flex items-center justify-center">
      {/* Animated gradient orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div 
          className="space-y-6"
          style={{
            opacity: 1 - scrollY / 500,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        >
          <div className="inline-block">
            <div className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-300/50 dark:border-purple-500/50 backdrop-blur-md">
              <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
                Welcome to my portfolio
              </span>
            </div>
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 dark:from-purple-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent leading-tight">
            Suryansh Dhatwalia
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Full-Stack Developer | MERN Stack Expert | Problem Solver
          </p>

          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Building scalable, impactful digital experiences with clean code and innovative solutions
          </p>

          <div className="flex gap-4 justify-center pt-4">
            <Button 
              className="px-8 py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore My Work
            </Button>
            <Button 
              variant="outline"
              className="px-8 py-6 border-2 border-purple-300 dark:border-purple-500 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950/50 font-semibold rounded-lg transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-purple-600 dark:text-purple-400" />
      </div>
    </section>
  )
}
