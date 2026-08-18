const colorMap = {
  blue: "bg-blue-300/70",
  pink: "bg-pink-300/70",
  sun: "bg-sun/70",
  mint: "bg-mint/60",
};

export function WashiTape({
  color = "blue",
  rotate = -4,
  className = "",
  width = "6rem",
}: {
  color?: keyof typeof colorMap;
  rotate?: number;
  className?: string;
  width?: string;
}) {
  return (
    <span
      className={`pointer-events-none absolute h-6 shadow-sm ${colorMap[color]} ${className}`}
      style={{
        width,
        transform: `rotate(${rotate}deg)`,
        backgroundImage:
          "repeating-linear-gradient(45deg, rgba(255,255,255,0.35) 0, rgba(255,255,255,0.35) 4px, transparent 4px, transparent 10px)",
      }}
    />
  );
}
