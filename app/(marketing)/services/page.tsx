import type { Metadata } from "next";

import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "服务",
  description:
    "大模型应用开发、AI Agent 定制、RAG 知识库、企业智能化解决方案与 AI 技术咨询——终北科技提供从评估到交付的全流程 AI 开发服务。",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <PageHeader
      eyebrow="OUR SERVICES"
      title="从场景到上线的全流程 AI 服务"
      description="我们不卖概念，只交付能跑在生产环境里的 AI 系统。每一项服务都以业务指标验收。"
    />
  );
}
