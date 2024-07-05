import { Link } from "react-router-dom";
import { useTranslation } from "../../../customHooks";
import { ICommonComponent } from "../../../interfaces";

const TermsAndConditions = ({
  className,
  style,
}: ICommonComponent) => {
  const { tr } = useTranslation();
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "600px",
        margin: "auto",
        ...style,
      }}
      className={`ds-font-poppins ${className || ""}`}
    >
      {tr("bySubmittingThisFormYouAgreedToOurWebsite")}
      <Link to="#" style={{ textDecoration: "underline" }}>
        {tr("termAndConditions")}
      </Link>
    </div>
  );
};

export default TermsAndConditions;
