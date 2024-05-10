import { useState } from "react";
import { ITextArea } from "../types";

export const TextArea: React.FC<ITextArea> = ({ label, onChange }) => {
  const [isInFocus, setIsInFocus] = useState(false);
  const onFocus = () => setIsInFocus(true);
  const onBlur = () => setIsInFocus(false);

  return (
    <div className="grid gap-1 w-full font-poppins">
      <label className="font-medium text-lg text-start">{label}</label>
      <div
        className={`border ${isInFocus ? "ring-1 ring-primaryBorder" : "border-buttonBorder"} p-1 rounded-xl`}
      >
        <textarea
          className={`border-none outline-none rounded-lg w-full h-full p-2 ${isInFocus ? "border ring-2 ring-primary" : "border-none"}`}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={(e) => {
            if (onChange) {
              onChange(e);
            }
          }}
        />
      </div>
    </div>
  );
};
