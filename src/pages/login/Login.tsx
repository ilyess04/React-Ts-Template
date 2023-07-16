import { SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IAuthState } from "../../interfaces/state";
import { INIT_AUTH_STATE } from "../../consts";
import { LoginTemplate } from "../../templates";

const Login = (): JSX.Element => {
  const navigate = useNavigate();
  const [authState, setAuthState] = useState<IAuthState>(INIT_AUTH_STATE);
  const handleSubmit = async () => {
    console.log(authState);
  };
  return (
    <LoginTemplate
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
