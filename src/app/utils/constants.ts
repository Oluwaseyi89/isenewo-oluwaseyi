import type { SocialIconKey } from './social-icons'



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
    'Nest.js',
    'DeFi',
    'Web3',
    'React',
    'React-Native',
    'Django',
    'Springboot',
    'Paystack',
    'Solidity',
    'Ethereum',
    'Starknet',
    'Cairo',
    'Polygon',
    'AI',
    'Rust',
    'Python',
    'Java',
    'Documentation',
    'Automation',
    'Node.js',
    'PostgreSQL',
    'Stripe',
    'Redis',
    'WebSocket',
    'MongoDB',
    'Docker',
    'GCP',
    'AWS',
    'Azure',
    'OpenAI',
    'FastAPI',
  ] as const
  
  export type ProjectTag = typeof ALL_PROJECT_TAGS[number]
  
  // Export as constant
  export { ALL_PROJECT_TAGS }
  
  export type NavItem = typeof NAV_ITEMS[number]
  export type SectionId = NavItem['id']
  



export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/Oluwaseyi89',
    icon: 'github',
    color: 'hover:text-gray-800 dark:hover:text-gray-300',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/oluwaseyi-isenewo-6463838a',
    icon: 'linkedin',
    color: 'hover:text-blue-700 dark:hover:text-blue-400',
  },
  {
    name: 'Twitter',
    url: 'https://x.com/IsenewoE',
    icon: 'twitter',
    color: 'hover:text-sky-600 dark:hover:text-sky-400',
  },
  {
    name: 'Email',
    url: 'mailto:isenewoephr2012@gmail.com',
    icon: 'mail',
    color: 'hover:text-red-600 dark:hover:text-red-400',
  },
] satisfies ReadonlyArray<{
  name: string
  url: string
  icon: SocialIconKey
  color: string
}>

  
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
      { name: 'Cairo', level: 'Intermediate', color: 'bg-purple-500/20 text-purple-600' },
    ],
    frameworks: [
      { name: 'Next.js', color: 'bg-black/20 text-black dark:bg-white/20 dark:text-gray' },
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
      title: 'ParcelApp',
      description: 'ParcelApp is a full-stack e-commerce platform built with React, Django, and Spring Boot. It seamlessly manages vendors (inventory/orders), customers (purchasing/tracking), and couriers (dispatch/delivery). Secure payment processing is handled by Spring Boot microservices, while Django orchestrates the core marketplace operations.',
      tags: ['React', 'Django', 'Springboot', 'Python', 'Java', 'TypeScript', 'React-Native', 'Paystack'] as ProjectTag[],
      image: 'https://firebasestorage.googleapis.com/v0/b/daz-course-by-seyi.appspot.com/o/parcel_app.png?alt=media&token=55956589-b5b0-4e38-a59b-72eeca7279f6',
      githubUrl: 'https://github.com/Oluwaseyi89/parcel-app-react.git',
      liveUrl: 'https://parcel-app-web.vercel.app',
      featured: true,
    },
    {
      id: 2,
      title: 'Starknet-Indemnify',
      description: 'Starknet-Indemnify is a full-stack insurance platform built with Next.js, Nest.js, and Cairo smart contracts. It enables users to purchase and manage policies with all underwriting logic and execution secured on the Starknet blockchain.',
      tags: ['DeFi', 'Web3', 'Next.js', 'Nest.js', 'Starknet', 'Cairo'] as ProjectTag[],
      image: 'https://firebasestorage.googleapis.com/v0/b/daz-course-by-seyi.appspot.com/o/starknet_indemnify.png?alt=media&token=6d5b62b4-69ef-42ab-bf88-bb4bf7e30330',
      githubUrl: 'https://github.com/Oluwaseyi89/starknet-indemnify-web.git',
      liveUrl: 'https://starknet-indemnify-web.vercel.app',
      featured: true,
    },
    {
      id: 3,
      title: 'NFTopia',
      description: 'NFTopia is a full-stack NFT platform built on Starknet. Powered by a Next.js frontend and Nest.js backend, it features a seamless marketplace and minting experience, with all transactions and ownership secured by Cairo smart contracts.',
      tags: ['DeFi', 'Web3', 'Next.js', 'Nest.js', 'Starknet', 'Cairo'] as ProjectTag[],
      image: 'https://firebasestorage.googleapis.com/v0/b/daz-course-by-seyi.appspot.com/o/nftopia.png?alt=media&token=2c69d468-2fc8-49e6-9ccd-b01924c00a8d',
      githubUrl: 'https://github.com/Oluwaseyi89/nftopia.git',
      liveUrl: 'https://nftopia-frontend.vercel.app',
      featured: true,
    },
    {
      id: 4,
      title: 'Neuraplay',
      description: 'NeuraPlay is a game decision-making agent deployed on Google Cloud Run. The system features a React frontend and a Django backend that integrates Google\'s Gemini API for intelligent gameplay analysis and recommendations.',
      tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'] as ProjectTag[],
      image: null,
      githubUrl: 'https://github.com/Oluwaseyi89/neuraplay-cloudrun.git',
      liveUrl: 'https://neuraplay.vercel.app',
      featured: true,
    },
    {
      id: 5,
      title: 'RoadSense',
      description: 'Scalable chat application with WebSocket connections, end-to-end encryption, and file sharing.',
      tags: ['WebSocket', 'React', 'Node.js', 'MongoDB', 'Redis', 'Docker'] as ProjectTag[],
      image: null,
      githubUrl: 'https://github.com/Oluwaseyi89/toyota-hack-the-track.git',
      liveUrl: 'https://road-sense-app.vercel.app',
      featured: true,
    },
    {
      id: 6,
      title: 'DazCourse',
      description: 'DazCourse is a modern learning platform built with React and custom vanilla CSS, featuring a responsive UI and interactive lessons. Firebase handles real-time data storage, user authentication, and seamless content delivery for an engaging educational experience.',
      tags: ['AI', 'OpenAI', 'FastAPI', 'React', 'PostgreSQL', 'Docker'] as ProjectTag[],
      image: null,
      githubUrl: 'https://github.com/Oluwaseyi89/daz_course.git',
      liveUrl: 'https://daz-course.vercel.app',
      featured: true,
    },
  ] as const
  
  // Contact form configuration
  export const CONTACT_CONFIG = {
    formspreeId: 'your-formspree-id', 
    email: 'isenewoephr2012@gmail.com',
    phone: '+234 8020873072',
    location: 'Kaduna, Nigeria',
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
      role: 'Full-Stack Developer',
      company: 'Leadway Assurance Company Ltd.',
      period: 'July, 2025 - Present',
      description: 'Building full-stack applications using Next.js (frontend) & Nest.js (backend). Developing, containerizing, and deploying services with Docker. Focus on scalable architecture, CI/CD, and end-to-end feature ownership.',
      technologies: ['Next.js', 'Node.js', 'Nest.js', 'PostgreSQL', 'Azure'],
    },
    {
      id: 2,
      role: 'Open Source Projects Maintainer',
      company: 'OnlyDust',
      period: '2024 - 2025',
      description: 'Open-source project maintainer for Starknet ecosystem projects via the OnlyDust platform. Acted as codebase steward, guiding community contributions by reviewing pull requests, managing issues, and helping to define technical roadmaps. Ensured code quality, upheld project governance, and mentored contributors to foster a collaborative developer community.',
      technologies: ['Cairo', 'Web3.js', 'Ethereum', 'Starknet', 'Stellar', 'React', 'Next.js', 'Nest.js', 'Django', 'Docker', 'GCP', 'Rust'],
    },
    {
      id: 3,
      role: 'Full-Stack Developer',
      company: 'De-Extralucid Tech World',
      period: '2018 - 2024',
      description: 'Developed and maintained enterprise applications using Java Spring and microservices.',
      technologies: ['Java', 'Spring Boot', 'Next.js', 'Nuxt.js', 'Django', 'Docker', 'Kubernetes', 'Microservices'],
    },
  ] as const
  
  export const EDUCATION = [
    {
      id: 1,
      degree: 'AWS Solutions Architect',
      institution: 'ALX Africa',
      period: 'Jan. 2025 - Apr. 2025',
      description: 'Graduated with Honors',
    },
    {
      id: 2,
      degree: 'AWS Cloud Practitioner',
      institution: 'ALX Africa',
      period: 'Apr. 2025 - Oct. 2025',
      description: 'Graduated with Honors',
    }
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