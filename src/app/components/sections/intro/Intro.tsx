'use client'

import { motion } from 'framer-motion'
import { ArrowDownRight, Download } from 'lucide-react'
import { PROFILE, SOCIAL_LINKS } from '@/app/utils/constants'
import { SOCIAL_ICON_MAP } from '@/app/utils/social-icons'
import ApiConsole from './ApiConsole'
import StatusBoard from './StatusBoard'
import { useIntroDone } from '@/app/components/intro/IntroScreen'

const ease = [0.22, 1, 0.36, 1] as const

export default function Intro() {
  // Hold the entrance animation until the intro screen lifts
  const ready = useIntroDone()
  const rise = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    transition: { duration: 0.7, delay: ready ? delay : 0, ease },
  })

  return (
    <div className="relative pt-40 sm:pt-48 lg:pt-52 pb-8 space-y-16">
      <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-12 items-center">
        {/* Copy */}
        <div className="space-y-8">
          <motion.div {...rise(0)} className="flex flex-wrap items-center gap-3">
            <span className="chip !text-primary !border-primary/30 !bg-primary/10">
              <span className="pulse-dot" />
              Available · remote or relocation
            </span>
          </motion.div>

          <motion.div {...rise(0.08)} className="flex items-center gap-4">
            <img
              src="/images/seyi_psp_xs_trans.png"
              alt={PROFILE.name}
              width={56}
              height={56}
              className="w-14 h-14 rounded-full object-cover object-top bg-surface-2 ring-2 ring-primary/40 ring-offset-2 ring-offset-background"
            />
            <div className="leading-tight">
              <p className="font-medium text-foreground">{PROFILE.name}</p>
              <p className="text-label text-faint mt-1">{PROFILE.role} · {PROFILE.location}</p>
            </div>
          </motion.div>

          <motion.h1 {...rise(0.16)} className="text-hero text-foreground">
            I build backends
            <br />
            that{' '}
            <span className="relative inline-block text-primary">
              stay up.
              <motion.span
                aria-hidden
                className="absolute left-0 right-0 -bottom-1 h-[0.08em] rounded-full bg-accent origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: ready ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }}
              />
            </span>
          </motion.h1>

          <motion.p {...rise(0.24)} className="text-lead text-muted max-w-xl">
            <span className="text-foreground font-medium">
              Node.js, Go &amp; Python · AWS Certified Solutions Architect.
            </span>{' '}
            {PROFILE.summary}
          </motion.p>

          <motion.div {...rise(0.32)} className="flex flex-wrap items-center gap-3">
            <a
              href="#works"
              className="group inline-flex items-center gap-2 h-12 px-6 rounded-full bg-primary text-primary-ink font-semibold hover:bg-primary-light transition-colors"
            >
              See my work
              <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-border bg-surface text-foreground font-medium hover:border-foreground transition-colors"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
            <div className="flex items-center gap-1 sm:ml-2">
              {SOCIAL_LINKS.map((link) => {
                const Icon = SOCIAL_ICON_MAP[link.icon]
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="grid place-items-center w-11 h-11 rounded-full text-muted hover:text-primary hover:bg-surface-2 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Live console */}
        <motion.div
          initial={{ opacity: 0, y: 32, rotate: 1.5 }}
          animate={ready ? { opacity: 1, y: 0, rotate: 0 } : { opacity: 0, y: 32, rotate: 1.5 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div aria-hidden className="glow absolute -inset-16 -z-10" />
          <ApiConsole />
        </motion.div>
      </div>

      <StatusBoard />
    </div>
  )
}
