import axios, { AxiosInstance, AxiosResponse } from "axios";
import { Config } from "../../common";

class DashboardAPI {
  _api: AxiosInstance;
  constructor() {
    this._api = axios.create({
      baseURL: Config.getInstance().API_URL + "/dashboard",
      headers: {
        // Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
  }

  async getDashboardData(): Promise<AxiosResponse> {
    return await this._api.get("/getdashboard");
  }
}
export { DashboardAPI };
