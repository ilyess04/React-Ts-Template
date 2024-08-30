import { useCallback, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IResetPasswordState } from "../../interfaces/state";
import { INIT_RESETPASSWORD_STATE } from "../../common/consts";
import { ResetPasswordTemplate } from "../../templates";
import { useTranslation } from "../../customHooks";
import { toast } from "react-toastify";
import { AuthAPI } from "../../apis";

const ResetPassword = (): JSX.Element => {
  const { token } = useParams();
  const { tr } = useTranslation();
  const authApi = useMemo(() => new AuthAPI(), []);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [state, setState] = useState<IResetPasswordState>(
    INIT_RESETPASSWORD_STATE
  );

  const handleSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      await authApi.resetPassword(token!, state);
      toast.success(tr("passwordChangedSuccessfully"));
      navigate("/login");
    } catch (error) {
      console.error(error);
      toast.error(tr("internalServerError"));
    } finally {
      setIsLoading(false);
    }
  }, [authApi, token, state, tr, navigate]);

  return (
    <ResetPasswordTemplate
      isLoading={isLoading}
      state={state}
      onChangeState={setState}
      onSubmit={handleSubmit}
    />
  );
};

export default ResetPassword;
