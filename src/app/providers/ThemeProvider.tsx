'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { MotionConfig } from 'framer-motion'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')

  // The inline script in layout.tsx has already applied the initial theme
  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme')
    if (current === 'light' || current === 'dark') setTheme(current)
  }, [])

  const toggleTheme = () => {
    const next: Theme = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    try {
      localStorage.setItem('theme', next)
    } catch {}
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
