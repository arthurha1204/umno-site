import type { ReactNode } from "react";
import { WashiTape } from "@/components/scrapbook/WashiTape";
import { StickerStar } from "@/components/scrapbook/StickerStar";

const accentMap = {
  blue: { bar: "bg-blue-500", soft: "bg-blue-50", dot: "bg-blue-500", text: "text-blue-700" },
  pink: { bar: "bg-pink-500", soft: "bg-pink-50", dot: "bg-pink-500", text: "text-pink-700" },
  sun: { bar: "bg-sun", soft: "bg-paper-alt", dot: "bg-sun", text: "text-ink" },
  mint: { bar: "bg-mint", soft: "bg-mint/10", dot: "bg-mint", text: "text-ink" },
};

export type DemoAccent = keyof typeof accentMap;

/** Phone/app-style card that frames each product demo — polaroid/sticker
 *  treatment (washi tape, flat "glued" shadow, slight rotation), never a
 *  dark tech mockup. */
export function DemoFrame({
  label,
  accent,
  rotate = -2,
  children,
}: {
  label: string;
  accent: DemoAccent;
  rotate?: number;
  children: ReactNode;
}) {
  const a = accentMap[accent];
  return (
    <div className="relative mx-auto w-full max-w-sm" style={{ transform: `rotate(${rotate}deg)` }}>
      <WashiTape
        color={accent === "mint" ? "mint" : accent === "sun" ? "sun" : accent}
        rotate={rotate < 0 ? 5 : -5}
        className="-top-3 left-1/2 -translate-x-1/2"
      />
      <StickerStar
        color={accent === "blue" ? "pink" : accent === "pink" ? "sun" : "blue"}
        className="-right-3 -top-4 h-7 w-7"
        rotate={rotate < 0 ? 14 : -14}
      />
      <div className="overflow-hidden rounded-2xl border-2 border-ink/10 bg-white shadow-scrap">
        <div className={`flex items-center gap-2 px-4 py-3 ${a.soft}`}>
          <span className="h-2.5 w-2.5 rounded-full bg-pink-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-sun" />
          <span className="h-2.5 w-2.5 rounded-full bg-mint" />
          <span className={`ml-2 font-sans text-xs font-semibold uppercase tracking-wide ${a.text}`}>
            {label}
          </span>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}

function TypingDots() {
  return (
    <span className="inline-flex items-center gap-1 rounded-2xl bg-blue-50 px-3 py-2">
      {[0, 0.15, 0.3].map((d) => (
        <span
          key={d}
          className="animate-typing-dot h-1.5 w-1.5 rounded-full bg-blue-400"
          style={{ animationDelay: `${d}s` }}
        />
      ))}
    </span>
  );
}

export function ChatDemo() {
  return (
    <div className="flex h-56 flex-col justify-end gap-2 overflow-hidden">
      <div className="animate-chat-bubble-1 flex justify-start">
        <p className="max-w-[75%] rounded-2xl rounded-bl-sm bg-blue-50 px-3 py-2 text-sm text-ink">
          Vocês têm horário disponível essa semana?
        </p>
      </div>
      <div className="animate-typing-window-1 flex justify-end">
        <TypingDots />
      </div>
      <div className="animate-chat-bubble-2 flex justify-end">
        <p className="max-w-[75%] rounded-2xl rounded-br-sm bg-blue-600 px-3 py-2 text-sm text-white">
          Temos sim! Consigo te encaixar amanhã às 14h. Fecho pra você?
        </p>
      </div>
      <div className="animate-chat-bubble-3 flex justify-start">
        <p className="max-w-[75%] rounded-2xl rounded-bl-sm bg-blue-50 px-3 py-2 text-sm text-ink">
          Perfeito, pode fechar!
        </p>
      </div>
      <div className="animate-typing-window-2 flex justify-end">
        <TypingDots />
      </div>
      <div className="animate-chat-bubble-4 flex justify-end">
        <p className="max-w-[75%] rounded-2xl rounded-br-sm bg-blue-600 px-3 py-2 text-sm text-white">
          Agendado! Te mando um lembrete um pouco antes 🙂
        </p>
      </div>
    </div>
  );
}

export function SiteDemo() {
  const rows = [
    { w: "60%", delay: "0s", h: "h-4" },
    { w: "90%", delay: "0.3s", h: "h-3" },
    { w: "75%", delay: "0.6s", h: "h-3" },
    { w: "40%", delay: "0.9s", h: "h-8" },
  ];
  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {rows.map((r, i) => (
          <div key={i} className="flex-1 overflow-hidden">
            <div
              className={`animate-row-grow ${r.h} rounded-full bg-blue-100`}
              style={{ maxWidth: r.w, animationDelay: r.delay }}
            />
          </div>
        ))}
      </div>
      <div className="space-y-2">
        {["94%", "100%", "70%"].map((w, i) => (
          <div key={i} className="h-2.5 overflow-hidden rounded-full bg-paper-alt">
            <div
              className="animate-row-grow h-full rounded-full bg-pink-200"
              style={{ maxWidth: w, animationDelay: `${0.4 + i * 0.3}s` }}
            />
          </div>
        ))}
      </div>

      <div className="flex items-end justify-between rounded-xl bg-blue-50 p-3">
        <div>
          <p className="font-hand text-sm text-ink/70">visitantes hoje</p>
          <p className="font-display text-lg text-blue-700">em alta ↑</p>
        </div>
        <div className="flex h-14 items-end gap-1.5">
          {[0, 0.3, 0.6, 0.9].map((d) => (
            <span
              key={d}
              className="animate-bar-grow w-2.5 rounded-full bg-blue-500"
              style={{ animationDelay: `${d}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function AutomationDemo() {
  const blocks = ["Formulário", "Automação", "CRM"];
  return (
    <div className="py-4">
      <div className="relative flex items-center justify-between">
        {blocks.map((b, i) => (
          <div key={b} className="relative z-10 flex flex-col items-center gap-2">
            <div
              className="animate-block-pulse flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-white shadow-scrap"
              style={{ animationDelay: `${i * 0.9}s` }}
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8}>
                <path d="M5 5.5h4v4H5v-4Zm10 10h4v4h-4v-4ZM7 9.5v3a3 3 0 0 0 3 3h1M17 15.5v-3a3 3 0 0 0-3-3h-1M9.5 5.5h5v4h-5v-4Z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-wide text-ink/60">{b}</p>
          </div>
        ))}

        <div className="absolute left-7 right-7 top-7 flex justify-between" aria-hidden="true">
          <span className="relative h-0.5 flex-1 bg-blue-100">
            <span
              className="animate-dot-travel absolute -top-[3px] h-2 w-2 rounded-full bg-pink-500"
              style={{ animationDelay: "0s" }}
            />
          </span>
          <span className="relative h-0.5 flex-1 bg-blue-100">
            <span
              className="animate-dot-travel absolute -top-[3px] h-2 w-2 rounded-full bg-pink-500"
              style={{ animationDelay: "1.3s" }}
            />
          </span>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {["Sem código", "Roda sozinho", "Sem retrabalho"].map((t) => (
          <span key={t} className="rounded-full bg-blue-50 px-3 py-1 font-sans text-xs font-semibold text-blue-700">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export function CrmDemo() {
  const columns = ["Novo lead", "Contato", "Proposta", "Fechado"];
  return (
    <div>
      <div className="grid grid-cols-4 gap-1.5">
        {columns.map((c) => (
          <div key={c} className="rounded-lg bg-blue-50 px-1.5 py-2 text-center">
            <p className="font-sans text-[9.5px] font-semibold uppercase leading-tight tracking-wide text-blue-700">
              {c}
            </p>
          </div>
        ))}
      </div>

      <div className="relative mt-3 h-16">
        <div className="grid h-full grid-cols-4 gap-1.5">
          {columns.map((c) => (
            <div key={c} className="rounded-lg border-2 border-dashed border-ink/10" />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 px-1.5 py-1.5">
          <div className="animate-kanban-move h-full w-full rounded-lg border-2 border-pink-400 bg-white p-2 shadow-scrap">
            <p className="font-hand text-sm leading-none text-ink">Lead novo</p>
            <p className="mt-1 font-sans text-[9px] uppercase tracking-wide text-ink/50">em andamento</p>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between rounded-xl bg-paper-alt p-3">
        <p className="font-hand text-sm text-ink/70">nada se perde entre uma etapa e outra</p>
        <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0 text-mint" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}
