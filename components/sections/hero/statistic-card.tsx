interface StatisticCardProps {
  value: string;
  label: string;
}

export function StatisticCard({ value, label }: StatisticCardProps) {
  return (
    <div className="rounded-xl border p-6">
      <h3 className="text-white text-2xl font-bold">{value}</h3>
      <p className="text-white text-xl">{label}</p>
    </div>
  );
}
