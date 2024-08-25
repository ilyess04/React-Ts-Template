import { useCallback, useState } from "react";
import { IForgotPasswordState } from "../../interfaces/state";
import { INIT_FORGOTPASSWORD_STATE } from "../../common/consts";
import { ForgotPasswordTemplate } from "../../templates";
import { useTranslation } from "../../customHooks";
import { toast } from "react-toastify";
import { AuthAPI } from "../../apis";

const ForgotPassword = (): JSX.Element => {
  const { tr } = useTranslation();
  const authApi = new AuthAPI();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [state, setState] = useState<IForgotPasswordState>(
    INIT_FORGOTPASSWORD_STATE
  );

  const handleSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      await authApi.sendEmailReset(state);
      toast.success(tr("requestSentSuccessflly"));
    } catch (error) {
      console.error(error);
      toast.error(tr("internalServerError"));
    } finally {
      setIsLoading(false);
    }
  }, [authApi, state, tr]);

  return (
    <ForgotPasswordTemplate
      isLoading={isLoading}
      state={state}
      onChangeState={setState}
      onSubmit={handleSubmit}
    />
  );
};

export default ForgotPassword;
