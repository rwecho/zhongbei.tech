import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { homeFaqs } from "@/content/faqs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";

export function FaqPreview() {
  return (
    <Section>
      <SectionHeading
        eyebrow="FAQ"
        title="常见问题"
        description="关于合作方式、数据安全与成本，你想知道的都在这里。"
      />
      <div className="mx-auto mt-12 max-w-3xl">
        <Accordion>
          {homeFaqs.map((faq, i) => (
            <AccordionItem key={faq.question} value={`faq-${i}`}>
              <AccordionTrigger className="py-5 text-base font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          还有其他疑问？{" "}
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
          >
            直接问问我们 <ArrowRight className="size-3.5" />
          </Link>
        </p>
      </div>
    </Section>
  );
}
