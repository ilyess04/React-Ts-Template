import { RawAxiosRequestHeaders } from "axios";
import { TokenEnum } from "../../enums";
import { store } from "../../redux";

export function handleHeaders(tokenType: TokenEnum): RawAxiosRequestHeaders {
  let headers: RawAxiosRequestHeaders = {
    "Content-Type": "application/json",
  };
  if (tokenType !== TokenEnum.noToken) {
    const { accessToken, refreshToken } = getAuthState();
    if (accessToken && tokenType === TokenEnum.accessToken) {
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
