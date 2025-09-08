"use client";

import React from "react";
import { ReceiptText, Users, BadgeCheck, Hourglass } from "lucide-react";
import DashboardCardItem from "@/components/Layout/DashboardCard/DashboardCardItem";

const dashboardStats = [
  {
    title: "Total Invoices",
    value: "12,450",
    icon: ReceiptText,
  },
  {
    title: "Total Customers",
    value: "1,240",
    icon: Users,
  },
  {
    title: "Paid Invoices",
    value: "11,450",
    icon: BadgeCheck,
  },
  {
    title: "Unpaid Invoices",
    value: "1,000",
    icon: Hourglass,
  },
];

export default function Dashboard() {
  return (
    <div className="flex py-4 px-2">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 w-full gap-6">
        {dashboardStats.map((stat) => (
          <DashboardCardItem
            key={stat.title}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
          />
        ))}
      </div>
    </div>
  );
}
