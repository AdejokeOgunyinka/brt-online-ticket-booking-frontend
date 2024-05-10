import { Icon } from "@iconify/react";
import { IDashboardMenu } from "../types";

export const DashboardMenu: React.FC<IDashboardMenu> = ({
  name,
  icon,
  isActive,
  onClick,
}) => {
  return (
    <button
      className={`flex items-center gap-2 w-full font-poppins px-4 h-14 rounded-md ${isActive ? "bg-primary " : "bg-none "}`}
      onClick={onClick}
    >
      <Icon
        icon={icon}
        className={`w-5 h-5 ${isActive ? "text-white" : "text-greyText"}`}
      />
      <p
        className={`text-lg font-medium ${isActive ? "text-white" : "text-blackText"}`}
      >
        {name}
      </p>
    </button>
  );
};
