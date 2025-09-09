import { SupportedCurrency } from "@/lib/utils";

export interface InvoiceData {
  _id: string;
  clientName: string;
  clientEmail?: string;
  invoiceNumber: string;
  createdAt: string;
  dueDate: string;
  amount: number;
  transactionCurrency?: SupportedCurrency;
  status: "Paid" | "Pending" | "Overdue";
}
