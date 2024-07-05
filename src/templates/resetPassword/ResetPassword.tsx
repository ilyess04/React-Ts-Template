import { AuthForm } from "../../components";
import { IResetPasswordTemplate } from "../../interfaces";

const ResetPasswordTemplate = ({
  isLoading,
  state,
  onChangeState,
  onSubmit,
}: IResetPasswordTemplate): JSX.Element => {
  return (
    <AuthForm
      isLoading={isLoading}
      type="resetPassword"
      passWord={state.password}
      onChangePassWord={(value) => onChangeState({ ...state, password: value })}
      confirmPassWord={state.confirmPassword}
      onChangeConfirmPassWord={(value) =>
        onChangeState({ ...state, confirmPassword: value })
      }
      onSubmit={onSubmit}
    />
  );
};

export default ResetPasswordTemplate;
