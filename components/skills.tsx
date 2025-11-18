'use client'

import { useEffect, useRef, useState } from 'react'

const skillsData = {
  "Languages": ["C/C++", "JavaScript", "TypeScript"],
  "Web Development": ["HTML/CSS", "React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
  "Tools & Platforms": ["VS Code", "Git/GitHub", "MongoDB Atlas", "Cloudinary", "Mapbox", "Docker"],
  "Fundamentals": ["OOPs", "DBMS", "SQL", "System Design"],
  "Competitive Programming": ["DSA", "Graphs", "Dynamic Programming", "Disjoint Set Union"]
}

export default function Skills() {
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
    <section id="skills" ref={sectionRef} className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skillsData).map(([category, skills], catIndex) => (
            <div
              key={catIndex}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${catIndex * 100}ms` }}
            >
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30 border border-purple-200/50 dark:border-purple-700/50 rounded-xl p-6 sm:p-8 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full text-sm font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
