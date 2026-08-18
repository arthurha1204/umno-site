import type { Product } from "@/types";

export const products: Product[] = [
  {
    id: "automacao-processos",
    slug: "automacao-de-processos",
    name: "Automação de processos",
    tagline: "Tira tarefa repetida da mão da sua equipe",
    description:
      "Mapeamos as tarefas manuais do seu dia a dia e construímos automações que rodam sozinhas: planilhas, e-mails, integrações entre sistemas, geração de documentos e muito mais.",
    setupPrice: "a partir de R$ 1.490 (setup)",
    recurringLabel: "manutenção mensal",
    recurringPrice: "a partir de R$ 297/mês",
    features: [
      "Mapeamento dos processos atuais",
      "Integração entre as ferramentas que você já usa",
      "Monitoramento e ajustes contínuos",
      "Relatório mensal do que foi automatizado",
    ],
    icon: "gear",
  },
  {
    id: "chatbot-ia",
    slug: "chatbot-ia-whatsapp-instagram",
    name: "Chatbot com IA para WhatsApp/Instagram",
    tagline: "Responde, qualifica e agenda enquanto você dorme",
    description:
      "Um atendente virtual treinado com a cara do seu negócio, respondendo no WhatsApp e Instagram, qualificando leads e passando para sua equipe só quem está pronto para comprar.",
    setupPrice: "a partir de R$ 1.290 (setup)",
    recurringLabel: "mensalidade",
    recurringPrice: "a partir de R$ 247/mês",
    features: [
      "Treinado com as informações do seu negócio",
      "Atende WhatsApp e Instagram Direct",
      "Qualificação automática de leads",
      "Handoff para atendimento humano quando necessário",
    ],
    icon: "chat",
  },
  {
    id: "site-institucional",
    slug: "site-institucional",
    name: "Site institucional",
    tagline: "Sua vitrine na internet, do jeito certo",
    description:
      "Site rápido, bonito e feito para converter visitante em contato. Estrutura pensada para SEO desde o primeiro dia, com páginas extras sob demanda.",
    setupPrice: "a partir de R$ 1.890 (setup)",
    recurringLabel: "por página extra",
    recurringPrice: "a partir de R$ 190/página",
    features: [
      "Design responsivo, feito sob medida",
      "Otimizado para buscadores (SEO)",
      "Formulário de contato integrado",
      "Hospedagem e domínio orientados passo a passo",
    ],
    icon: "site",
  },
  {
    id: "identidade-visual",
    slug: "identidade-visual-social-media",
    name: "Identidade Visual & Social Media",
    tagline: "Uma marca que as pessoas reconhecem de longe",
    description:
      "Criação de identidade visual completa (logo, cores, tipografia) e gestão de redes sociais com posts pensados para o seu público, publicados no ritmo certo.",
    setupPrice: "a partir de R$ 990 (setup)",
    recurringLabel: "mensalidade",
    recurringPrice: "a partir de R$ 397/mês",
    features: [
      "Logo, paleta de cores e guia de marca",
      "Templates para redes sociais",
      "Calendário editorial mensal",
      "Produção e agendamento de posts",
    ],
    icon: "palette",
  },
];
