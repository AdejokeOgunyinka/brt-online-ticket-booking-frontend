import { Icon } from "@iconify/react";
import { IButton } from "../types";
import { buttonLoaderVariants } from "../types/variants";
import { ThreeDots } from "react-loader-spinner";

const buttonVariants: Record<any, string> = {
  primary: "border-none bg-primary text-white",
  secondary: "border border-buttonBorder bg-white text-blackText",
};

export const Button: React.FC<IButton> = ({
  variant = "primary",
  name,
  isLoading,
  onClick,
  icon,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${buttonVariants[variant]} h-14 rounded-lg font-poppins flex justify-center items-center`}
    >
      {isLoading ? (
        <ThreeDots
          visible={true}
          height="50"
          width="70"
          color={buttonLoaderVariants[variant]}
          radius="9"
          ariaLabel="three-dots-loading"
        />
      ) : (
        <div className="flex justify-center items-center gap-2">
          {icon && <Icon icon={icon} className="w-6 h-6" />}
          <p className="font-medium">{name}</p>
        </div>
      )}
    </button>
  );
};
