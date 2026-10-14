'use client'

import { motion } from 'framer-motion'
import { Code2, Cpu, Database, Cloud, Award, Briefcase, BadgeCheck, ExternalLink } from 'lucide-react'
import { TECH_STACK, SKILL_CATEGORIES, EXPERIENCE, CERTIFICATIONS, PROFILE } from '@/app/utils/constants'

export default function About() {
  const icons = {
    languages: <Code2 className="w-6 h-6" />,
    frameworks: <Cpu className="w-6 h-6" />,
    databases: <Database className="w-6 h-6" />,
    tools: <Cloud className="w-6 h-6" />,
  }

  return (
    <div className="space-y-16">
      {/* Header */}
      <div className="text-center space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
        >
          <span className="text-sm font-medium text-primary">About Me</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-foreground"
        >
          Backend Engineer &<br />
          <span className="text-primary">AWS Certified Solutions Architect</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted max-w-3xl mx-auto"
        >
          {PROFILE.about}
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left column - Tech Stack */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Code2 className="w-6 h-6 text-primary" />
            Tech Stack
          </h3>

          {Object.entries(TECH_STACK).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                {icons[category as keyof typeof icons]}
                <h4 className="text-lg font-semibold text-foreground capitalize">
                  {category === 'tools' ? 'Cloud & DevOps' : category}
                </h4>
              </div>

              <div className="flex flex-wrap gap-3">
                {items.map((tech, techIndex) => (
                  <motion.span
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (categoryIndex + techIndex) * 0.05 }}
                    whileHover={{ y: -5 }}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${tech.color} border border-border/50`}
                  >
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Right column - Expertise & Certifications */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              Expertise
            </h3>

            {SKILL_CATEGORIES.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-3"
              >
                <h4 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <BadgeCheck className="w-6 h-6 text-primary" />
              Certifications
            </h3>

            {CERTIFICATIONS.map((cert) => (
              <a
                key={cert.id}
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start justify-between gap-4 p-4 rounded-xl glass-effect border border-border hover:border-primary/50 transition-colors group"
              >
                <div>
                  <div className="font-semibold text-foreground">{cert.name}</div>
                  <div className="text-sm text-muted mt-1">
                    {cert.issuer} · {cert.date} · {cert.training}
                  </div>
                </div>
                <span className="flex items-center gap-1 text-sm text-primary whitespace-nowrap group-hover:underline">
                  Verify
                  <ExternalLink className="w-4 h-4" />
                </span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Experience */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <Briefcase className="w-6 h-6 text-primary" />
          Experience
        </h3>

        <div className="space-y-10">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="relative pl-8"
            >
              <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-primary" />
              <div className="absolute left-1.25 top-5 bottom-0 w-px bg-border" />

              <div>
                <h4 className="text-lg font-semibold text-foreground">
                  {exp.role}
                </h4>
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  {exp.companyUrl ? (
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-medium hover:underline"
                    >
                      {exp.company}
                    </a>
                  ) : (
                    <span className="text-primary font-medium">{exp.company}</span>
                  )}
                  <span className="text-sm text-muted">•</span>
                  <span className="text-sm text-muted">{exp.period}</span>
                </div>

                <p className="text-foreground mt-3">{exp.summary}</p>

                <ul className="mt-3 space-y-2 list-disc pl-5 text-muted">
                  {exp.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                {exp.links.length > 0 && (
                  <div className="flex flex-wrap gap-4 mt-3 text-sm">
                    {exp.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-primary hover:underline"
                      >
                        {link.label}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/5 text-primary text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
