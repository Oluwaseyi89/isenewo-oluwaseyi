import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/app/components/header/Header'
import Footer from '@/app/components/footer/Footer'
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import { PROFILE } from '@/app/utils/constants'

const inter = Inter({ subsets: ['latin'] })

const title = `${PROFILE.name} | Backend Engineer (Node.js, Go, Python)`
const description =
  'Backend engineer and AWS Certified Solutions Architect building APIs, payments and distributed systems. 290+ merged open-source PRs. Open to remote roles and relocation.'

export const metadata: Metadata = {
  metadataBase: new URL(PROFILE.siteUrl),
  title,
  description,
  keywords: [
    'Backend Engineer',
    'Node.js',
    'Nest.js',
    'Go',
    'Python',
    'Django',
    'AWS Solutions Architect',
    'API design',
    'Distributed systems',
    'Remote',
  ],
  authors: [{ name: PROFILE.name, url: PROFILE.siteUrl }],
  icons: { icon: '/images/seyi_psp_xs_trans.png' },
  openGraph: {
    type: 'profile',
    url: PROFILE.siteUrl,
    title,
    description,
    images: [{ url: '/images/seyi_psp_xs_trans.png', alt: PROFILE.name }],
  },
  twitter: {
    card: 'summary',
    title,
    description,
    creator: '@IsenewoE',
    images: ['/images/seyi_psp_xs_trans.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
