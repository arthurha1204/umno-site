import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StickerStar } from "@/components/scrapbook/StickerStar";
import { KnotIcon } from "@/components/scrapbook/KnotIcon";

const fragmented = [
  "Uma ferramenta pra site, outra pra CRM, outra pro chatbot",
  "Nenhuma conversa entre os sistemas — copia e cola manual",
  "Vários boletos, vários logins, vários suportes diferentes",
  "Cada ferramenta com sua própria curva de aprendizado",
];

const bundled = [
  "Site, CRM, atendimento e automação na mesma plataforma",
  "Tudo integrado: um lead vira tarefa, vira agendamento, sozinho",
  "Uma cobrança, um time de suporte, um contrato",
  "Você aprende uma vez e usa em tudo",
];

export function ComparisonSection() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="chega de gambiarra"
          title="Ferramentas soltas vs. tudo amarrado"
          description="A maioria das empresas junta um monte de ferramenta avulsa e reza pra funcionar junto. A gente resolve isso de um jeito só."
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-8 md:grid-cols-2">
          <div className="relative -rotate-1 border-2 border-ink/15 bg-white p-7">
            <p className="font-display text-lg uppercase text-ink/50">O jeito bagunçado</p>
            <ul className="mt-5 space-y-3">
              {fragmented.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-ink/60">
                  <span className="mt-0.5 text-ink/40">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative rotate-1 border-2 border-blue-600 bg-blue-600 p-7 text-white">
            <StickerStar color="sun" className="-right-3 -top-3 h-9 w-9" rotate={12} />
            <p className="font-display text-lg uppercase text-white/80">O jeito Um Nó</p>
            <ul className="mt-5 space-y-3">
              {bundled.map((item) => (
                <li key={item} className="flex gap-3 text-sm">
                  <span className="mt-0.5 text-sun">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <KnotIcon className="mt-6 h-8 w-20 text-sun" rotate={2} />
          </div>
        </div>
      </Container>
    </section>
  );
}
