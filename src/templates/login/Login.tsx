import { AuthForm } from "../../components";
import { ILoginTemplate } from "../../interfaces";

const LoginTemplate = ({
  isLoading,
  state,
  onChangeState,
  onSubmit,
}: ILoginTemplate): JSX.Element => {
  return (
    <AuthForm
      isLoading={isLoading}
      type="login"
      email={state.email}
      passWord={state.password}
      isRemembred={state.isKeepMeLogedIn}
      onChangeEmail={(value) => onChangeState({ ...state, email: value })}
      onChangePassWord={(value) => onChangeState({ ...state, password: value })}
      onChangeIsRemembred={(value) =>
        onChangeState({ ...state, isKeepMeLogedIn: value })
      }
      onSubmit={onSubmit}
    />
  );
};
export default LoginTemplate;
