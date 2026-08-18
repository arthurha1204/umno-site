import type { ReactNode } from "react";

const colorMap = {
  sun: "bg-sun",
  pink: "bg-pink-200",
  blue: "bg-blue-100",
  mint: "bg-mint/70",
};

export function PostIt({
  children,
  color = "sun",
  rotate = -4,
  className = "",
}: {
  children: ReactNode;
  color?: keyof typeof colorMap;
  rotate?: number;
  className?: string;
}) {
  return (
    <div
      className={`w-fit ${colorMap[color]} px-4 py-3 font-hand text-lg leading-tight text-ink shadow-scrap ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </div>
  );
}
