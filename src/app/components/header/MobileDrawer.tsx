'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { NAV_ITEMS } from '@/app/utils/constants'

interface MobileDrawerProps {
  isOpen: boolean
  onClose: () => void
  activeSection: string
  onNavClick: (sectionId: string) => void
}

export default function MobileDrawer({ 
  isOpen, 
  onClose, 
  activeSection, 
  onNavClick 
}: MobileDrawerProps) {
  const handleNavClick = (sectionId: string) => {
    onNavClick(sectionId)
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-64 bg-background border-l border-border shadow-2xl md:hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-lg font-semibold text-foreground">Menu</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="p-4 space-y-2">
              {NAV_ITEMS.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.id)
                  }}
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted hover:text-foreground hover:bg-primary/5'
                  }`}
                >
                  <span className="font-medium">{item.label}</span>
                  
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="mobileActiveIndicator"
                      className="ml-auto w-2 h-2 rounded-full bg-primary"
                      initial={false}
                    />
                  )}
                </motion.a>
              ))}
            </nav>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border">
              <p className="text-sm text-muted text-center">
                © {new Date().getFullYear()} Isenewo.dev
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}