import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/shared/section";

/** 页尾行动号召区块，首页/服务/案例页复用 */
export function CTASection({
  title = "准备好把 AI 落地到你的业务了吗？",
  description = "预约一次 30 分钟免费咨询，我们帮你评估场景、估算成本、规划路线。",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <Section className="pb-24 md:pb-32">
      <div
        className="glass relative overflow-hidden rounded-3xl px-6 py-16 text-center md:px-16"
        data-slot="cta-card"
      >
        {/* 背景光效 */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 50% 120%, var(--brand-glow), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" render={<Link href="/contact" />}>
              预约免费咨询 <ArrowRight data-icon="inline-end" />
            </Button>
            <Button size="lg" variant="outline" render={<Link href="/cases" />}>
              查看客户案例
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
