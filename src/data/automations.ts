import type { Automation, AutomationCategory } from "@/types";

export type CategoryColor = "blue" | "pink" | "sun" | "mint" | "violet" | "coral";

export const automationCategories: {
  id: AutomationCategory;
  label: string;
  icon: string;
  color: CategoryColor;
}[] = [
  { id: "atendimento", label: "Atendimento", icon: "headset", color: "blue" },
  { id: "vendas", label: "Vendas", icon: "target", color: "pink" },
  { id: "marketing", label: "Marketing", icon: "sparkles", color: "sun" },
  { id: "operacao", label: "Operação", icon: "workflow", color: "mint" },
  { id: "financeiro", label: "Financeiro", icon: "chart", color: "violet" },
  { id: "rh", label: "RH", icon: "users", color: "coral" },
];

export const automations: Automation[] = [
  {
    id: "resposta-automatica-whatsapp",
    name: "Resposta automática no WhatsApp",
    description: "Responde as perguntas mais frequentes assim que o cliente manda mensagem.",
    category: "atendimento",
  },
  {
    id: "distribuicao-conversas",
    name: "Distribuição de conversas",
    description: "Direciona cada conversa para a pessoa certa da equipe automaticamente.",
    category: "atendimento",
  },
  {
    id: "resumo-conversas-longas",
    name: "Resumo de conversas longas",
    description: "Gera um resumo automático de conversas extensas para retomar o atendimento rápido.",
    category: "atendimento",
  },
  {
    id: "pesquisa-satisfacao",
    name: "Pesquisa de satisfação pós-atendimento",
    description: "Envia uma pesquisa curta assim que o atendimento é encerrado.",
    category: "atendimento",
  },
  {
    id: "fila-atendimento-horario",
    name: "Aviso de fora do horário",
    description: "Informa o cliente sobre o horário de atendimento e agenda retorno automático.",
    category: "atendimento",
  },
  {
    id: "qualificacao-leads",
    name: "Qualificação automática de leads",
    description: "Classifica cada lead pelo potencial de compra assim que ele entra em contato.",
    category: "vendas",
  },
  {
    id: "follow-up-automatico",
    name: "Follow-up automático",
    description: "Envia lembretes de acompanhamento para leads que pararam de responder.",
    category: "vendas",
  },
  {
    id: "envio-proposta",
    name: "Envio automático de proposta",
    description: "Gera e envia a proposta comercial assim que o negócio avança no funil.",
    category: "vendas",
  },
  {
    id: "notificacao-negociacao-parada",
    name: "Alerta de negociação parada",
    description: "Avisa o vendedor quando um negócio fica tempo demais sem movimento.",
    category: "vendas",
  },
  {
    id: "roteamento-lead-vendedor",
    name: "Roteamento de lead por vendedor",
    description: "Distribui os leads novos entre a equipe de vendas de forma automática e justa.",
    category: "vendas",
  },
  {
    id: "boas-vindas-novo-lead",
    name: "Boas-vindas para novo lead",
    description: "Envia mensagem de boas-vindas assim que um novo contato entra na base.",
    category: "marketing",
  },
  {
    id: "disparo-campanha-segmentada",
    name: "Disparo de campanha segmentada",
    description: "Envia campanhas para grupos específicos de contatos com base em tags.",
    category: "marketing",
  },
  {
    id: "recuperacao-carrinho",
    name: "Recuperação de contato abandonado",
    description: "Retoma contato automaticamente com quem demonstrou interesse e sumiu.",
    category: "marketing",
  },
  {
    id: "agendamento-posts",
    name: "Agendamento de posts",
    description: "Publica automaticamente os posts programados no calendário editorial.",
    category: "marketing",
  },
  {
    id: "relatorio-desempenho-campanhas",
    name: "Relatório de desempenho de campanhas",
    description: "Gera relatório periódico com o resultado das campanhas ativas.",
    category: "marketing",
  },
  {
    id: "atualizacao-status-tarefa",
    name: "Atualização automática de status",
    description: "Move tarefas de status conforme etapas do processo são concluídas.",
    category: "operacao",
  },
  {
    id: "alerta-atraso-tarefa",
    name: "Alerta de tarefa atrasada",
    description: "Notifica o responsável e o gestor quando uma tarefa passa do prazo.",
    category: "operacao",
  },
  {
    id: "geracao-documentos",
    name: "Geração automática de documentos",
    description: "Preenche e gera contratos, recibos e documentos a partir de um modelo.",
    category: "operacao",
  },
  {
    id: "sincronizacao-planilhas",
    name: "Sincronização entre sistemas",
    description: "Mantém dados sincronizados entre planilhas e ferramentas diferentes.",
    category: "operacao",
  },
  {
    id: "checklist-onboarding-cliente",
    name: "Checklist de onboarding de cliente",
    description: "Dispara automaticamente as etapas de integração de um novo cliente.",
    category: "operacao",
  },
  {
    id: "emissao-cobranca",
    name: "Emissão automática de cobrança",
    description: "Gera e envia boletos ou links de pagamento nas datas combinadas.",
    category: "financeiro",
  },
  {
    id: "lembrete-vencimento",
    name: "Lembrete de vencimento",
    description: "Avisa o cliente automaticamente antes e depois do vencimento de uma cobrança.",
    category: "financeiro",
  },
  {
    id: "conciliacao-pagamentos",
    name: "Conciliação de pagamentos",
    description: "Cruza pagamentos recebidos com cobranças emitidas automaticamente.",
    category: "financeiro",
  },
  {
    id: "relatorio-financeiro-mensal",
    name: "Relatório financeiro mensal",
    description: "Consolida entradas e saídas do mês em um relatório automático.",
    category: "financeiro",
  },
  {
    id: "alerta-inadimplencia",
    name: "Alerta de inadimplência",
    description: "Sinaliza automaticamente clientes com pagamento em atraso.",
    category: "financeiro",
  },
  {
    id: "triagem-curriculos",
    name: "Triagem inicial de currículos",
    description: "Organiza e pontua candidaturas recebidas conforme os critérios definidos.",
    category: "rh",
  },
  {
    id: "agendamento-entrevistas",
    name: "Agendamento de entrevistas",
    description: "Permite que candidatos escolham horário de entrevista automaticamente.",
    category: "rh",
  },
  {
    id: "onboarding-novo-colaborador",
    name: "Onboarding de novo colaborador",
    description: "Dispara as etapas e materiais de integração para quem acabou de entrar.",
    category: "rh",
  },
  {
    id: "pesquisa-clima-periodica",
    name: "Pesquisa de clima periódica",
    description: "Envia pesquisas de clima organizacional em intervalos definidos.",
    category: "rh",
  },
  {
    id: "controle-ferias-ausencias",
    name: "Controle de férias e ausências",
    description: "Centraliza pedidos e aprovações de férias e ausências automaticamente.",
    category: "rh",
  },
];
