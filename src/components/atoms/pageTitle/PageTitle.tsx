import { IPageTitle } from "../../../interfaces/components";

const PageTitle = ({ className, style, title, size }: IPageTitle) => {
  return (
    <div
      style={{
        fontWeight: "bold",
        fontSize: size ? `${size}px` : "24px",
        ...style,
      }}
      className={`ds-font-poppins ${className || ""}`}
    >
      {title}
    </div>
  );
};
export default PageTitle;
