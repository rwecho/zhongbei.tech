import type { Metadata } from "next";

import { company } from "@/content/company";
import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { CTASection } from "@/components/shared/cta-section";
import { Timeline } from "@/components/about/timeline";
import { GlowCard } from "@/components/shared/glow-card";

export const metadata: Metadata = {
  title: "关于我们",
  description:
    "终北科技成立于 2023 年，专注大模型应用开发。以终为始，向北而行——用确定性的工程方法，交付确定性的 AI 价值。",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="ABOUT US"
        title="以终为始，向北而行"
        description="AI 的价值不在演示里，而在每天真实运转的业务中。"
      />

      {/* 公司简介 */}
      <Section>
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <p className="text-lg leading-loose text-pretty md:text-xl">
            {company.intro}
          </p>
          <p className="leading-loose text-muted-foreground text-pretty">
            {company.introExtra}
          </p>
        </div>
      </Section>

      {/* 发展历程 */}
      <Timeline />

      {/* 价值观 */}
      <Section className="bg-muted/30">
        <SectionHeading
          eyebrow="VALUES"
          title="我们相信的事"
          description="写在墙上的价值观没有意义，落在每个项目决策里的才算数。"
        />
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {company.values.map((value) => (
            <GlowCard key={value.title} className="h-full">
              <div className="p-6">
                <div className="flex size-11 items-center justify-center rounded-xl bg-brand-soft text-primary">
                  <value.icon className="size-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            </GlowCard>
          ))}
        </div>
      </Section>

      {/* 加入我们 CTA */}
      <CTASection
        title="和我们一起，把 AI 做成真的"
        description="我们长期寻找对工程与业务都有热情的伙伴，也欢迎与优秀的你合作。"
        primaryLabel="了解合作机会"
        secondaryLabel="预约商务咨询"
      />
    </>
  );
}
