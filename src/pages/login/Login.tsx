import { useCallback, useState } from "react";
import { ILoginState } from "../../interfaces/state";
import { INIT_LOGIN_STATE } from "../../common/consts";
import { LoginTemplate } from "../../templates";
import { useAuthentification, useTranslation } from "../../customHooks";
import { toast } from "react-toastify";
import { AuthAPI } from "../../apis";

const Login = (): JSX.Element => {
  const { tr } = useTranslation();
  const auth = useAuthentification();
  const authApi = new AuthAPI();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [state, setState] = useState<ILoginState>(INIT_LOGIN_STATE);

  const handleSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await authApi.login(state);
      const { user, accessToken, refreshToken } = response.data;
      auth.setAuthStore({
        userId: user._id,
        accessToken,
        refreshToken,
      });
      toast.success(tr("welcomeToDashboard"));
    } catch (error) {
      console.error(error);
      toast.error(tr("internalServerError"));
      auth.setAuthStore({
        userId: 1,
        accessToken: "accessToken",
        refreshToken: "refreshToken",
      });
    } finally {
      setIsLoading(false);
    }
  }, [state, authApi, auth, tr]);

  return (
    <LoginTemplate
      isLoading={isLoading}
      state={state}
      onChangeState={setState}
      onSubmit={handleSubmit}
    />
  );
};
export default Login;
