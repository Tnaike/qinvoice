import ROUTE from "@/app/routes";
import { SidebarRouteGroup } from "@/types/sidebar";
import {
  LayoutDashboard,
  Settings,
  ReceiptText,
  UserRound,
  UsersRound,
} from "lucide-react";

export const sidebarRoutes: SidebarRouteGroup = [
  { name: "Dashboard", path: ROUTE.dashboard, icon: LayoutDashboard },
  { name: "Clients", path: ROUTE.clients, icon: UsersRound },
  { name: "Invoices", path: ROUTE.invoices, icon: ReceiptText },
  { name: "Profile", path: ROUTE.profile, icon: UserRound },
  { name: "Settings", path: ROUTE.settings, icon: Settings },
];
