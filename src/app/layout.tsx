import type { Metadata } from 'next'
import { Bricolage_Grotesque, Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/app/components/header/Header'
import Footer from '@/app/components/footer/Footer'
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import { PROFILE } from '@/app/utils/constants'

const display = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-bricolage', display: 'swap' })
const sans = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' })
const mono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', display: 'swap' })

// Runs before first paint so the saved or system theme applies without a flash
const bootScript = `(function(){var d=document.documentElement;try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}d.setAttribute('data-theme',t)}catch(e){d.setAttribute('data-theme','dark')}})()`

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
    <html
      lang="en"
      data-theme="dark"
      data-intro="show"
      suppressHydrationWarning
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        <noscript>
          <style>{`.intro-screen{display:none}`}</style>
        </noscript>
      </head>
      <body>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
