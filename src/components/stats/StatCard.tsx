import { TrendingDown, TrendingUp } from "lucide-react";

interface Props {
  label: string;
  icon: React.ReactNode;
  percentage: number;
  value: string;
}

const StatCard = ({ label, icon, percentage, value }: Props) => {
  const isPositive = percentage >= 0;
  const TrendIcon = isPositive ? TrendingUp : TrendingDown;

  return (
    <div className="p-6 rounded-xl backdrop-blur-lg bg-white/10">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-white/50">{label}</h3>
        {icon}
      </div>
      <p className="text-2xl font-bold mb-2">{value}</p>
      <div className="flex items-center text-white/60">
        <TrendIcon className={`w-4 h-4 mr-1`} />
        <p className="text-sm">
          {isPositive ? "+" : ""}
          {percentage.toFixed(2)}%
        </p>
      </div>
    </div>
  );
};

export default StatCard;
