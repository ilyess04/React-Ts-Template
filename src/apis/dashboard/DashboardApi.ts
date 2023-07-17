import { AxiosInstance, AxiosResponse } from "axios";
import { Config } from "../../common";
import { handleHeaders } from "../../common/functions/HandleHeaders";
import { tokenEnum } from "../../enums";
import { getApiAxios } from "../../common/functions/GetApiAxios";

class DashboardAPI {
  _api: AxiosInstance;
  constructor() {
    this._api = getApiAxios({
      baseUrl: Config.getInstance().API_URL + "/dashboard",
      headers: handleHeaders(tokenEnum.accessToken),
      isRefreshToken: true,
    });
  }

  async getDashboardData(): Promise<AxiosResponse> {
    return await this._api.get("/getdashboard");
  }
}
export { DashboardAPI };
