import { StatisticCard } from "./statistic-card";
import { Profile } from "@/types/profile";

interface HeroStatsProps {
  statistics: Profile["statistics"];
}

export function HeroStats({ statistics }: HeroStatsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-3 mt-4">
      {statistics.map((stat) => (
        <StatisticCard key={stat.label} value={stat.value} label={stat.label} />
      ))}
    </div>
  );
}
