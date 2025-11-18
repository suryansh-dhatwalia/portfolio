'use client'

import { useEffect, useRef, useState } from 'react'

export default function About() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

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

  return (
    <section id="about" ref={sectionRef} className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                I'm a <span className="font-semibold text-purple-600 dark:text-purple-400">Computer Science Engineering student</span> at Bennett University, passionate about full-stack development and building scalable digital experiences.
              </p>
              <p className="text-lg leading-relaxed">
                My expertise lies in the <span className="font-semibold text-blue-600 dark:text-blue-400">MERN stack</span>, where I combine frontend creativity with backend efficiency. I'm driven by problem-solving and creating code that's not just functional, but elegant and maintainable.
              </p>
              <p className="text-lg leading-relaxed">
                Whether it's optimizing performance, architecting REST APIs, or designing intuitive user interfaces, I bring dedication and innovation to every project.
              </p>
              <div className="pt-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">📍 Delhi, India</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/50 dark:to-blue-950/50 border border-purple-200 dark:border-purple-800 rounded-2xl p-8 backdrop-blur-xl">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">💻</div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Full-Stack Development</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">MERN Stack Expert</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">🚀</div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Problem Solving</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">DSA & Competitive Programming</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">⚡</div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Optimization</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Performance & Scalability</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
