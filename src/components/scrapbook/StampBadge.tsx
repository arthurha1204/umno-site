export function StampBadge({
  children,
  rotate = -8,
  className = "",
}: {
  children: React.ReactNode;
  rotate?: number;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-center justify-center rounded-full border-[3px] border-dashed border-pink-500 px-4 py-2 text-center font-display text-xs uppercase tracking-wide text-pink-600 ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </div>
  );
}
