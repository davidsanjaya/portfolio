import { Card } from "@/components/shared/card/card";

interface StatisticCardProps {
  value: string;
  label: string;
}

export function StatisticCard({ value, label }: StatisticCardProps) {
  return (
    <Card padding="md" variant="ghost">
      <h3
        className="
        text-5xl
        font-black
        text-white
    "
      >
        {value}
      </h3>
      <p
        className="
        mt-2
        text-sm
        uppercase
        tracking-[0.2em]
        text-muted-foreground
    "
      >
        {label}
      </p>
    </Card>
  );
}
