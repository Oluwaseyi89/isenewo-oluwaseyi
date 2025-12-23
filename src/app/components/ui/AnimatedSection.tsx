'use client'

import { motion } from 'framer-motion'
import { ReactNode, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

interface AnimatedSectionProps {
  children: ReactNode
  id: string
  index?: number
  className?: string
  delay?: number
}

export default function AnimatedSection({
  children,
  id,
  index = 0,
  className = '',
  delay = 0,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`min-h-screen py-20 md:py-32 relative ${className}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: delay + index * 0.1,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.section>
  )
}