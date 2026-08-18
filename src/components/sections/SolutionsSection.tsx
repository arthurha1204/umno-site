"use client";

import Link from "next/link";
import { solutions } from "@/data/solutions";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useCart } from "@/context/CartContext";
import { WashiTape } from "@/components/scrapbook/WashiTape";
import { Reveal } from "@/components/ui/Reveal";

export function SolutionsSection() {
  const { toggleItem, hasItem } = useCart();

  return (
    <section id="solucoes" className="scroll-mt-24 bg-blue-100/50 py-24">
      <Container>
        <SectionHeading
          eyebrow="solução por solução"
          title="Monte sua plataforma como um quebra-cabeça"
          description="Módulos independentes que conversam entre si. Comece com um, adicione outros quando fizer sentido para o seu negócio."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, i) => {
            const selected = hasItem(solution.id);
            return (
              <Reveal key={solution.id} delay={i * 60}>
              <div
                className="relative flex flex-col justify-between border-2 border-ink/10 bg-white p-6"
              >
                <WashiTape
                  color={selected ? "mint" : "blue"}
                  rotate={-4}
                  width="4.5rem"
                  className="-top-2.5 left-6"
                />
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                    <Icon name={solution.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg uppercase leading-tight text-ink">
                    {solution.name}
                  </h3>
                  <p className="mt-1 text-sm text-ink/70">{solution.tagline}</p>
                </div>

                <div className="mt-6 flex items-center justify-between gap-2">
                  <Link
                    href={`/solucao/${solution.slug}`}
                    className="link-underline font-hand text-lg text-blue-700"
                  >
                    Saiba mais →
                  </Link>
                  <button
                    onClick={() =>
                      toggleItem({ id: solution.id, name: solution.name, type: "solucao" })
                    }
                    className={`rounded-full px-3 py-1.5 text-xs font-display uppercase tracking-wide ${
                      selected
                        ? "animate-pop bg-blue-600 text-white"
                        : "border-2 border-ink text-ink hover:bg-blue-50"
                    }`}
                  >
                    {selected ? "✓" : "+ pedido"}
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
