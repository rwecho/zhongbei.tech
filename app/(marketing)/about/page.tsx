import type { Metadata } from "next";

import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "关于我们",
  description:
    "终北科技成立于 2023 年，专注大模型应用开发。以终为始，向北而行——用确定性的工程方法，交付确定性的 AI 价值。",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <PageHeader
      eyebrow="ABOUT US"
      title="以终为始，向北而行"
      description="AI 的价值不在演示里，而在每天真实运转的业务中。"
    />
  );
}
