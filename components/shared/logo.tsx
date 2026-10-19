import Link from "next/link";

import { cn } from "@/lib/utils";
import { site } from "@/config/site";

/** 北极星标识：极简单色四芒星，随文字颜色自适应亮暗主题 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={cn("size-7", className)}
    >
      <path
        d="M16 2 L18.2 13.8 L30 16 L18.2 18.2 L16 30 L13.8 18.2 L2 16 L13.8 13.8 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Logo({
  className,
  showText = true,
}: {
  className?: string;
  showText?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2.5 font-semibold", className)}
      aria-label={`${site.name} 首页`}
    >
      <LogoMark />
      {showText && (
        <span className="flex flex-col leading-none">
          <span className="text-base tracking-wide">{site.shortName}</span>
          <span className="text-[10px] font-medium tracking-[0.22em] text-muted-foreground">
            ZHONGBEI TECH
          </span>
        </span>
      )}
    </Link>
  );
}
