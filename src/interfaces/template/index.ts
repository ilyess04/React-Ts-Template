import { IKeys } from "../common";
import { ILoginState } from "../state";

interface IDefaultTemplate {
  lang: IKeys;
}
interface ILoginTemplate {
  authState: ILoginState;
  setAuthState: React.Dispatch<React.SetStateAction<ILoginState>>;
  onSubmit: Function;
}
interface IHomeTemplate {}
export type { ILoginTemplate, IHomeTemplate, IDefaultTemplate };
