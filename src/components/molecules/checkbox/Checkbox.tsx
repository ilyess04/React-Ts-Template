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
      className={className}
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
