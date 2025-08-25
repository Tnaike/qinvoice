import React from "react";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export default function Pricing() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <section className="flex-grow">
        <h2>Pricing</h2>
        {/* Your main content goes here */}
      </section>
      <Footer />
    </main>
  );
}
