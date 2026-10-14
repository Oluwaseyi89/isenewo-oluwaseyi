'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, CornerDownLeft } from 'lucide-react'
import { HERO_STATS, PROFILE } from '@/app/utils/constants'

export const INTRO_DONE_EVENT = 'intro:done'

// True once the intro screen has been dismissed (or was skipped this visit)
export function useIntroDone() {
  const [done, setDone] = useState(false)
  useEffect(() => {
    if (document.documentElement.getAttribute('data-intro') !== 'show') {
      setDone(true)
      return
    }
    const onDone = () => setDone(true)
    window.addEventListener(INTRO_DONE_EVENT, onDone)
    return () => window.removeEventListener(INTRO_DONE_EVENT, onDone)
  }, [])
  return done
}

const bootLines = [
  { label: 'resolving isenewo.dev', result: 'ok' },
  { label: 'health check  GET /v1/health', result: '200 OK' },
  { label: 'loading experience', result: HERO_STATS[0].value + ' years' },
  { label: 'counting merged pull requests', result: HERO_STATS[1].value },
  { label: 'verifying AWS certification', result: 'verified' },
]

const LINE_DELAY = 420

export default function IntroScreen() {
  const reduceMotion = useReducedMotion()
  const [visible, setVisible] = useState(true)
  const [shownLines, setShownLines] = useState(0)
  const enterRef = useRef<HTMLButtonElement>(null)

  const booted = shownLines > bootLines.length

  const finish = useCallback(() => {
    setVisible(false)
    // Honour a deep link such as /#works once the visitor has entered
    const target = window.location.hash.length > 1 ? document.getElementById(window.location.hash.slice(1)) : null
    if (target) setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 850)
    // Fallback in case the exit animation never completes
    setTimeout(() => {
      if (document.documentElement.getAttribute('data-intro') !== 'done') {
        document.documentElement.setAttribute('data-intro', 'done')
        window.dispatchEvent(new Event(INTRO_DONE_EVENT))
      }
    }, 1500)
  }, [])

  useEffect(() => {
    if (!visible) return
    if (reduceMotion) {
      setShownLines(bootLines.length + 1)
      return
    }
    const timers = Array.from({ length: bootLines.length + 1 }, (_, i) =>
      setTimeout(() => setShownLines(i + 1), 500 + i * LINE_DELAY)
    )
    return () => timers.forEach(clearTimeout)
  }, [visible, reduceMotion])

  useEffect(() => {
    if (booted) enterRef.current?.focus({ preventScroll: true })
  }, [booted])

  useEffect(() => {
    // Enter only works once the boot sequence has finished and the button is shown
    if (!visible || !booted) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !e.repeat) {
        e.preventDefault()
        finish()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [visible, booted, finish])

  return (
    <AnimatePresence
      onExitComplete={() => {
        if (document.documentElement.getAttribute('data-intro') === 'done') return
        document.documentElement.setAttribute('data-intro', 'done')
        window.dispatchEvent(new Event(INTRO_DONE_EVENT))
      }}
    >
      {visible && (
        <motion.div
          key="intro"
          className="intro-screen fixed inset-0 z-[90] bg-background overflow-y-auto"
          initial={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          exit={{ clipPath: 'inset(0% 0% 100% 0%)' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          role="region"
          aria-label="Introduction"
        >
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid" />
          <div aria-hidden className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(900px,140vw)] h-[600px] glow" />

          <div className="relative min-h-full max-w-6xl mx-auto px-5 sm:px-8 py-6 sm:py-8 flex flex-col">
            {/* Top bar */}
            <div className="flex items-center justify-between">
              <p className="font-mono text-sm text-foreground flex items-center gap-2">
                <span className="pulse-dot" />
                <span>
                  isenewo<span className="text-primary">.</span>dev
                </span>
              </p>
              <button
                onClick={finish}
                className="font-mono text-sm text-muted hover:text-primary transition-colors"
              >
                skip intro →
              </button>
            </div>

            <div className="flex-1 grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center py-8 lg:py-6">
              {/* Boot log */}
              <div className="card p-5 sm:p-6 font-mono text-[13px] sm:text-sm order-2 lg:order-1" aria-live="polite">
                <p className="text-muted mb-4">
                  <span className="text-primary">$</span> curl -I https://isenewo.dev
                </p>
                <ul className="space-y-2.5">
                  {bootLines.map((line, i) => (
                    <li
                      key={line.label}
                      className={`flex items-baseline gap-3 transition-all duration-300 ${
                        shownLines > i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
                      }`}
                    >
                      <span className="text-faint shrink-0">→</span>
                      <span className="text-muted truncate">{line.label}</span>
                      <span aria-hidden className="flex-1 border-b border-dotted border-border min-w-4" />
                      <span className="text-primary shrink-0">{line.result}</span>
                    </li>
                  ))}
                </ul>
                <p
                  className={`mt-5 pt-4 border-t border-border flex items-center gap-2.5 text-foreground transition-opacity duration-500 ${
                    booted ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <span className="pulse-dot" />
                  all systems operational
                </p>
              </div>

              {/* Identity */}
              <div className="space-y-6 order-1 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-4"
                >
                  <img
                    src="/images/seyi_psp_xs_trans.png"
                    alt={PROFILE.name}
                    width={64}
                    height={64}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover object-top bg-surface-2 ring-2 ring-primary/50 ring-offset-2 ring-offset-background"
                  />
                  <p className="text-label text-primary leading-relaxed">
                    {PROFILE.role}
                    <br />
                    AWS Certified Solutions Architect
                  </p>
                </motion.div>

                <div className="space-y-4">
                  <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="font-display font-bold tracking-[-0.035em] leading-[0.98] text-foreground text-[clamp(2.5rem,4.6vw+0.5rem,4.75rem)]"
                  >
                    Isenewo
                    <br />
                    Oluwaseyi <span className="text-primary">Ephraim.</span>
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lead text-muted max-w-lg"
                  >
                    Backend engineer building APIs, payments and distributed systems with Node.js, Go
                    and Python.
                  </motion.p>
                </div>

                <div
                  className={`flex flex-wrap items-center gap-4 transition-all duration-500 ${
                    booted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
                  }`}
                >
                  <button
                    ref={enterRef}
                    onClick={finish}
                    tabIndex={booted ? 0 : -1}
                    className="group inline-flex items-center gap-2 h-13 px-7 rounded-full bg-primary text-primary-ink text-lg font-semibold hover:bg-primary-light transition-colors"
                  >
                    Enter portfolio
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>
                  <span className="hidden sm:inline-flex items-center gap-2 font-mono text-sm text-faint">
                    or press
                    <kbd className="inline-flex items-center gap-1 px-2 py-1 rounded-md border border-border bg-surface-2 text-muted">
                      Enter <CornerDownLeft className="w-3.5 h-3.5" />
                    </kbd>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
