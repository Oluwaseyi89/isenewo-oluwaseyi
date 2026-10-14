import { HERO_STATS } from '@/app/utils/constants'
import Reveal from '@/app/components/ui/Reveal'

// Deterministic "uptime" bars so server and client render identically
const bars = Array.from({ length: 28 }, (_, i) => 55 + ((i * 37) % 45))

export default function StatusBoard() {
  return (
    <Reveal className="card p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-5 border-b border-border">
        <p className="flex items-center gap-2.5 font-medium text-foreground">
          <span className="pulse-dot" />
          All systems operational
        </p>
        <p className="text-label text-faint">status · last 8 years</p>
      </div>

      <dl className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
        {HERO_STATS.map((stat) => (
          <div key={stat.label} className="space-y-3">
            <dt className="text-label text-faint">{stat.label}</dt>
            <dd className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              {stat.value}
            </dd>
            <div className="flex items-end gap-[3px] h-6" aria-hidden>
              {bars.map((h, i) => (
                <span
                  key={i}
                  className="flex-1 rounded-sm bg-primary"
                  style={{ height: `${h}%`, opacity: 0.25 + (i / bars.length) * 0.75 }}
                />
              ))}
            </div>
          </div>
        ))}
      </dl>
    </Reveal>
  )
}
