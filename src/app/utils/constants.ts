// Navigation items
export const NAV_ITEMS = [
    { 
      id: 'intro', 
      label: 'Intro',
      icon: '🏠' // You can replace with actual icons later
    },
    { 
      id: 'about', 
      label: 'About',
      icon: '👤'
    },
    { 
      id: 'works', 
      label: 'Works',
      icon: '💼'
    },
    { 
      id: 'contact', 
      label: 'Contact',
      icon: '📱'
    },
  ] as const;


  // Add this with other exports in constants.ts

// Extract all unique tags from projects (type-safe)
const ALL_PROJECT_TAGS = [
    'Stellar',
    'Soroban', 
    'Blockchain',
    'IoT',
    'TypeScript',
    'Next.js',
    'DeFi',
    'Web3',
    'React',
    'Solidity',
    'Ethereum',
    'Polygon',
    'AI',
    'Rust',
    'Python',
    'Documentation',
    'Automation',
    'Node.js',
    'PostgreSQL',
    'Stripe',
    'Redis',
    'WebSocket',
    'MongoDB',
    'Docker',
    'OpenAI',
    'FastAPI',
  ] as const
  
  export type ProjectTag = typeof ALL_PROJECT_TAGS[number]
  
  // Export as constant
  export { ALL_PROJECT_TAGS }
  
  export type NavItem = typeof NAV_ITEMS[number]
  export type SectionId = NavItem['id']
  
  // Social media links
  export const SOCIAL_LINKS = [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: 'github',
      color: 'hover:text-gray-800 dark:hover:text-gray-300',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: 'linkedin',
      color: 'hover:text-blue-700 dark:hover:text-blue-400',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: 'twitter',
      color: 'hover:text-sky-600 dark:hover:text-sky-400',
    },
    {
      name: 'Email',
      url: 'mailto:you@example.com',
      icon: 'mail',
      color: 'hover:text-red-600 dark:hover:text-red-400',
    },
  ] as const
  
  // Tech stack with icons/colors
  export const TECH_STACK = {
    languages: [
      { name: 'Java', level: 'Advanced', color: 'bg-red-500/20 text-red-600' },
      { name: 'JavaScript', level: 'Expert', color: 'bg-yellow-500/20 text-yellow-600' },
      { name: 'Python', level: 'Advanced', color: 'bg-blue-500/20 text-blue-600' },
      { name: 'Rust', level: 'Intermediate', color: 'bg-orange-500/20 text-orange-600' },
      { name: 'C++', level: 'Advanced', color: 'bg-blue-700/20 text-blue-700' },
      { name: 'Go', level: 'Intermediate', color: 'bg-cyan-500/20 text-cyan-600' },
      { name: 'Solidity', level: 'Intermediate', color: 'bg-gray-700/20 text-gray-700' },
      { name: 'Cairo', level: 'Beginner', color: 'bg-purple-500/20 text-purple-600' },
    ],
    frameworks: [
      { name: 'Next.js', color: 'bg-black/20 text-black dark:bg-white/20 dark:text-white' },
      { name: 'React', color: 'bg-cyan-500/20 text-cyan-600' },
      { name: 'Node.js', color: 'bg-green-500/20 text-green-600' },
      { name: 'Express', color: 'bg-gray-500/20 text-gray-600' },
      { name: 'Django', color: 'bg-green-700/20 text-green-700' },
      { name: 'Spring Boot', color: 'bg-green-600/20 text-green-600' },
    ],
    databases: [
      { name: 'PostgreSQL', color: 'bg-blue-600/20 text-blue-700' },
      { name: 'MongoDB', color: 'bg-green-500/20 text-green-600' },
      { name: 'Redis', color: 'bg-red-600/20 text-red-700' },
      { name: 'MySQL', color: 'bg-orange-500/20 text-orange-600' },
    ],
    tools: [
      { name: 'Docker', color: 'bg-blue-500/20 text-blue-600' },
      { name: 'Kubernetes', color: 'bg-blue-700/20 text-blue-800' },
      { name: 'AWS', color: 'bg-orange-500/20 text-orange-600' },
      { name: 'Git', color: 'bg-orange-600/20 text-orange-700' },
      { name: 'CI/CD', color: 'bg-purple-500/20 text-purple-600' },
    ],
  } as const
  
  // Sample projects data
  export const PROJECTS = [
    {
      id: 1,
      title: 'CarbonScribe',
      description: 'Carbon credit tokenization platform on Stellar blockchain for regenerative agriculture projects in developing nations.',
      tags: ['Stellar', 'Soroban', 'Blockchain', 'IoT', 'TypeScript', 'Next.js'] as ProjectTag[],
      image: '/images/projects/carbonscribe.jpg',
      githubUrl: 'https://github.com/yourusername/carbonscribe',
      liveUrl: 'https://carbonscribe.dev',
      featured: true,
    },
    {
      id: 2,
      title: 'Orion',
      description: 'Cross-chain DeFi dashboard aggregating yields, staking, and lending across multiple blockchains.',
      tags: ['DeFi', 'Web3', 'React', 'Solidity', 'Ethereum', 'Polygon'] as ProjectTag[],
      image: '/images/projects/orion.jpg',
      githubUrl: 'https://github.com/yourusername/orion',
      liveUrl: 'https://orion-defi.vercel.app',
      featured: true,
    },
    {
      id: 3,
      title: 'Justifyr',
      description: 'AI-powered spec generator for multi-language development with automated documentation and test case generation.',
      tags: ['AI', 'Rust', 'Python', 'TypeScript', 'Documentation', 'Automation'] as ProjectTag[],
      image: '/images/projects/justifyr.jpg',
      githubUrl: 'https://github.com/yourusername/justifyr',
      liveUrl: null,
      featured: false,
    },
    {
      id: 4,
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.',
      tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'] as ProjectTag[],
      image: '/images/projects/ecommerce.jpg',
      githubUrl: 'https://github.com/yourusername/ecommerce',
      liveUrl: 'https://store.example.com',
      featured: false,
    },
    {
      id: 5,
      title: 'Real-time Chat App',
      description: 'Scalable chat application with WebSocket connections, end-to-end encryption, and file sharing.',
      tags: ['WebSocket', 'React', 'Node.js', 'MongoDB', 'Redis', 'Docker'] as ProjectTag[],
      image: '/images/projects/chat.jpg',
      githubUrl: 'https://github.com/yourusername/chat-app',
      liveUrl: 'https://chat.example.com',
      featured: false,
    },
    {
      id: 6,
      title: 'AI Content Generator',
      description: 'SaaS platform for AI-powered content creation with GPT integration and analytics dashboard.',
      tags: ['AI', 'OpenAI', 'FastAPI', 'React', 'PostgreSQL', 'Docker'] as ProjectTag[],
      image: '/images/projects/ai-content.jpg',
      githubUrl: 'https://github.com/yourusername/ai-content',
      liveUrl: 'https://ai-content.example.com',
      featured: false,
    },
  ] as const
  
  // Contact form configuration
  export const CONTACT_CONFIG = {
    formspreeId: 'your-formspree-id', // Replace with actual Formspree ID
    email: 'you@example.com',
    phone: '+1 (234) 567-8900',
    location: 'Lagos, Nigeria',
    availability: 'Available for freelance & full-time opportunities',
  } as const
  
  // Animation delays
  export const ANIMATION_DELAYS = {
    header: 0.1,
    intro: 0.2,
    about: 0.3,
    works: 0.4,
    contact: 0.5,
  } as const
  
  // Color palette for the theme
  export const COLOR_PALETTE = {
    navy: {
      light: '#1e3a8a',
      dark: '#0a192f',
    },
    sky: {
      light: '#3b82f6',
      dark: '#60a5fa',
    },
    cyan: {
      light: '#06b6d4',
      dark: '#22d3ee',
    },
    gray: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },
  } as const
  
  // Education and experience
  export const EXPERIENCE = [
    {
      id: 1,
      role: 'Senior Full-Stack Developer',
      company: 'TechCorp Inc.',
      period: '2022 - Present',
      description: 'Leading development of blockchain-based solutions and scalable web applications.',
      technologies: ['React', 'Node.js', 'Solidity', 'PostgreSQL', 'AWS'],
    },
    {
      id: 2,
      role: 'Blockchain Developer',
      company: 'DeFi Startup',
      period: '2021 - 2022',
      description: 'Built smart contracts and decentralized applications on Ethereum and Stellar.',
      technologies: ['Solidity', 'Web3.js', 'Ethereum', 'Stellar', 'React'],
    },
    {
      id: 3,
      role: 'Software Engineer',
      company: 'Enterprise Solutions',
      period: '2019 - 2021',
      description: 'Developed and maintained enterprise applications using Java Spring and microservices.',
      technologies: ['Java', 'Spring Boot', 'Docker', 'Kubernetes', 'Microservices'],
    },
  ] as const
  
  export const EDUCATION = [
    {
      id: 1,
      degree: 'M.Sc. Computer Science',
      institution: 'University of Technology',
      period: '2017 - 2019',
      description: 'Specialized in Distributed Systems and Blockchain Technology',
    },
    {
      id: 2,
      degree: 'B.Sc. Software Engineering',
      institution: 'National University',
      period: '2013 - 2017',
      description: 'Graduated with First Class Honors',
    },
  ] as const
  
  // Skills categories
  export const SKILL_CATEGORIES = [
    {
      title: 'Frontend Development',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      title: 'Backend Development',
      skills: ['Node.js', 'Python', 'Java', 'PostgreSQL', 'MongoDB', 'Redis'],
    },
    {
      title: 'Blockchain & Web3',
      skills: ['Solidity', 'Stellar', 'Ethereum', 'Smart Contracts', 'Web3.js'],
    },
    {
      title: 'DevOps & Cloud',
      skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Git', 'Linux'],
    },
  ] as const
  
  // Helper functions
  export function getSectionDelay(sectionId: SectionId): number {
    return ANIMATION_DELAYS[sectionId as keyof typeof ANIMATION_DELAYS] || 0.2
  }
  
  export function getProjectTags(): string[] {
    const allTags = new Set<string>()
    PROJECTS.forEach(project => {
      project.tags.forEach(tag => allTags.add(tag))
    })
    return Array.from(allTags).sort()
  }
  
  export type Project = typeof PROJECTS[number]
  export type TechStack = typeof TECH_STACK
  export type SocialLink = typeof SOCIAL_LINKS[number]
  export type Experience = typeof EXPERIENCE[number]
  export type Education = typeof EDUCATION[number]
  export type SkillCategory = typeof SKILL_CATEGORIES[number]
  
  // Export everything
  export default {
    NAV_ITEMS,
    SOCIAL_LINKS,
    TECH_STACK,
    PROJECTS,
    CONTACT_CONFIG,
    ANIMATION_DELAYS,
    COLOR_PALETTE,
    EXPERIENCE,
    EDUCATION,
    SKILL_CATEGORIES,
    getSectionDelay,
    getProjectTags,
  }