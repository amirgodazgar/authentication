import { useEffect, useState } from "react";
import { httpDefault } from "../../services/http";

const useForgotPassword = () => {
  const [information, setInformation] = useState({});
  const { userName } = information;
  useEffect(() => {
    httpDefault
      .post("/Account/ForgetPassword", {
        userName,
      })
      .then((res) => {
        if (res.status === 200) {
          // sending otpCode to user and redirect him/her to reset-password page
          console.log(res);
        }
      })
      .catch((err) => {
        console.log(err.response);
        // show error message
      });
  }, [information]);

  return { setInformation };
};

export default useForgotPassword;
