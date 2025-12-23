'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initialTheme = stored ?? (prefersDark ? 'dark' : 'light')

    setTheme(initialTheme)
    document.documentElement.setAttribute('data-theme', initialTheme)
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
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



















// 'use client'

// import { createContext, useContext, useEffect, useState } from 'react'

// type Theme = 'light' | 'dark'

// interface ThemeContextType {
//   theme: Theme
//   toggleTheme: () => void
// }

// const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// export function ThemeProvider({ children }: { children: React.ReactNode }) {
//   const [theme, setTheme] = useState<Theme>('light')
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//     const stored = localStorage.getItem('theme') as Theme | null
//     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
//     const initialTheme = stored || (prefersDark ? 'dark' : 'light')
//     setTheme(initialTheme)
//     document.documentElement.setAttribute('data-theme', initialTheme)
//   }, [])

//   useEffect(() => {
//     if (!mounted) return
//     document.documentElement.setAttribute('data-theme', theme)
//     localStorage.setItem('theme', theme)
//   }, [theme, mounted])

//   const toggleTheme = () => {
//     setTheme(prev => prev === 'light' ? 'dark' : 'light')
//   }

//   // Prevent flash of unstyled content by not rendering until mounted
//   if (!mounted) {
//     return <div style={{ visibility: 'hidden' }}>{children}</div>
//   }

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   )
// }

// export function useTheme() {
//   const context = useContext(ThemeContext)
//   if (context === undefined) {
//     throw new Error('useTheme must be used within a ThemeProvider')
//   }
//   return context
// }





















// 'use client'

// import { createContext, useContext, useEffect, useState } from 'react'

// type Theme = 'light' | 'dark'

// interface ThemeContextType {
//   theme: Theme
//   toggleTheme: () => void
// }

// const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// export function ThemeProvider({ children }: { children: React.ReactNode }) {
//   const [theme, setTheme] = useState<Theme>('light')
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//     const stored = localStorage.getItem('theme') as Theme | null
//     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
//     const initialTheme = stored || (prefersDark ? 'dark' : 'light')
//     setTheme(initialTheme)
//     document.documentElement.setAttribute('data-theme', initialTheme)
//   }, [])

//   useEffect(() => {
//     if (!mounted) return
//     document.documentElement.setAttribute('data-theme', theme)
//     localStorage.setItem('theme', theme)
//   }, [theme, mounted])

//   const toggleTheme = () => {
//     setTheme(prev => prev === 'light' ? 'dark' : 'light')
//   }

//   if (!mounted) {
//     return <>{children}</>
//   }

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   )
// }

// export function useTheme() {
//   const context = useContext(ThemeContext)
//   if (context === undefined) {
//     throw new Error('useTheme must be used within a ThemeProvider')
//   }
//   return context
// }