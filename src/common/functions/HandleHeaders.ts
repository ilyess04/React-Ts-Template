import { RawAxiosRequestHeaders } from "axios";
import { EToken } from "../enums";
import { store } from "../../redux";

export function handleHeaders(tokenType: EToken): RawAxiosRequestHeaders {
  let headers: RawAxiosRequestHeaders = {
    "Content-Type": "application/json",
  };
  if (tokenType !== EToken.noToken) {
    const { accessToken, refreshToken } = getAuthState();
    if (accessToken && tokenType === EToken.accessToken) {
      headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      };
    } else {
      headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${refreshToken}`,
      };
    }
  }

  return headers;
}
function getAuthState(): { accessToken: string; refreshToken: string } {
  const { accessToken, refreshToken } = store.getState().auth;
  return { accessToken, refreshToken };
}
