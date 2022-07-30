import Cookies from "js-cookie";
import { clearCookies, setTokenCookies } from "../helper/auth";
import http from "./http";

// ------------------ SIGN IN -------------------------
export const logIn = async (userInfo) => {
  const { username, password } = userInfo;
  // clearing token and login from cookie
  clearCookies();

  // sign in and set token information and login in cookie
  await http
    .post("/Account/SignIn", {
      userName: username,
      password: password,
    })
    .then((response) => {
      console.log(response);

      if (response.status === 200) {
        const token = response.data.data;
        const tokenInfo = {
          token: token.accessToken,
          tokenExp: token.accessTokenExpirationTime,
          refreshToken: token.refreshToken,
          refreshTokenExp: token.refreshTokenExpirationTime,
        };
        setTokenCookies(tokenInfo);
      }
    })
    .catch((error) => {
      // show error message
      console.log("error", error.response);
    });
};

// ------------------ SIGN OUT -------------------------
export const logOut = () => {
  // clearing token and login from cookie
  clearCookies();

  // reloading page to reset its information in logout mode
  Cookies.set("isLogin", false);
  setTimeout(() => {
    window.location.reload();
  }, 1000);
};

// ------------------ SIGN UP -------------------------
export const signUp = async (userInfo) => {
  const { username, password } = userInfo;

  await http
    .post("/Account/SignUp", {
      userName: username,
      password: password,
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
};

// ------------------ FORGOT PASSWORD -------------------------
export const forgotPassword = () => {};

// ------------------ RESET PASSWORD -------------------------
export const resetPassword = () => {};
