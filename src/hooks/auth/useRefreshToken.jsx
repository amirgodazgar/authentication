import { setTokenCookies } from "../../helper/auth";
import { httpDefault } from "../../services/http";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { auth, setAuth } = useAuth();

  const refresh = async () => {
    const response = await httpDefault.post("/Account/RefreshToken", {
      // withCredentials: true,
      accessToken: auth.accessToken,
      refreshToken: auth.refreshToken,
    });

    const tokenInfo = {
      accessToken: response?.data?.accessToken,
      tokenExpiration: response?.data?.accessTokenExpirationTime,
      refreshToken: response?.data?.refreshToken,
      refreshTokenExpiration: response?.data?.refreshTokenExpirationTime,
    };

    setAuth((prev) => ({
      ...prev,
      isLogin: true,
      error: null,
      ...tokenInfo,
    }));

    setTokenCookies(tokenInfo);
    return response.data.refreshToken;
  };

  return refresh;
};

export default useRefreshToken;
