import { IKeys } from "../common";
import { IAuthState } from "../state";

interface IDefaultTemplate {
  lang: IKeys;
}
interface ILoginTemplate extends IDefaultTemplate {
  authState: IAuthState;
  setAuthState: React.Dispatch<React.SetStateAction<IAuthState>>;
  onForgotPassword: Function;
  onSubmit: Function;
}
interface IHomeTemplate extends IDefaultTemplate {}
export type { ILoginTemplate, IHomeTemplate };
