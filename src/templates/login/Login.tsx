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
          <PageTitle size={30} title={tr("login")} />
        </div>
      </div>
    </div>
  );
};
export default LoginTemplate;
