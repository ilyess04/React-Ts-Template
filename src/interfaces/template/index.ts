import { IKeys } from "../common";
import { ILoginState } from "../state";

interface IDefaultTemplate {
  lang: IKeys;
}
interface ILoginTemplate {
  state: ILoginState;
  onChangeState: React.Dispatch<React.SetStateAction<ILoginState>>;
  onSubmit: () => void;
}
interface IHomeTemplate {}
export type { ILoginTemplate, IHomeTemplate, IDefaultTemplate };
