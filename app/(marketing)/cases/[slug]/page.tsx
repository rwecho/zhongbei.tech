import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";

import { cases, getCase } from "@/content/cases";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/shared/section";
import { CTASection } from "@/components/shared/cta-section";

/** 预渲染全部案例详情页 */
export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/cases/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCase(slug);
  if (!caseStudy) return {};
  return {
    title: `${caseStudy.title}｜${caseStudy.industry}案例`,
    description: caseStudy.summary,
    alternates: { canonical: `/cases/${caseStudy.slug}` },
  };
}

export default async function CaseDetailPage({
  params,
}: PageProps<"/cases/[slug]">) {
  const { slug } = await params;
  const caseStudy = getCase(slug);
  if (!caseStudy) notFound();

  const chapters = [
    { title: "背景与挑战", body: caseStudy.challenge },
    { title: "解决方案", body: caseStudy.solution },
    { title: "落地成果", body: caseStudy.result },
  ];

  return (
    <>
      {/* 页头 */}
      <div className="relative overflow-hidden border-b border-border/60">
        <div aria-hidden="true" className="bg-grid mask-fade-b absolute inset-0" />
        <div className="relative mx-auto w-full max-w-4xl px-6 py-16 md:py-20">
          <Link
            href="/cases"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" /> 返回案例列表
          </Link>
          <div className="mt-6">
            <Badge variant="secondary">{caseStudy.industry}</Badge>
          </div>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            {caseStudy.title}
          </h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            {caseStudy.summary}
          </p>
        </div>
      </div>

      {/* 成果指标条 */}
      <Section className="py-12 md:py-14">
        <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {caseStudy.metrics.map((m) => (
            <div
              key={m.label}
              className="glass rounded-2xl px-5 py-6 text-center"
            >
              <dd className="text-2xl font-semibold text-primary md:text-3xl">
                {m.value}
              </dd>
              <dt className="mt-2 text-xs text-muted-foreground md:text-sm">
                {m.label}
              </dt>
            </div>
          ))}
        </dl>
      </Section>

      {/* 正文 */}
      <Section className="pt-0">
        <div className="mx-auto max-w-3xl space-y-12">
          {chapters.map((chapter) => (
            <section key={chapter.title}>
              <h2 className="flex items-center gap-3 text-xl font-semibold tracking-tight md:text-2xl">
                <span className="h-5 w-1 rounded-full bg-primary" />
                {chapter.title}
              </h2>
              <p className="mt-4 leading-loose text-muted-foreground text-pretty">
                {chapter.body}
              </p>
            </section>
          ))}

          <section>
            <h2 className="flex items-center gap-3 text-xl font-semibold tracking-tight md:text-2xl">
              <span className="h-5 w-1 rounded-full bg-primary" />
              技术栈
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {caseStudy.techStack.map((t) => (
                <Badge key={t} variant="outline" className="h-7 px-3">
                  <Check className="size-3" />
                  {t}
                </Badge>
              ))}
            </div>
          </section>
        </div>
      </Section>

      <CTASection
        title="你的业务也有类似挑战？"
        description="聊聊你的场景，我们帮你评估这条路该怎么走。"
      />
    </>
  );
}
