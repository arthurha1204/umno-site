const paths: Record<string, React.ReactNode> = {
  gear: (
    <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm8.4-3.5a8.4 8.4 0 0 0-.15-1.55l2.1-1.64-2-3.46-2.48 1a8.5 8.5 0 0 0-2.68-1.55L14.8 2h-4l-.4 2.8a8.5 8.5 0 0 0-2.68 1.55l-2.48-1-2 3.46 2.1 1.64A8.4 8.4 0 0 0 5.2 12c0 .53.05 1.05.15 1.55l-2.1 1.64 2 3.46 2.48-1a8.5 8.5 0 0 0 2.68 1.55l.4 2.8h4l.4-2.8a8.5 8.5 0 0 0 2.68-1.55l2.48 1 2-3.46-2.1-1.64c.1-.5.15-1.02.15-1.55Z" />
  ),
  chat: (
    <path d="M4 5.5h16A1.5 1.5 0 0 1 21.5 7v9a1.5 1.5 0 0 1-1.5 1.5H9l-4.5 4v-4H4A1.5 1.5 0 0 1 2.5 16V7A1.5 1.5 0 0 1 4 5.5Z" />
  ),
  site: (
    <path d="M3 5.5h18v13H3v-13Zm0 4h18M7.5 5.5v4" />
  ),
  palette: (
    <path d="M12 3.5a8.5 8.5 0 1 0 0 17c1.1 0 1.8-.9 1.8-1.9 0-.5-.2-.9-.5-1.3-.3-.3-.5-.7-.5-1.2 0-1 .8-1.8 1.8-1.8H16a4.5 4.5 0 0 0 4.5-4.5c0-3.9-3.8-6.3-8.5-6.3Zm-5 8a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4Zm3-4a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4Zm5 0a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4Zm2.8 4a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4Z" />
  ),
  users: (
    <path d="M9 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm7-1.5a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5ZM2.5 19.5c.6-3.2 3.2-5.5 6.5-5.5s5.9 2.3 6.5 5.5M14.5 14.3c2.7.3 4.8 2.4 5.3 5.2" />
  ),
  headset: (
    <path d="M4 13v-1a8 8 0 0 1 16 0v1M4 13v4a2 2 0 0 0 2 2h1v-6H5a1 1 0 0 0-1 1Zm16 0v4a2 2 0 0 1-2 2h-1v-6h2a1 1 0 0 1 1 1Zm-3 6a3 3 0 0 1-3 2h-1" />
  ),
  sparkles: (
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2 2M16 16l2 2M6 18l2-2M16 8l2-2" />
  ),
  calendar: (
    <path d="M4 5.5h16v15H4v-15Zm0 5h16M8 3v4M16 3v4M8 14h.01M12 14h.01M16 14h.01M8 17.5h.01M12 17.5h.01M16 17.5h.01" />
  ),
  target: (
    <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0-4.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM12 3v3M12 18v3M3 12h3M18 12h3" />
  ),
  chart: (
    <path d="M4 20V4M4 20h16M8 17v-6M12.5 17V8M17 17v-9" />
  ),
  checklist: (
    <path d="M9 6h11M9 12h11M9 18h11M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2" />
  ),
  workflow: (
    <path d="M5 5.5h4v4H5v-4Zm10 10h4v4h-4v-4ZM7 9.5v3a3 3 0 0 0 3 3h1M17 15.5v-3a3 3 0 0 0-3-3h-1M9.5 5.5h5v4h-5v-4Z" />
  ),
};

export function Icon({
  name,
  className = "h-6 w-6",
}: {
  name: keyof typeof paths | string;
  className?: string;
}) {
  const d = paths[name] ?? paths.sparkles;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {d}
    </svg>
  );
}
