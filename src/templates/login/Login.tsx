import { reactLogo } from "../../assets";
import { useTranslation } from "../../common/customHooks";
import { Input, PageTitle } from "../../components";
import { EInputTypes } from "../../enums";
import { ILoginTemplate } from "../../interfaces";

const LoginTemplate = ({
  state,
  onChangeState,
  onSubmit,
}: ILoginTemplate): JSX.Element => {
  const { tr } = useTranslation();
  return (
    <div className="w-100 container-fluid">
      <div className="row">
        <div className="col-md-6 col-12 d-none d-md-block p-5">
          <img alt="logo" src={reactLogo} />
        </div>
        <div className="col-md-6 col-12 py-5">
          <PageTitle className="mb-2" size={30} title={tr("login")} />
          <Input
            className="mb-2"
            onChange={(value) =>
              typeof value === "string" &&
              onChangeState({ ...state, email: value })
            }
            value={state.email}
            type={EInputTypes.email}
            placeholder={tr("enterYourEmail")}
          />
          <Input
            className="mb-2"
            onChange={(value) =>
              typeof value === "string" &&
              onChangeState({ ...state, password: value })
            }
            value={state.password}
            type={EInputTypes.password}
            placeholder={tr("enterYourPassword")}
          />
          <div className="d-flex justify-center">
            <button
              style={{ borderRadius: "40px", width: "220px", height: "40px" }}
              className="ds-bg-primary ds-black-color ds-font-poppins"
              onClick={onSubmit}
            >
              {tr("login")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginTemplate;
