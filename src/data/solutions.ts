import type { Solution } from "@/types";

export const solutions: Solution[] = [
  {
    id: "crm",
    slug: "crm",
    name: "CRM",
    tagline: "Todo cliente, contato e negociação num lugar só",
    description:
      "Um CRM simples de usar para organizar contatos, funil de vendas e histórico de conversas, sem depender de planilha espalhada.",
    longDescription:
      "Centralize contatos, empresas e negociações em um funil visual. Cada interação — mensagem, ligação, e-mail — fica registrada no histórico do cliente, então qualquer pessoa da equipe consegue continuar a conversa de onde parou. Integra com o atendimento automatizado e com a IA para atualizar o funil sozinho.",
    icon: "users",
    benefits: [
      "Nada de lead perdido em planilha ou bloco de notas",
      "Funil de vendas visual, fácil de entender de relance",
      "Histórico completo de cada cliente",
    ],
    features: [
      "Funil de vendas customizável",
      "Cadastro de contatos e empresas",
      "Histórico de interações unificado",
      "Tags e segmentação de clientes",
    ],
    worksWith: ["gestao-de-leads", "dashboard", "agenda"],
  },
  {
    id: "atendimento-automatizado",
    slug: "atendimento-automatizado",
    name: "Atendimento automatizado",
    tagline: "Primeira resposta em segundos, todo santo dia",
    description:
      "Central de atendimento que organiza as conversas de WhatsApp, Instagram e site em uma única caixa de entrada, com respostas automáticas para as perguntas mais comuns.",
    longDescription:
      "Junte todos os canais de conversa — WhatsApp, Instagram, site — em uma caixa de entrada única para sua equipe. Perguntas frequentes são respondidas na hora, e o que precisa de atenção humana é direcionado para a pessoa certa, sem se perder no meio do caminho.",
    icon: "headset",
    benefits: [
      "Resposta imediata mesmo fora do horário comercial",
      "Equipe só entra na conversa quando realmente precisa",
      "Nenhuma mensagem esquecida em canal separado",
    ],
    features: [
      "Caixa de entrada unificada",
      "Respostas automáticas configuráveis",
      "Distribuição de conversas por equipe",
      "Etiquetas e status de atendimento",
    ],
    worksWith: ["ia-automacao", "crm", "gestao-de-leads"],
  },
  {
    id: "ia-automacao",
    slug: "ia-automacao-inteligente",
    name: "IA / automação inteligente",
    tagline: "A camada esperta que conecta tudo o resto",
    description:
      "Inteligência artificial aplicada para qualificar leads, sugerir respostas, resumir conversas e disparar automações com base no que está acontecendo no seu negócio.",
    longDescription:
      "É a camada que dá inteligência para as outras soluções: qualifica leads automaticamente, sugere a próxima ação para sua equipe, resume conversas longas e dispara automações quando um gatilho acontece — um novo lead, uma venda, um agendamento cancelado.",
    icon: "sparkles",
    benefits: [
      "Decisões mais rápidas com base em dados reais",
      "Menos trabalho manual repetitivo",
      "Funciona junto com as outras soluções da plataforma",
    ],
    features: [
      "Qualificação automática de leads",
      "Sugestão de respostas e próximos passos",
      "Resumo automático de conversas",
      "Gatilhos e automações condicionais",
    ],
    worksWith: ["atendimento-automatizado", "crm", "automacoes"],
  },
  {
    id: "agenda",
    slug: "agenda-agendamento-online",
    name: "Agenda / agendamento online",
    tagline: "Cliente marca sozinho, sem trocar mensagem",
    description:
      "Página de agendamento online integrada à sua rotina, com confirmação e lembretes automáticos para reduzir falta.",
    longDescription:
      "Seus clientes escolhem dia e horário direto por um link, sem precisar trocar mensagens para achar um horário livre. Lembretes automáticos por WhatsApp reduzem as faltas, e tudo fica sincronizado com sua agenda existente.",
    icon: "calendar",
    benefits: [
      "Menos troca de mensagem só para marcar horário",
      "Lembretes automáticos reduzem faltas",
      "Sincroniza com a agenda que você já usa",
    ],
    features: [
      "Página de agendamento personalizada",
      "Confirmação e lembrete automáticos",
      "Bloqueio de horários e regras de disponibilidade",
      "Sincronização com Google Agenda",
    ],
    worksWith: ["atendimento-automatizado", "crm"],
  },
  {
    id: "gestao-de-leads",
    slug: "gestao-de-leads",
    name: "Gestão de Leads",
    tagline: "Todo lead com dono, prazo e próximo passo",
    description:
      "Captação, organização e distribuição automática de leads entre sua equipe, com priorização de quem está mais perto de fechar.",
    longDescription:
      "Todo lead que chega — de anúncio, site, indicação ou redes sociais — entra automaticamente no sistema, é distribuído para a pessoa certa da equipe e priorizado conforme o quanto está perto de fechar negócio.",
    icon: "target",
    benefits: [
      "Nenhum lead esquecido sem resposta",
      "Distribuição automática e justa entre a equipe",
      "Priorização de quem está mais perto de comprar",
    ],
    features: [
      "Captação automática de múltiplas origens",
      "Distribuição automática entre a equipe",
      "Pontuação e priorização de leads",
      "Alertas de follow-up",
    ],
    worksWith: ["crm", "ia-automacao", "dashboard"],
  },
  {
    id: "dashboard",
    slug: "dashboard-relatorios",
    name: "Dashboard / relatórios",
    tagline: "Números que cabem numa tela só",
    description:
      "Painel com os principais indicadores do seu negócio atualizados automaticamente: vendas, atendimento, leads e o que mais importar para você.",
    longDescription:
      "Chega de montar relatório manual todo mês. O dashboard puxa os dados das outras soluções da plataforma automaticamente e mostra o que importa: vendas, atendimento, leads, financeiro — tudo em uma tela só, sempre atualizado.",
    icon: "chart",
    benefits: [
      "Decisão baseada em dado, não em achismo",
      "Sem planilha manual para atualizar toda semana",
      "Visão do negócio inteiro em uma tela",
    ],
    features: [
      "Painéis personalizáveis por área",
      "Atualização automática dos dados",
      "Exportação de relatórios",
      "Metas e acompanhamento de indicadores",
    ],
    worksWith: ["crm", "gestao-de-leads", "gestao-de-tarefas"],
  },
  {
    id: "gestao-de-tarefas",
    slug: "gestao-de-tarefas",
    name: "Gestão de Tarefas",
    tagline: "Quadro de tarefas que a equipe realmente usa",
    description:
      "Organização de tarefas e projetos internos em quadros simples, com prazos, responsáveis e status sempre visíveis.",
    longDescription:
      "Um quadro de tarefas direto ao ponto: cada card tem responsável, prazo e status. Dá para ligar tarefas a um lead, cliente ou projeto específico e acompanhar tudo sem precisar de reunião só para saber 'como está andando'.",
    icon: "checklist",
    benefits: [
      "Prazo e responsável claros em cada tarefa",
      "Menos reunião só para alinhar status",
      "Conecta tarefas a clientes e projetos",
    ],
    features: [
      "Quadros no estilo kanban",
      "Prazos e responsáveis por tarefa",
      "Comentários e anexos",
      "Notificações de atraso",
    ],
    worksWith: ["dashboard", "crm"],
  },
  {
    id: "site",
    slug: "site",
    name: "Site",
    tagline: "Sua presença online, integrada à plataforma",
    description:
      "Módulo de site institucional totalmente integrado às demais soluções: formulários viram leads automaticamente, agendamento fica embutido na página.",
    longDescription:
      "Diferente de um site solto, o módulo Site já nasce conectado: formulários de contato caem direto na Gestão de Leads, o botão de agendamento usa a Agenda, e o chat do site conversa com o Atendimento automatizado.",
    icon: "site",
    benefits: [
      "Formulários que viram lead automaticamente",
      "Agendamento embutido na própria página",
      "Uma ferramenta a menos para gerenciar separado",
    ],
    features: [
      "Páginas institucionais integradas à plataforma",
      "Formulários conectados à Gestão de Leads",
      "Chat conectado ao Atendimento automatizado",
      "Agendamento embutido nas páginas",
    ],
    worksWith: ["gestao-de-leads", "agenda", "atendimento-automatizado"],
  },
  {
    id: "automacoes",
    slug: "automacoes",
    name: "Automações",
    tagline: "Regras simples, trabalho que some da lista",
    description:
      "Central de automações do tipo 'quando isso acontecer, faça aquilo' conectando todas as soluções da plataforma entre si.",
    longDescription:
      "O motor de automações da plataforma: configure regras do tipo 'quando um lead entrar, envie mensagem de boas-vindas e avise a equipe' ou 'quando uma tarefa atrasar, notifique o responsável'. Conecta todas as outras soluções entre si.",
    icon: "workflow",
    benefits: [
      "Regras simples de configurar, sem precisar programar",
      "Conecta todas as soluções da plataforma entre si",
      "Reduz tarefas manuais repetitivas",
    ],
    features: [
      "Construtor de regras visual",
      "Gatilhos por evento (novo lead, tarefa, venda...)",
      "Ações em múltiplas soluções ao mesmo tempo",
      "Histórico de execuções",
    ],
    worksWith: ["ia-automacao", "crm", "gestao-de-tarefas"],
  },
  {
    id: "design",
    slug: "design",
    name: "Design",
    tagline: "Peças novas sempre que sua marca precisar",
    description:
      "Módulo de design sob demanda: artes para redes sociais, materiais de campanha e ajustes de identidade visual sempre que precisar.",
    longDescription:
      "Um time de design disponível conforme a demanda da sua marca: peças para redes sociais, materiais de campanha, apresentações e pequenos ajustes na identidade visual, sem precisar contratar um freelancer novo a cada peça.",
    icon: "palette",
    benefits: [
      "Peças novas sem precisar buscar freelancer toda vez",
      "Identidade visual consistente em todo material",
      "Prazos combinados com previsibilidade",
    ],
    features: [
      "Artes para redes sociais sob demanda",
      "Materiais de campanha e apresentações",
      "Ajustes de identidade visual",
      "Biblioteca de arquivos organizada",
    ],
    worksWith: ["site", "automacoes"],
  },
];
