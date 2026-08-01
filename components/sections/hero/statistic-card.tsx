import { Card } from "@/components/shared/card/card";

interface StatisticCardProps {
  value: string;
  label: string;
}

export function StatisticCard({ value, label }: StatisticCardProps) {
  return (
    <Card padding="md" hover variant="outlined">
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
    </Card>
  );
}
