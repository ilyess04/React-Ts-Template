import { store } from "../../redux";
import { IUser } from "../user";

interface IAuthReducer {
  accessToken?: string;
  refreshToken?: string;
  user?: IUser;
}
interface ISettingReducer {
  lang: string;
}
export type { IAuthReducer, ISettingReducer };
export type IRootState = ReturnType<typeof store.getState>;
