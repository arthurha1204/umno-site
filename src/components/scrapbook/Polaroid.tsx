import type { ReactNode } from "react";
import { WashiTape } from "./WashiTape";

const bgMap = [
  "from-blue-400 to-blue-600",
  "from-pink-400 to-pink-600",
  "from-blue-300 to-pink-400",
  "from-sun to-pink-400",
];

export function Polaroid({
  caption,
  icon,
  rotate = -3,
  variant = 0,
  tape = true,
  className = "",
}: {
  caption: string;
  icon?: ReactNode;
  rotate?: number;
  variant?: number;
  tape?: boolean;
  className?: string;
}) {
  const bg = bgMap[variant % bgMap.length];
  return (
    <div
      className={`relative w-fit bg-white p-3 pb-5 shadow-scrap ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {tape && (
        <WashiTape
          color={variant % 2 === 0 ? "pink" : "sun"}
          rotate={rotate < 0 ? 6 : -6}
          className="-top-3 left-1/2 -translate-x-1/2"
        />
      )}
      <div
        className={`flex h-32 w-32 items-center justify-center bg-gradient-to-br text-white sm:h-36 sm:w-36 ${bg}`}
      >
        {icon}
      </div>
      <p className="mt-3 text-center font-hand text-xl leading-none text-ink">
        {caption}
      </p>
    </div>
  );
}
