import {
  IAuthReducer,
  IForgotPasswordState,
  ILoginState,
  IResetPasswordState,
} from "../../interfaces";

const INIT_AUTH_REDUCER_STATE: IAuthReducer = {
  accessToken: undefined,
  refreshToken: undefined,
  userId: undefined,
};
const INIT_LOGIN_STATE: ILoginState = {
  email: "",
  password: "",
  isKeepMeLogedIn: false,
};
const INIT_FORGOTPASSWORD_STATE: IForgotPasswordState = {
  email: "",
};
const INIT_RESETPASSWORD_STATE: IResetPasswordState = {
  password: "",
  confirmPassword: "",
};
export {
  INIT_LOGIN_STATE,
  INIT_AUTH_REDUCER_STATE,
  INIT_FORGOTPASSWORD_STATE,
  INIT_RESETPASSWORD_STATE,
};
