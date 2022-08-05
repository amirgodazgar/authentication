import Cookies from "js-cookie";

export const clearCookies = () => {
  Cookies.remove("accessToken");
  Cookies.remove("tokenExpiration");
  Cookies.remove("refreshToken");
  Cookies.remove("refreshTokenExpiration");
  Cookies.set("isLogin", false);
};

export const setTokenCookies = (tokenInfo) => {
  const { accessToken, tokenExpiration, refreshToken, refreshTokenExpiration } =
    tokenInfo;

  Cookies.set("accessToken", accessToken);
  Cookies.set("tokenExpiration", tokenExpiration);
  Cookies.set("refreshToken", refreshToken);
  Cookies.set("refreshTokenExpiration", refreshTokenExpiration);
  Cookies.set("isLogin", true);
};
