import { store } from "../../redux";
import { IUser } from "../user";

interface IAuthReducer {
  accessToken?: string;
  refreshToken?: string;
  user?: IUser;
}
export type { IAuthReducer };
export type IRootState = ReturnType<typeof store.getState>;
