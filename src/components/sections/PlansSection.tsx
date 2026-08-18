"use client";

import { plans } from "@/data/plans";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { useCart } from "@/context/CartContext";

export function PlansSection() {
  const { toggleItem, hasItem } = useCart();

  return (
    <section id="planos" className="scroll-mt-24 py-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="planos e pacotes"
          title="Escolha o ponto de partida"
          description="Todo plano pode crescer depois com produtos e módulos extras."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-4">
          {plans.map((plan, i) => {
            const selected = hasItem(plan.id);
            return (
              <Reveal key={plan.id} delay={i * 80}>
              <div
                className={`relative flex flex-col justify-between p-7 ${
                  plan.highlighted
                    ? "bg-pink-500 text-white shadow-scrap-pink lg:-translate-y-3"
                    : "bg-white shadow-scrap"
                }`}
                style={{ transform: `rotate(${plan.highlighted ? 0 : i % 2 === 0 ? -1.5 : 1.5}deg)` }}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-6 -rotate-3 bg-sun px-3 py-1 font-display text-xs uppercase tracking-wide text-ink">
                    {plan.badge}
                  </span>
                )}
                <div>
                  <h3 className="font-display text-xl uppercase leading-tight">{plan.name}</h3>
                  <p className={`mt-1 font-hand text-lg ${plan.highlighted ? "text-white/90" : "text-pink-600"}`}>
                    {plan.tagline}
                  </p>

                  <div className="mt-5">
                    <p className={`font-display text-3xl leading-tight ${plan.highlighted ? "text-white" : "text-blue-700"}`}>
                      {plan.setupPrice}
                    </p>
                    <p className={`mt-1 text-sm font-semibold ${plan.highlighted ? "text-white/90" : "text-ink/70"}`}>
                      {plan.recurringLabel}:{" "}
                      <span className={plan.highlighted ? "text-sun" : "text-pink-600"}>
                        {plan.recurringPrice}
                      </span>
                    </p>
                  </div>

                  <ul className="mt-5 space-y-2">
                    {plan.features.map((f) => (
                      <li key={f} className="flex gap-2 text-sm">
                        <span className={plan.highlighted ? "text-sun" : "text-blue-600"}>＋</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 space-y-2">
                  <Button
                    href="/agendar"
                    variant={plan.highlighted ? "outline" : "primary"}
                    className={`w-full ${plan.highlighted ? "!border-white !bg-transparent !text-white hover:!bg-white/10" : ""}`}
                  >
                    {plan.ctaLabel}
                  </Button>
                  <button
                    onClick={() => toggleItem({ id: plan.id, name: plan.name, type: "plano" })}
                    className={`w-full rounded-full px-4 py-2 text-xs font-display uppercase tracking-wide ${
                      plan.highlighted
                        ? "bg-white/10 text-white"
                        : selected
                        ? "animate-pop bg-blue-600 text-white"
                        : "border-2 border-ink text-ink"
                    }`}
                  >
                    {selected ? "Adicionado ✓" : "Adicionar ao pedido"}
                  </button>
                </div>
              </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
