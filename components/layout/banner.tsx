"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import ROUTE from "@/app/routes";

export default function Banner() {
  const router = useRouter();

  return (
    <section className="flex-grow bg-indigo-50 py-16 sm:py-28 px-5">
      <div className="flex-col max-w-3xl mx-auto text-center max-sm:mt-16 space-y-2">
        <h1 className="text-4xl sm:text-7xl font-semibold font-crimson text-gray-900 text-shadow-2xs">
          Simplify your invoicing process with{" "}
          <span className="italic underline decoration-indigo-700">
            Qinvoice
          </span>
        </h1>
        <p className="sm:mt-8 text-base sm:text-xl text-gray-700">
          Qinvoice streamlines billing by letting you create professional
          invoices in seconds, manage payments with ease, and track finances in
          real time, saving you hours of paperwork so you can focus on growing
          your business.
        </p>

        <div className="mt-8">
          <Button
            onClick={() => router.push(ROUTE.signup)}
            className="bg-indigo-700 text-white rounded-full h-max px-6 text-base sm:text-lg hover:bg-indigo-800 transition cursor-pointer"
          >
            Get Started Free →
          </Button>
        </div>
      </div>
    </section>
  );
}
