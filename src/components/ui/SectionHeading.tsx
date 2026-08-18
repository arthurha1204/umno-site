import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && (
        <span className="mb-2 inline-block -rotate-2 font-hand text-xl text-pink-600">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-4xl uppercase leading-[1.05] tracking-tight text-ink sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl text-lg text-ink/70 ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
