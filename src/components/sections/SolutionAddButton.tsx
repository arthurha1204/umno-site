"use client";

import { useCart } from "@/context/CartContext";
import type { Solution } from "@/types";

export function SolutionAddButton({ solution }: { solution: Solution }) {
  const { toggleItem, hasItem } = useCart();
  const selected = hasItem(solution.id);

  return (
    <button
      onClick={() => toggleItem({ id: solution.id, name: solution.name, type: "solucao" })}
      className={`rounded-full px-6 py-3 font-display text-sm uppercase tracking-wide transition-transform hover:-translate-y-0.5 ${
        selected ? "animate-pop bg-blue-600 text-white" : "bg-pink-500 text-white shadow-scrap-pink hover:bg-pink-400"
      }`}
    >
      {selected ? "Adicionado ao pedido ✓" : "Adicionar ao pedido"}
    </button>
  );
}
