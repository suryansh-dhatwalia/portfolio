'use client'

import { useEffect, useState } from 'react'
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react'
import Hero from '@/components/hero'
import About from '@/components/about'
import Education from '@/components/education'
import Skills from '@/components/skills'
import Projects from '@/components/projects'
import Experience from '@/components/experience'
import Leadership from '@/components/leadership'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="overflow-hidden">
      <Hero scrollY={scrollY} />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <Leadership />
      <Contact />
      <Footer />
    </main>
  )
}
