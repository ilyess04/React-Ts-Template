import axios, { AxiosInstance, AxiosResponse } from "axios";
import { Config } from "../../common";
import { handleHeaders } from "../../common/functions/HandleHeaders";
import { tokenEnum } from "../../enums";

class DashboardAPI {
  _api: AxiosInstance;
  constructor() {
    this._api = axios.create({
      baseURL: Config.getInstance().API_URL + "/dashboard",
      headers: handleHeaders(tokenEnum.accessToken),
    });
  }

  async getDashboardData(): Promise<AxiosResponse> {
    return await this._api.get("/getdashboard");
  }
}
export { DashboardAPI };
