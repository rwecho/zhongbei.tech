import { cn } from "@/lib/utils";

/** 子页面统一的页头：网格底纹 + 眉题 + 标题 + 描述 */
export function PageHeader({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden border-b border-border/60", className)}>
      <div
        aria-hidden="true"
        className="bg-grid mask-fade-b pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-48 w-1/2 -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "var(--brand-glow)" }}
      />
      <div className="relative mx-auto w-full max-w-6xl px-6 py-16 text-center md:py-24">
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold tracking-wide text-primary">
            {eyebrow}
          </p>
        )}
        <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-balance md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
