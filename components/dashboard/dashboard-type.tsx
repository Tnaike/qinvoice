import { useRouter } from "next/navigation";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { InvoiceData } from "@/types/invoice-type";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Download, Ellipsis, Eye } from "lucide-react";
import { formatDate, formatMoney } from "@/lib/utils";

export const invoiceColumns: ColumnDef<InvoiceData>[] = [
  {
    accessorKey: "clientName",
    header: "Client Name",
    cell: ({ row }) => (
      <div className="flex items-center gap-x-4">
        <div className="flex flex-col justify-between">
          <p className="font-semibold">{row.original?.clientName ?? "-"}</p>

          <p className="text-gray-500 text-sm">
            Invoice{" "}
            {row.original?.invoiceNumber
              ? `#${row.original.invoiceNumber}`
              : "-"}
          </p>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Created Date",
    cell: ({ row }) => (
      <p className="text-gray-900">
        {formatDate(row.original?.createdAt, "fullDate") ?? "-"}
      </p>
    ),
  },
  {
    accessorKey: "dueDate",
    header: "Due Date",
    cell: ({ row }) => (
      <p className="text-gray-900">
        {formatDate(row.original?.dueDate, "fullDate") ?? "-"}
      </p>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge className="capitalize" variant="default">
        {row.original?.status}
      </Badge>
    ),
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      return (
        <p className="text-gray-900 font-bold">
          {formatMoney(
            row.original.amount,
            row.original?.transactionCurrency
          ) ?? "-"}
        </p>
      );
    },
  },
  {
    header: "Action",
    cell: ({ row }) => {
      const router = useRouter();
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="focus:!outline-none focus:!ring-0 focus:!border-transparent active:!outline-none active:!ring-0 active:!border-transparent !ring-offset-0 !border-none"
            >
              <Ellipsis size={18} />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-lg shadow-lg p-2 w-[150px]"
          >
            <DropdownMenuItem
              className="border-b border-gray-200 last:border-0"
              onClick={() =>
                router.push(`/invoices/details/${row.original?._id}`)
              }
            >
              <Eye size={18} /> View Details
            </DropdownMenuItem>
            <DropdownMenuItem
              className="border-b border-gray-200 last:border-0"
              onClick={() => {}}
            >
              <Download size={18} /> Download
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export const invoiceDataList: InvoiceData[] = [
  {
    _id: "1462hw939asd929",
    clientName: "John Doe",
    clientEmail: "john.doe@gmail.com",
    invoiceNumber: "001",
    createdAt: "2025-07-01T10:36:15.123Z",
    dueDate: "2025-07-15T10:36:15.123Z",
    amount: 150000,
    transactionCurrency: "USD",
    status: "Paid",
  },
  {
    _id: "1462hw9357hd930",
    clientName: "Kate Smith",
    clientEmail: "kate.smith@gmail.com",
    invoiceNumber: "200124",
    createdAt: "2025-07-02T09:12:45.123Z",
    dueDate: "2025-07-16T09:12:45.123Z",
    amount: 210000,
    transactionCurrency: "USD",
    status: "Paid",
  },
  {
    _id: "1472hw9357wz931",
    clientName: "Rasheed Balogun",
    clientEmail: "rash.balogun@gmail.com",
    invoiceNumber: "200123",
    createdAt: "2025-07-02T11:20:45.123Z",
    dueDate: "2025-07-16T11:20:45.123Z",
    amount: 2650600,
    transactionCurrency: "NGN",
    status: "Pending",
  },
  {
    _id: "1472hw9357wz932",
    clientName: "Emily Johnson",
    clientEmail: "emily.johnson@yahoo.com",
    invoiceNumber: "200125",
    createdAt: "2025-07-03T14:45:30.123Z",
    dueDate: "2025-07-17T14:45:30.123Z",
    amount: 98000.85,
    transactionCurrency: "USD",
    status: "Overdue",
  },
  {
    _id: "1472hw9357wz933",
    clientName: "Michael Brown",
    clientEmail: "michael.brown@outlook.com",
    invoiceNumber: "200126",
    createdAt: "2025-07-04T16:10:15.123Z",
    dueDate: "2025-07-18T16:10:15.123Z",
    amount: 1320500,
    transactionCurrency: "NGN",
    status: "Paid",
  },
  {
    _id: "1472hw9357wz934",
    clientName: "Sophia Williams",
    clientEmail: "sophia.williams@gmail.com",
    invoiceNumber: "200127",
    createdAt: "2025-07-05T08:25:00.123Z",
    dueDate: "2025-07-19T08:25:00.123Z",
    amount: 45000,
    transactionCurrency: "EUR",
    status: "Pending",
  },
  {
    _id: "1472hw9357wz935",
    clientName: "David Chen",
    clientEmail: "david.chen@company.com",
    invoiceNumber: "200128",
    createdAt: "2025-07-06T19:40:20.123Z",
    dueDate: "2025-07-20T19:40:20.123Z",
    amount: 785000,
    transactionCurrency: "NGN",
    status: "Overdue",
  },
];
