// Animation variants for Framer Motion
export const fadeInUp = {
    initial: {
      y: 20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }
  
  export const fadeInLeft = {
    initial: {
      x: -20,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }
  
  export const fadeInRight = {
    initial: {
      x: 20,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }
  
  export const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }
  
  export const scaleUp = {
    initial: {
      scale: 0.9,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  }
  
  export const slideUp = {
    initial: {
      y: 50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }
  
  export const popIn = {
    initial: {
      scale: 0,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 25,
      },
    },
  }
  
  // Animation variants for page transitions
  export const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  }
  
  // Hover animations
  export const hoverScale = {
    scale: 1.05,
    transition: { duration: 0.2 },
  }
  
  export const hoverLift = {
    y: -5,
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
    transition: { duration: 0.2 },
  }
  
  // Tap animations
  export const tapScale = {
    scale: 0.95,
    transition: { duration: 0.1 },
  }
  
  // Export all animations
  export default {
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    staggerContainer,
    scaleUp,
    slideUp,
    popIn,
    pageVariants,
    hoverScale,
    hoverLift,
    tapScale,
  }