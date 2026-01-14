import { useTranslations } from "next-intl";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export default function FAQ() {
  const t = useTranslations("FAQ");

  const faqs = ["q1", "q2", "q3", "q4", "q5"];

  return (
    <section id="faq" className="py-20">
      <div className="px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">FAQ</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion className="w-full">
            {faqs.map((key, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{t(key as any)}</AccordionTrigger>
                <AccordionContent>{t(key.replace("q", "a") as any)}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
