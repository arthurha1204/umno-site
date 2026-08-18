import Link from "next/link";
import type { ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-display text-sm uppercase tracking-wide transition-transform hover:-translate-y-0.5 hover:rotate-1";

const variants = {
  primary: `${base} bg-blue-600 text-white shadow-scrap hover:bg-blue-500`,
  pink: `${base} bg-pink-500 text-white shadow-scrap-pink hover:bg-pink-400`,
  outline: `${base} border-2 border-ink bg-paper text-ink hover:bg-blue-50`,
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: {
  href?: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const cls = `${variants[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
