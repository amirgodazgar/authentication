import { useEffect, useState } from "react";
import { httpDefault } from "../../services/http";

const useResetPassword = () => {
  const [information, setInformation] = useState({});
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
          // pushing user to the Login page for sign in
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
