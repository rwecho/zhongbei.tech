import type { Metadata } from "next";

import { Hero } from "@/components/home/hero";
import { ServicesOverview } from "@/components/home/services-overview";
import { FeaturedCases } from "@/components/home/featured-cases";
import { Process } from "@/components/home/process";
import { Clients } from "@/components/home/clients";
import { FaqPreview } from "@/components/home/faq-preview";
import { CTASection } from "@/components/shared/cta-section";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <FeaturedCases />
      <Process />
      <Clients />
      <FaqPreview />
      <CTASection />
    </>
  );
}
