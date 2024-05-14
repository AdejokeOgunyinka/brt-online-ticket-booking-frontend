import { Icon } from "@iconify/react";
import { IInput } from "../types";
import { useState } from "react";

export const Input: React.FC<IInput> = ({
  label,
  leftIcon,
  type,
  rightIcon,
  onChange,
  onBlur,
  name,
  error,
  value,
  showError,
  disabled,
}) => {
  const [isInFocus, setIsInFocus] = useState(false);
  const onFocus = () => setIsInFocus(true);

  const onInputBlur = (e: any) => {
    setIsInFocus(false);
    onBlur && onBlur(e);
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="grid gap-1 w-full font-poppins">
      {label && (
        <label className="font-medium text-lg text-start">{label}</label>
      )}
      <div
        className={`border ${isInFocus ? "ring-1 ring-primaryBorder " : "border-buttonBorder "} p-1 rounded-xl`}
      >
        <div
          className={`${isInFocus ? "border ring-2 ring-primary" : "border-none"}  rounded-lg flex justify-between items-center gap-0 ${rightIcon ? "pr-2" : ""}`}
        >
          <div className="flex items-center gap-2 w-full bg-white rounded-lg px-2 py-1">
            {leftIcon && (
              <div className="border-r-2 h-7 flex justify-center items-center border-greyBorder pr-3">
                <Icon icon={leftIcon} className="w-5 h-5" />
              </div>
            )}
            <input
              type={type === "password" && showPassword ? "text" : type}
              name={name}
              className={`px-2 rounded-lg border-none h-11 outline-none bg-inherit w-full`}
              onFocus={onFocus}
              onBlur={(e) => onInputBlur(e)}
              onChange={(e) => {
                if (onChange) {
                  onChange(e);
                }
              }}
              value={value}
              disabled={disabled}
            />
          </div>
          {rightIcon && (
            <Icon
              icon={showPassword ? "mdi:show" : rightIcon}
              className={`w-5 h-5 ${type === "password" ? "cursor-pointer" : ""}`}
              onClick={() => {
                if (type === "password") {
                  setShowPassword(!showPassword);
                }
              }}
            />
          )}
        </div>
      </div>
      {showError && error && (
        <p className="text-xs text-error text-right">{error}</p>
      )}
    </div>
  );
};
