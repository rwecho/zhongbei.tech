"use client";

import * as React from "react";
import { toast } from "sonner";

import { site } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const topics = [
  "大模型应用开发",
  "AI Agent 定制",
  "RAG 知识库",
  "企业智能化方案",
  "其他",
] as const;

type FormState = {
  name: string;
  company: string;
  email: string;
  topic: (typeof topics)[number];
  message: string;
};

const initialForm: FormState = {
  name: "",
  company: "",
  email: "",
  topic: "大模型应用开发",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = React.useState<FormState>(initialForm);
  const [errors, setErrors] = React.useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = React.useState(false);

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const next: typeof errors = {};
    if (!form.name.trim()) next.name = "请填写姓名";
    if (!form.email.trim()) next.email = "请填写邮箱";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "邮箱格式不正确";
    if (!form.message.trim()) next.message = "请简单描述你的需求";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    if (!validate()) {
      toast.error("请检查表单中标红的字段");
      return;
    }
    setSubmitting(true);

    // 静态站无后端：校验通过后打开邮件客户端，预填咨询内容
    const subject = encodeURIComponent(
      `[官网咨询] ${form.topic} - ${form.name}${form.company ? `（${form.company}）` : ""}`
    );
    const body = encodeURIComponent(
      `姓名：${form.name}\n公司：${form.company || "-"}\n邮箱：${form.email}\n需求类型：${form.topic}\n\n需求描述：\n${form.message}`
    );
    toast.success("已打开邮件客户端", {
      description: `发送邮件至 ${site.contact.email}，我们会在 1 个工作日内回复。`,
    });
    window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`;
    setSubmitting(false);
  };

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">姓名 *</Label>
          <Input
            id="name"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder="怎么称呼你"
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p className="text-xs text-destructive">{errors.name}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">公司</Label>
          <Input
            id="company"
            value={form.company}
            onChange={(e) => set("company", e.target.value)}
            placeholder="公司名称（选填）"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">邮箱 *</Label>
        <Input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => set("email", e.target.value)}
          placeholder="用于我们回复你"
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p className="text-xs text-destructive">{errors.email}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label>需求类型</Label>
        <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="需求类型">
          {topics.map((topic) => (
            <button
              key={topic}
              type="button"
              role="radio"
              aria-checked={form.topic === topic}
              onClick={() => set("topic", topic)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-sm transition-colors",
                form.topic === topic
                  ? "border-primary bg-brand-soft font-medium text-primary"
                  : "border-border text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {topic}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">需求描述 *</Label>
        <Textarea
          id="message"
          value={form.message}
          onChange={(e) => set("message", e.target.value)}
          placeholder="简单描述你的业务场景与想解决的问题，例如：我们有 3000 篇产品文档，希望做一个内部问答助手…"
          rows={5}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p className="text-xs text-destructive">{errors.message}</p>
        )}
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={submitting}>
        提交咨询
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        提交后将打开你的邮件客户端发送至 {site.contact.email}，我们会在 1
        个工作日内回复。
      </p>
    </form>
  );
}
