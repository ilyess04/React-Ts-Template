import { IButton } from "../../../interfaces/components";

const Button = ({ className, style, onClick, title, isDisabled }: IButton) => {
  return (
    <button
      style={{
        borderRadius: "40px",
        height: "40px",
        opacity: isDisabled ? 0.5 : 1,
        ...style,
      }}
      className={`ds-bg-primary ds-white-color w-100 ${className}`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
