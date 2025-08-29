"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import ROUTE from "@/app/routes";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileNavOpen(!isMobileNavOpen);

    const body = document.body;
    if (isMobileNavOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  };

  const isActive = (route: string) => pathname === route;

  const mobileMenuClass = `${
    isMobileNavOpen ? "flex-col" : "hidden"
  } md:flex max-sm:w-full items-center`;

  const navLinks = [
    { label: "Home", href: ROUTE.home },
    // { label: "Docs", href: "/docs" },
    { label: "Features", href: ROUTE.features },
    { label: "Pricing", href: ROUTE.pricing },
    { label: "Invoices", href: ROUTE.invoices },
  ];

  return (
    <header
      className={`${
        isMobileNavOpen && "max-sm:h-full"
      } sticky max-sm:fixed top-0 z-30 w-full bg-white shadow-[0_1px_3px_rgba(0,0,0,.05)]`}
    >
      <div className="max-w-7xl mx-auto max-sm:flex-col container md:container w-full flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex max-sm:w-full items-center justify-between">
          <Link href={ROUTE.home} className="text-2xl font-bold italic">
            <span className="text-indigo-700 text-3xl not-italic">Q</span>
            invoice
          </Link>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} aria-controls="mobile-menu">
              <AlignJustify />
            </button>
          </div>
        </div>

        <div className={`${mobileMenuClass} max-sm:mt-6`}>
          <nav className="md:flex space-x-8 text-gray-700">
            <ul className="flex max-sm:flex-col gap-6 max-sm:gap-2 font-medium">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      "hover:text-indigo-600",
                      isActive(href) && "text-indigo-700 font-medium"
                    )}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={`${mobileMenuClass} max-sm:mt-8`}>
          <div className="flex-col w-full space-x-5 items-center font-medium">
            <Link
              href={ROUTE.login}
              className="text-gray-700 hover:text-indigo-600 md:px-1 max-sm:border px-4 max-sm:py-2 rounded-md"
            >
              Login
            </Link>
            <Link
              href={ROUTE.signup}
              className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
