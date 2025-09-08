import Image from "next/image";
import { useRouter } from "next/navigation";
import ROUTE from "@/app/routes";
import Navigation from "@/components/Layout/Navigation";
import NavigationItem from "@/components/Layout/Navigation/NavigationItem";
import { sidebarRoutes } from "@/utils/sidebarRoutes";
import { LogOutIcon } from "lucide-react";

interface SidebarNavigationProps {
  isOpen: boolean;
}

const SidebarNavigation = ({ isOpen }: SidebarNavigationProps) => {
  const router = useRouter();

  const handleLogout = () => {
    router.push(ROUTE.login);
  };

  return (
    <div
      className={`fixed left-0 top-0 h-screen w-[250px] bg-slate-900 border-r border-r-blue-950 z-20 duration-200 ${
        isOpen ? "translate-x-0" : "max-md:-translate-x-full"
      }`}
    >
      <div className="fixed flex w-[inherit] items-center p-3 px-6 border-b border-b-slate-800">
        {/* <Image
          className="object-fit max-md:w-32"
          src="/images/qinvoice-logo.svg"
          alt="Qinvoice Logo"
          width={150}
          height={44}
          priority
        /> */}
        <div className="text-2xl font-bold italic text-white">
          <span className="text-indigo-700 text-3xl not-italic">Q</span>
          invoice
        </div>
      </div>
      <div className="relative h-screen mt-16 md:pt-10 pt-5 pb-40">
        <Navigation className="h-full no-scrollbar overflow-y-auto">
          {sidebarRoutes.map((route) => (
            <NavigationItem key={route.path} href={route.path}>
              <route.icon className="size-5" />
              <p className="text-base font-medium">{route.name}</p>
            </NavigationItem>
          ))}
        </Navigation>

        <div className="absolute bottom-16 w-full py-2 bg-slate-900 border-t border-t-slate-800">
          <button
            onClick={handleLogout}
            className="flex items-center text-white gap-3 mb-0.5 px-8 py-3 w-full cursor-pointer hover:text-indigo-100"
          >
            <LogOutIcon />
            <p className="text-base font-medium">Log Out</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidebarNavigation;
