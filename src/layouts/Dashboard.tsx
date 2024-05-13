import { useState } from "react";
import { DashboardMenu } from "../components";
import { IDashboardLayout } from "../types";
import CowryLogo from "../assets/cowry.jpeg";
import { Icon } from "@iconify/react/dist/iconify.js";

export const DashboardLayout: React.FC<IDashboardLayout> = ({
  children,
  header,
}) => {
  const [activeMenu, setActiveMenu] = useState("dashboard");

  return (
    <div className="w-full min-h-[100vh] flex font-poppins">
      <div className="h-[100vh] w-1/5 flex flex-col justify-between px-4 bg-white py-10">
        <div className="flex flex-col gap-7">
          <div className="flex w-full justify-center">
            <img src={CowryLogo} alt="logo" className="w-20 h-20" />
          </div>
          <div className="flex flex-col gap-3">
            <DashboardMenu
              name={"Dashboard"}
              icon={"tabler:layout-dashboard-filled"}
              isActive={activeMenu === "dashboard"}
              onClick={() => setActiveMenu("dashboard")}
            />

            <DashboardMenu
              name={"Bookings"}
              icon={"streamline:ticket-1-solid"}
              isActive={activeMenu === "bookings"}
              onClick={() => setActiveMenu("bookings")}
            />

            <DashboardMenu
              name={"Profile"}
              icon={"streamline:user-profile-focus-solid"}
              isActive={activeMenu === "profile"}
              onClick={() => setActiveMenu("profile")}
            />
          </div>
        </div>

        <div className="flex justify-center items-center gap-2 font-semibold text-red-600  rounded-lg py-3 cursor-pointer">
          <Icon icon="material-symbols:logout-rounded" className="w-6 h-6" />
          <p>Log out</p>
        </div>
      </div>
      <div className="min-h-[100vh] w-4/5 bg-greySection p-10">
        <h2 className="text-3xl font-redditSans font-medium">{header}</h2>
        <div>{children}</div>
      </div>
    </div>
  );
};
