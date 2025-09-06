import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

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
