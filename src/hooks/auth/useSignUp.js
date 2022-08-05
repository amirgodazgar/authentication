import { useEffect, useState } from "react";
import { httpDefault } from "../../services/http";

const useSignUp = () => {
  const [information, setInformation] = useState({});
  const { userName, password } = information;
  useEffect(() => {
    httpDefault
      .post("/Account/SignUp", {
        userName,
        password,
      })
      .then((res) => {
        if (res.status === 200) {
          // pushing user to Login page for sign in
          console.log(res);
        }
      })
      .catch((error) => {
        // show error message
        console.log("error", error.response);
      });
  }, [information]);

  return { setInformation };
};

export default useSignUp;
