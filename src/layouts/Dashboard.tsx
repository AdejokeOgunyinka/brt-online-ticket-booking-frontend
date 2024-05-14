import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import UserAvatar from "../assets/cowry.jpeg";
import { DashboardMenuBar, LoadingPage } from "../components";
import { IDashboardLayout } from "../types";
import { useGetProfile } from "../services/api/queries/auth";
import { ALL_ROUTES } from "../routes";

export const DashboardLayout: React.FC<IDashboardLayout> = ({
  children,
  header,
}) => {
  const { pathname } = useLocation();

  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { data, isLoading } = useGetProfile();

  useEffect(() => {
    setActiveMenu(ALL_ROUTES[pathname]);
  });

  return (
    <div className="w-full min-h-[100vh] flex font-poppins">
      <div className="hidden fixed md:flex h-[100vh]">
        <div className="left-0 top-0 bottom-0">
          <DashboardMenuBar
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
          />
        </div>
      </div>
      <div className="min-h-[100vh] w-full md:ml-[290px] bg-greySection p-5 lg:p-10 relative">
        {isMobileMenuOpen ? (
          <div className=" absolute top-0 bottom-0 right-0 left-0 w-full h-[100vh] bg-menuBg"></div>
        ) : (
          <></>
        )}
        <div className="fixed w-full md:w-[unset] bg-white top-0 md:left-[290px] px-5 right-0 flex justify-between items-center py-3">
          <h2 className="text-3xl font-redditSans font-medium">{header}</h2>

          <div className="md:items-center md:gap-2 hidden md:flex">
            <img
              src={UserAvatar}
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

          <div className="md:hidden">
            <Icon
              className="absolute right-5 top-2  md:hidden cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              icon={"mingcute:menu-fill"}
              fontSize={35}
            />
            {isMobileMenuOpen ? (
              <div className="absolute right-0 top-0 md:hidden">
                <Icon
                  className="absolute right-2 top-2  md:hidden cursor-pointer"
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
          </div>
        </div>

        {isLoading ? <LoadingPage /> : children}
      </div>
    </div>
  );
};
