"use client";

import React from "react";
import { ReceiptText, Users, BadgeCheck, Hourglass, Plus } from "lucide-react";
import DashboardCardItem from "@/components/Layout/DashboardCard/DashboardCardItem";
import PageHeader from "@/components/Layout/dashboard-page-header";
import { Button } from "@/components/ui/button";
import { DashboardInvoiceTable } from "./dashboard-table";

const dashboardStats = [
  {
    title: "Total Invoices",
    value: "12,450",
    icon: ReceiptText,
  },
  {
    title: "Total Clients",
    value: "1,240",
    icon: Users,
  },
  {
    title: "Paid Invoices",
    value: "11,450",
    icon: BadgeCheck,
  },
  {
    title: "Pending Invoices",
    value: "1,000",
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
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 w-full gap-5">
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
