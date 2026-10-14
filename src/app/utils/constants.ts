import type { SocialIconKey } from './social-icons'

export const NAV_ITEMS = [
  { id: 'intro', label: 'Intro' },
  { id: 'about', label: 'About' },
  { id: 'works', label: 'Works' },
  { id: 'contact', label: 'Contact' },
] as const

export type NavItem = typeof NAV_ITEMS[number]
export type SectionId = NavItem['id']

export const PROFILE = {
  name: 'Isenewo Oluwaseyi Ephraim',
  role: 'Backend Engineer',
  headline: 'Backend Engineer · Node.js, Go & Python · AWS Certified Solutions Architect',
  summary:
    'I design and build backend systems for financial services and commerce: APIs, payments, real-time services and distributed infrastructure, shipped to the cloud with CI/CD.',
  about:
    'Backend engineer with 8 years of experience building APIs and services for insurance, commerce and public-sector platforms. I currently build the APIs behind Leadway Assurance’s Life Assurance business application and maintain NFTopia, an open-source NFT platform, where I review contributions from developers around the world.',
  availability:
    'Open to backend engineering roles: remote, or on-site/relocation with visa sponsorship.',
  location: 'Kaduna, Nigeria',
  resumeUrl: '/Isenewo_Oluwaseyi_CV_for_Software_Dev.pdf',
  siteUrl: 'https://isenewo-oluwaseyi.vercel.app',
} as const

export const HERO_STATS = [
  { label: 'Years building backends', value: '8+' },
  { label: 'Merged open-source PRs', value: '290+' },
  { label: 'AWS certifications', value: '2' },
  { label: 'API reliability at Leadway', value: '99.9%' },
] as const

export const HERO_LANGUAGES = ['Node', 'Go', 'Py', 'AWS'] as const

const ALL_PROJECT_TAGS = [
  'Node.js',
  'TypeScript',
  'Nest.js',
  'Go',
  'Gin',
  'Python',
  'Django',
  'FastAPI',
  'Java',
  'Spring Boot',
  'Rust',
  'PostgreSQL',
  'Redis',
  'WebSocket',
  'Celery',
  'Docker',
  'Terraform',
  'AWS',
  'Paystack',
  'Machine Learning',
  'MCP',
  'Stellar',
  'Soroban',
  'Distributed Systems',
  'Azure',
  'PHP',
  'MySQL',
  'Client work',
] as const

export type ProjectTag = typeof ALL_PROJECT_TAGS[number]
export { ALL_PROJECT_TAGS }

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

export const TECH_STACK = {
  languages: [
    { name: 'Node.js (TypeScript)', color: 'bg-green-500/20 text-green-600' },
    { name: 'Go', color: 'bg-cyan-500/20 text-cyan-600' },
    { name: 'Python', color: 'bg-blue-500/20 text-blue-600' },
    { name: 'Java', color: 'bg-red-500/20 text-red-600' },
    { name: 'Rust', color: 'bg-orange-500/20 text-orange-600' },
  ],
  frameworks: [
    { name: 'Nest.js', color: 'bg-red-600/20 text-red-700' },
    { name: 'Express', color: 'bg-gray-500/20 text-gray-600' },
    { name: 'Gin', color: 'bg-cyan-600/20 text-cyan-600' },
    { name: 'Django / DRF', color: 'bg-green-700/20 text-green-700' },
    { name: 'FastAPI', color: 'bg-teal-500/20 text-teal-600' },
    { name: 'Spring Boot', color: 'bg-green-600/20 text-green-600' },
    { name: 'Axum', color: 'bg-orange-600/20 text-orange-700' },
  ],
  databases: [
    { name: 'PostgreSQL', color: 'bg-blue-600/20 text-blue-700' },
    { name: 'Redis', color: 'bg-red-600/20 text-red-700' },
    { name: 'MySQL', color: 'bg-orange-500/20 text-orange-600' },
    { name: 'MongoDB', color: 'bg-green-500/20 text-green-600' },
  ],
  tools: [
    { name: 'AWS', color: 'bg-orange-500/20 text-orange-600' },
    { name: 'Azure', color: 'bg-blue-500/20 text-blue-600' },
    { name: 'Docker', color: 'bg-blue-500/20 text-blue-600' },
    { name: 'Terraform', color: 'bg-purple-500/20 text-purple-600' },
    { name: 'Kubernetes', color: 'bg-blue-700/20 text-blue-800' },
    { name: 'GitHub Actions', color: 'bg-gray-500/20 text-gray-600' },
  ],
} as const

