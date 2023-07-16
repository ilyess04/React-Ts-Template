import { IUser } from "../user";

interface IAuthReducer {
  accessToken?: string;
  refreshToken?: string;
  user?: IUser;
}
export type { IAuthReducer };
