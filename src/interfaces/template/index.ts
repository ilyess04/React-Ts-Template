import { IAuthState } from "../state";

interface ILoginTemplate {
  authState: IAuthState;
  setAuthState: React.Dispatch<React.SetStateAction<IAuthState>>;
  onForgotPassword: Function;
  onSubmit:Function;
}
export type { ILoginTemplate };