export const SKILL_CATEGORIES = [
  {
    title: 'API & Service Design',
    skills: ['REST', 'GraphQL', 'WebSockets', 'Auth & RBAC', 'Payments integration'],
  },
  {
    title: 'Data & Reliability',
    skills: ['Schema design', 'Query optimisation', 'Caching', 'Queues & background jobs', 'Rate limiting', 'Audit logging'],
  },
  {
    title: 'Cloud & Delivery',
    skills: ['AWS (ECS, Lambda, RDS, S3)', 'Azure', 'Terraform', 'Docker', 'CI/CD', 'Observability'],
  },
  {
    title: 'Blockchain (bonus)',
    skills: ['Stellar / Soroban', 'Starknet / Cairo', 'Smart-contract integration'],
  },
] as const

export const PROJECTS = [
  {
    id: 1,
    title: 'Leadway Life Assurance APIs',
    role: 'Leadway Assurance · Backend Engineer (2025 – present)',
    description:
      'Backend APIs for Leadway Assurance’s Life Assurance business application, powering the broker and client portals that manage policies and claims.',
    highlights: [
      'REST APIs for high-volume policy and claims workflows, sustaining 99.9% API reliability.',
      'Authentication, role-based access control and audit logging built to financial-services compliance requirements.',
      'Query tuning and caching to cut response times; Azure CI/CD with zero-downtime deployments.',
      'The portals are internal to Leadway, so the link goes to the company site rather than a demo.',
    ],
    tags: ['Node.js', 'Nest.js', 'TypeScript', 'PostgreSQL', 'Azure', 'Client work'] as ProjectTag[],
    image: 'images/leadway_preview.png',
    githubUrl: '',
    liveUrl: 'https://www.leadway.com/',
    liveLabel: 'Visit Leadway',
    featured: true,
  },
  {
    id: 2,
    title: 'Global Rate Limiter as a Service',
    role: 'Personal project',
    description:
      'Central rate limiting for microservices that share strict third-party API quotas, built to stay accurate under concurrency and available when Redis fails.',
    highlights: [
      'Sliding-window algorithm on Redis sorted sets, with atomic Lua scripts so concurrent requests cannot race.',
      'High availability: Redis primary-replica, a 3-state circuit breaker, local-cache fallback and 3 instances behind an NGINX least-conn load balancer.',
      'P95/P99 latency analytics, async audit logging through a worker pool, graceful shutdown, and liveness/readiness probes.',
    ],
    tags: ['Go', 'Redis', 'Docker', 'Distributed Systems'] as ProjectTag[],
    image: '',
    githubUrl: 'https://github.com/Oluwaseyi89/global-rate-limiter',
    liveUrl: '',
    liveLabel: 'Live demo',
    featured: true,
  },
  {
    id: 3,
    title: 'Parcel App',
    role: 'Personal project',
    description:
      'Multi-vendor commerce and delivery platform covering checkout, parcel dispatch, courier workflows and vendor operations across web, admin and mobile clients.',
    highlights: [
      'Django/DRF core API with Celery and Redis background jobs, and cookie-session auth shared by web, admin and mobile clients.',
      'Separate Spring Boot payment service integrating Paystack, with server-side transaction verification.',
      'Infrastructure as code with Terraform, deployed to AWS ECS Fargate.',
    ],
    tags: ['Python', 'Django', 'Java', 'Spring Boot', 'PostgreSQL', 'Celery', 'Paystack', 'Terraform', 'AWS'] as ProjectTag[],
    image: 'images/parcel_app_preview.png',
    githubUrl: 'https://github.com/Oluwaseyi89/parcel-app',
    liveUrl: 'https://parcel-app-web.vercel.app',
    liveLabel: 'Live demo',
    featured: true,
  },
  {
    id: 4,
    title: 'Funkey Grab & Bite',
    role: 'Personal project',
    description:
      'Food-commerce operations platform with ordering, catering requests, programmable promotions and an admin command centre, powered by a Go API.',
    highlights: [
      'Go/Gin API organised by business domain, with PostgreSQL and Redis.',
      'Real-time event contract that pushes order updates to the admin dashboard.',
      'AWS infrastructure defined in Terraform.',
    ],
    tags: ['Go', 'Gin', 'PostgreSQL', 'Redis', 'Terraform', 'AWS'] as ProjectTag[],
    image: 'images/funkey_bite_preview.png',
    githubUrl: 'https://github.com/Oluwaseyi89/funkey-grab-and-bite',
    liveUrl: 'https://funkey-bite-web.vercel.app',
    liveLabel: 'Live demo',
    featured: true,
  },
  {
    id: 5,
    title: 'KAD ICT Hub Platform',
    role: 'De-Extralucid client · Backend Engineer',
    description:
      'Platform for Kaduna State’s innovation hub, which has trained 20,000+ residents and provides software, training and startup acceleration services.',
    highlights: [
      'Backend for user accounts, training-programme and course registration, and intake management.',
      'APIs for startup applications and event registration.',
      'Relational schema design and REST APIs consumed by the web front end.',
    ],
    tags: ['Client work'] as ProjectTag[],
    image: 'images/kadhub_preview.png',
    githubUrl: '',
    liveUrl: 'https://www.kadhub.ng/',
    liveLabel: 'Visit live site',
    featured: false,
  },
  {
    id: 6,
    title: 'Digital Kaduna',
    role: 'De-Extralucid client · Backend Engineer',
    description:
      'Website for the Gates Foundation-funded digital lab run by DFS Lab and CoLab, building an inclusive digital financial-services ecosystem in Kaduna.',
    highlights: [
      'Content backend for publishing research reports and blog posts.',
      'Event and hackathon registration flows, plus newsletter subscriptions.',
      'Custom WordPress/PHP backend work on a MySQL database.',
    ],
    tags: ['PHP', 'MySQL', 'Client work'] as ProjectTag[],
    image: 'images/digital_kaduna_preview.png',
    githubUrl: '',
    liveUrl: 'https://digitalkaduna.com/',
    liveLabel: 'Visit live site',
    featured: false,
  },
  {
    id: 7,
    title: 'Kadahive Member Portal',
    role: 'De-Extralucid client · Backend Engineer',
    description:
      'Member portal for Kadahive Innovation & Tech Hub, set up by the Bank of Industry and Kaduna State Government to support startups and digital skills.',
    highlights: [
      'Member accounts, authentication and personalised dashboards.',
      'Co-working space booking calendar and event registration.',
      'Resource library and billing/payments for member subscriptions.',
    ],
    tags: ['Client work'] as ProjectTag[],
    image: 'images/kadahivehub_preview.png',
    githubUrl: '',
    liveUrl: 'https://kadahivehub.com/',
    liveLabel: 'Visit live site',
    featured: false,
  },
  {
    id: 8,
    title: 'Infinite Canvas',
    role: 'Hackathon project (Vega IT)',
    description:
      'Real-time collaborative whiteboard with live presence, offline sync and full session replay, backed by a Go WebSocket service.',
    highlights: [
      'Go/Gin WebSocket service handling multi-user sessions, with Redis for live state and PostgreSQL for persistence.',
      'Operation log that supports offline queueing and “time travel” replay of an entire session.',
      'Separate CI pipelines for the service and the web client.',
    ],
    tags: ['Go', 'Gin', 'WebSocket', 'Redis', 'PostgreSQL'] as ProjectTag[],
    image: '',
    githubUrl: 'https://github.com/Oluwaseyi89/real-time-canvas',
    liveUrl: '',
    liveLabel: 'Live demo',
    featured: false,
  },
  {
    id: 9,
    title: 'Road Sense Analytics',
    role: 'Hackathon project (Toyota GR Cup: Hack the Track)',
    description:
      'Real-time motorsport telemetry platform that streams live race data and applies ML models for tire wear, fuel and pit-stop strategy.',
    highlights: [
      'Django Channels service exposing telemetry REST APIs and WebSocket streams.',
      'FastAPI analytics engine and scikit-learn models for tire degradation, fuel burn and pit timing.',
      'Simulation engine that replays race data for live dashboards.',
    ],
    tags: ['Python', 'Django', 'FastAPI', 'WebSocket', 'Machine Learning'] as ProjectTag[],
    image: '',
    githubUrl: 'https://github.com/Oluwaseyi89/toyota-hack-the-track',
    liveUrl: 'https://road-sense-app.vercel.app',
    liveLabel: 'Live demo',
    featured: false,
  },
  {
    id: 10,
    title: 'Queue-as-a-Service',
    role: 'Personal project (in progress)',
    description:
      'Message queue for AI-agent workloads, exposed over the Model Context Protocol (MCP), with durable delivery and strict engineering standards.',
    highlights: [
      'Cargo workspace split into types, core engine (WAL persistence, delivery semantics), server and client SDK.',
      'API-key and JWT authentication on the MCP HTTP transport.',
      'Prometheus and Grafana dev stack; CI enforces fmt, clippy (deny warnings), tests and cargo-deny.',
    ],
    tags: ['Rust', 'MCP', 'Distributed Systems', 'Docker'] as ProjectTag[],
    image: '',
    githubUrl: 'https://github.com/Oluwaseyi89/queue-as-a-service',
    liveUrl: '',
    liveLabel: 'Live demo',
    featured: false,
  },
  {
    id: 11,
    title: 'CarbonScribe',
    role: 'Core contributor · 24 merged PRs',
    description:
      'Open-source Stellar platform that tokenises ecosystem services into carbon credits that corporations can buy and retire instantly.',
    highlights: [
      'Set up the Go/Gin backend service and refactored the project-portal auth service.',
      'Built CI workflows across the monorepo and deployed the carbon-asset factory contract.',
      'Reviewed and corrected community contributions during contribution waves.',
    ],
    tags: ['Go', 'Gin', 'TypeScript', 'Stellar', 'Soroban'] as ProjectTag[],
    image: 'images/carbon_scribe_preview.png',
    githubUrl: 'https://github.com/CarbonScribe/carbon-scribe',
    liveUrl: 'https://carbon-scribe-farmers-portal.vercel.app/',
    liveLabel: 'Live demo',
    featured: false,
  },
] as const

