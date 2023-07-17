import { RawAxiosRequestHeaders } from "axios";
import { tokenEnum } from "../../enums";
import { store } from "../../redux";

export function handleHeaders(tokenType: tokenEnum): RawAxiosRequestHeaders {
  let headers: RawAxiosRequestHeaders = {
    "Content-Type": "application/json",
  };
  if (tokenType !== tokenEnum.noToken) {
    const { accessToken, refreshToken } = getAuthState();
    if (accessToken && tokenType === tokenEnum.accessToken) {
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
