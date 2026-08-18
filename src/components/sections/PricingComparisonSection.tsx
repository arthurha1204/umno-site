import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WashiTape } from "@/components/scrapbook/WashiTape";
import { plans } from "@/data/plans";

const replaced = [
  {
    icon: "users",
    category: "CRM e Gestão de Vendas",
    tools: "Pipedrive, RD CRM, HubSpot",
    price: "R$ 350+/mês",
  },
  {
    icon: "headset",
    category: "Atendimento Omnichannel",
    tools: "ChatGuru, Kommo, Zenvia",
    price: "R$ 500+/mês",
  },
  {
    icon: "gear",
    category: "Automação de Processos",
    tools: "Zapier, Make, Pluga",
    price: "R$ 200+/mês",
  },
  {
    icon: "sparkles",
    category: "Agentes de IA no atendimento",
    tools: "Chatbase, Blip, desenvolvimento próprio",
    price: "R$ 450+/mês",
  },
  {
    icon: "chart",
    category: "Dashboards de Performance",
    tools: "Power BI, Databox",
    price: "R$ 200+/mês",
  },
  {
    icon: "calendar",
    category: "Agendamento Online",
    tools: "Calendly, Cal.com",
    price: "R$ 150+/mês",
  },
  {
    icon: "target",
    category: "Prospecção e Geração de Leads",
    tools: "Apollo, Lusha, Hunter",
    price: "R$ 400+/mês",
  },
];

const unifiedPlan = plans.find((p) => p.id === "top")!;

export function PricingComparisonSection() {
  return (
    <section className="bg-blue-100/50 py-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="ferramentas que substituímos"
          title={
            <>
              Pare de pagar{" "}
              <span className="text-pink-500">várias assinaturas soltas</span>
            </>
          }
          description="Cada categoria abaixo é normalmente uma ferramenta paga à parte. Com a gente, vem tudo junto — por menos de um terço do preço."
        />

        <div className="relative mx-auto mt-14 max-w-3xl rotate-[-0.5deg] bg-white p-6 shadow-scrap sm:p-9">
          <WashiTape color="sun" rotate={-5} className="-top-3 left-10" />

          {replaced.map((item) => (
            <div
              key={item.category}
              className="flex flex-col gap-2 border-b-2 border-dashed border-ink/15 py-3.5 last:border-b-0 sm:flex-row sm:flex-nowrap sm:items-center sm:gap-5 sm:py-4"
            >
              <div className="flex items-center gap-3 sm:contents">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <Icon name={item.icon} className="h-5 w-5" />
                </div>

                <div className="min-w-0 sm:min-w-[200px]">
                  <p className="font-display text-base uppercase leading-tight text-ink">
                    {item.category}
                  </p>
                  <p className="font-sans text-sm text-ink/55">{item.tools}</p>
                </div>
              </div>

              <div
                className="hidden flex-1 border-b-2 border-dotted border-ink/20 sm:block"
                aria-hidden="true"
              />

              <div className="flex items-center gap-3 pl-[52px] sm:ml-auto sm:pl-0">
                <span className="text-sm font-semibold text-ink/40 line-through">
                  {item.price}
                </span>
                <span className="-rotate-6 whitespace-nowrap rounded-full border-2 border-pink-400 bg-pink-50 px-2.5 py-1 text-[11px] font-display uppercase tracking-wide text-pink-600">
                  trocado ✕
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 grid max-w-3xl items-center gap-4 sm:grid-cols-[1fr_auto_1fr]">
          <div className="rotate-1 border-2 border-pink-300 bg-pink-50 p-6 text-center shadow-scrap-pink">
            <p className="font-display text-sm uppercase tracking-wide text-pink-600">
              Ferramentas fragmentadas
            </p>
            <p className="mt-2 font-display text-4xl text-pink-700">R$ 2.250+</p>
            <p className="text-sm text-pink-600/80">por mês</p>
          </div>

          <p className="mx-auto font-hand text-3xl text-ink/50">vs</p>

          <div className="-rotate-1 border-2 border-blue-700 bg-blue-600 p-6 text-center text-white shadow-scrap">
            <p className="font-display text-sm uppercase tracking-wide text-white/80">
              {unifiedPlan.name}
            </p>
            <p className="mt-2 font-display text-4xl">{unifiedPlan.recurringPrice}</p>
            <p className="text-sm text-white/80">mensalidade</p>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-xl -rotate-1 bg-mint px-6 py-4 text-center font-display text-sm uppercase tracking-wide text-ink shadow-scrap sm:text-base">
          Economize R$ 1.553/mês trocando ferramentas soltas pelo nosso plano ✓
        </div>

        <p className="mx-auto mt-5 max-w-xl text-center text-xs text-ink/50">
          Valores de mercado estimados por categoria, com base em planos de entrada
          dos concorrentes citados. Podem variar.
        </p>
      </Container>
    </section>
  );
}
