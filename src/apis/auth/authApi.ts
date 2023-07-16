import axios, { AxiosInstance, AxiosResponse } from "axios";
import { Config } from "../../common";
import { IAuthState } from "../../interfaces/state";

class AuthAPI {
  _api: AxiosInstance;
  constructor() {
    this._api = axios.create({
      baseURL: Config.getInstance().API_URL + "/auth",
    });
  }

  async login(payload: IAuthState): Promise<AxiosResponse> {
    return await this._api.post("/login", payload);
  }
  async refreshToken(): Promise<AxiosResponse> {
    return this._api.get("refresh");
  }
}
export { AuthAPI };
