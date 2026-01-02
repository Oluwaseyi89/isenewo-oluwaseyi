'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Filter, X } from 'lucide-react'
import { PROJECTS } from '@/app/utils/constants'
import ProjectCard from './ProjectCard'
import { 
  FilterType, 
  filterProjects, 
  getAllProjectTags, 
  getPopularTags,
  isProjectTag 
} from '@/app/utils/projectUtils'

export default function Works() {
  const [filter, setFilter] = useState<FilterType>('all')
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[number] | null>(null)

  // Get tags for filter buttons
  const allTags = getAllProjectTags()
  const popularTags = getPopularTags(6)

  // Get filtered projects (type-safe)
  const filteredProjects = filterProjects(filter)

  // Handle filter change safely
  const handleFilterChange = (newFilter: string) => {
    if (newFilter === 'all' || newFilter === 'featured' || isProjectTag(newFilter)) {
      setFilter(newFilter as FilterType)
    }
  }

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
        >
          <span className="text-sm font-medium text-primary">My Projects</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-foreground"
        >
          Featured <span className="text-primary">Works</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted max-w-3xl mx-auto"
        >
          A selection of projects showcasing my expertise in full-stack development, 
          blockchain, and modern web technologies.
        </motion.p>
      </div>

      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap justify-center gap-3"
      >
        {/* All Projects Button */}
        <button
          onClick={() => handleFilterChange('all')}
          className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
            filter === 'all'
              ? 'bg-primary text-white'
              : 'bg-primary/10 text-primary hover:bg-primary/20'
          }`}
        >
          <Filter className="w-4 h-4" />
          All Projects
        </button>
        
        {/* Featured Button */}
        <button
          onClick={() => handleFilterChange('featured')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            filter === 'featured'
              ? 'bg-primary text-white'
              : 'bg-primary/10 text-primary hover:bg-primary/20'
          }`}
        >
          Featured
        </button>
        
        {/* Popular Tags */}
        {popularTags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleFilterChange(tag)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === tag
                ? 'bg-primary text-white'
                : 'bg-primary/10 text-primary hover:bg-primary/20'
            }`}
          >
            {tag}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <div className="text-6xl mb-4">📭</div>
          <h3 className="text-xl font-semibold text-foreground mb-2">
            No projects found
          </h3>
          <p className="text-muted">
            Try selecting a different filter or check back later for new projects.
          </p>
        </motion.div>
      )}

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 rounded-xl"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background rounded-2xl shadow-2xl z-50 border border-border"
            >
              <div className="p-6 md:p-8 rounded-xl">
                {/* Modal Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {selectedProject.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="space-y-6 rounded-xl">
                  <div className="aspect-video bg-linear-to-br from-primary/20 to-primary-light/20 rounded-xl flex items-center justify-center">
                    {selectedProject.image ? <img 
                      alt='project-thumbnail' 
                      src={selectedProject.image}
                      className="w-full h-full rounded-xl object-cover"
                    /> : 
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl">🚀</div>
                      </div>                    
                    }
                  </div>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-foreground">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4">
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                        View Code
                      </a>
                    )}
                    
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-light transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
