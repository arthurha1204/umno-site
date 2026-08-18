"use client";

import { useMemo, useState } from "react";
import { products } from "@/data/products";
import { solutions } from "@/data/solutions";
import { plans } from "@/data/plans";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/Button";
import { PostIt } from "@/components/scrapbook/PostIt";

const allServices = [
  ...products.map((p) => ({ id: p.id, name: p.name, type: "produto" as const })),
  ...solutions.map((s) => ({ id: s.id, name: s.name, type: "solucao" as const })),
  ...plans.map((p) => ({ id: p.id, name: p.name, type: "plano" as const })),
];

type Status = "idle" | "submitting" | "success" | "error";

export function AgendarForm() {
  const { items, toggleItem, hasItem, clear } = useCart();
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    email: "",
    company: "",
    message: "",
  });

  const selectedNames = useMemo(() => items.map((i) => i.name), [items]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          services: selectedNames,
        }),
      });
      if (!res.ok) throw new Error("Falha ao enviar");
      setStatus("success");
      clear();
      setForm({ name: "", whatsapp: "", email: "", company: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto max-w-lg bg-white p-10 text-center shadow-scrap">
        <PostIt color="mint" rotate={-2} className="mx-auto w-fit">
          recebido! ✓
        </PostIt>
        <h2 className="mt-6 font-display text-2xl uppercase text-ink">
          Sua mensagem chegou até a gente
        </h2>
        <p className="mt-3 text-ink/70">
          Vamos analisar o que você precisa e entrar em contato em breve pelo
          WhatsApp ou e-mail informado.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
      <form onSubmit={handleSubmit} className="space-y-5 bg-white p-7 shadow-scrap sm:p-9">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Nome">
            <input
              required
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="input"
              placeholder="Seu nome"
            />
          </Field>
          <Field label="WhatsApp">
            <input
              required
              value={form.whatsapp}
              onChange={(e) => setForm((f) => ({ ...f, whatsapp: e.target.value }))}
              className="input"
              placeholder="(11) 90000-0000"
            />
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="E-mail">
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              className="input"
              placeholder="voce@empresa.com"
            />
          </Field>
          <Field label="Empresa">
            <input
              value={form.company}
              onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
              className="input"
              placeholder="Nome da sua empresa"
            />
          </Field>
        </div>

        <Field label="Serviços de interesse">
          <div className="flex flex-wrap gap-2">
            {allServices.map((service) => {
              const selected = hasItem(service.id);
              return (
                <button
                  type="button"
                  key={service.id}
                  onClick={() => toggleItem(service)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-display uppercase tracking-wide transition-colors ${
                    selected
                      ? "bg-blue-600 text-white"
                      : "border-2 border-ink/20 text-ink/70 hover:border-blue-400"
                  }`}
                >
                  {service.name}
                </button>
              );
            })}
          </div>
        </Field>

        <Field label="Mensagem">
          <textarea
            value={form.message}
            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
            className="input min-h-28 resize-y"
            placeholder="Conta um pouco sobre o que você precisa..."
          />
        </Field>

        {status === "error" && (
          <p className="text-sm text-pink-600">
            Não conseguimos enviar agora. Tenta de novo em instantes.
          </p>
        )}

        <Button type="submit" variant="pink" className="w-full sm:w-auto">
          {status === "submitting" ? "Enviando..." : "Enviar e agendar conversa"}
        </Button>
      </form>

      <aside className="h-fit -rotate-1 border-2 border-dashed border-ink/25 bg-paper-alt p-6">
        <p className="font-hand text-2xl text-pink-600">seu pedido até agora</p>
        {items.length === 0 ? (
          <p className="mt-3 text-sm text-ink/60">
            Nenhum item selecionado ainda. Escolha produtos, soluções ou
            planos aqui ou volte para a home.
          </p>
        ) : (
          <ul className="mt-4 space-y-2">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between gap-2 bg-white px-3 py-2 text-sm shadow-scrap"
              >
                {item.name}
                <button
                  type="button"
                  onClick={() => toggleItem(item)}
                  className="text-ink/40 hover:text-pink-600"
                  aria-label={`Remover ${item.name}`}
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}
      </aside>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-display text-xs uppercase tracking-wide text-ink/60">
        {label}
      </span>
      {children}
    </label>
  );
}
