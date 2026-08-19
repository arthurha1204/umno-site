"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { StampBadge } from "@/components/scrapbook/StampBadge";
import {
  DemoFrame,
  ChatDemo,
  SiteDemo,
  AutomationDemo,
  CrmDemo,
  type DemoAccent,
} from "@/components/sections/HeroDemos";

type Slide = {
  key: string;
  eyebrow: string;
  words: string[];
  titleSuffix: string;
  paragraph: string;
  badges: string[];
  accent: DemoAccent;
  rotate: number;
  demo: ReactNode;
  demoLabel: string;
};

const SLIDES: Slide[] = [
  {
    key: "chatbot",
    eyebrow: "Chatbot com IA",
    words: ["Automatize", "Agilize", "Modernize", "Transforme"],
    titleSuffix: " seu atendimento.",
    paragraph:
      "Chatbot com IA responde no WhatsApp e Instagram, qualifica cada contato e agenda sozinho, 24 horas por dia, sem deixar mensagem sem resposta.",
    badges: ["IA", "WhatsApp", "Instagram", "24h"],
    accent: "blue",
    rotate: -2,
    demo: <ChatDemo />,
    demoLabel: "atendimento",
  },
  {
    key: "site",
    eyebrow: "Site institucional",
    words: ["Construa", "Lance", "Publique", "Renove"],
    titleSuffix: " sua presença online.",
    paragraph:
      "Site rápido e feito pra converter visitante em cliente, no ar em poucos dias, sem depender de ninguém pra manter atualizado.",
    badges: ["Responsivo", "SEO", "Rápido", "Sob medida"],
    accent: "pink",
    rotate: 2,
    demo: <SiteDemo />,
    demoLabel: "site",
  },
  {
    key: "automacao",
    eyebrow: "Automação de processos",
    words: ["Automatize", "Conecte", "Simplifique", "Otimize"],
    titleSuffix: " seus processos.",
    paragraph:
      "Fluxos conectam suas ferramentas e repetem as tarefas manuais por você, sem erro, sem esforço e sem depender de planilha.",
    badges: ["Sem código", "Integrado", "24h", "Sem erros"],
    accent: "sun",
    rotate: -2,
    demo: <AutomationDemo />,
    demoLabel: "automação",
  },
  {
    key: "crm",
    eyebrow: "CRM e pipeline",
    words: ["Organize", "Acompanhe", "Gerencie", "Multiplique"],
    titleSuffix: " suas vendas.",
    paragraph:
      "Pipeline visual mostra cada negociação, da entrada do contato até o fechamento, sem nada perdido entre uma etapa e outra.",
    badges: ["Kanban", "Leads", "Relatórios", "Fácil de usar"],
    accent: "mint",
    rotate: 2,
    demo: <CrmDemo />,
    demoLabel: "pipeline",
  },
];

const AUTOPLAY_MS = 10000;
const RESUME_MS = 8000;
const WORD_MS = 2800;

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [wordTick, setWordTick] = useState(0);
  const resumeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused]);

  useEffect(() => {
    const id = setInterval(() => setWordTick((t) => t + 1), WORD_MS);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    return () => {
      if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    };
  }, []);

  function goTo(index: number) {
    setActive(index);
    setPaused(true);
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    resumeTimeout.current = setTimeout(() => setPaused(false), RESUME_MS);
  }

  const slide = SLIDES[active];
  const word = slide.words[wordTick % slide.words.length];

  return (
    <div>
      <div key={slide.key} className="animate-slide-fade-in grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <StampBadge className="mb-6 bg-paper">{slide.eyebrow}</StampBadge>

          <h1 className="font-display text-4xl uppercase leading-[0.98] tracking-tight text-ink sm:text-5xl md:text-6xl">
            <span key={`${slide.key}-${wordTick}`} className="animate-word-in inline-block text-blue-600">
              {word}
            </span>
            {slide.titleSuffix}
          </h1>

          <p className="mt-6 max-w-lg text-lg text-ink/70">{slide.paragraph}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {slide.badges.map((b) => (
              <span
                key={b}
                className="rounded-full border-2 border-ink/10 bg-white px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wide text-ink/70"
              >
                {b}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="/agendar" variant="pink">Agendar uma conversa</Button>
            <Button href="#solucoes" variant="outline">Ver soluções</Button>
          </div>
        </div>

        <DemoFrame label={slide.demoLabel} accent={slide.accent} rotate={slide.rotate}>
          {slide.demo}
        </DemoFrame>
      </div>

      <div className="mt-10 flex items-center justify-center gap-3">
        {SLIDES.map((s, i) => (
          <button
            key={s.key}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Ver slide: ${s.eyebrow}`}
            aria-current={i === active}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === active ? "w-8 bg-blue-600" : "w-2.5 bg-ink/15 hover:bg-ink/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
