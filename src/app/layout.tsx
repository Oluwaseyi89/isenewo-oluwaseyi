import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/app/components/header/Header'
import Footer from '@/app/components/footer/Footer'
import { ThemeProvider } from '@/app/providers/ThemeProvider' 

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
      <head>
      <link 
          rel="icon" 
          type="image/png" 
          sizes="32x32" 
          href="https://firebasestorage.googleapis.com/v0/b/daz-course-by-seyi.appspot.com/o/seyi_psp_sm_trans.png?alt=media&token=29078595-7d13-4d84-8dac-8b28a9dc99a9"
        />
      </head>
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