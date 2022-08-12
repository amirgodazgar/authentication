import { useContext } from "react";
import AuthContext from "../../context/authProvider";

const useAuth = () => {
  const { auth, setAuth } = useContext(AuthContext);
  return {
    auth,
    setAuth,
  };
};

export default useAuth;
