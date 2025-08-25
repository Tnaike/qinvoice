import React from "react";
import Header from "./header";
import Footer from "./footer";
import Features from "./features";

export default function LandingPage() {
  return (
    <>
      <Header />
      <section className="flex-grow bg-indigo-50 py-16 sm:py-24 px-5">
        <div className="flex-col max-w-3xl mx-auto text-center max-sm:mt-16 space-y-2">
          <h1 className="text-4xl sm:text-7xl font-semibold font-crimson text-gray-900">
            Simplify your invoicing process with{" "}
            <span className="italic underline decoration-indigo-700">
              Qinvoice
            </span>
          </h1>
          <p className="sm:mt-8 text-base sm:text-xl text-gray-600">
            Qinvoice streamlines billing by letting you create professional
            invoices in seconds, manage payments with ease, and track finances
            in real time, saving you hours of paperwork so you can focus on
            growing your business.
          </p>
        </div>
      </section>
      <Features />
      <Footer />
    </>
  );
}
