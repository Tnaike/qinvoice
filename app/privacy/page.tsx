import React from "react";
import Footer from "@/components/Layout/footer";
import Header from "@/components/Layout/header";

export default function PrivacyPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <section className="flex-grow bg-indigo-100 py-16 px-5">
        <div className="flex-col max-w-3xl mx-auto text-center max-sm:mt-16 space-y-2">
          <h1 className="text-4xl sm:text-6xl font-bold font-crimson text-gray-900 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-lg sm:text-xl text-gray-700">
            At Qinvoice, we value your privacy. This policy outlines how we
            collect, use, and safeguard your data.
          </p>
        </div>
      </section>
      <section className="flex-grow max-w-5xl mx-auto py-16 px-5">
        <h2 className="text-xl font-semibold mt-6">
          1. Information We Collect
        </h2>
        <p className="text-gray-700">
          We may collect account information, usage data, and payment details...
        </p>
        <h2 className="text-xl font-semibold mt-6">2. How We Use Data</h2>
        <p className="text-gray-700">
          We use your information to provide and improve services...
        </p>
        <h2 className="text-xl font-semibold mt-6">3. Data Protection</h2>
        <p className="text-gray-700">
          We implement security measures to protect your data...
        </p>
      </section>
      <Footer />
    </main>
  );
}
