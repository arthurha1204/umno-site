"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const faqs = [
  {
    q: "Preciso contratar tudo de uma vez?",
    a: "Não. Você pode começar com um produto ou módulo só e ir adicionando outros conforme a necessidade for aparecendo.",
  },
  {
    q: "Quanto tempo leva pra ficar pronto?",
    a: "Depende do escopo. Um site institucional simples sai em poucos dias; combinações maiores com automação e CRM costumam levar de 2 a 4 semanas.",
  },
  {
    q: "As soluções da plataforma funcionam separadas?",
    a: "Sim, cada módulo funciona sozinho, mas o valor real aparece quando eles conversam entre si — por isso a maioria dos clientes combina dois ou mais.",
  },
  {
    q: "Vocês atendem qualquer tipo de negócio?",
    a: "Sim. Nossos produtos e módulos são genéricos por design, pensados pra se adaptar ao seu processo em vez de te obrigar a se adaptar a um nicho específico.",
  },
  {
    q: "Como funciona o suporte depois da entrega?",
    a: "Planos com mensalidade incluem acompanhamento contínuo, ajustes e relatórios. Projetos avulsos têm um período de garantia e suporte pós-entrega.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 py-24">
      <Container className="max-w-3xl">
        <SectionHeading align="center" eyebrow="dúvidas" title="Perguntas frequentes" />

        <div className="mt-10 space-y-3">
          {faqs.map((item, i) => (
            <div key={item.q} className="border-2 border-ink/10 bg-white">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-display text-base uppercase leading-tight text-ink">
                  {item.q}
                </span>
                <span
                  className={`font-hand text-2xl text-pink-500 transition-transform duration-300 ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div className={`accordion-panel ${open === i ? "is-open" : ""}`}>
                <div>
                  <p className="px-5 pb-5 text-sm text-ink/70">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
