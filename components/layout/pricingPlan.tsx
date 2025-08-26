"use client";

import { Button } from "@/components/ui/button";
import ROUTE from "@/app/routes";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PricingPlan() {
  const router = useRouter();

  return (
    <section className="py-16 px-5 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Free Plan */}
        <div className="border rounded-2xl shadow-sm p-8 text-center flex flex-col bg-indigo-50">
          <h3 className="text-2xl font-bold text-gray-900">Free</h3>
          <p className="mt-1 text-gray-600">Best for trying things out</p>
          <p className="mt-6 text-4xl font-bold text-indigo-700">$0</p>
          <p className="text-sm text-gray-500">Forever free</p>
          <ul className="mt-6 space-y-3 text-gray-700 text-sm">
            <li className="flex items-center gap-2">
              <Check className="text-indigo-700 size-5" />3 free invoices per
              day
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-indigo-700 size-5" />
              Unlimited templates
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-indigo-700 size-5" />
              Custom branding
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-indigo-700 size-5" />
              Basic support
            </li>
          </ul>
          <Button
            onClick={() => router.push(ROUTE.signup)}
            className="mt-7 bg-indigo-700 text-white rounded-full px-6 py-2 hover:bg-indigo-800"
          >
            Get Started
          </Button>
        </div>

        {/* Pay-per-use Plan */}
        <div className="border rounded-2xl shadow-lg p-8 text-center flex flex-col">
          <h3 className="text-2xl font-semibold text-gray-900">Pay Per Use</h3>
          <p className="mt-1 text-gray-600">Best for occasional usage</p>
          <p className="mt-6 text-4xl font-bold text-indigo-700">$5</p>
          <p className="text-sm text-gray-500">per invoice</p>
          <ul className="mt-6 space-y-3 text-gray-700 text-sm">
            <li className="flex items-center gap-2">
              <Check className="text-indigo-700 size-5" />
              Unlimited templates
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-indigo-700 size-5" />
              Download as PDF
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-indigo-700 size-5" />
              Email support
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-indigo-700 size-5" />
              Priority support
            </li>
          </ul>
          <Button
            onClick={() => router.push(ROUTE.signup)}
            className="mt-7 bg-indigo-700 text-white rounded-full px-6 py-2 hover:bg-indigo-800"
          >
            Start Now
          </Button>
        </div>

        {/* Monthly Plan */}
        <div className="border rounded-2xl shadow-sm p-8 text-center flex flex-col">
          <h3 className="text-2xl font-semibold text-gray-900">Monthly</h3>
          <p className="mt-1 text-gray-600">Best for businesses</p>
          <p className="mt-6 text-4xl font-bold text-indigo-700">$19</p>
          <p className="text-sm text-gray-500">per month</p>
          <ul className="mt-6 space-y-3 text-gray-700 text-sm">
            <li className="flex items-center gap-2">
              <Check className="text-indigo-700 size-5" />
              Unlimited templates
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-indigo-700 size-5" />
              Download as PDF
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-indigo-700 size-5" />
              Custom branding
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-indigo-700 size-5" />
              24/7 priority support
            </li>
          </ul>
          <Button
            onClick={() => router.push(ROUTE.signup)}
            className="mt-7 bg-indigo-700 text-white rounded-full px-6 py-2 hover:bg-indigo-800"
          >
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
}
