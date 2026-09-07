import { cn } from "@/lib/utils";

/** 统一 section 容器：垂直节奏 + 内容宽度 */
export function Section({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<"section"> & { containerClassName?: string }) {
  return (
    <section className={cn("py-20 md:py-28", className)} {...props}>
      <div className={cn("mx-auto w-full max-w-6xl px-6", containerClassName)}>
        {props.children}
      </div>
    </section>
  );
}
