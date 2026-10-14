import { ReactNode } from 'react'
import Reveal from './Reveal'

interface SectionHeadingProps {
  index: string
  route: string
  title: ReactNode
  intro?: ReactNode
}

export default function SectionHeading({ index, route, title, intro }: SectionHeadingProps) {
  return (
    <Reveal className="max-w-3xl space-y-5">
      <p className="text-label text-primary flex items-center gap-3">
        <span>{index}</span>
        <span className="h-px w-10 bg-primary/50" />
        <span className="text-faint normal-case tracking-normal">{route}</span>
      </p>
      <h2 className="text-h2 text-foreground">{title}</h2>
      {intro && <p className="text-lead text-muted">{intro}</p>}
    </Reveal>
  )
}
