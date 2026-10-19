import type { Metadata } from "next";
import { Clock, Mail, MapPin } from "lucide-react";

import { site } from "@/config/site";
import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/shared/section";
import { GlowCard } from "@/components/shared/glow-card";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "联系我们",
  description:
    "预约免费 AI 咨询：聊聊你的业务与想法，一周内获得初步评估与建议方案。",
  alternates: { canonical: "/contact" },
};

const contactItems = [
  { icon: Mail, label: "邮箱", value: site.contact.email },
  { icon: Clock, label: "工作时间", value: site.contact.workTime },
  { icon: MapPin, label: "公司地址", value: site.legal.address },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="CONTACT"
        title="聊聊你的 AI 想法"
        description="预约一次 30 分钟免费咨询，没有推销，只有专业建议。"
      />
      <Section>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          {/* 表单 */}
          <GlowCard className="lg:col-span-3" glow={false}>
            <div className="p-6 md:p-8">
              <h2 className="text-xl font-semibold tracking-tight">
                需求咨询表
              </h2>
              <p className="mt-1 mb-6 text-sm text-muted-foreground">
                带 * 为必填项
              </p>
              <ContactForm />
            </div>
          </GlowCard>

          {/* 联系方式 */}
          <GlowCard glow={false} className="lg:col-span-2">
            <ul className="space-y-5 p-6">
              {contactItems.map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-primary">
                    <item.icon className="size-4" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-sm font-medium">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </GlowCard>
        </div>
      </Section>
    </>
  );
}
