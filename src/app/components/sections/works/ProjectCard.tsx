'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Project } from '@/app/utils/constants'

interface ProjectCardProps {
  project: Project
  index: number
  large?: boolean
  onClick: () => void
}

export default function ProjectCard({ project, index, large = false, onClick }: ProjectCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className={`group card overflow-hidden flex flex-col hover:border-primary transition-colors ${
        large ? 'md:col-span-2' : ''
      }`}
    >
      <button
        onClick={onClick}
        className="relative block w-full h-52 lg:h-60 overflow-hidden bg-surface-2 text-left"
        aria-label={`Open details for ${project.title}`}
      >
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        {project.featured && (
          <span className="absolute top-4 left-4 chip !bg-primary !text-primary-ink !border-transparent font-semibold">
            Featured
          </span>
        )}
      </button>

      <div className="flex flex-col flex-1 p-6 gap-4">
        <p className="text-label text-primary">{project.role}</p>
        <div className="space-y-2">
          <h3 className={`${large ? 'text-h2 !text-3xl sm:!text-4xl' : 'text-h3'} text-foreground`}>
            <button onClick={onClick} className="text-left hover:text-primary transition-colors">
              {project.title}
            </button>
          </h3>
          <p className={`text-muted ${large ? 'text-lg max-w-2xl' : 'line-clamp-3'}`}>{project.description}</p>
        </div>

        <div className="mt-auto pt-2 flex flex-wrap items-center justify-between gap-4">
          <ul className="flex flex-wrap gap-2">
            {project.tags.slice(0, large ? 6 : 3).map((tag) => (
              <li key={tag} className="chip">
                {tag}
              </li>
            ))}
          </ul>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            {project.liveLabel}
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.article>
  )
}
