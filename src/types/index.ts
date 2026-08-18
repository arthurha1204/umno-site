export type Product = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  setupPrice: string;
  recurringLabel: string;
  recurringPrice: string;
  features: string[];
  icon: string;
};

export type Solution = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  icon: string;
  benefits: string[];
  features: string[];
  worksWith: string[];
};

export type Plan = {
  id: string;
  name: string;
  tagline: string;
  setupPrice: string;
  recurringPrice: string;
  recurringLabel: string;
  features: string[];
  highlighted: boolean;
  badge?: string;
  ctaLabel: string;
};

export type AutomationCategory =
  | "atendimento"
  | "vendas"
  | "marketing"
  | "operacao"
  | "financeiro"
  | "rh";

export type Automation = {
  id: string;
  name: string;
  description: string;
  category: AutomationCategory;
};

export type CartItem = {
  id: string;
  name: string;
  type: "produto" | "solucao" | "plano";
};
