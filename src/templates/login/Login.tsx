import { reactLogo } from "../../assets";
import { useTranslation } from "../../common/customHooks";
import { PageTitle } from "../../components";
import { ILoginTemplate } from "../../interfaces";

const LoginTemplate = ({
  authState,
  setAuthState,
  onSubmit,
}: ILoginTemplate): JSX.Element => {
  const { tr } = useTranslation();
  return (
    <div className="w-100 container-fluid">
      <div className="row">
        <div className="col-md-6 col-12 d-none d-md-block p-5">
          <img src={reactLogo} />
        </div>
        <div className="col-md-6 col-12 py-5">
          <PageTitle className="mb-2" size={30} title={tr("login")} />
          <div className="mb-2">
            <input
              value={authState.email}
              placeholder={tr("enterYourEmail")}
              onChange={(e) =>
                setAuthState({ ...authState, email: e.target.value })
              }
            />
          </div>
          <div className="mb-2">
            <input
              type="password"
              value={authState.password}
              placeholder={tr("enterYourPassword")}
              onChange={(e) =>
                setAuthState({ ...authState, password: e.target.value })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginTemplate;
