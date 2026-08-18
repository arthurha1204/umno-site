export function KnotIcon({
  className = "h-12 w-12 text-ink",
  rotate = 0,
}: {
  className?: string;
  rotate?: number;
}) {
  return (
    <svg
      viewBox="0 0 160 80"
      className={`pointer-events-none ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
      fill="none"
      stroke="currentColor"
      strokeWidth={5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 40c22 0 30-22 50-18 18 4 18 24 0 26-16 2-18-18 2-22 20-4 36 2 42 14" />
      <path d="M98 40h58" />
    </svg>
  );
}
