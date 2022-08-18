import { useEffect, useState } from "react";
import {
  clearCookies,
  clearTokenInformation,
  setTokenCookies,
} from "../../helper/auth";
import { httpDefault } from "../../services/http";
import useAuth from "./useAuth";

const useSignIn = () => {
  const [values, setValues] = useState({});
  const [shouldPersist, setShouldPersist] = useState(false);
  const { setAuth } = useAuth();
  const { userName, password } = values;

  const setInformation = (userInfo, isPersist) => {
    setShouldPersist(isPersist);
    setValues(userInfo);
  };

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

          if (shouldPersist) setTokenCookies(tokenInfo);
          else clearTokenInformation();
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
  }, [values]);

  return { setInformation };
};

export default useSignIn;
