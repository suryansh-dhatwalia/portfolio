'use client'

import { useEffect, useRef, useState } from 'react'

const experienceData = [
  {
    role: "Full Stack Developer Intern",
    company: "DBA ENTERPRISES LLP",
    period: "July – September 2024",
    highlights: [
      "Improved page load speed by 40%",
      "Increased user retention by 15%",
      "Developed REST APIs with 20% faster server responses",
      "Collaborated in Agile stand-ups to reduce sprint delivery time by 15%",
      "Used Git/GitHub for clean team-based development"
    ]
  }
]

export default function Experience() {
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
    <section id="experience" ref={sectionRef} className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            >
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>
                <div className="absolute left-0 top-6 w-3 h-3 bg-purple-500 rounded-full -translate-x-1.5"></div>
                
                <div className="ml-8 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30 border border-purple-200/50 dark:border-purple-700/50 rounded-xl p-6 sm:p-8 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <div className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full whitespace-nowrap">
                      <p className="text-sm font-medium text-purple-600 dark:text-purple-400">
                        {exp.period}
                      </p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-gray-700 dark:text-gray-300 flex items-start gap-3">
                        <span className="text-purple-500 font-bold mt-0.5">→</span>
                        {highlight}
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
