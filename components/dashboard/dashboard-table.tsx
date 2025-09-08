"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/data-table";
import { invoiceColumns, invoiceDataList } from "./dashboard-type";

export const DashboardInvoiceTable = () => {
  const router = useRouter();

  const recentInvoices = invoiceDataList.slice(0, 5);

  return (
    <Card className="mb-5 pt-5">
      {invoiceDataList && invoiceDataList.length > 0 && (
        <div className="flex items-center justify-between px-5">
          <h2 className="flex font-bold">Recent Invoices</h2>
          <Button
            variant="outline"
            className="text-indigo-700 font-semibold"
            onClick={() => router.push("/invoices")}
          >
            View All
          </Button>
        </div>
      )}

      <DataTable
        columns={invoiceColumns}
        data={recentInvoices ?? []}
        showPagination={false}
        emptyComponent={
          <div className="flex flex-col items-center gap-1 justify-center h-60">
            <p className="font-semibold text-2xl">No invoices listed yet</p>
            <p className="text-secondary font-light">
              Your invoices will appear here
            </p>
          </div>
        }
      />
    </Card>
  );
};
