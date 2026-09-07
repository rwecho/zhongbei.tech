import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

import { company } from "@/content/company";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/** Hero 右侧：模拟企业 AI 助手对话的玻璃卡（静态展示） */
function AssistantCard() {
  return (
    <div className="glass relative w-full max-w-md rounded-2xl p-5 shadow-2xl shadow-primary/10">
      {/* 标题栏 */}
      <div className="flex items-center justify-between border-b border-border/70 pb-3">
        <div className="flex items-center gap-2 text-sm font-medium">
          <Sparkles className="size-4 text-primary" />
          终北企业助手
        </div>
        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60 motion-reduce:animate-none" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          在线
        </span>
      </div>

      <div className="space-y-3 pt-4 text-sm leading-relaxed">
        {/* 用户提问 */}
        <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-primary px-3.5 py-2.5 text-primary-foreground">
          华东区上季度售后工单，主要问题集中在哪？
        </div>

        {/* 工具调用过程 */}
        <div className="flex w-fit items-center gap-2 rounded-lg border border-border/70 bg-muted/50 px-3 py-1.5 text-xs text-muted-foreground">
          <span className="size-1.5 rounded-full bg-chart-3" />
          已检索知识库 · 命中 3 篇 · 分析 1,284 条工单
        </div>

        {/* AI 回答 */}
        <div className="w-fit max-w-[92%] space-y-2.5 rounded-2xl rounded-bl-sm border border-border/70 bg-card px-3.5 py-3">
          <p>
            华东区 Q2 售后工单 Top 3：
            <span className="font-medium">物流破损 38%</span>、
            <span className="font-medium">安装延迟 27%</span>、
            <span className="font-medium">退换咨询 19%</span>。
          </p>
          <div className="flex flex-wrap gap-1.5 text-xs text-muted-foreground">
            <span className="rounded-md bg-brand-soft px-2 py-0.5 text-primary">
              依据：售后周报 w14-w26
            </span>
            <span className="rounded-md bg-brand-soft px-2 py-0.5 text-primary">
              工单明细 1,284 条
            </span>
          </div>
          <p className="flex items-center gap-1.5 text-xs text-chart-3">
            <CheckCircle2 className="size-3.5" />
            已生成分析报告与改进建议
          </p>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* 背景光效 + 网格 */}
      <div aria-hidden="true" className="bg-grid mask-fade-b absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full blur-3xl"
        style={{ background: "var(--brand-glow)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-24 right-0 h-80 w-80 rounded-full blur-3xl"
        style={{ background: "var(--brand-glow)" }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-6 pt-16 pb-20 md:pt-24 md:pb-28 lg:grid-cols-2">
        {/* 左栏 */}
        <div className="text-center lg:text-left">
          <Badge
            variant="secondary"
            className="h-auto gap-1.5 px-3 py-1.5 text-xs"
          >
            <span className="size-1.5 rounded-full bg-primary" />
            以终为始，向北而行
          </Badge>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl xl:text-6xl">
            让大模型，
            <br className="hidden sm:block" />
            真正跑在
            <br className="hidden sm:block" />
            <span className="text-primary">你的业务里</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty md:text-lg lg:mx-0">
            终北科技专注大模型应用开发：智能客服、AI
            Agent、企业知识库——从场景评估到上线迭代，交付能通过业务指标检验的生产级 AI 系统。
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <Button size="lg" render={<Link href="/contact" />}>
              预约免费咨询 <ArrowRight data-icon="inline-end" />
            </Button>
            <Button size="lg" variant="outline" render={<Link href="/services" />}>
              了解我们的服务
            </Button>
          </div>

          {/* 信任数据条 */}
          <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-border/70 pt-8 sm:grid-cols-4">
            {company.stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col text-center lg:text-left"
              >
                <dt className="order-2 mt-1 text-xs text-muted-foreground">
                  {s.label}
                </dt>
                <dd className="order-1 text-2xl font-semibold text-primary">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* 右栏 */}
        <div className="hidden justify-center lg:flex">
          <AssistantCard />
        </div>
      </div>
    </section>
  );
}
