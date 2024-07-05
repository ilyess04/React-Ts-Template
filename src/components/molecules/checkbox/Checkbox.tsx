import { ICheckbox } from "../../../interfaces/components";

const Checkbox = ({
  className,
  style,
  title,
  isChecked,
  onChange,
}: ICheckbox) => {
  return (
    <div
      style={{
        fontWeight: "bold",
        ...style,
      }}
      className={`ds-font-poppins ${className || ""}`}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => onChange && onChange(e.target.checked)}
      />
      <span>{title}</span>
    </div>
  );
};
export default Checkbox;
