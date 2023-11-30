import { AxiosInstance, AxiosResponse } from "axios";
import { Config } from "../../common";
import { handleHeaders } from "../../common/functions/HandleHeaders";
import { TokenEnum } from "../../enums";
import { getApiAxios } from "../../common/functions/GetApiAxios";
import { ILoginState } from "../../interfaces";

class AuthAPI {
  _api: AxiosInstance = getApiAxios({
    baseUrl: Config.getInstance().API_URL + "/auth",
    headers: handleHeaders(TokenEnum.noToken),
    isRefreshToken: false,
  });

  async login(payload: ILoginState): Promise<AxiosResponse> {
    return await this._api.post("/login", payload);
  }
  async refreshToken(): Promise<AxiosResponse> {
    return this._api.get("refresh", {
      headers: handleHeaders(TokenEnum.refreshToken),
    });
  }
}
export { AuthAPI };
