'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { NAV_ITEMS, PROFILE } from '@/app/utils/constants'

interface MobileDrawerProps {
  isOpen: boolean
  onClose: () => void
  activeSection: string
  onNavClick: (sectionId: string) => void
}

export default function MobileDrawer({ isOpen, onClose, activeSection, onNavClick }: MobileDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-background/70 backdrop-blur-sm md:hidden"
          />
          <motion.nav
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 inset-x-4 z-50 card p-3 md:hidden"
            aria-label="Mobile"
          >
            <ul className="space-y-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      onNavClick(item.id)
                      onClose()
                    }}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl font-mono text-sm transition-colors ${
                      activeSection === item.id
                        ? 'bg-surface-2 text-foreground'
                        : 'text-muted hover:text-foreground hover:bg-surface-2'
                    }`}
                  >
                    <span>
                      <span className="text-primary">/</span>
                      {item.id === 'intro' ? 'home' : item.label.toLowerCase()}
                    </span>
                    {activeSection === item.id && <span className="pulse-dot" />}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-foreground text-background font-medium"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  )
}
