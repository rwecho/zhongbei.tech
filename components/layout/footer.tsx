import Link from "next/link";
import { Clock, Mail, MapPin } from "lucide-react";

import { site } from "@/config/site";
import { services } from "@/content/services";
import { Logo } from "@/components/shared/logo";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-muted/30">
      <div className="mx-auto w-full max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* 品牌 */}
          <div className="space-y-4">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {site.slogan}。{site.tagline}
            </p>
            <div className="flex items-center gap-3 text-muted-foreground">
              <a
                href={`mailto:${site.contact.email}`}
                aria-label="发送邮件"
                className="transition-colors hover:text-foreground"
              >
                <Mail className="size-4" />
              </a>
            </div>
          </div>

          {/* 快速导航 */}
          <div>
            <h3 className="text-sm font-semibold">快速导航</h3>
            <ul className="mt-4 space-y-2.5">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 服务 */}
          <div>
            <h3 className="text-sm font-semibold">核心服务</h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h3 className="text-sm font-semibold">联系我们</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                {site.legal.address}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0" />
                {site.contact.email}
              </li>
              <li className="flex items-center gap-2">
                <Clock className="size-4 shrink-0" />
                {site.contact.workTime}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border/70 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name} · 统一社会信用代码{" "}
            {site.legal.creditCode}
          </p>
          <a
            href={site.contact.icpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            {site.contact.icp}
          </a>
        </div>
      </div>
    </footer>
  );
}
