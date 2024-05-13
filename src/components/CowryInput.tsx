import { Icon } from "@iconify/react";
import { IInput } from "../types";
import { useState } from "react";

export const Input: React.FC<IInput> = ({
  label,
  leftIcon,
  type,
  rightIcon,
  onChange,
  name,
}) => {
  const [isInFocus, setIsInFocus] = useState(false);
  const onFocus = () => setIsInFocus(true);
  const onBlur = () => setIsInFocus(false);

  return (
    <div className="grid gap-1 w-full font-poppins">
      <label className="font-medium text-lg text-start">{label}</label>
      <div
        className={`border ${isInFocus ? "ring-1 ring-primaryBorder " : "border-buttonBorder "} p-1 rounded-xl`}
      >
        <div
          className={`${isInFocus ? "border ring-2 ring-primary" : "border-none"}  rounded-lg flex justify-between items-center px-2 gap-2`}
        >
          <div className="flex items-center gap-4 w-full">
            {leftIcon && (
              <div className="border-r-2 h-7 flex justify-center items-center border-greyBorder pr-3">
                <Icon icon={leftIcon} className="w-5 h-5" />
              </div>
            )}
            <input
              type={type}
              name={name}
              className={`border-none h-11 outline-none ${type === "time" || type === "date" ? "w-[99%]" : "w-[90%]"}`}
              onFocus={onFocus}
              onBlur={onBlur}
              onChange={(e) => {
                if (onChange) {
                  onChange(e);
                }
              }}
            />
          </div>
          {rightIcon && <Icon icon={rightIcon} className="w-5 h-5" />}
        </div>
      </div>
    </div>
  );
};
