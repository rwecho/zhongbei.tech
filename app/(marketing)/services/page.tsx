import type { Metadata } from "next";

import { services } from "@/content/services";
import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { CTASection } from "@/components/shared/cta-section";
import { ServiceDetail } from "@/components/services/service-detail";

export const metadata: Metadata = {
  title: "服务",
  description:
    "大模型应用开发、AI Agent 定制、RAG 知识库、企业智能化解决方案与 AI 技术咨询——终北科技提供从评估到交付的全流程 AI 开发服务。",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="OUR SERVICES"
        title="从场景到上线的全流程 AI 服务"
        description="我们不卖概念，只交付能跑在生产环境里的 AI 系统。每一项服务都以业务指标验收。"
      />
      <Section className="md:py-8">
        <div className="mx-auto max-w-5xl">
          {services.map((service, i) => (
            <ServiceDetail key={service.slug} service={service} index={i} />
          ))}
        </div>
      </Section>
      <CTASection
        title="不确定哪项服务适合你？"
        description="聊聊你的业务场景，我们帮你判断从哪里开始 ROI 最高。"
      />
    </>
  );
}
