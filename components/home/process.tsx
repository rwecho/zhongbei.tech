import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";

const steps = [
  {
    no: "01",
    title: "需求诊断",
    duration: "1-2 周",
    description:
      "深入业务现场，梳理流程与痛点，判断哪些环节值得用 AI 改造，输出可行性评估与优先级建议。",
  },
  {
    no: "02",
    title: "方案设计",
    duration: "2-3 周",
    description:
      "确定技术选型与系统架构，用 POC 快速验证核心链路，给出成本模型与分阶段实施路线图。",
  },
  {
    no: "03",
    title: "开发交付",
    duration: "4-8 周起",
    description:
      "按里程碑迭代交付，评测基线贯穿全程；上线前完成安全评估与压测，确保生产环境可靠运行。",
  },
  {
    no: "04",
    title: "持续迭代",
    duration: "长期陪伴",
    description:
      "模型升级适配、效果回归、新场景扩展。知识与方法沉淀到你的团队，能力长在业务上。",
  },
];

export function Process() {
  return (
    <Section>
      <SectionHeading
        eyebrow="HOW WE WORK"
        title="不贩卖焦虑的交付方式"
        description="每个阶段都有可验证的产出，随时可以看到进展、调整方向。"
      />
      <ol className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <li key={step.no} className="relative">
            {/* 连接线（桌面端） */}
            {i < steps.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute top-7 left-[calc(50%+2.5rem)] hidden h-px w-[calc(100%-5rem)] bg-border lg:block"
              />
            )}
            <div className="flex flex-col items-center text-center">
              <span className="flex size-14 items-center justify-center rounded-2xl bg-brand-soft text-sm font-semibold text-primary ring-1 ring-primary/15">
                {step.no}
              </span>
              <h3 className="mt-5 text-base font-semibold">
                {step.title}
                <span className="ml-2 text-xs font-normal text-muted-foreground">
                  {step.duration}
                </span>
              </h3>
              <p className="mt-2.5 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
