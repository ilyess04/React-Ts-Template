import { AxiosInstance, AxiosResponse } from "axios";
import { Config } from "../../common";
import { handleHeaders } from "../../common/functions/HandleHeaders";
import { EToken } from "../../common/enums";
import { getApiAxios } from "../../common/functions/GetApiAxios";
import {
  IForgotPasswordState,
  ILoginState,
  IResetPasswordState,
} from "../../interfaces";

class AuthAPI {
  _api: AxiosInstance;

  constructor() {
    this._api = getApiAxios({
      baseUrl: Config.getInstance().API_URL + "/auth",
      headers: handleHeaders(EToken.noToken),
      isRefreshToken: false,
    });
  }

  async login(payload: ILoginState): Promise<AxiosResponse> {
    return await this._api.post("/login", payload);
  }

  async sendEmailReset(payload: IForgotPasswordState): Promise<AxiosResponse> {
    return this._api.post("/forgotpassword", payload);
  }

  async resetPassword(
    id: string,
    payload: IResetPasswordState
  ): Promise<AxiosResponse> {
    return this._api.post(`/resetpassword/:${id}`, payload);
  }

  async refreshToken(): Promise<AxiosResponse> {
    return this._api.get("refresh", {
      headers: handleHeaders(EToken.refreshToken),
    });
  }
}
export { AuthAPI };
