import { Suspense } from "react";
import { Metadata } from "next";
import Dashboard from "@/components/dashboard";
import Spinner from "@/components/spinner";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Your dashboard overview",
};

export default function DashboardPage() {
  return (
    <Suspense fallback={<Spinner />}>
      <Dashboard />
    </Suspense>
  );
}
