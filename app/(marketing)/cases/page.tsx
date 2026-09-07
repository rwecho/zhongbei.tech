import type { Metadata } from "next";

import { cases } from "@/content/cases";
import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { CTASection } from "@/components/shared/cta-section";
import { CaseCard } from "@/components/cases/case-card";

export const metadata: Metadata = {
  title: "案例",
  description:
    "终北科技的 AI 落地案例：智能客服、合同审查 Copilot、多 Agent 数据分析、视觉质检等生产级项目，全部以业务指标验证效果。",
  alternates: { canonical: "/cases" },
};

export default function CasesPage() {
  return (
    <>
      <PageHeader
        eyebrow="CASE STUDIES"
        title="真实业务里跑出来的案例"
        description="每一个案例都在客户的生产环境运行，用业务指标说话。"
      />
      <Section>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((caseStudy) => (
            <CaseCard key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </div>
      </Section>
      <CTASection
        title="想成为下一个案例？"
        description="告诉我们你的业务挑战，一周内给出可行性评估与建议方案。"
      />
    </>
  );
}
