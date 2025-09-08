"use client";

import { MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationItemProps {
  asButton?: boolean;
  onClick?: (
    e: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLAnchorElement>
  ) => void;
  href?: string;
  children: React.ReactNode;
}

function NavigationItem({
  asButton,
  onClick,
  href,
  children,
}: NavigationItemProps) {
  const pathname = usePathname();
  const isActive = href ? pathname.startsWith(href) : false;

  const handleClick = (
    e: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLAnchorElement>
  ) => {
    if (onClick) {
      onClick(e);
    }
  };

  return asButton ? (
    <button
      type="button"
      className={`relative flex items-center w-full text-white gap-3 mb-0.5 px-8 py-3 no-underline cursor-pointer ${
        isActive ? "bg-slate-800" : ""
      }`}
      aria-current={isActive ? "page" : undefined}
      onClick={handleClick}
    >
      {children}
    </button>
  ) : (
    <Link
      href={href ?? ""}
      className={`relative flex items-center text-white gap-3 mb-0.5 px-8 py-3 no-underline ${
        isActive ? "bg-indigo-800 hover:bg-indigo-800" : "hover:bg-slate-800"
      }`}
      aria-current={isActive ? "page" : undefined}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}

export default NavigationItem;
