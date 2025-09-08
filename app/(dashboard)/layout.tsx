import React, { Suspense } from "react";
import Spinner from "@/components/spinner";
import DashboardLayout from "@/components/Layout/dashboardLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<Spinner />}>
      <DashboardLayout>{children}</DashboardLayout>
    </Suspense>
  );
}
