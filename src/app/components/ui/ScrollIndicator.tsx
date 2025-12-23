'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

interface ScrollIndicatorProps {
  progress?: number
}

export default function ScrollIndicator({ progress }: ScrollIndicatorProps) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

//   bg-gradient-to-r

  return (
    <>
      {/* Desktop scroll indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1  bg-linear-to-r from-primary to-primary-light z-50 origin-left hidden md:block"
        style={{ scaleX }}
      />
      
      {/* Mobile scroll indicator */}
      <div className="fixed bottom-8 right-6 md:hidden z-40">
        <div className="relative">
          <svg className="w-12 h-12 -rotate-90">
            <circle
              cx="24"
              cy="24"
              r="20"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-primary/20"
            />
            <motion.circle
              cx="24"
              cy="24"
              r="20"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              className="text-primary"
              style={{
                pathLength: scaleX,
              }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-xs font-medium text-primary"
            >
              ↓
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}