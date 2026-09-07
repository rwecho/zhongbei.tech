import type { Metadata } from "next";

import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "联系我们",
  description:
    "预约免费 AI 咨询：聊聊你的业务与想法，一周内获得初步评估与建议方案。",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <PageHeader
      eyebrow="CONTACT"
      title="聊聊你的 AI 想法"
      description="预约一次 30 分钟免费咨询，没有推销，只有专业建议。"
    />
  );
}
