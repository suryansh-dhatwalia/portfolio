'use client'

import { useEffect, useRef, useState } from 'react'

const leadershipData = [
  {
    role: "Organizer",
    title: "Hackaccino",
    description: "Spearheaded hackathon with 800+ participants",
    achievements: ["₹2L sponsorships secured", "150+ member team directed", "Major event coordination"]
  },
  {
    role: "Management Co-Head",
    title: "CSI Club",
    description: "Improved event participation significantly",
    achievements: ["25% participation increase", "Event planning & execution", "Team leadership"]
  }
]

export default function Leadership() {
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
    <section id="leadership" ref={sectionRef} className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
          Leadership & Impact
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {leadershipData.map((item, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="group relative h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative h-full bg-white dark:bg-slate-800 border border-purple-200/50 dark:border-purple-700/50 rounded-2xl p-8 hover:border-purple-400/80 dark:hover:border-purple-500/80 transition-all duration-300">
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full mb-4">
                    <p className="text-xs font-semibold text-purple-600 dark:text-purple-400">
                      {item.role}
                    </p>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    {item.description}
                  </p>
                  <ul className="space-y-2">
                    {item.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
