import Navbar from "@/sections/Navbar";
import { FC, ReactNode } from "react";

type DashboardLayoutProps = {
  children: ReactNode;
};

const DashboardLayout: FC<DashboardLayoutProps> = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <div className="flex xl:container">
      <Navbar />
      {children}
    </div>
  );
};

export default DashboardLayout;
