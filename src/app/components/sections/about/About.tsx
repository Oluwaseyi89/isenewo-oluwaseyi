import { BadgeCheck, ArrowUpRight } from 'lucide-react'
import { TECH_STACK, SKILL_CATEGORIES, CERTIFICATIONS, PROFILE } from '@/app/utils/constants'
import SectionHeading from '@/app/components/ui/SectionHeading'
import Reveal from '@/app/components/ui/Reveal'

const stackLabels: Record<keyof typeof TECH_STACK, string> = {
  languages: 'Languages',
  frameworks: 'Frameworks',
  databases: 'Data',
  tools: 'Cloud & DevOps',
}

export default function About() {
  return (
    <div className="space-y-16">
      <SectionHeading
        index="01"
        route="/about"
        title={
          <>
            Engineering for systems that{' '}
            <span className="text-primary">can&apos;t afford to fail.</span>
          </>
        }
        intro={PROFILE.about}
      />

      <div className="grid lg:grid-cols-12 gap-6">
        {/* Expertise */}
        <Reveal className="lg:col-span-7 card p-6 sm:p-8">
          <p className="text-label text-faint mb-6">What I do</p>
          <ul className="divide-y divide-border">
            {SKILL_CATEGORIES.map((category, i) => (
              <li key={category.title} className="grid sm:grid-cols-[2.5rem_11rem_1fr] gap-x-4 gap-y-2 py-5 first:pt-0 last:pb-0">
                <span className="font-mono text-sm text-primary">0{i + 1}</span>
                <h3 className="font-display text-lg font-semibold text-foreground leading-snug">
                  {category.title}
                </h3>
                <p className="text-muted">{category.skills.join(' · ')}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Certifications */}
        <div className="lg:col-span-5 grid gap-6">
          {CERTIFICATIONS.map((cert, i) => (
            <Reveal key={cert.id} delay={i * 0.08}>
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group card relative h-full p-6 flex flex-col justify-between gap-6 overflow-hidden hover:border-primary transition-colors"
              >
                <div aria-hidden className="glow absolute -right-16 -top-16 w-48 h-48 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-start justify-between gap-4">
                  <span className="grid place-items-center w-11 h-11 rounded-xl bg-primary/10 text-primary">
                    <BadgeCheck className="w-6 h-6" />
                  </span>
                  <span className="text-label text-faint">{cert.date}</span>
                </div>
                <div>
                  <h3 className="text-h3 text-foreground">{cert.name}</h3>
                  <p className="text-sm text-muted mt-2">
                    {cert.issuer} · {cert.training}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-primary">
                    Verify on Credly
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Stack */}
        <Reveal className="lg:col-span-12 card p-6 sm:p-8">
          <p className="text-label text-faint mb-6">Stack</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {(Object.keys(TECH_STACK) as (keyof typeof TECH_STACK)[]).map((group) => (
              <div key={group} className="space-y-3">
                <h3 className="font-display font-semibold text-foreground">{stackLabels[group]}</h3>
                <ul className="flex flex-wrap gap-2">
                  {TECH_STACK[group].map((tech) => (
                    <li key={tech.name} className="chip">
                      {tech.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  )
}
