import Navbar from "@/sections/Navbar";
import { FC, ReactNode } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default DashboardLayout;