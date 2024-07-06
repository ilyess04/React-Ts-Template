import { Link } from "react-router-dom";
import { ITextLink } from "../../../interfaces/components";

const TextLink = ({ className, style, linkText, href }: ITextLink) => {
  return (
    <div
      style={{
        fontWeight: "bold",
        ...style,
      }}
      className={`${className} ds-gray-color`}
    >
      <Link to={href} style={{ textDecoration: "underline" }}>
        {linkText}
      </Link>
    </div>
  );
};
export default TextLink;
