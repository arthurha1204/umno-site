"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/Button";

const links = [
  { href: "/#solucoes", label: "Soluções" },
  { href: "/#planos", label: "Planos" },
  { href: "/#catalogo", label: "Catálogo" },
  { href: "/#faq", label: "FAQ" },
];

export function Header() {
  const { items } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-blue-900/30 bg-blue-600">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-1">
          <Image src="/logo-um-no-white.png" alt="Um" width={40} height={29} className="h-8 w-auto" priority />
          <span className="font-sans text-2xl font-extrabold uppercase leading-none tracking-tight text-sun">
            Nó
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="link-underline font-sans text-sm font-semibold uppercase tracking-wide text-white/85 hover:text-sun"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button href="/agendar" variant="pink" className="max-sm:hidden">
            Agendar conversa
            {items.length > 0 && (
              <span
                key={items.length}
                className="animate-pop ml-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs text-pink-600"
              >
                {items.length}
              </span>
            )}
          </Button>
          <button
            className="text-white md:hidden"
            aria-label="Abrir menu"
            onClick={() => setOpen((o) => !o)}
          >
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t-2 border-blue-900/30 bg-blue-700 px-5 py-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 font-sans text-base font-semibold uppercase tracking-wide text-white/85"
            >
              {link.label}
            </Link>
          ))}
          <Button href="/agendar" variant="pink" className="mt-2 w-fit">
            Agendar conversa
          </Button>
        </nav>
      )}
    </header>
  );
}
