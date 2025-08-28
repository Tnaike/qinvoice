import React from "react";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full">
      <div className="flex flex-col flex-1 h-full justify-start items-center px-6 sm:px-14 overflow-y-scroll custom-scrollbar">
        <div className="flex w-full pt-5 mb-6 text-2xl font-bold italic">
          <Link href="/">
            {/* <Image src="/qinvoice-logo.png" alt="Qinvoice Logo" width={120} height={28} /> */}
            <span className="text-indigo-700 text-3xl not-italic">Q</span>
            invoice
          </Link>
        </div>
        <div className="w-full py-5">{children}</div>
      </div>

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
