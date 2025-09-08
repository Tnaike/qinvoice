import DashboardCard from ".";
import { LucideIcon } from "lucide-react";

interface DashboardCardItemProps {
  title: string;
  value: string;
  icon: LucideIcon;
}

export default function DashboardCardItem({
  title,
  value,
  icon: Icon,
}: DashboardCardItemProps) {
  return (
    <DashboardCard>
      <div className="flex flex-col w-full items-center justify-between gap-2 py-2">
        <div className="flex items-center justify-center bg-indigo-50 size-12 rounded-full">
          <Icon size={24} className="text-indigo-700" />
        </div>
        <div className="flex-col w-full text-center space-y-0.5">
          <h2 className="text-sm sm:text-base font-semibold text-slate-600">
            {title}
          </h2>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </div>
    </DashboardCard>
  );
}
