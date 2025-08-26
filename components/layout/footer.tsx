import React from "react";
import Link from "next/link";
import ROUTE from "@/app/routes";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-950">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start text-white">
            <Link href={ROUTE.home} className="text-2xl font-bold italic">
              <span className="text-indigo-700 text-3xl not-italic">Q</span>
              invoice
            </Link>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-center text-indigo-100 text-sm">
              &copy; {new Date().getFullYear()} Qinvoice. All rights reserved.
            </p>
          </div>
          <div className="mt-4 md:mt-0 text-indigo-100 text-sm flex space-x-6 justify-center md:justify-end">
            <Link href={ROUTE.terms} className="hover:text-indigo-300">
              Terms of service
            </Link>
            <Link href={ROUTE.privacy} className="hover:text-indigo-300">
              Privacy policy
            </Link>
            <Link href={ROUTE.support} className="hover:text-indigo-300">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
