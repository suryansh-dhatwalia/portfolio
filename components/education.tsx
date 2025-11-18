'use client'

import { useEffect, useRef, useState } from 'react'

const educationData = [
  {
    degree: "B.Tech Computer Science Engineering",
    school: "Bennett University",
    year: "2023 - 2027",
    cgpa: "CGPA: 8.03",
    details: "Focused on full-stack development, DSA, and scalable systems design"
  },
  {
    degree: "Class 12",
    school: "Dasmesh Public School, Faridkot, Punjab",
    year: "2022",
    cgpa: "89.9%",
    details: "Strong foundation in Mathematics, Physics, and Computer Science"
  },
  {
    degree: "Class 10",
    school: "Baba Farid Public School, Faridkot, Punjab",
    year: "2020",
    cgpa: "89%",
    details: "Established core competencies in STEM subjects"
  }
]

export default function Education() {
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
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="education" ref={sectionRef} className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
          Education
        </h2>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white dark:bg-slate-800 border border-purple-200/50 dark:border-purple-700/50 rounded-xl p-6 sm:p-8 hover:border-purple-400/80 dark:hover:border-purple-500/80 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-purple-600 dark:text-purple-400 font-semibold mb-1">
                        {edu.school}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {edu.details}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
                        {edu.cgpa}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        {edu.year}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
