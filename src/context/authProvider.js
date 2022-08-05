import { createContext, useReducer, useState } from "react";

const AuthContext = createContext({});

const initialState = {
  isLogin: false,
  accessToken: null,
  tokenExpiration: null,
  refreshToken: null,
  refreshTokenExpiration: null,
  error: null,
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialState);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
