import Intro from '@/app/components/sections/intro/Intro'
import About from '@/app/components/sections/about/About'
import Experience from '@/app/components/sections/experience/Experience'
import Works from '@/app/components/sections/works/Works'
import OpenSource from '@/app/components/sections/opensource/OpenSource'
import Contact from '@/app/components/sections/contact/Contact'
import ScrollIndicator from '@/app/components/ui/ScrollIndicator'
import IntroScreen from '@/app/components/intro/IntroScreen'

const sections = [
  { id: 'intro', Component: Intro },
  { id: 'about', Component: About },
  { id: 'experience', Component: Experience },
  { id: 'works', Component: Works },
  { id: 'open-source', Component: OpenSource },
  { id: 'contact', Component: Contact },
]

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      <IntroScreen />
      <ScrollIndicator />

      {/* Ambient backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[900px] bg-grid" />
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] glow" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        {sections.map(({ id, Component }) => (
          <section key={id} id={id} className={id === 'intro' ? '' : 'py-16 sm:py-24'}>
            <Component />
          </section>
        ))}
      </div>
    </div>
  )
}
