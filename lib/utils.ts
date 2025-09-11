import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type SupportedCurrency =
  | "USD"
  | "EUR"
  | "GBP"
  | "CAD"
  | "JPY"
  | "CHF"
  | "NGN";

// Map currencies to preferred locales
export const currencyLocales: Record<SupportedCurrency, string> = {
  USD: "en-US",
  EUR: "de-DE",
  GBP: "en-GB",
  CAD: "en-CA",
  JPY: "ja-JP",
  CHF: "de-CH",
  NGN: "en-NG",
};

export const currencyDisplayNames: Record<SupportedCurrency, string> = {
  USD: "US Dollar",
  EUR: "Euro",
  GBP: "British Pound",
  CAD: "Canadian Dollar",
  JPY: "Japanese Yen",
  CHF: "Swiss Franc",
  NGN: "Nigerian Naira",
};

export function formatCurrency(
  value: number,
  currency: SupportedCurrency = "USD"
) {
  return new Intl.NumberFormat(currencyLocales[currency], {
    style: "currency",
    currency,
  }).format(value);
}

export const getFallbackImage = (
  imageSrc: string | undefined | null,
  defaultImageSrc: string
) => imageSrc || defaultImageSrc;

type FormatType = "monthYear" | "fullDate";

export const formatDate = (
  dateStr: string,
  formatType?: FormatType
): string => {
  const date = new Date(dateStr);

  switch (formatType) {
    case "monthYear":
      return format(date, "MM/yyyy"); // "07/2025"
    case "fullDate":
      return format(date, "MMM dd, yyyy"); // "Jul 01, 2025"
    default:
      return format(date, "dd/MM/yyyy"); // "24/07/2025"
  }
};

export const formatMoney = (
  amount: number,
  currency: SupportedCurrency = "USD",
  decimalPlaces: number = 2
): string => {
  return new Intl.NumberFormat(currencyLocales[currency], {
    style: "currency",
    currency,
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  }).format(amount);
};

export const formatAmount = (amount = 0, dp = 2): string => {
  try {
    return parseFloat(amount.toFixed(dp)).toLocaleString("en", {
      maximumFractionDigits: dp,
      minimumFractionDigits: dp,
    });
  } catch (error) {
    return "0.00";
  }
};

const colors = [
  "bg-red-400",
  "bg-red-500",
  "bg-red-600",
  "bg-blue-400",
  "bg-blue-500",
  "bg-blue-600",
  "bg-green-400",
  "bg-green-500",
  "bg-green-600",
  "bg-yellow-400",
  "bg-yellow-500",
  "bg-yellow-600",
  "bg-purple-400",
  "bg-purple-500",
  "bg-purple-600",
  "bg-pink-400",
  "bg-pink-500",
  "bg-pink-600",
  "bg-indigo-400",
  "bg-indigo-500",
  "bg-indigo-600",
  "bg-orange-400",
  "bg-orange-500",
  "bg-orange-600",
  "bg-gray-600",
  "bg-gray-700",
  "bg-gray-800",
];

export const getBgColor = (name: string) => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
};
