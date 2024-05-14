import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { DashboardMenu } from "./CowryDashboardMenu";
import { LOGIN } from "../routes";
import { clearStorage } from "../helpers";
import CowryLogo from "../assets/cowry.jpeg";
import { IDashboardMenuBar } from "../types";
import { useGetProfile } from "../services/api/queries/auth";

export const DashboardMenuBar: React.FC<IDashboardMenuBar> = ({
  activeMenu,
  setActiveMenu,
}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearStorage();
    navigate(LOGIN, { replace: true });
  };

  const { data } = useGetProfile();

  return (
    <div className="h-[100vh] w-[300px] md:w-[290px] flex flex-col justify-between px-4 bg-white py-10">
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

      <div className="w-full">
        <div className="flex justify-end items-center gap-2 md:hidden">
          <img
            src={CowryLogo}
            alt="avatar"
            className="w-8 h-8 rounded-full object-cover border border-blackText"
          />
          <div>
            <p className="font-medium text-md font-heebo">{data?.username}</p>
            <p className="font-medium text-xs font-dmSans">
              {data?.brt_card_number}
            </p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="w-full flex justify-end items-center gap-2 font-semibold text-red-600  rounded-lg py-3 cursor-pointer"
        >
          <Icon icon="material-symbols:logout-rounded" className="w-6 h-6" />
          <p>Log out</p>
        </button>
      </div>
    </div>
  );
};
