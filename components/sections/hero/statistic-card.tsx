interface StatisticCardProps {
  value: string;
  label: string;
}

export function StatisticCard({ value, label }: StatisticCardProps) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-border
        bg-card
        p-8
    "
    >
      <h3
        className="
        text-5xl
        font-black
        text-card-foreground
    "
      >
        {value}
      </h3>
      <p
        className="
        mt-2
        text-sm
        uppercase
        tracking-wide
        text-muted-foreground
    "
      >
        {label}
      </p>
    </div>
  );
}
