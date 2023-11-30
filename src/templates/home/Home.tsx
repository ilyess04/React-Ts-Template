import { useAuthentification, useTranslation } from "../../common/customHooks";
import { IHomeTemplate } from "../../interfaces";

const HomeTemplate = ({ ...props }: IHomeTemplate): JSX.Element => {
  const { tr } = useTranslation();
  const auth = useAuthentification();
  return (
    <div style={{ fontSize: "50px" }} className="d-flex justify-center py-5">
      <div>
        <div className="mb-3">{tr("helloWorld")}</div>
        <div>
          <button
            style={{
              borderRadius: "40px",
              width: "220px",
              height: "40px",
              fontSize: "25px",
            }}
            className="ds-bg-primary ds-black-color ds-font-poppins"
            onClick={() => auth.logout()}
          >
            {tr("logout")}
          </button>
        </div>
      </div>
    </div>
  );
};
export default HomeTemplate;
