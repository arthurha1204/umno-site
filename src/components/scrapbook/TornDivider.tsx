export function TornDivider({
  color = "bg-paper",
  flip = false,
}: {
  color?: string;
  flip?: boolean;
}) {
  return (
    <div
      className={`h-10 w-full ${color} ${
        flip ? "torn-edge-bottom rotate-180" : "torn-edge-bottom"
      }`}
      aria-hidden="true"
    />
  );
}
