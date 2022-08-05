import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/authProvider";
import { clearCookies } from "../../helper/auth";
import { httpDefault } from "../../services/http";

const useResetPassword = () => {
  const [information, setInformation] = useState({});
  const { setAuth } = useContext(AuthContext);
  const { otpCode, userName, newPassword, newPasswordConfirmation } =
    information;

  // otpCode : the code that sent to user's phone by SMS after forgot-password

  useEffect(() => {
    httpDefault
      .post("/Account/ResetPassword", {
        code: otpCode,
        userName,
        newPassword,
        newPasswordConfirmation,
      })
      .then((res) => {
        if (res.status === 200) {
          // Redirect user to the sign-in page

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
