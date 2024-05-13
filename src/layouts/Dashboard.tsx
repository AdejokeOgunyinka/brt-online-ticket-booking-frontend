import { useState } from "react";
import { DashboardMenuBar } from "../components";
import { IDashboardLayout } from "../types";
import { Icon } from "@iconify/react/dist/iconify.js";

export const DashboardLayout: React.FC<IDashboardLayout> = ({
  children,
  header,
}) => {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full min-h-[100vh] flex font-poppins">
      <div className="hidden md:flex h-[100vh]">
        <DashboardMenuBar
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        />
      </div>
      <div className="min-h-[100vh] w-full md:w-[calc(100%-250px)] bg-greySection p-5 lg:p-10 relative">
        {isMobileMenuOpen ? (
          <div className=" absolute top-0 bottom-0 right-0 left-0 w-full h-[100vh] bg-greyBorder"></div>
        ) : (
          <></>
        )}
        <h2 className="text-3xl font-redditSans font-medium">{header}</h2>
        <div>
          <Icon
            className="absolute right-2 top-2  lg:hidden cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            icon={"mingcute:menu-fill"}
            fontSize={35}
          />
          {isMobileMenuOpen ? (
            <div className="absolute right-0 top-0 lg:hidden">
              <Icon
                className="absolute right-2 top-2  lg:hidden cursor-pointer"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                icon={"line-md:menu-to-close-transition"}
                fontSize={30}
              />

              <DashboardMenuBar
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
              />
            </div>
          ) : (
            <></>
          )}
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};
