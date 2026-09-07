import Link from "next/link";

import { cn } from "@/lib/utils";
import { site } from "@/config/site";

/** 北极星标识：四芒星 + 指北意象 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={cn("size-7", className)}
    >
      <defs>
        <linearGradient id="zb-star" x1="4" y1="4" x2="28" y2="28">
          <stop stopColor="var(--primary)" />
          <stop
            offset="1"
            stopColor="var(--primary)"
            stopOpacity="0.55"
          />
        </linearGradient>
      </defs>
      <path
        d="M16 1.5 L18.9 13.1 L30.5 16 L18.9 18.9 L16 30.5 L13.1 18.9 L1.5 16 L13.1 13.1 Z"
        fill="url(#zb-star)"
      />
      <circle cx="16" cy="16" r="2.2" fill="var(--background)" />
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
