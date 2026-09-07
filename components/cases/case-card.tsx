import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { CaseStudy } from "@/content/cases";
import { Badge } from "@/components/ui/badge";
import { GlowCard } from "@/components/shared/glow-card";

export function CaseCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Link href={`/cases/${caseStudy.slug}`} className="group h-full">
      <GlowCard className="h-full">
        <div className="flex h-full flex-col p-6">
          <div className="flex items-center justify-between">
            <Badge variant="secondary">{caseStudy.industry}</Badge>
            <ArrowUpRight className="size-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
          </div>
          <h2 className="mt-4 text-lg font-semibold leading-snug text-balance">
            {caseStudy.title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {caseStudy.summary}
          </p>
          <div className="mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-5">
            {caseStudy.metrics.slice(0, 2).map((m) => (
              <div key={m.label}>
                <p className="text-lg font-semibold text-primary">{m.value}</p>
                <p className="text-xs text-muted-foreground">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </GlowCard>
    </Link>
  );
}
