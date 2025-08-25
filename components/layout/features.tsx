import React from "react";
import { FileText, CreditCard, BarChart3, CheckCircle } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Create Invoices",
      description:
        "Easily create professional invoices with your branding in just a few clicks.",
      icon: FileText,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Accept Payments",
      description: "Let your clients pay online directly through the invoice.",
      icon: CreditCard,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Track Status",
      description:
        "Keep an eye on invoice progress and stay updated on payments in real time.",
      icon: CheckCircle,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Generate Reports",
      description:
        "Gain insights into your invoicing process with comprehensive financial reports.",
      icon: BarChart3,
      color: "bg-yellow-100 text-yellow-600",
    },
  ];

  return (
    <section className="flex-grow bg-white py-12 sm:py-16 px-5">
      <div className="flex-col max-w-3xl mx-auto text-center mb-12 sm:mb-16">
        <h4 className="text-lg font-bold text-indigo-700">FEATURES</h4>
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">
          Everything you need to manage invoices
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-600">
          Our platform provides all the tools to streamline your invoicing
          workflow.
        </p>
      </div>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-7">
              <div
                className={`flex size-12 items-center justify-center rounded-xl shadow-lg ${feature.color}`}
              >
                <feature.icon className="size-6" />
              </div>
               <div className="flex-1">
                <h5 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h5>
                <p className="mt-2 text-base text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
