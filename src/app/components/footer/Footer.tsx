'use client'

import { motion } from 'framer-motion'
import { Heart, Code, Mail, Coffee } from 'lucide-react'
import { SOCIAL_LINKS } from '@/app/utils/constants'
import { SOCIAL_ICON_MAP } from '@/app/utils/social-icons'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border/50 mt-20">
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold tracking-tight">
                <span className="text-primary">seyi</span>
                <span className="text-primary-light">.</span>
                <span className="text-foreground">dev</span>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="text-primary"
              >
                <Code className="w-5 h-5" />
              </motion.div>
            </div>
            
            <p className="text-muted text-sm max-w-xs">
              Crafting exceptional digital experiences with modern technologies. 
              Passionate about clean code and innovative solutions.
            </p>
            
            {/* Quick Contact */}
            <div className="flex items-center gap-2 text-sm text-muted">
              <Mail className="w-4 h-4" />
              <a 
                href="mailto:hello@seyi.dev" 
                className="hover:text-primary transition-colors"
              >
                hello@seyi.dev
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'About', href: '#about' },
                { label: 'Works', href: '#works' },
                { label: 'Skills', href: '#skills' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-foreground">Let&apos;s Connect</h3>
            <p className="text-sm text-muted">
              Follow for insights on full-stack development, blockchain, and tech innovation.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {SOCIAL_LINKS.map((link) => {
                const Icon = SOCIAL_ICON_MAP[link.icon]
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.name}
                    className={`
                      p-3 rounded-xl glass-effect border border-border/50
                      hover:border-primary/30 transition-all duration-300
                      ${link.color}
                    `}
                  >
                    <Icon className="w-5 h-5 text-muted group-hover:text-current" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent my-8"
        />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-sm text-muted flex items-center gap-1"
          >
            © {currentYear} seyi.dev
            <Heart className="w-3 h-3 text-red-500 mx-1 fill-current" />
            All rights reserved.
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 text-sm text-muted"
          >
            <div className="flex items-center gap-1">
              <Coffee className="w-4 h-4" />
              <span>Crafted with passion</span>
            </div>
            <div className="hidden sm:block">•</div>
            <a 
              href="#intro" 
              className="hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              Back to top ↑
            </a>
          </motion.div>
        </div>

        {/* Floating element */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute -bottom-4 right-8 opacity-10"
        >
          <Code className="w-24 h-24 text-primary" />
        </motion.div>
      </div>
    </footer>
  )
}