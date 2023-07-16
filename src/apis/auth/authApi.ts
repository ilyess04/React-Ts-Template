import axios, { AxiosResponse } from "axios";
import { Config } from "../../common";
import { IAuthState } from "../../interfaces/state";

class AuthAPI {
  _apiUrl: string;
  constructor() {
    this._apiUrl = Config.getInstance().API_URL + "/auth";
  }

  async login(payload: IAuthState): Promise<AxiosResponse> {
    return await axios.post(this._apiUrl, payload);
  }
}
export { AuthAPI };
