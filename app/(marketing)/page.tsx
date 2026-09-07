import type { Metadata } from "next";

import { Section } from "@/components/shared/section";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

/** 首页（各 section 组件在后续阶段填充） */
export default function HomePage() {
  return (
    <Section className="text-center">
      <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
        终北科技 · 首页
      </h1>
      <p className="mt-4 text-muted-foreground">以终为始，向北而行。</p>
    </Section>
  );
}
