'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'
import { Project } from '@/app/utils/constants'

interface ProjectCardProps {
  project: Project
  index: number
  onClick: () => void
}

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative bg-background rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
    >
      {/* Project Image/Thumbnail */}
        <div className="aspect-video bg-linear-to-br from-primary/10 to-primary-light/10 relative overflow-hidden">
          <div className="absolute inset-0">
            {/* Image that fills the entire container */}
           {project.image ? <img 
              alt='project-thumbnail' 
              src={project.image}
              className="w-full h-full object-cover"
            /> : 
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-5xl">💻</div>
            </div>
            
            }
          </div>
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            <button
              onClick={onClick}
              className="p-3 rounded-full bg-white text-foreground hover:bg-primary hover:text-white transition-colors"
              aria-label="View project details"
            >
              <Eye className="w-5 h-5" />
            </button>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white text-foreground hover:bg-primary hover:text-white transition-colors"
                aria-label="View code on GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white text-foreground hover:bg-primary hover:text-white transition-colors"
                aria-label="View live demo"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
              Featured
            </div>
          )}
        </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2">
          {project.title}
        </h3>
        
        <p className="text-muted mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-3 py-1 bg-border text-muted text-xs rounded-full">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  )
}
















// 'use client'

// import { motion } from 'framer-motion'
// import { ExternalLink, Github, Eye } from 'lucide-react'
// import { Project } from '@/app/utils/constants'

// interface ProjectCardProps {
//   project: Project
//   index: number
//   onClick: () => void
// }

// export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
//   return (
//     <motion.article
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: index * 0.1 }}
//       whileHover={{ y: -10 }}
//       className="group relative bg-background rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
//     >
//       {/* Project Image/Thumbnail */}
//       <div className="aspect-video bg-linear-to-br from-primary/10 to-primary-light/10 relative overflow-hidden">
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="text-5xl">💻</div>
//         </div>
        
//         {/* Hover overlay */}
//         <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
//           <button
//             onClick={onClick}
//             className="p-3 rounded-full bg-white text-foreground hover:bg-primary hover:text-white transition-colors"
//             aria-label="View project details"
//           >
//             <Eye className="w-5 h-5" />
//           </button>
//           {project.githubUrl && (
//             <a
//               href={project.githubUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-3 rounded-full bg-white text-foreground hover:bg-primary hover:text-white transition-colors"
//               aria-label="View code on GitHub"
//             >
//               <Github className="w-5 h-5" />
//             </a>
//           )}
//           {project.liveUrl && (
//             <a
//               href={project.liveUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-3 rounded-full bg-white text-foreground hover:bg-primary hover:text-white transition-colors"
//               aria-label="View live demo"
//             >
//               <ExternalLink className="w-5 h-5" />
//             </a>
//           )}
//         </div>

//         {/* Featured badge */}
//         {project.featured && (
//           <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
//             Featured
//           </div>
//         )}
//       </div>

//       {/* Project Content */}
//       <div className="p-6">
//         <h3 className="text-xl font-bold text-foreground mb-2">
//           {project.title}
//         </h3>
        
//         <p className="text-muted mb-4 line-clamp-2">
//           {project.description}
//         </p>

//         {/* Tags */}
//         <div className="flex flex-wrap gap-2">
//           {project.tags.slice(0, 3).map((tag) => (
//             <span
//               key={tag}
//               className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
//             >
//               {tag}
//             </span>
//           ))}
//           {project.tags.length > 3 && (
//             <span className="px-3 py-1 bg-border text-muted text-xs rounded-full">
//               +{project.tags.length - 3}
//             </span>
//           )}
//         </div>
//       </div>
//     </motion.article>
//   )
// }