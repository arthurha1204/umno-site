"use client";

import { useMemo, useState } from "react";
import { automations, automationCategories } from "@/data/automations";
import type { AutomationCategory } from "@/types";
import { Icon } from "@/components/ui/Icon";
import { categoryColorClasses } from "@/lib/category-colors";

export function AutomationsExplorer({ limit }: { limit?: number }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<AutomationCategory | "todas">("todas");
  const [expanded, setExpanded] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return automations.filter((a) => {
      const matchesCategory = category === "todas" || a.category === category;
      const matchesQuery =
        !q || a.name.toLowerCase().includes(q) || a.description.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  const showAll = expanded || !limit;
  const visible = showAll ? filtered : filtered.slice(0, limit);
  const hasMore = !showAll && filtered.length > visible.length;

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar automação... ex: cobrança, lead, WhatsApp"
          className="w-full max-w-sm border-2 border-ink/20 bg-white px-4 py-2.5 text-sm outline-none focus:border-blue-500 sm:max-w-xs"
        />

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setCategory("todas")}
            className={`rounded-full px-3.5 py-1.5 text-xs font-display uppercase tracking-wide ${
              category === "todas" ? "bg-blue-600 text-white" : "border-2 border-ink/20 text-ink/70"
            }`}
          >
            Todas
          </button>
          {automationCategories.map((c) => (
            <button
              key={c.id}
              onClick={() => setCategory(c.id)}
              className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-display uppercase tracking-wide ${
                category === c.id ? "bg-blue-600 text-white" : "border-2 border-ink/20 text-ink/70"
              }`}
            >
              <span className={`h-2 w-2 rounded-full ${categoryColorClasses[c.color].dot}`} />
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((a) => {
          const cat = automationCategories.find((c) => c.id === a.category)!;
          const colors = categoryColorClasses[cat.color];
          return (
            <div key={a.id} className="border-2 border-ink/10 bg-white p-5">
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full ${colors.bg} ${colors.icon}`}
              >
                <Icon name={cat.icon} className="h-4 w-4" />
              </div>
              <span className="mt-3 block font-sans text-xs font-semibold uppercase tracking-wide text-ink/45">
                {cat.label}
              </span>
              <h3 className="mt-1 font-display text-base uppercase leading-tight text-ink">
                {a.name}
              </h3>
              <p className="mt-2 text-sm text-ink/65">{a.description}</p>
            </div>
          );
        })}

        {filtered.length === 0 && (
          <p className="col-span-full py-10 text-center font-hand text-xl text-ink/50">
            Nenhuma automação encontrada — tenta outro termo de busca.
          </p>
        )}
      </div>

      {hasMore && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setExpanded(true)}
            className="rounded-full border-2 border-ink bg-paper px-6 py-3 font-display text-sm uppercase tracking-wide text-ink transition-transform hover:-translate-y-0.5 hover:rotate-1 hover:bg-blue-50"
          >
            Ver catálogo completo ({filtered.length})
          </button>
        </div>
      )}
    </div>
  );
}
