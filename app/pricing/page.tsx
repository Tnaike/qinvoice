import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import PricingPlan from "@/components/layout/pricingPlan";

export default function Pricing() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <section className="flex-grow bg-indigo-100 py-16 px-5">
        <div className="flex-col max-w-3xl mx-auto text-center max-sm:mt-16 space-y-2">
          <h1 className="text-4xl sm:text-6xl font-bold font-crimson text-gray-900 leading-tight">
            Choose the <span className="text-indigo-700">plan</span> <br />{" "}
            that’s right for you
          </h1>
          <p className="text-lg sm:text-xl text-gray-700">
            Simple and transparent pricing. No hidden fees, no surprises, just
            value.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <PricingPlan />
      <Footer />
    </main>
  );
}