export const OPEN_SOURCE = {
  mergedPrs: '290+',
  allPrsUrl:
    'https://github.com/pulls?q=is%3Apr+author%3AOluwaseyi89+is%3Amerged+-user%3AOluwaseyi89',
  highlights: [
    {
      project: 'StreamPay Backend',
      url: 'https://github.com/Streampay-Org/StreamPay-Backend/pulls?q=is%3Apr+author%3AOluwaseyi89+is%3Amerged',
      work: 'Stream-creation API with Zod validation, Soroban RPC client with retry policy, transaction-submission layer, immutable audit-log pipeline.',
    },
    {
      project: 'ChronoPay Backend',
      url: 'https://github.com/Chronopay-Org/ChronoPay-Backend/pulls?q=is%3Apr+author%3AOluwaseyi89+is%3Amerged',
      work: 'Booking-intent APIs with owner/admin authorization, slot-update endpoint, cache-invalidation strategy.',
    },
    {
      project: 'ACBU Backend',
      url: 'https://github.com/Pi-Defi-world/acbu-backend/pulls?q=is%3Apr+author%3AOluwaseyi89+is%3Amerged',
      work: 'Real USDC→XLM swap on the Stellar DEX, RabbitMQ schema-validation fix, gitleaks secret scanning in CI.',
    },
    {
      project: 'Zeus (CRYPTOInsured)',
      url: 'https://github.com/CRYPTOInsured-Foundation/zeus/pulls?q=is%3Apr+author%3AOluwaseyi89+is%3Amerged',
      work: 'Escrow factory, atomic-swap escrow with platform fees, lock timeouts and automatic refunds, P2P integration test suite.',
    },
  ],
} as const

