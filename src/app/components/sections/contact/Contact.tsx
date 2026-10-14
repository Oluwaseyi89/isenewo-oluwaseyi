'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Check, CheckCircle, Copy, Download, Loader2, MapPin, Phone, Send } from 'lucide-react'
import { CONTACT_CONFIG, PROFILE, SOCIAL_LINKS } from '@/app/utils/constants'
import { SOCIAL_ICON_MAP } from '@/app/utils/social-icons'
import SectionHeading from '@/app/components/ui/SectionHeading'
import Reveal from '@/app/components/ui/Reveal'

const inputClass =
  'w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-faint outline-none transition-colors focus:border-primary focus:ring-4 focus:ring-primary/15'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_CONFIG.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {}
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Without a Formspree form, hand the message to the visitor's email client
    if (!CONTACT_CONFIG.formspreeId) {
      const body = `${formData.message}\n\n${formData.name} <${formData.email}>`
      window.location.href = `mailto:${CONTACT_CONFIG.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`
      return
    }

    setIsSubmitting(true)
    try {
      const response = await fetch(`https://formspree.io/f/${CONTACT_CONFIG.formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...formData, _replyto: formData.email, _subject: `Portfolio: ${formData.subject}` }),
      })
      if (!response.ok) throw new Error(`Formspree responded with ${response.status}`)

      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitted(true)
      setTimeout(() => setIsSubmitted(false), 6000)
    } catch {
      setError(`Your message could not be sent. Please email me directly at ${CONTACT_CONFIG.email}.`)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-12">
      <SectionHeading
        index="05"
        route="/contact"
        title={
          <>
            Let&apos;s build something <span className="text-primary">reliable.</span>
          </>
        }
        intro="Hiring for a backend role? I'm open to remote positions, and to on-site roles with relocation where visa sponsorship is available."
      />

      <div className="grid lg:grid-cols-12 gap-6">
        {/* Direct channels */}
        <Reveal className="lg:col-span-5">
          <div className="card p-6 sm:p-8 space-y-6">
            <p className="flex items-start gap-2.5 text-primary font-medium">
              <span className="pulse-dot mt-2 shrink-0" />
              {CONTACT_CONFIG.availability}
            </p>

            <div className="space-y-2">
              <p className="text-label text-faint">Email</p>
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${CONTACT_CONFIG.email}`}
                  className="font-display text-lg sm:text-xl font-semibold text-foreground hover:text-primary transition-colors break-all"
                >
                  {CONTACT_CONFIG.email}
                </a>
                <button
                  onClick={copyEmail}
                  className="shrink-0 grid place-items-center w-9 h-9 rounded-full border border-border text-muted hover:text-primary hover:border-primary transition-colors"
                  aria-label={copied ? 'Email copied' : 'Copy email address'}
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <dl className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
              <div>
                <dt className="text-label text-faint mb-1">Phone</dt>
                <dd>
                  <a
                    href={`tel:${CONTACT_CONFIG.phone.replace(/\s/g, '')}`}
                    className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-4 h-4 text-primary" />
                    {CONTACT_CONFIG.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-label text-faint mb-1">Based in</dt>
                <dd className="inline-flex items-center gap-2 text-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  {CONTACT_CONFIG.location}
                </dd>
              </div>
            </dl>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={PROFILE.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-foreground text-background font-medium hover:bg-primary hover:text-primary-ink transition-colors"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
              <a
                href={PROFILE.resumeDocxUrl}
                download
                className="text-sm text-muted hover:text-primary link-underline transition-colors"
              >
                Word (.docx)
              </a>
              <div className="flex items-center gap-1">
                {SOCIAL_LINKS.filter((l) => l.icon !== 'mail').map((link) => {
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
            </div>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.08} className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="card p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between gap-4">
              <p className="font-mono text-sm text-muted">
                <span className="text-primary font-semibold">POST</span> /v1/messages
              </p>
              <span className="text-label text-faint">replies within 24h</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <label className="space-y-2 block">
                <span className="text-sm font-medium text-foreground">Your name</span>
                <input name="name" value={formData.name} onChange={handleChange} required autoComplete="name" className={inputClass} placeholder="Your name" />
              </label>
              <label className="space-y-2 block">
                <span className="text-sm font-medium text-foreground">Email address</span>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required autoComplete="email" className={inputClass} placeholder="you@company.com" />
              </label>
            </div>

            <label className="space-y-2 block">
              <span className="text-sm font-medium text-foreground">Subject</span>
              <input name="subject" value={formData.subject} onChange={handleChange} required className={inputClass} placeholder="Backend Engineer role at …" />
            </label>

            <label className="space-y-2 block">
              <span className="text-sm font-medium text-foreground">Message</span>
              <textarea name="message" value={formData.message} onChange={handleChange} required rows={6} className={`${inputClass} resize-none`} placeholder="Tell me about the role, team or project…" />
            </label>

            <AnimatePresence>
              {isSubmitted && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  role="status"
                  className="flex items-center gap-3 p-4 rounded-xl bg-primary/10 border border-primary/30 text-foreground"
                >
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span>
                    <span className="font-mono text-primary">201 Created</span> · Message sent. I&apos;ll reply within 24 hours.
                  </span>
                </motion.p>
              )}
            </AnimatePresence>

            {error && (
              <p role="alert" className="p-4 rounded-xl bg-accent/10 border border-accent/30 text-foreground">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="group w-full inline-flex items-center justify-center gap-2 h-12 rounded-full bg-primary text-primary-ink font-semibold hover:bg-primary-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  Send message
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </>
              )}
            </button>

            <p className="text-sm text-faint text-center">
              Prefer email?{' '}
              <a href={`mailto:${CONTACT_CONFIG.email}`} className="text-primary inline-flex items-center gap-0.5 link-underline">
                Write to me directly <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </p>
          </form>
        </Reveal>
      </div>
    </div>
  )
}
