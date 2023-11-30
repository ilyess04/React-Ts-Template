import { useEffect, useState } from "react";
import { ILoginState } from "../../interfaces/state";
import { INIT_LOGIN_STATE } from "../../consts";
import { LoginTemplate } from "../../templates";
import { AuthAPI } from "../../apis";
import { HttpStatusCode } from "axios";
import { DocumentTitle } from "../../enums";

const Login = (): JSX.Element => {
  const authApi = new AuthAPI();
  const [authState, setAuthState] = useState<ILoginState>(INIT_LOGIN_STATE);

  useEffect(() => {
    document.title = DocumentTitle.login;
  });
  const handleSubmit = async () => {
    try {
      const response = await authApi.login(authState);
      if (response.status === HttpStatusCode.Ok) {
        // set store data
      } else {
        // toast error
      }
    } catch (err) {
      //toast error
    }
  };
  return (
    <LoginTemplate
      authState={authState}
      setAuthState={setAuthState}
      onSubmit={handleSubmit}
    />
  );
};
export default Login;
