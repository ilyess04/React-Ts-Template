import axios, { AxiosInstance, RawAxiosRequestHeaders } from "axios";
import { handleRefresh } from "./HandleRefresh";

export function getApiAxios(payload: {
  baseUrl: string;
  headers: RawAxiosRequestHeaders;
  isRefreshToken: boolean;
}): AxiosInstance {
  let _api: AxiosInstance = axios.create({
    baseURL: payload.baseUrl,
    headers: payload.headers,
  });

  if (payload.isRefreshToken) {
    _api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (
          error.response &&
          error.response.status === 401 &&
          !originalRequest._retry
        ) {
          originalRequest._retry = true;

          try {
            await handleRefresh();
            return _api(originalRequest);
          } catch (refreshError) {
            throw refreshError;
          }
        }

        throw error;
      }
    );
  }

  return _api;
}
