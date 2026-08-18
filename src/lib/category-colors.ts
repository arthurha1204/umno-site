import type { CategoryColor } from "@/data/automations";

export const categoryColorClasses: Record<
  CategoryColor,
  { bg: string; icon: string; dot: string }
> = {
  blue: { bg: "bg-blue-100", icon: "text-blue-700", dot: "bg-blue-600" },
  pink: { bg: "bg-pink-100", icon: "text-pink-600", dot: "bg-pink-500" },
  sun: { bg: "bg-sun/25", icon: "text-ink", dot: "bg-sun" },
  mint: { bg: "bg-mint/25", icon: "text-ink", dot: "bg-mint" },
  violet: { bg: "bg-violet/25", icon: "text-violet", dot: "bg-violet" },
  coral: { bg: "bg-coral/25", icon: "text-coral", dot: "bg-coral" },
};
