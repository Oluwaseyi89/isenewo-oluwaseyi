import {
    Github,
    Linkedin,
    Twitter,
    Mail,
  } from 'lucide-react'
  
  export const SOCIAL_ICON_MAP = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    mail: Mail,
  } as const
  
  export type SocialIconKey = keyof typeof SOCIAL_ICON_MAP
  