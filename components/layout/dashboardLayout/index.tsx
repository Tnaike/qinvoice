"use client";

import React, { useState } from "react";
import SidebarNavigation from "@/components/Layout/SidebarNavigation";
import DashboardHeader from "@/components/Layout/DashboardHeader";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="flex w-full h-screen bg-white">
      {sidebarOpen && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-[11] duration-200"
          onClick={closeSidebar}
        ></div>
      )}
      <SidebarNavigation isOpen={sidebarOpen} />
      <div
        className={`fixed max-md:w-full top-0 md:ml-[250px] md:w-[calc(100%-250px)] max-w-[100vw] shadow-[0px_4px_40px_0px_rgba(0,0,0,0.07)] z-10 ${
          sidebarOpen ? "max-md:ml-0" : ""
        }`}
      >
        <DashboardHeader onToggleSidebar={toggleSidebar} />
      </div>
      <div className="h-full grow px-4 md:px-6 md:pt-20 pt-16 pb-16 bg-slate-50 md:ml-[250px]">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
