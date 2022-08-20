import { useEffect, useState } from "react";
import { clearCookies } from "../../helper/auth";
import { httpDefault } from "../../services/http";
import useAuth from "./useAuth";

const useResetPassword = () => {
  const [information, setInformation] = useState({});
  const { setAuth } = useAuth();

  const { password, confirmPassword } = information;

  useEffect(() => {
    httpDefault
      .post("/Account/ResetPassword", {
        password,
        confirmPassword,
      })
      .then((res) => {
        if (res.status === 200) {
          // Redirect user to sign-in page

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

          console.log("ResetPassword", res);
        }
      })
      .catch((err) => {
        // show error message
        console.log("ResetPassword", err);
      });
  }, [information]);

  return { setInformation };
};

export default useResetPassword;
