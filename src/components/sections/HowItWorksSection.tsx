import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PostIt } from "@/components/scrapbook/PostIt";

const steps = [
  {
    n: "01",
    title: "Conversamos sobre seu negócio",
    text: "Entendemos o que já funciona, o que trava e o que você precisa pra crescer.",
  },
  {
    n: "02",
    title: "Montamos sua combinação",
    text: "Sugerimos os produtos e módulos certos — nada de pacote genérico.",
  },
  {
    n: "03",
    title: "Construímos e integramos",
    text: "Site, automações e IA entram no ar já conversando entre si.",
  },
  {
    n: "04",
    title: "Acompanhamos com você",
    text: "Ajustes, relatórios e suporte contínuo pra sua operação não travar.",
  },
];

const rotations = [-2, 1.5, -1.5, 2];

export function HowItWorksSection() {
  return (
    <section className="bg-blue-950 py-24 text-white">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="passo a passo"
          title={<span className="text-white">Como funciona na prática</span>}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.n}
              style={{ transform: `rotate(${rotations[i]}deg)` }}
              className="bg-white/5 p-6 backdrop-blur-sm"
            >
              <PostIt color={i % 2 === 0 ? "sun" : "pink"} rotate={0} className="mb-4 text-ink">
                {step.n}
              </PostIt>
              <h3 className="font-display text-lg uppercase leading-tight">{step.title}</h3>
              <p className="mt-2 text-sm text-white/70">{step.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
