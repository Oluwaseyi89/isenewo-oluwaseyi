// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/app/components/header/Header'
import Footer from '@/app/components/footer/Footer'
import { ThemeProvider } from '@/app/providers/ThemeProvider' // Import ThemeProvider

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Isenewo Oluwaseyi Ephraim | Full-Stack Developer',
  description: 'Polyglot developer specializing in modern web & blockchain technologies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider> {/* Wrap everything with ThemeProvider */}
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  )
}












// import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
// import './globals.css'
// import Header from '@/app/components/header/Header'
// import { ThemeProvider } from '@/app/providers/ThemeProvider'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Isenewo Oluwaseyi Ephraim | Full-Stack Developer',
//   description: 'Polyglot developer specializing in modern web & blockchain technologies',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className="scroll-smooth">
//       <body className={inter.className}>
//         <ThemeProvider>
//           <Header />
//           <main className="min-h-screen">{children}</main>
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }