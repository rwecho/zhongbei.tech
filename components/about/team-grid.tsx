import { company } from "@/content/company";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { GlowCard } from "@/components/shared/glow-card";

export function TeamGrid() {
  return (
    <Section className="bg-muted/30">
      <SectionHeading
        eyebrow="TEAM"
        title="一群认真做事的人"
        description="核心团队来自一线大厂 AI 平台与顶级咨询公司，工程与业务两种语言都说得溜。"
      />
      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {company.team.map((member) => (
          <GlowCard key={member.name} className="h-full" glow={false}>
            <div className="flex items-start gap-4 p-6">
              <Avatar className="size-12 border border-border/70">
                <AvatarFallback className="bg-brand-soft text-sm font-semibold text-primary">
                  {member.name.slice(0, 1)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-base font-semibold">{member.name}</h3>
                <p className="text-sm text-primary">{member.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {member.bio}
                </p>
              </div>
            </div>
          </GlowCard>
        ))}
      </div>
    </Section>
  );
}
