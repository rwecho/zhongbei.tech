import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { featuredServices } from "@/content/services";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { GlowCard } from "@/components/shared/glow-card";

export function ServicesOverview() {
  return (
    <Section>
      <SectionHeading
        eyebrow="SERVICES"
        title="我们做什么"
        description="五项核心服务，覆盖企业 AI 落地的完整链路：从「该不该做」的评估，到「怎么做好」的交付，再到「持续变好」的迭代。"
      />
      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {featuredServices.map((service) => (
          <GlowCard key={service.slug} className="h-full">
            <Card className="h-full border-0 bg-transparent shadow-none">
              <CardHeader>
                <div className="mb-3 flex size-11 items-center justify-center rounded-xl bg-brand-soft text-primary">
                  <service.icon className="size-5" />
                </div>
                <CardTitle className="text-base">{service.name}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {service.tagline}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Link
                  href={`/services#${service.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  了解详情 <ArrowRight className="size-3.5" />
                </Link>
              </CardContent>
            </Card>
          </GlowCard>
        ))}
      </div>
    </Section>
  );
}
