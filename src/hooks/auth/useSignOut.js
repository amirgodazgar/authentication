import { useEffect, useState } from "react";
import { clearCookies } from "../../helper/auth";
import useAuth from "./useAuth";

const useSignOut = () => {
  const { setAuth } = useAuth();
  const [logout, setLogout] = useState(false);

  useEffect(() => {
    if (logout) {
      setAuth((prev) => ({
        ...prev,
        isLogin: false,
        accessToken: null,
        tokenExpiration: null,
        refreshToken: null,
        refreshTokenExpiration: null,
        error: null,
      }));

      clearCookies();

      // setTimeout(() => {
      //   window.location.reload();
      // }, 1000);
    } else {
      setLogout(false);
    }
  }, [logout]);

  return { setLogout };
};

export default useSignOut;
