import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/authProvider";
import { clearCookies } from "../helper/auth";

const useLogout = () => {
  const { setAuth } = useContext(AuthContext);
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

export default useLogout;
