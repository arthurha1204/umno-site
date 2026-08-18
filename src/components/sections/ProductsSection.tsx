"use client";

import { products } from "@/data/products";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { useCart } from "@/context/CartContext";

const rotations = [-2, 1.5, -1, 2];

export function ProductsSection() {
  const { toggleItem, hasItem } = useCart();

  return (
    <section className="bg-blue-50/60 py-24">
      <Container>
        <SectionHeading
          eyebrow="produtos avulsos"
          title="Escolha só o que falta pra sua empresa"
          description="Cada produto resolve um problema específico. Pode contratar separado ou combinar com os módulos da plataforma."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => {
            const selected = hasItem(product.id);
            return (
              <Reveal key={product.id} delay={i * 80}>
              <div
                className="flex flex-col justify-between bg-white p-6 shadow-scrap transition-transform hover:-translate-y-1"
                style={{ transform: `rotate(${rotations[i % rotations.length]}deg)` }}
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <Icon name={product.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-xl uppercase leading-tight text-ink">
                    {product.name}
                  </h3>
                  <p className="mt-1 font-hand text-lg text-pink-600">{product.tagline}</p>
                  <p className="mt-3 text-sm text-ink/70">{product.description}</p>

                  <ul className="mt-4 space-y-1.5">
                    {product.features.map((f) => (
                      <li key={f} className="flex gap-2 text-sm text-ink/70">
                        <span className="text-blue-600">＋</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-dashed border-ink/20 pt-4 text-sm">
                  <p className="font-display text-2xl leading-tight text-blue-700">{product.setupPrice}</p>
                  <p className="mt-1 font-semibold text-ink/70">
                    {product.recurringLabel}: <span className="text-pink-600">{product.recurringPrice}</span>
                  </p>
                  <button
                    onClick={() =>
                      toggleItem({ id: product.id, name: product.name, type: "produto" })
                    }
                    className={`mt-4 w-full rounded-full px-4 py-2 font-display text-xs uppercase tracking-wide transition-colors ${
                      selected
                        ? "animate-pop bg-blue-600 text-white"
                        : "border-2 border-ink text-ink hover:bg-blue-50"
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
