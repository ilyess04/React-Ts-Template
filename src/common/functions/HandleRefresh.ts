import { HttpStatusCode } from "axios";
import { AuthAPI } from "../../apis";
import { resetCredentials, setCredentials, store } from "../../redux";

export const handleRefresh = async (): Promise<Response> => {
  try {
    const authApi = new AuthAPI();
    const response = await authApi.refreshToken();
    if (response.status === HttpStatusCode.Ok) {
      const { accessToken, refreshToken } = response.data;
      store.dispatch(setCredentials({ accessToken, refreshToken }));
    }
    return response.data;
  } catch (err) {
    throw err;
  }
};

export function nulleStore() {
  store.dispatch(resetCredentials());
}
