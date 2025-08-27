import React from "react";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export default function TermsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <section className="flex-grow bg-indigo-100 py-16 px-5">
        <div className="flex-col max-w-3xl mx-auto text-center max-sm:mt-16 space-y-2">
          <h1 className="text-4xl sm:text-6xl font-bold font-crimson text-gray-900 leading-tight">
            Terms of Service
          </h1>
          <p className="text-lg sm:text-xl text-gray-700">
            By using Qinvoice, you agree to the following terms.
          </p>
        </div>
      </section>
      <section className="flex-grow max-w-5xl mx-auto py-16 px-5">
        <h2 className="text-xl font-semibold mt-6">1. Use of Service</h2>
        <p className="text-gray-700">You may not misuse the platform...</p>
        <h2 className="text-xl font-semibold mt-6">2. Payment & Billing</h2>
        <p className="text-gray-700">All payments are non-refundable...</p>
        <h2 className="text-xl font-semibold mt-6">3. Termination</h2>
        <p className="text-gray-700">
          We reserve the right to suspend accounts...
        </p>
      </section>
      <Footer />
    </main>
  );
}
