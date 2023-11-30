import { IAuthReducer, ILoginState } from "../interfaces";

const INIT_AUTH_REDUCER_STATE: IAuthReducer = {
  accessToken: undefined,
  refreshToken: undefined,
  user: undefined,
};
const INIT_LOGIN_STATE: ILoginState = {
  email: "",
  password: "",
};
export { INIT_LOGIN_STATE, INIT_AUTH_REDUCER_STATE };
