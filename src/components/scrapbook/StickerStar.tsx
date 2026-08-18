const colorMap = {
  blue: "#2258ff",
  pink: "#f92385",
  sun: "#ffc93c",
  white: "#ffffff",
};

export function StickerStar({
  color = "sun",
  className = "",
  rotate = 0,
}: {
  color?: keyof typeof colorMap;
  className?: string;
  rotate?: number;
}) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={`pointer-events-none absolute drop-shadow-sm ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
      aria-hidden="true"
    >
      <path
        d="M20 1l4.4 12.6L37 15l-10 8.6L30.4 39 20 31.2 9.6 39l3.4-15.4L3 15l12.6-1.4L20 1z"
        fill={colorMap[color]}
      />
    </svg>
  );
}
