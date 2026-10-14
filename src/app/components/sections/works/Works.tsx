'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Github, X } from 'lucide-react'
import { Project } from '@/app/utils/constants'
import { FilterType, filterProjects, getPopularTags, isProjectTag } from '@/app/utils/projectUtils'
import SectionHeading from '@/app/components/ui/SectionHeading'
import Reveal from '@/app/components/ui/Reveal'
import ProjectCard from './ProjectCard'

// Widen enough cards to fill the 3-column grid without leaving gaps
function largeIndexes(count: number) {
  const needed = (3 - (count % 3)) % 3
  return new Set(Array.from({ length: needed }, (_, i) => i * 3))
}

export default function Works() {
  const [filter, setFilter] = useState<FilterType>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const popularTags = getPopularTags(5)
  const filteredProjects = filterProjects(filter)
  const large = largeIndexes(filteredProjects.length)

  useEffect(() => {
    if (!selectedProject) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setSelectedProject(null)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [selectedProject])

  const handleFilterChange = (next: string) => {
    if (next === 'all' || next === 'featured' || isProjectTag(next)) setFilter(next as FilterType)
  }

  const filters = ['all', 'featured', ...popularTags]

  return (
    <div className="space-y-12">
      <SectionHeading
        index="03"
        route="/work"
        title={
          <>
            Systems in <span className="text-primary">production.</span>
          </>
        }
        intro="Employer, client and personal platforms. Open any project for the engineering decisions behind it."
      />

      <Reveal className="flex flex-wrap gap-2" >
        {filters.map((f) => {
          const active = filter === f
          return (
            <button
              key={f}
              onClick={() => handleFilterChange(f)}
              aria-pressed={active}
              className={`relative h-10 px-4 rounded-full font-mono text-[13px] border transition-colors ${
                active
                  ? 'border-transparent text-primary-ink'
                  : 'border-border text-muted hover:text-foreground hover:border-foreground/40'
              }`}
            >
              {active && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative">{f === 'all' ? 'All' : f === 'featured' ? 'Featured' : f}</span>
            </button>
          )
        })}
      </Reveal>

      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              large={large.has(index)}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <p className="text-center text-muted py-12">No projects match this filter yet.</p>
      )}

      {/* Project details */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-0 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-md" onClick={() => setSelectedProject(null)} />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-dialog-title"
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative card w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-b-none sm:rounded-b-[1.25rem]"
            >
              <div className="relative aspect-[16/8] bg-surface-2 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={`${selectedProject.title} preview`}
                  className="w-full h-full object-cover object-top"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 grid place-items-center w-10 h-10 rounded-full glass text-foreground hover:text-primary transition-colors"
                  aria-label="Close project details"
                  autoFocus
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-10 space-y-8">
                <div className="space-y-3">
                  <p className="text-label text-primary">{selectedProject.role}</p>
                  <h3 id="project-dialog-title" className="text-h2 !text-3xl sm:!text-4xl text-foreground">
                    {selectedProject.title}
                  </h3>
                  <p className="text-lead text-muted">{selectedProject.description}</p>
                </div>

                <div>
                  <p className="text-label text-faint mb-4">Engineering highlights</p>
                  <ul className="space-y-3">
                    {selectedProject.highlights.map((item) => (
                      <li key={item} className="grid grid-cols-[1.25rem_1fr] text-foreground">
                        <span aria-hidden className="text-primary font-mono">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <li key={tag} className="chip">
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-primary text-primary-ink font-semibold hover:bg-primary-light transition-colors"
                  >
                    {selectedProject.liveLabel}
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-border text-foreground font-medium hover:border-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      View code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
