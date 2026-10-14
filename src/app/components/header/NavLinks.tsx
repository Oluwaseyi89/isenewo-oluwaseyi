'use client'

import { motion } from 'framer-motion'
import { NAV_ITEMS } from '@/app/utils/constants'

interface NavLinksProps {
  activeSection: string
  onNavClick: (sectionId: string) => void
}

export default function NavLinks({ activeSection, onNavClick }: NavLinksProps) {
  return (
    <ul className="flex items-center gap-1">
      {NAV_ITEMS.filter((item) => item.id !== 'intro').map((item) => {
        const isActive = activeSection === item.id
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault()
                onNavClick(item.id)
              }}
              aria-current={isActive ? 'true' : undefined}
              className={`relative block px-3.5 py-2 font-mono text-[13px] transition-colors ${
                isActive ? 'text-foreground' : 'text-muted hover:text-foreground'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-surface-2 border border-border"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative">
                <span className="text-primary">/</span>
                {item.label.toLowerCase()}
              </span>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
