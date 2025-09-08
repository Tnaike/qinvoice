export interface InvoiceData {
  _id: string;
  clientName: string;
  clientEmail?: string;
  invoiceNumber: string;
  createdAt: string;
  dueDate: string;
  amount: number;
  status: "Paid" | "Pending" | "Overdue";
}
