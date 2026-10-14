'use client'

import { Moon, Sun } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from '@/app/providers/ThemeProvider'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const next = theme === 'light' ? 'dark' : 'light'

  return (
    <button
      onClick={toggleTheme}
      className="relative grid place-items-center w-10 h-10 rounded-full border border-border bg-surface-2 text-foreground hover:border-primary hover:text-primary transition-colors overflow-hidden"
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: 14, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -14, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.2 }}
        >
          {theme === 'light' ? <Moon className="w-[18px] h-[18px]" /> : <Sun className="w-[18px] h-[18px]" />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
