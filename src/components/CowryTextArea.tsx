import { useState } from "react";
import { ITextArea } from "../types";

export const TextArea: React.FC<ITextArea> = ({
  label,
  onChange,
  error,
  value,
  onBlur,
  showError,
}) => {
  const [isInFocus, setIsInFocus] = useState(false);
  const onFocus = () => setIsInFocus(true);

  const onTextareaBlur = (e: any) => {
    setIsInFocus(false);
    onBlur && onBlur(e);
  };

  return (
    <div className="grid gap-1 w-full font-poppins">
      <label className="font-medium text-lg text-start">{label}</label>
      <div
        className={`border ${isInFocus ? "ring-1 ring-primaryBorder " : "border-buttonBorder "} p-1 rounded-xl`}
      >
        <textarea
          className={`border-none outline-none rounded-lg w-full h-full p-2 ${isInFocus ? "border ring-2 ring-primary" : "border-none"}`}
          onFocus={onFocus}
          onBlur={(e) => onTextareaBlur(e)}
          onChange={(e) => {
            if (onChange) {
              onChange(e);
            }
          }}
          value={value}
        />
      </div>
      {showError && error && (
        <p className="text-xs text-error text-right">{error}</p>
      )}
    </div>
  );
};
