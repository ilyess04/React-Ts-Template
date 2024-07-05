import { ETheme, Elang } from "../../common/enums";
import { store } from "../../redux";

interface IAuthReducer {
  accessToken?: string;
  refreshToken?: string;
  userId?: number | string;
}
interface ISettingReducer {
  lang: Elang;
  theme: ETheme;
  isCollapsedSidebar: boolean;
}
export type { IAuthReducer, ISettingReducer };
export type IRootState = ReturnType<typeof store.getState>;
