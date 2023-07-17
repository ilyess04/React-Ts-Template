import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IAuthState } from "../../interfaces/state";
import { INIT_AUTH_STATE } from "../../consts";
import { LoginTemplate } from "../../templates";
import { LangContext } from "../../lang/provider/Provider";
import { AuthAPI } from "../../apis";
import { HttpStatusCode } from "axios";
import { setCredentials } from "../../redux";
import { useDispatch } from "react-redux";
import { IAuthReducer } from "../../interfaces";
import { DocumentTitle } from "../../enums";

const Login = (): JSX.Element => {
  const lang = useContext(LangContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authApi = new AuthAPI();
  const [authState, setAuthState] = useState<IAuthState>(INIT_AUTH_STATE);

  useEffect(() => {
    document.title = DocumentTitle.login;
  });
  const handleSubmit = async () => {
    try {
      const response = await authApi.login(authState);
      if (response.status === HttpStatusCode.Ok) {
        const data: IAuthReducer = response.data;
        dispatch(setCredentials(data));
      } else {
        // toast error
      }
    } catch (err) {
      //toast error
    }
  };
  return (
    <LoginTemplate
      lang={lang}
      authState={authState}
      setAuthState={setAuthState}
      onForgotPassword={() => {
        navigate("forgot-password");
      }}
      onSubmit={handleSubmit}
    />
  );
};
export default Login;
