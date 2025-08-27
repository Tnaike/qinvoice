import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      {/* Right Section (Form) */}
      <div className="flex flex-1 flex-col justify-center items-center px-6 sm:px-12">
        <div className="w-full max-w-md">{children}</div>
      </div>

      {/* Left Section */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-center items-center p-12 bg-gradient-to-r from-indigo-800 to-violet-800">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold text-white text-shadow-md">
            Simplify your invoicing with{" "}
            <span className="italic">Qinvoice</span>
          </h1>
          <p className="mt-4 text-gray-200">
            Create, manage, and send invoices seamlessly. Save time and get paid
            faster.
          </p>
        </div>
      </div>
    </div>
  );
}
