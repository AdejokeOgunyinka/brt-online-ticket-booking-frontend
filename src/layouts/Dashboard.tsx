import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import UserAvatar from "../assets/cowry.jpeg";
import { DashboardMenuBar } from "../components";
import { IDashboardLayout } from "../types";
import { useGetProfile } from "../services/api/queries/auth";
import { Bars } from "react-loader-spinner";

export const DashboardLayout: React.FC<IDashboardLayout> = ({
  children,
  header,
}) => {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { data, isLoading } = useGetProfile();

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
        <h2 className="text-3xl font-redditSans font-medium">{header}</h2>
        <div>
          <Icon
            className="absolute right-2 top-2  md:hidden cursor-pointer"
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
          <div className="w-full">
            <div className="w-full justify-end items-center gap-2 p-5 hidden lg:flex absolute top-0 right-0 left-0">
              <img
                src={UserAvatar}
                alt="avatar"
                className="w-8 h-8 rounded-full object-cover border border-blackText"
              />
              <div>
                <p className="font-medium text-md font-heebo">
                  {data?.username}
                </p>
                <p className="font-medium text-xs font-dmSans">
                  {data?.brt_card_number}
                </p>
              </div>
            </div>
            {isLoading ? (
              <div className="w-full h-[75vh] flex justify-center items-center">
                <Bars
                  height="80"
                  width="80"
                  color="#001d54"
                  ariaLabel="bars-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              </div>
            ) : (
              children
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
