import { useState } from "react";
import { ILoginState } from "../../interfaces/state";
import { INIT_LOGIN_STATE } from "../../consts";
import { LoginTemplate } from "../../templates";
import { AuthAPI } from "../../apis";
import { useAuthentification } from "../../common/customHooks";

const Login = (): JSX.Element => {
  const auth = useAuthentification();
  const [authState, setAuthState] = useState<ILoginState>(INIT_LOGIN_STATE);
  const handleSubmit = async () => {
    auth.setAuthStore({
      user: { mail: authState.email, _id: "test", fullName: "test" },
      accessToken: "accessToken",
      refreshToken: "refreshToken",
    });
  };
  return (
    <LoginTemplate
      state={authState}
      onChangeState={setAuthState}
      onSubmit={handleSubmit}
    />
  );
};
export default Login;
