'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import NavLinks from './NavLinks'
import MobileDrawer from './MobileDrawer'
import ThemeToggle from '../ui/ThemeToggle'
import { NAV_ITEMS, PROFILE } from '@/app/utils/constants'

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('intro')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  const handleNavClick = (sectionId: string) => {
    setIsDrawerOpen(false)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-0 inset-x-0 z-50 px-4 pt-4"
      >
        <div
          className={`mx-auto max-w-6xl flex items-center justify-between gap-4 rounded-full px-3 py-2 pl-5 transition-all duration-300 ${
            isScrolled ? 'glass shadow-[var(--shadow)]' : 'border border-transparent'
          }`}
        >
          <a
            href="#intro"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('intro')
            }}
            className="font-mono text-sm font-medium text-foreground flex items-center gap-2"
            aria-label="Back to top"
          >
            <span className="pulse-dot" />
            <span>
              isenewo<span className="text-primary">.</span>dev
            </span>
          </a>

          <nav className="hidden md:block" aria-label="Primary">
            <NavLinks activeSection={activeSection} onNavClick={handleNavClick} />
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 h-10 px-4 rounded-full bg-foreground text-background text-sm font-medium hover:bg-primary hover:text-primary-ink transition-colors"
            >
              <Download className="w-4 h-4" />
              CV
            </a>
            <ThemeToggle />
            <button
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              className="md:hidden grid place-items-center w-10 h-10 rounded-full border border-border bg-surface-2 text-foreground"
              aria-label={isDrawerOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isDrawerOpen}
            >
              {isDrawerOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        activeSection={activeSection}
        onNavClick={handleNavClick}
      />
    </>
  )
}
