import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/authProvider";
import { clearCookies } from "../../helper/auth";
import { httpDefault } from "../../services/http";

const useForgotPassword = () => {
  const [information, setInformation] = useState({});
  const { setAuth } = useContext(AuthContext);
  const { userName } = information;
  
  useEffect(() => {
    httpDefault
      .post("/Account/ForgetPassword", {
        userName,
      })
      .then((res) => {
        if (res.status === 200) {
          // sending otpCode to user's phone and redirect him/her to reset-password page

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

          console.log("ForgetPassword", res);
        }
      })
      .catch((err) => {
        // show error message
        console.log("ForgetPassword", err);
      });
  }, [information]);

  return { setInformation };
};

export default useForgotPassword;
