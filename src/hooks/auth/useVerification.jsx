import { useEffect, useState } from "react";
import { clearCookies } from "../../helper/auth";
import { httpDefault } from "../../services/http";
import useAuth from "./useAuth";

const useVerification = () => {
  const [information, setInformation] = useState({});
  const { setAuth } = useAuth();
  const { verifyCode } = information;

  // verifyCode : the code sent to user by sms or email

  useEffect(() => {
    httpDefault
      .post("/Account/VerificationCode", {
        code: verifyCode,
      })
      .then((res) => {
        if (res.status === 200) {
          //if the code was valid => Redirect to reset-password page

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
          console.log("VerificationCode", res);
        }
      })
      .catch((err) => {
        // show error message
        console.log("VerificationCode", err);
      });
  }, [information]);

  return { setInformation };
};

export default useVerification;
