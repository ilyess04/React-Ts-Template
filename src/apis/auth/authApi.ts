import { AxiosInstance, AxiosResponse } from "axios";
import { Config } from "../../common";
import { IAuthState } from "../../interfaces/state";
import { handleHeaders } from "../../common/functions/HandleHeaders";
import { tokenEnum } from "../../enums";
import { getApiAxios } from "../../common/functions/GetApiAxios";

class AuthAPI {
  _api: AxiosInstance;
  constructor() {
    this._api = getApiAxios({
      baseUrl: Config.getInstance().API_URL + "/auth",
      headers: handleHeaders(tokenEnum.noToken),
      isRefreshToken: false,
    });
  }

  async login(payload: IAuthState): Promise<AxiosResponse> {
    return await this._api.post("/login", payload);
  }
  async refreshToken(): Promise<AxiosResponse> {
    return this._api.get("refresh", {
      headers: handleHeaders(tokenEnum.refreshToken),
    });
  }
}
export { AuthAPI };
