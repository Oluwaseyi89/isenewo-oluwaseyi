'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { EXPERIENCE } from '@/app/utils/constants'
import SectionHeading from '@/app/components/ui/SectionHeading'
import Reveal from '@/app/components/ui/Reveal'

const FIRST_YEAR = Math.min(...EXPERIENCE.map((e) => e.start))
const LAST_YEAR = new Date().getFullYear() + 1
const SPAN = LAST_YEAR - FIRST_YEAR
const ticks = Array.from({ length: SPAN + 1 }, (_, i) => FIRST_YEAR + i)

const position = (start: number, end: number | null) => {
  const stop = (end ?? LAST_YEAR - 1) + 1
  return {
    left: `${((start - FIRST_YEAR) / SPAN) * 100}%`,
    width: `${((stop - start) / SPAN) * 100}%`,
  }
}

export default function Experience() {
  return (
    <div className="space-y-16">
      <SectionHeading
        index="02"
        route="/experience"
        title={
          <>
            Eight years of <span className="text-primary">production traffic.</span>
          </>
        }
        intro="From client platforms for Kaduna State’s tech ecosystem to insurance APIs and open-source maintainership. Here is the trace."
      />

      {/* Trace waterfall */}
      <Reveal className="card p-5 sm:p-8 overflow-hidden">
        <div className="flex items-center justify-between mb-6">
          <p className="text-label text-faint">trace · career</p>
          <p className="text-label text-faint hidden sm:block">
            {FIRST_YEAR} → now
          </p>
        </div>

        <div className="relative">
          {/* Year grid */}
          <div aria-hidden className="absolute inset-0 ml-[38%] sm:ml-[30%] flex">
            {ticks.slice(0, -1).map((year) => (
              <div key={year} className="flex-1 border-l border-dashed border-border" />
            ))}
          </div>

          <ul className="relative space-y-4">
            {EXPERIENCE.map((exp, i) => (
              <li key={exp.id} className="grid grid-cols-[38%_1fr] sm:grid-cols-[30%_1fr] items-center gap-0">
                <div className="pr-4 min-w-0">
                  <p className="font-medium text-foreground truncate">{exp.company.split(' (')[0].replace(', Kaduna', '')}</p>
                  <p className="font-mono text-xs text-faint truncate">{exp.role}</p>
                </div>
                <div className="relative h-9">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                    style={position(exp.start, exp.end)}
                    className={`absolute top-1 bottom-1 origin-left rounded-md flex items-center px-2.5 ${
                      exp.end === null ? 'bg-primary text-primary-ink' : 'bg-primary/25 text-foreground'
                    }`}
                  >
                    <span className="font-mono text-[11px] font-medium whitespace-nowrap">
                      {exp.end === null ? 'live' : `${exp.start}–${String(exp.end).slice(2)}`}
                    </span>
                  </motion.div>
                </div>
              </li>
            ))}
          </ul>

          <div aria-hidden className="ml-[38%] sm:ml-[30%] flex mt-4">
            {ticks.slice(0, -1).map((year) => (
              <span key={year} className="flex-1 font-mono text-[10px] sm:text-xs text-faint">
                {year % 2 === 0 || SPAN < 10 ? `’${String(year).slice(2)}` : ''}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Roles */}
      <ol className="space-y-6">
        {EXPERIENCE.map((exp, i) => (
          <li key={exp.id}>
            <Reveal delay={i * 0.05} className="card p-6 sm:p-8 grid lg:grid-cols-[16rem_1fr] gap-6 lg:gap-10">
              <div className="space-y-3">
                <p className="font-mono text-sm text-primary">{exp.period}</p>
                <h3 className="text-h3 text-foreground">{exp.role}</h3>
                {exp.companyUrl ? (
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-muted hover:text-primary transition-colors"
                  >
                    {exp.company}
                    <ArrowUpRight className="w-4 h-4 shrink-0" />
                  </a>
                ) : (
                  <p className="text-muted">{exp.company}</p>
                )}
              </div>

              <div className="space-y-5">
                <p className="text-foreground text-lg leading-relaxed">{exp.summary}</p>
                <ul className="space-y-3">
                  {exp.highlights.map((item) => (
                    <li key={item} className="grid grid-cols-[1.25rem_1fr] text-muted">
                      <span aria-hidden className="text-primary font-mono">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {exp.links.length > 0 && (
                  <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
                    {exp.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-medium text-primary link-underline"
                      >
                        {link.label}
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ))}
                  </div>
                )}

                <ul className="flex flex-wrap gap-2 pt-1">
                  {exp.technologies.map((tech) => (
                    <li key={tech} className="chip">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  )
}
