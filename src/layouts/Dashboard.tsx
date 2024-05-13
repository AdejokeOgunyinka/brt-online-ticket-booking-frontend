import { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import UserAvatar from "../assets/cowry.jpeg";
import { DashboardMenuBar } from "../components";
import { IDashboardLayout } from "../types";
import { API, BEARER } from "../constant";
import { getToken } from "../helpers";
import { toast } from "react-toastify";

export const DashboardLayout: React.FC<IDashboardLayout> = ({
  children,
  header,
}) => {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const authToken = getToken();

  const [isLoading, setIsLoading] = useState(false);

  const fetchLoggedInUser = async (token: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API}/users/me`, {
        headers: { Authorization: `${BEARER} ${token}` },
      });
      const data = await response.json();

      localStorage.setItem("user", JSON.stringify(data));
    } catch (error: any) {
      console.error(error);
      toast.error(error.message, {
        position: "top-right",
        closeOnClick: true,
        theme: "light",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (authToken) {
      fetchLoggedInUser(authToken);
    }
  }, [authToken]);

  const lsUser = localStorage.getItem("user");
  const user = typeof lsUser === "string" ? JSON.parse(lsUser) : "";

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
          <div className=" absolute top-0 bottom-0 right-0 left-0 w-full h-[100vh] bg-menuBg"></div>
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
          <div className="w-full min-h-[100vh]">
            <div className="w-full justify-end items-center gap-2 p-5 hidden lg:flex absolute top-0 right-0 left-0 h-[70px]">
              <img src={UserAvatar} alt="avatar" className="w-6 h-6" />
              <p className="font-medium text-lg">{user?.username}</p>
            </div>
            {isLoading ? <></> : children}
          </div>
        </div>
      </div>
    </div>
  );
};
