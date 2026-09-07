import { cn } from "@/lib/utils";

/** 玻璃拟态卡片：顶部品牌光晕 + 玻璃背景，亮暗主题各自取 token */
export function GlowCard({
  className,
  glow = true,
  ...props
}: React.ComponentProps<"div"> & { glow?: boolean }) {
  return (
    <div
      className={cn(
        "glass relative overflow-hidden rounded-2xl transition-all duration-300",
        "hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/10",
        className
      )}
      {...props}
    >
      {glow && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-16 left-1/2 h-32 w-2/3 -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: "var(--brand-glow)" }}
        />
      )}
      <div className="relative">{props.children}</div>
    </div>
  );
}
