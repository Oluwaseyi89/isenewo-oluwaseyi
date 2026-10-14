'use client'

import { useEffect, useMemo, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { PROFILE } from '@/app/utils/constants'
import { useIntroDone } from '@/app/components/intro/IntroScreen'

type Tone = 'punct' | 'key' | 'string' | 'number' | 'bool'
type Segment = { text: string; tone: Tone }

const toneClass: Record<Tone, string> = {
  punct: 'text-faint',
  key: 'text-[var(--code-key)]',
  string: 'text-[var(--code-string)]',
  number: 'text-[var(--code-number)]',
  bool: 'text-accent',
}

function field(key: string, value: Segment[], last = false): Segment[] {
  return [
    { text: '  "', tone: 'punct' },
    { text: key, tone: 'key' },
    { text: '": ', tone: 'punct' },
    ...value,
    { text: last ? '\n' : ',\n', tone: 'punct' },
  ]
}

const str = (v: string): Segment[] => [{ text: `"${v}"`, tone: 'string' }]
const list = (items: string[]): Segment[] => [
  { text: '[', tone: 'punct' },
  ...items.flatMap((item, i) => [
    { text: `"${item}"`, tone: 'string' as Tone },
    ...(i < items.length - 1 ? [{ text: ', ', tone: 'punct' as Tone }] : []),
  ]),
  { text: ']', tone: 'punct' },
]

export default function ApiConsole() {
  const reduceMotion = useReducedMotion()
  const introDone = useIntroDone()

  const segments = useMemo<Segment[]>(
    () => [
      { text: '{\n', tone: 'punct' },
      ...field('name', str(PROFILE.name)),
      ...field('role', str(PROFILE.role)),
      ...field('stack', list(['Node.js', 'Go', 'Python'])),
      ...field('certified', str('AWS Solutions Architect')),
      ...field('merged_prs', [{ text: '290', tone: 'number' }]),
      ...field('api_uptime', str('99.9%')),
      ...field('available', [{ text: 'true', tone: 'bool' }]),
      ...field('open_to', list(['remote', 'relocation']), true),
      { text: '}', tone: 'punct' },
    ],
    []
  )
  const total = useMemo(() => segments.reduce((n, s) => n + s.text.length, 0), [segments])
  const [shown, setShown] = useState(0)

  useEffect(() => {
    if (reduceMotion) {
      setShown(total)
      return
    }
    if (!introDone) return
    const start = setTimeout(() => {
      const timer = setInterval(() => {
        setShown((n) => {
          if (n >= total) {
            clearInterval(timer)
            return n
          }
          return n + 3
        })
      }, 16)
    }, 700)
    return () => clearTimeout(start)
  }, [reduceMotion, introDone, total])

  let remaining = shown
  const done = shown >= total

  return (
    <div className="card overflow-hidden font-mono text-[13px] sm:text-sm" role="img" aria-label={`API response describing ${PROFILE.name}: ${PROFILE.headline}`}>
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-surface-2">
        <div className="flex gap-1.5" aria-hidden>
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="text-faint truncate">api.isenewo.dev</span>
      </div>

      <div className="px-5 pt-4 pb-2 border-b border-border/70">
        <span className="text-primary font-semibold">GET</span>{' '}
        <span className="text-foreground">/v1/engineers/isenewo</span>
      </div>

      <pre aria-hidden className="px-5 py-4 leading-relaxed whitespace-pre-wrap break-words min-h-[17.5rem]">
        {segments.map((seg, i) => {
          if (remaining <= 0) return null
          const text = seg.text.slice(0, remaining)
          remaining -= seg.text.length
          return (
            <span key={i} className={toneClass[seg.tone]}>
              {text}
            </span>
          )
        })}
        {!done && <span className="caret" />}
      </pre>

      <div className="flex items-center justify-between gap-3 px-5 py-3 border-t border-border bg-surface-2 text-xs">
        <span className="flex items-center gap-2 text-primary">
          <span className="pulse-dot" />
          {done ? '200 OK' : 'streaming…'}
        </span>
        <span className="text-faint">application/json · 38 ms</span>
      </div>
    </div>
  )
}
