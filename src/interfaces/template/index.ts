import { IKeys } from "../common";
import { IAuthState } from "../state";

interface IDefaultTemplate {
  lang: IKeys;
}
interface ILoginTemplate {
  authState: IAuthState;
  setAuthState: React.Dispatch<React.SetStateAction<IAuthState>>;
  onForgotPassword: Function;
  onSubmit: Function;
}
interface IHomeTemplate {}
export type { ILoginTemplate, IHomeTemplate, IDefaultTemplate };
