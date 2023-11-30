import { useState } from "react";
import { useLanguages } from "../../../common/customHooks";
import { EInputTypes } from "../../../enums";
import { IInput } from "../../../interfaces/components";
import { Label } from "../../molecules";
const Input = ({
  className,
  inputClassName,
  style,
  labelStyle,
  label,
  isObligatoryLabel,
  placeholder,
  value,
  type,
  onChange,
}: IInput): JSX.Element => {
  const { isRtl } = useLanguages();
  const [changedType, setChangedType] = useState<EInputTypes | undefined>(type);
  return (
    <div
      style={{ position: "relative", ...style }}
      className={`${className || ""} w-100`}
    >
      {label && (
        <Label
          className="mb-2"
          style={labelStyle}
          text={label}
          isObligatory={isObligatoryLabel === true}
        />
      )}
      <input
        className={`${inputClassName} ds-input w-100 `}
        type={changedType || "text"}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          type === EInputTypes.number
            ? onChange(parseFloat(e.target.value))
            : onChange(e.target.value);
        }}
      />
      {type === EInputTypes.password && (
        <div
          className={`${
            isRtl
              ? "ds-auth-icon-password-rtl"
              : "ds-auth-icon-password-not-rtl"
          } ds-auth-icon-password ds-grey-strok-color`}
        >
          {changedType === EInputTypes.password ? (
            <i
              className="bi bi-eye"
              onClick={() => setChangedType(EInputTypes.text)}
            />
          ) : (
            <i
              className="bi bi-eye-slash"
              onClick={() => setChangedType(EInputTypes.password)}
            />
          )}
        </div>
      )}
    </div>
  );
};
export default Input;