export const CONTACT_CONFIG = {
  // Formspree form ID: the part after /f/ in https://formspree.io/f/<id>.
  // While empty, the form opens the visitor's email client instead.
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID ?? '',
  email: 'isenewoephr2012@gmail.com',
  phone: '+234 8020873072',
  location: PROFILE.location,
  availability: PROFILE.availability,
} as const

export const EXPERIENCE = [
  {
    id: 1,
    role: 'Backend Engineer',
    company: 'Leadway Assurance Company Ltd.',
    companyUrl: 'https://www.leadway.com',
    period: '2025 – Present',
    summary:
      'Build and maintain the APIs behind Leadway’s Life Assurance business application, used by brokers and clients to manage policies and claims.',
    highlights: [
      'Design and maintain the REST APIs that power the Life Assurance broker and client portals, sustaining 99.9% API reliability.',
      'Optimise high-volume policy and claims endpoints with query tuning and caching to cut average response times.',
      'Implement authentication, role-based access control and audit logging to meet financial-services compliance requirements.',
      'Ship through Azure CI/CD pipelines with zero-downtime deployments, working with DevOps on monitoring.',
      'Refactor legacy modules into modular, testable Nest.js services, reducing recurring bugs.',
    ],
    links: [] as ReadonlyArray<{ label: string; url: string }>,
    technologies: ['Node.js', 'Nest.js', 'TypeScript', 'PostgreSQL', 'Azure', 'Docker', 'CI/CD'],
  },
  {
    id: 2,
    role: 'Open-Source Maintainer',
    company: 'NFTopia (via OnlyDust, Drips & GrantFox)',
    companyUrl: 'https://github.com/NFTopia-Foundation',
    period: '2025 – Present',
    summary:
      'Maintain NFTopia, an open-source platform for minting, auctioning and trading NFTs, built by a global community of contributors.',
    highlights: [
      'Led the platform through two architecture changes: from a Starknet app to separate backend services (Nest.js API, notifications, Django analytics, payments, marketplace), then to a Stellar/Soroban monorepo.',
      'Merged 100+ of my own PRs and reviewed 30+ community PRs, enforcing clean architecture, testing and code-quality standards.',
      'Own roadmap decisions on API design, database schema evolution and error handling.',
      'Built the CI pipelines and contribution checks, deployed testnet contracts, and mentor new contributors.',
    ],
    links: [
      { label: 'NFTopia on GitHub', url: 'https://github.com/NFTopia-Foundation' },
    ] as ReadonlyArray<{ label: string; url: string }>,
    technologies: ['Nest.js', 'TypeScript', 'GraphQL', 'Django', 'PostgreSQL', 'Rust (Soroban)', 'Cairo', 'Docker'],
  },
  {
    id: 3,
    role: 'Backend Engineer',
    company: 'De-Extralucid Tech World, Kaduna',
    companyUrl: '',
    period: '2018 – 2024',
    summary:
      'Built backends for web platforms serving Kaduna State’s public institutions and tech ecosystem, delivered by a local software development company.',
    highlights: [
      'KAD ICT Hub: built backend features for the state innovation hub’s platform, including user accounts, training-programme and course registration, startup applications and events.',
      'Digital Kaduna (a Gates Foundation-funded lab run by DFS Lab and CoLab): backend for publishing research reports and blog content, event and hackathon registration, and newsletter subscriptions.',
      'Kadahive Innovation & Tech Hub: member-portal backend covering member accounts and dashboards, co-working space booking, event registration, a resource library and billing.',
      'Designed relational schemas and REST APIs for web and mobile clients, and introduced Git workflows and CI practices for faster, safer releases.',
    ],
    links: [
      { label: 'KAD ICT Hub', url: 'https://www.kadhub.ng/' },
      { label: 'Digital Kaduna', url: 'https://digitalkaduna.com/' },
      { label: 'Kadahive', url: 'https://kadahivehub.com/' },
    ] as ReadonlyArray<{ label: string; url: string }>,
    technologies: ['Python', 'Django', 'Node.js', 'PHP', 'MySQL', 'PostgreSQL', 'REST APIs', 'Git'],
  },
] as const

export const CERTIFICATIONS = [
  {
    id: 1,
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    training: 'Trained through ALX Africa',
    date: 'Oct 2025',
    credentialUrl: 'https://www.credly.com/badges/a3f4c771-db13-4a31-b0ff-51a8a9cf58ef/public_url',
  },
  {
    id: 2,
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    training: 'Trained through ALX Africa',
    date: 'Jun 2025',
    credentialUrl: 'https://www.credly.com/badges/1b7edc11-16e1-4c29-b281-608f9e8731ea/public_url',
  },
] as const

export type Project = typeof PROJECTS[number]
export type TechStack = typeof TECH_STACK
export type SocialLink = typeof SOCIAL_LINKS[number]
export type Experience = typeof EXPERIENCE[number]
export type Certification = typeof CERTIFICATIONS[number]
export type SkillCategory = typeof SKILL_CATEGORIES[number]
