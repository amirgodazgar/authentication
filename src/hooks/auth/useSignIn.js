import { useEffect, useState } from "react";
import { clearCookies, setTokenCookies } from "../../helper/auth";
import { httpDefault } from "../../services/http";
import useAuth from "./useAuth";

const useSignIn = () => {
  const [information, setInformation] = useState({});
  const { setAuth } = useAuth();
  const { userName, password } = information;

  useEffect(() => {
    httpDefault
      .post("/Account/SignIn", {
        userName,
        password,
      })
      .then((response) => {
        if (response?.status === 200) {
          const tokenData = response?.data?.data;
          const tokenInfo = {
            accessToken: tokenData?.accessToken,
            tokenExpiration: tokenData?.accessTokenExpirationTime,
            refreshToken: tokenData?.refreshToken,
            refreshTokenExpiration: tokenData?.refreshTokenExpirationTime,
          };
          setAuth((prev) => ({
            ...prev,
            isLogin: true,
            error: null,
            ...tokenInfo,
          }));
          setTokenCookies(tokenInfo);
        }
      })
      .catch((error) => {
        setAuth((prev) => ({
          ...prev,
          isLogin: false,
          accessToken: null,
          tokenExpiration: null,
          refreshToken: null,
          refreshTokenExpiration: null,
          error: error?.response,
        }));
        clearCookies();
      });
  }, [information]);

  return { setInformation };
};

export default useSignIn;
