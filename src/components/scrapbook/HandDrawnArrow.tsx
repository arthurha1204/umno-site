export function HandDrawnArrow({
  className = "h-16 w-16 text-ink",
  rotate = 0,
  flip = false,
}: {
  className?: string;
  rotate?: number;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`pointer-events-none ${className}`}
      style={{
        transform: `rotate(${rotate}deg) ${flip ? "scaleX(-1)" : ""}`,
      }}
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 20c15 5 55 5 68 40" />
      <path d="M60 50l17 12-3-20" />
    </svg>
  );
}
