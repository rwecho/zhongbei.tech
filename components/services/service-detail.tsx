import { Check } from "lucide-react";

import type { Service } from "@/content/services";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

/** 服务详情区块：交替左右布局，含亮点/交付物/技术栈/适用场景 */
export function ServiceDetail({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const reversed = index % 2 === 1;

  return (
    <section
      id={service.slug}
      className="scroll-mt-24 border-t border-border/60 py-16 first:border-t-0 md:py-20"
    >
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
        {/* 概述（偶数项反转顺序） */}
        <div className={cn(reversed && "lg:order-2")}>
          <div className="flex items-center gap-3">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-primary">
              <service.icon className="size-5" />
            </div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {service.name}
            </h2>
          </div>
          <p className="mt-3 font-medium text-primary">{service.tagline}</p>
          <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
            {service.description}
          </p>
          <ul className="mt-6 space-y-2.5">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* 详情卡片 */}
        <div className={cn("glass rounded-2xl p-6 md:p-8", reversed && "lg:order-1")}>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground">
                你将获得
              </h3>
              <ul className="mt-3 space-y-2">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground">
                技术栈
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {service.techStack.map((t) => (
                  <Badge key={t} variant="outline" className="h-6">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground">
                适用场景
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {service.useCases.map((u) => (
                  <Badge key={u} variant="secondary" className="h-6">
                    {u}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
