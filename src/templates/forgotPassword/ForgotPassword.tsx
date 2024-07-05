import { AuthForm } from "../../components";
import { IForgotPasswordTemplate } from "../../interfaces";

const ForgotPasswordTemplate = ({
  isLoading,
  state,
  onChangeState,
  onSubmit,
}: IForgotPasswordTemplate): JSX.Element => {
  return (
    <AuthForm
      isLoading={isLoading}
      type="forgotPassword"
      email={state.email}
      onChangeEmail={(value) => onChangeState({ ...state, email: value })}
      onSubmit={onSubmit}
    />
  );
};

export default ForgotPasswordTemplate;
