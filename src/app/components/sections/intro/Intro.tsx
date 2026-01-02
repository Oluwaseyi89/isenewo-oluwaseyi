'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'
import { SOCIAL_LINKS } from '@/app/utils/constants'
import { SOCIAL_ICON_MAP } from '@/app/utils/social-icons'


export default function Intro() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-navy-gradient opacity-5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* style={{border: "solid red 1px"}} */}
            <div  className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Hello, I&apos;m
                </span>
              </motion.div>


            <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Avatar */}
              <div className="flex justify-center lg:justify-end">
                <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 overflow-hidden rounded-full shadow-lg">
                  <img
                    alt="avatar"
                    src="https://firebasestorage.googleapis.com/v0/b/daz-course-by-seyi.appspot.com/o/seyi_psp_sm_trans.png?alt=media&token=29078595-7d13-4d84-8dac-8b28a9dc99a9"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Name / Heading */}
              <div className="flex justify-center lg:justify-start text-center lg:text-left">
                <h1 className="font-bold tracking-tight leading-tight">
                  <span className="block text-3xl sm:text-4xl lg:text-5xl text-foreground">
                    Isenewo
                  </span>
                  <span className="block text-4xl sm:text-5xl lg:text-5xl text-primary-light">
                    Oluwaseyi
                  </span>
                  <span className="block text-3xl sm:text-4xl lg:text-5xl text-primary">
                    Ephraim
                  </span>
                </h1>
              </div>
            </div>



              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-muted max-w-2xl"
              >
                Full-Stack Developer & Blockchain Specialist crafting 
                exceptional digital experiences with modern technologies.
              </motion.p>
            </div>

            {/* Social Links */}
           

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6 }}
  className="flex flex-wrap gap-4"
>
  {SOCIAL_LINKS.map((link, index) => {
    const Icon = SOCIAL_ICON_MAP[link.icon]

    return (
      <motion.a
        key={link.name}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 + index * 0.1 }}
        whileHover={{ scale: 1.1, y: -4 }}
        whileTap={{ scale: 0.95 }}
        aria-label={link.name}
        className={`
          group
          p-4
          rounded-xl
          glass-effect
          border border-border
          transition-all
          ${link.color}
        `}
      >
        <Icon
          className="
            w-6 h-6
            text-muted-foreground
            group-hover:text-current
            transition-colors
          "
        />
      </motion.a>
    )
  })}
</motion.div>


            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.a
                href="#works"
                className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-light transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.button
                onClick={scrollToAbout}
                className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
                <ArrowDown className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right column - Visual/Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Years Experience', value: '5+' },
                { label: 'Projects Delivered', value: '10+' },
                { label: 'Technologies', value: '20+' },
                { label: 'Happy Clients', value: '5' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="p-6 rounded-2xl glass-effect"
                >
                  <div className="text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Tech stack floating badges */}
            <div className="absolute -top-6 -right-6 hidden lg:block">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="relative w-48 h-48"
              >
                {['Java', 'TS', 'Rust', 'Py'].map((tech, index) => (
                  <motion.div
                    key={tech}
                    className="absolute bg-background border border-border rounded-full p-3 shadow-lg"
                    style={{
                      left: `${50 + 40 * Math.cos((index * Math.PI) / 2)}%`,
                      top: `${50 + 40 * Math.sin((index * Math.PI) / 2)}%`,
                    }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <span className="font-bold text-primary">{tech}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="p-2 rounded-full border border-border hover:border-primary transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-6 h-6 text-primary" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}