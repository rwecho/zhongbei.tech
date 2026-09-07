import { company } from "@/content/company";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";

export function Timeline() {
  return (
    <Section>
      <SectionHeading
        eyebrow="MILESTONES"
        title="一路向北"
        description="从第一个项目到平台化演进，每一步都踩在真实交付上。"
      />
      <ol className="relative mx-auto mt-14 max-w-3xl space-y-10 before:absolute before:top-2 before:bottom-2 before:left-[7px] before:w-px before:bg-border md:before:left-1/2">
        {company.milestones.map((m, i) => (
          <li
            key={m.year}
            className="relative grid grid-cols-[auto_1fr] gap-5 md:grid-cols-2 md:gap-0"
          >
            {/* 节点 */}
            <span
              aria-hidden="true"
              className="absolute top-1.5 left-0 size-4 rounded-full border-2 border-primary bg-background md:left-1/2 md:-translate-x-1/2"
            />
            <div
              className={
                i % 2 === 0
                  ? "col-start-2 md:col-start-1 md:pr-12 md:text-right"
                  : "col-start-2 md:col-start-2 md:pl-12"
              }
            >
              <p className="text-sm font-semibold text-primary">{m.year}</p>
              <h3 className="mt-1 text-base font-semibold">{m.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {m.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
