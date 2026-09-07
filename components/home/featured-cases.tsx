import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { featuredCases } from "@/content/cases";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { GlowCard } from "@/components/shared/glow-card";

export function FeaturedCases() {
  return (
    <Section className="bg-muted/30">
      <SectionHeading
        eyebrow="CASE STUDIES"
        title="案例说话"
        description="真实的生产环境，可量化的业务结果。"
      />
      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
        {featuredCases.map((c) => (
          <Link key={c.slug} href={`/cases/${c.slug}`} className="group">
            <GlowCard className="h-full">
              <div className="flex h-full flex-col p-6">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">{c.industry}</Badge>
                  <ArrowUpRight className="size-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-snug text-balance">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {c.summary}
                </p>
                <div className="mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-5">
                  {c.metrics.slice(0, 2).map((m) => (
                    <div key={m.label}>
                      <p className="text-lg font-semibold text-primary">
                        {m.value}
                      </p>
                      <p className="text-xs text-muted-foreground">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </GlowCard>
          </Link>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          href="/cases"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
        >
          查看全部案例 <ArrowRight className="size-4" />
        </Link>
      </div>
    </Section>
  );
}
