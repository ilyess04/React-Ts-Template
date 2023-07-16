import { IAuthReducer } from "../interfaces";
import { IAuthState } from "../interfaces/state";

const INIT_AUTH_REDUCER_STATE: IAuthReducer = {
  accessToken: undefined,
  refreshToken: undefined,
  user: undefined,
};
const INIT_AUTH_STATE: IAuthState = {
  email: "",
  password: "",
};
export { INIT_AUTH_STATE, INIT_AUTH_REDUCER_STATE };
