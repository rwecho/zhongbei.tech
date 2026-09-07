import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/shared/logo";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div aria-hidden="true" className="bg-grid mask-fade-b absolute inset-0" />
      <div className="relative">
        <LogoMark className="mx-auto size-12" />
        <p className="mt-6 text-sm font-semibold tracking-widest text-primary">
          404
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
          这片星域还没有地图
        </h1>
        <p className="mt-4 text-muted-foreground">
          你访问的页面不存在，或者已经被移动到了别处。
        </p>
        <Button className="mt-8" render={<Link href="/" />}>
          <ArrowLeft data-icon="inline-start" /> 返回首页
        </Button>
      </div>
    </div>
  );
}
