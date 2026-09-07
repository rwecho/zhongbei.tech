import { Building2, Factory, Landmark, Truck, ShoppingBag, Cog } from "lucide-react";

import { Section } from "@/components/shared/section";

/** 客户 logo 墙（脱敏占位，替换真实客户时更新此数组） */
const clients = [
  { name: "某连锁零售集团", icon: ShoppingBag },
  { name: "某高端制造集团", icon: Factory },
  { name: "某城商银行", icon: Landmark },
  { name: "某物流企业", icon: Truck },
  { name: "某消费品牌", icon: Building2 },
  { name: "某工业企业", icon: Cog },
];

export function Clients() {
  return (
    <Section className="py-14 md:py-16">
      <p className="text-center text-sm text-muted-foreground">
        他们正在用终北的 AI 系统支撑真实业务
      </p>
      <div className="mt-8 grid grid-cols-2 items-center gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
        {clients.map((client) => (
          <div
            key={client.name}
            className="flex items-center justify-center gap-2 text-muted-foreground/70 transition-colors hover:text-muted-foreground"
          >
            <client.icon className="size-4" />
            <span className="text-sm font-medium whitespace-nowrap">
              {client.name}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
