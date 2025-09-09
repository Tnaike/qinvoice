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

export function formatAmount(amount = 0, dp = 2): string {
  try {
    return parseFloat(amount.toFixed(dp)).toLocaleString("en", {
      maximumFractionDigits: dp,
      minimumFractionDigits: dp,
    });
  } catch (error) {
    return "0.00";
  }
}
