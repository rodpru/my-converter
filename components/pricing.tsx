import { useTranslations } from "next-intl";
import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

export default function Pricing() {
  const t = useTranslations("Pricing");

  const plans = [
    {
      name: t("free"),
      price: "€0",
      description: "Perfect for testing",
      features: t.raw("features_free") as string[],
      cta: t("get_started"),
      variant: "outline",
    },
    {
      name: t("pro"),
      price: "€9",
      description: "For creators",
      features: t.raw("features_pro") as string[],
      cta: t("get_started"),
      variant: "default",
    },
    {
      name: t("enterprise"),
      price: "Custom",
      description: "For large teams",
      features: t.raw("features_enterprise") as string[],
      cta: "Contact",
      variant: "outline",
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-muted/50">
      <div className="px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">{t("pricing")}</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <Card
              key={i}
              className={`flex flex-col ${plan.name === "Pro" ? "border-primary shadow-lg scale-105 z-10" : ""}`}
            >
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="text-4xl font-bold mb-6">
                  {plan.price}
                  <span className="text-base font-normal text-muted-foreground">
                    {plan.price !== "Custom" && t("monthly")}
                  </span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center text-sm">
                      <Check className="w-4 h-4 mr-2 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.variant as any}>
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
