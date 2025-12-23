'use client'

import { motion } from 'framer-motion'
import { NAV_ITEMS } from '@/app/utils/constants'

interface NavLinksProps {
  activeSection: string
  onNavClick: (sectionId: string) => void
}

export default function NavLinks({ activeSection, onNavClick }: NavLinksProps) {
  return (
    <div className="flex items-center space-x-1">
      {NAV_ITEMS.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <a
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault()
              onNavClick(item.id)
            }}
            className="relative px-3 py-2 text-sm font-medium transition-colors group"
          >
            <span
              className={`relative z-10 ${
                activeSection === item.id
                  ? 'text-primary'
                  : 'text-muted hover:text-foreground'
              }`}
            >
              {item.label}
            </span>
            
            {activeSection === item.id && (
              <motion.div
                layoutId="activeNavIndicator"
                className="absolute inset-0 bg-primary/10 rounded-lg"
                initial={false}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            
            {/* Hover effect */}
            <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity bg-primary/5" />
            
            {/* Active dot indicator */}
            {activeSection === item.id && (
              <motion.div
                layoutId="activeNavDot"
                className="absolute -bottom-1 left-1/2 w-1.5 h-1.5 -translate-x-1/2 rounded-full bg-primary"
                initial={false}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </a>
        </motion.div>
      ))}
    </div>
  )
}