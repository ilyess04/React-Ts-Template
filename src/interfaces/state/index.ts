interface ILoginState {
  email: string;
  password: string;
  isKeepMeLogedIn: boolean;
}
interface IForgotPasswordState {
  email: string;
}
interface IResetPasswordState {
  password: string;
  confirmPassword: string;
}
export type { IForgotPasswordState, ILoginState, IResetPasswordState };
