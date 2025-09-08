import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  children: ReactNode;
  className?: string;
}

export default function DashboardCard({
  children,
  className,
}: DashboardCardProps) {
  return (
    <div
      className={cn(
        `flex bg-white w-full p-5 py-3 shadow-[0_1px_20px_0_rgb(0_0_0_/_10%)] rounded-xl overflow-hidden border border-slate-200`,
        className
      )}
    >
      {children}
    </div>
  );
}
