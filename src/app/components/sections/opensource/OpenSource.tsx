import { ArrowUpRight, GitMerge, Github } from 'lucide-react'
import { OPEN_SOURCE } from '@/app/utils/constants'
import SectionHeading from '@/app/components/ui/SectionHeading'
import Reveal from '@/app/components/ui/Reveal'

export default function OpenSource() {
  return (
    <div className="space-y-12">
      <SectionHeading
        index="04"
        route="/open-source"
        title={
          <>
            <span className="text-primary">{OPEN_SOURCE.mergedPrs}</span> pull requests,
            <br className="hidden sm:block" /> merged by other teams.
          </>
        }
        intro="Backend and smart-contract work reviewed and accepted into production codebases across the Stellar and Starknet ecosystems."
      />

      <Reveal className="card overflow-hidden">
        <div className="flex items-center justify-between gap-4 px-5 sm:px-6 py-4 border-b border-border bg-surface-2">
          <p className="font-mono text-sm text-muted">
            <span className="text-primary">$</span> git log --merged --author=Oluwaseyi89
          </p>
          <span className="text-label text-faint hidden sm:inline">highlights</span>
        </div>

        <ol className="divide-y divide-border">
          {OPEN_SOURCE.highlights.map((item) => (
            <li key={item.project}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-[2rem_1fr_auto] gap-4 px-5 sm:px-6 py-5 hover:bg-surface-2 transition-colors"
              >
                <GitMerge className="w-5 h-5 mt-0.5 text-primary" aria-hidden />
                <div className="min-w-0 space-y-1">
                  <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="font-display text-lg font-semibold text-foreground">{item.project}</span>
                    <span className="chip !py-0.5 !text-primary !border-primary/30 !bg-primary/10">merged</span>
                  </p>
                  <p className="text-muted">{item.work}</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-faint group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" aria-hidden />
              </a>
            </li>
          ))}
        </ol>

        <div className="px-5 sm:px-6 py-5 border-t border-border">
          <a
            href={OPEN_SOURCE.allPrsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-foreground text-background font-medium hover:bg-primary hover:text-primary-ink transition-colors"
          >
            <Github className="w-4 h-4" />
            Browse all {OPEN_SOURCE.mergedPrs} merged PRs
          </a>
        </div>
      </Reveal>
    </div>
  )
}
