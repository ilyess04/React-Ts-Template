import {
  IForgotPasswordState,
  ILoginState,
  IResetPasswordState,
} from "../state";

interface IDefaultTemplate {
  onSubmit: () => void;
}
interface ILoginTemplate extends IDefaultTemplate {
  isLoading: boolean;
  state: ILoginState;
  onChangeState: React.Dispatch<React.SetStateAction<ILoginState>>;
}
interface IForgotPasswordTemplate extends IDefaultTemplate {
  isLoading: boolean;
  state: IForgotPasswordState;
  onChangeState: React.Dispatch<React.SetStateAction<IForgotPasswordState>>;
}
interface IResetPasswordTemplate extends IDefaultTemplate {
  isLoading: boolean;
  state: IResetPasswordState;
  onChangeState: React.Dispatch<React.SetStateAction<IResetPasswordState>>;
}

export type {
  ILoginTemplate,
  IDefaultTemplate,
  IForgotPasswordTemplate,
  IResetPasswordTemplate,
};
