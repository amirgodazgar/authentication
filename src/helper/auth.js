import Cookies from "js-cookie";

export const clearCookies = () => {
  Cookies.remove("token");
  Cookies.remove("tokenExp");
  Cookies.remove("refreshToken");
  Cookies.remove("refreshTokenExp");
  Cookies.remove("isLogin");
};

export const setTokenCookies = (tokenInfo) => {
  const { token, tokenExp, refreshToken, refreshTokenExp } = tokenInfo;

  Cookies.set("token", token);
  Cookies.set("tokenExp", tokenExp);
  Cookies.set("refreshToken", refreshToken);
  Cookies.set("refreshTokenExp", refreshTokenExp);
  Cookies.set("isLogin", true);
};
