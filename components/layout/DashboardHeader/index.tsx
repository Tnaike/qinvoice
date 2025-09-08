"use Client";

import Image from "next/image";
import Link from "next/link";
import ROUTE from "@/app/routes";
import { getFallbackImage } from "@/lib/utils";

interface DashboardHeaderProps {
  onToggleSidebar: () => void;
}

const DashboardHeader = ({ onToggleSidebar }: DashboardHeaderProps) => {
  const fallBackImage = "/assets/avatar.svg";

  return (
    <div className="flex bg-white">
      <div className="flex items-center justify-between px-4 py-2.5 md:px-5 md:py-4 grow gap-2">
        <div className="flex items-center md:!hidden space-x-4">
          <button
            type="button"
            onClick={onToggleSidebar}
            className="relative flex items-center justify-center size-9 !rounded-full hover:bg-slate-100"
          >
            <span className="sr-only">Open</span>
            <Image
              src="/assets/menu-icon.svg"
              width={25}
              height={25}
              alt="Menu"
              priority
            />
          </button>
          {/* <Image src="/assets/qinvoice-logo.png" width={107} height={30} alt="Menu" priority /> */}
          <Link href={ROUTE.home} className="text-2xl font-bold italic">
            <span className="text-indigo-700 text-3xl not-italic">Q</span>
            invoice
          </Link>
        </div>
        <div className="flex items-center md:justify-between md:w-full gap-1.5">
          <button
            type="button"
            className="flex items-center space-x-2 max-w-44 ml-3"
          >
            <div className="flex size-[34px] rounded-full bg-slate-100">
              <Image
                className="rounded-full object-cover"
                src={getFallbackImage("/assets/user-avatar.svg", fallBackImage)}
                width={34}
                height={34}
                alt="user-avatar"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = fallBackImage;
                }}
                priority
              />
            </div>
            <div className="flex flex-col items-start grow text-xs text-gray-700 font-bold truncate max-md:hidden">
              <span className="text-xxs text-gray-500 font-medium">
                Welcome 👋
              </span>
              <span>Timilehin Adenaike</span>
            </div>
          </button>

          <button
            type="button"
            className="relative flex items-center justify-center size-9 !rounded-full hover:bg-indigo-50 cursor-pointer"
          >
            <Image
              src="/assets/dashboard-bell.svg"
              width={20}
              height={20}
              alt="bell-icon"
              priority
            />
            <span className="absolute flex size-2 top-0.5 left-[22px]">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
