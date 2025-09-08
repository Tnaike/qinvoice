import { LucideIcon } from "lucide-react";

type SidebarRouteItem = {
  name: string;
  path: string;
  icon: LucideIcon;
};

export type SidebarRouteGroup = SidebarRouteItem[];
