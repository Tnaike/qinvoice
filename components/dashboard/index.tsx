"use client";

import React from "react";
import { ReceiptText, Users, BadgeCheck, Hourglass, Plus } from "lucide-react";
import DashboardCardItem from "@/components/Layout/DashboardCard/DashboardCardItem";
import PageHeader from "@/components/Layout/dashboard-page-header";
import { Button } from "@/components/ui/button";
import { DashboardInvoiceTable } from "./dashboard-table";
import { formatAmount } from "@/lib/utils";

const dashboardStats = [
  {
    title: "Total Invoices",
    value: formatAmount(12450, 0),
    icon: ReceiptText,
  },
  {
    title: "Total Clients",
    value: formatAmount(1240, 0),
    icon: Users,
  },
  {
    title: "Paid Invoices",
    value: formatAmount(11450, 0),
    icon: BadgeCheck,
  },
  {
    title: "Pending Invoices",
    value: formatAmount(1000, 0),
    icon: Hourglass,
  },
];

export default function Dashboard() {
  return (
    <div className="flex flex-col space-y-6 py-3">
      <PageHeader
        title="Dashboard"
        description="Welcome back! Here's an overview of your invoices."
        rightSection={
          <Button onClick={() => console.log("Create invoice")}>
            <Plus /> Create Invoice
          </Button>
        }
      />
      <div className="grid grid-cols-2 lg:grid-cols-4 w-full gap-3 sm:gap-5">
        {dashboardStats.map((stat) => (
          <DashboardCardItem
            key={stat.title}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
          />
        ))}
      </div>

      <DashboardInvoiceTable />
    </div>
  );
}
