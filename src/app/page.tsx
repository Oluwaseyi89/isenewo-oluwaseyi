'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Intro from '@/app/components/sections/intro/Intro'
import About from '@/app/components/sections/about/About'
import Works from '@/app/components/sections/works/Works'
import Contact from '@/app/components/sections/contact/Contact'
import ScrollIndicator from '@/app/components/ui/ScrollIndicator'
import AnimatedSection from '@/app/components/ui/AnimatedSection'

const sections = [
  { id: 'intro', component: Intro },
  { id: 'about', component: About },
  { id: 'works', component: Works },
  { id: 'contact', component: Contact },
]

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })
  
  const [activeSection, setActiveSection] = useState('intro')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5, rootMargin: '-100px 0px -100px 0px' }
    )

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="relative">
      <ScrollIndicator />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {sections.map(({ id, component: Component }, index) => (
          <AnimatedSection key={id} id={id} index={index}>
            <Component />
          </AnimatedSection>
        ))}
      </div>
    </div>
  )
}