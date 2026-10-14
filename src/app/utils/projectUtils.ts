import { PROJECTS as ALL_PROJECTS } from './constants'
import { ALL_PROJECT_TAGS, ProjectTag } from './constants'

// A project is shown only once it has both a live site and a preview image.
// Add `liveUrl` and `image` to a project in constants.ts to make it appear.
export const PROJECTS = ALL_PROJECTS.filter(project => project.liveUrl && project.image)

// Filter types
export type FilterType = 'all' | 'featured' | ProjectTag

// Type guard to check if a string is a valid ProjectTag
export function isProjectTag(tag: string): tag is ProjectTag {
  return ALL_PROJECT_TAGS.includes(tag as ProjectTag)
}

// Get all tags from projects (deduplicated)
export function getAllProjectTags(): ProjectTag[] {
  const allTags = new Set<ProjectTag>()
  PROJECTS.forEach(project => {
    project.tags.forEach(tag => {
      if (isProjectTag(tag)) {
        allTags.add(tag)
      }
    })
  })
  return Array.from(allTags).sort()
}

// Type-safe filter function
export function filterProjects(filter: FilterType) {
  switch (filter) {
    case 'all':
      return PROJECTS
    case 'featured':
      return PROJECTS.filter(project => project.featured)
    default:
      // TypeScript knows filter is ProjectTag here
      return PROJECTS.filter(project => 
        project.tags.includes(filter)
      )
  }
}

// Get popular tags (most frequently used)
export function getPopularTags(limit: number = 6): ProjectTag[] {
  const tagCount: Record<ProjectTag, number> = {} as Record<ProjectTag, number>
  
  PROJECTS.forEach(project => {
    project.tags.forEach(tag => {
      if (isProjectTag(tag)) {
        tagCount[tag] = (tagCount[tag] || 0) + 1
      }
    })
  })
  
  return Object.entries(tagCount)
    .sort(([, a], [, b]) => b - a)
    .slice(0, limit)
    .map(([tag]) => tag as ProjectTag)
}