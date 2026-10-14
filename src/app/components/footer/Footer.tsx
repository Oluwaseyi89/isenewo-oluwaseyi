import { ArrowUp } from 'lucide-react'
import { NAV_ITEMS, PROFILE, SOCIAL_LINKS } from '@/app/utils/constants'
import { SOCIAL_ICON_MAP } from '@/app/utils/social-icons'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative mt-24 border-t border-border overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-10 space-y-14">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-10">
          <div className="space-y-4 max-w-sm">
            <p className="font-mono text-sm text-foreground flex items-center gap-2">
              <span className="pulse-dot" />
              <span>
                isenewo<span className="text-primary">.</span>dev
              </span>
            </p>
            <p className="text-muted">
              {PROFILE.name}. Backend engineer building APIs, payments and distributed systems.
              AWS Certified Solutions Architect.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="text-label text-faint mb-4">Navigate</p>
            <ul className="space-y-2 font-mono text-sm">
              {NAV_ITEMS.filter((i) => i.id !== 'intro').map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-muted hover:text-primary transition-colors">
                    <span className="text-primary">/</span>
                    {item.label.toLowerCase()}
                  </a>
                </li>
              ))}
              <li>
                <a href={PROFILE.resumeUrl} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors">
                  <span className="text-primary">/</span>cv.pdf
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <p className="text-label text-faint mb-4">Elsewhere</p>
            <ul className="space-y-2">
              {SOCIAL_LINKS.map((link) => {
                const Icon = SOCIAL_ICON_MAP[link.icon]
                return (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      target={link.icon === 'mail' ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 text-muted hover:text-primary transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                      {link.name === 'Twitter' ? 'X / Twitter' : link.name}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <p
          aria-hidden
          className="font-display font-bold tracking-tighter leading-[0.8] text-[22vw] md:text-[13rem] text-surface-2 select-none -mb-4"
        >
          isenewo
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border text-sm text-faint">
          <p>© {year} {PROFILE.name}</p>
          <p className="font-mono">Built with Next.js · deployed on Vercel</p>
          <a href="#intro" className="inline-flex items-center gap-1.5 text-muted hover:text-primary transition-colors">
            Back to top
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
