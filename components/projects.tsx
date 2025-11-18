'use client'

import { useEffect, useRef, useState } from 'react'
import { ExternalLink } from 'lucide-react'

const projectsData = [
  {
    title: "Delhi-Care",
    subtitle: "MERN Stack Hospital Management System",
    description: "A comprehensive hospital management system with bed allotment, inventory tracking, and appointment scheduling.",
    achievements: [
      "RESTful APIs for bed allotment & inventory management",
      "JWT authentication + Twilio SMS integration",
      "Priority-based ICU scoring (20% efficiency improvement)",
      "Role-based dashboards with optimized state management"
    ],
    tech: ["React", "Node.js", "MongoDB", "JWT", "Twilio"],
    color: "from-purple-500 to-indigo-500"
  },
  {
    title: "Wanderlust",
    subtitle: "Travel Booking Platform",
    description: "Full-stack travel booking application with interactive maps and real-time availability.",
    achievements: [
      "Full-stack CRUD operations (35% booking efficiency boost)",
      "Passport.js authentication (25% reduced unauthorized access)",
      "Cloudinary & Mapbox integrated UI",
      "Enhanced error handling (30% stability improvement)"
    ],
    tech: ["React", "Express", "MongoDB", "Cloudinary", "Mapbox"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Interactive ATM Card UI",
    subtitle: "3D Interactive Card Component",
    description: "Immersive 3D ATM card interface with interactive animations and responsive design.",
    achievements: [
      "3D card flip animation using HTML, CSS, JavaScript",
      "25% boost in user engagement",
      "Mobile-responsive with improved accessibility",
      "Smooth parallax and hover effects"
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    color: "from-pink-500 to-rose-500"
  }
]

export default function Projects() {
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
    <section id="projects" ref={sectionRef} className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="group relative h-full">
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                <div className="relative h-full bg-white dark:bg-slate-800 border border-purple-200/50 dark:border-purple-700/50 rounded-2xl p-6 sm:p-8 hover:border-purple-400/80 dark:hover:border-purple-500/80 transition-all duration-300 transform group-hover:scale-105">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} mb-4`}></div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-purple-600 dark:text-purple-400 font-semibold text-sm mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                          <span className="text-purple-500 mt-1">✓</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold hover:gap-3 transition-all duration-300">
                    View Project <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
