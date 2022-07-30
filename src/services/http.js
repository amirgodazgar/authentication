import axios from "axios";
import Cookies from "js-cookie";

import { logOut } from "./auth-method";
import { setTokenCookies } from "../helper/auth";

// import Router from "next/router";
// import { toast } from "react-toastify";

const axiosInstance = axios.create({
  baseURL: "",
  headers: { "X-Custom-Header": "foobar" },
});

axios.defaults.baseURL = "https://url/api/v1";

// Request Config ---------------------------------

axios.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
      config.headers["Cache-Control"] = `no-store`;
      config.headers["Cache-Control"] = `no-cache`;
      config.headers["Pragma"] = `no-cache`;
      return config;
    } else {
      return config;
    }
  },
  (error) => {
    Promise.reject(error);
  }
);

// Response Config -------------------------------

axios.interceptors.response.use(
  (res) => {
   console.log('resssss' , res);
    const expDate = new Date(Cookies.get("tokenExp"));
    const currentDate = new Date();
    const oneMinute = 30000;
    const expTokenTime = expDate.getTime() - oneMinute;
    const currentTime = currentDate.getTime();
    const isValidToken = expTokenTime > currentTime;
    const isToken = !!Cookies.get("token");

    const originalRequest = res.config;

    if (isToken) {
      if (isValidToken) {
        return res;
      } else {
        axios
          .post("/Account/RefreshToken", {
            accessToken: Cookies.get("token"),
            refreshToken: Cookies.get("refreshToken"),
          })
          .then((res) => {
            if (res.status === 201) {
              const tokenInfo = res.data;
              const tokenData = {
                token: tokenInfo.accessToken,
                tokenExp: tokenInfo.accessTokenExpirationTime,
                refreshToken: tokenInfo.refreshToken,
                refreshTokenExp: tokenInfo.refreshTokenExpirationTime,
              };
              setTokenCookies(tokenData);
              axios.defaults.headers.common[
                "Authorization"
              ] = `Bearer ${tokenInfo.accessToken}`;
              axios.defaults.headers.common["Cache-Control"] = `max-age=0`;
              window.location.reload();

              return res;
            } else {
              //   Router.push("/login");
            }
            return axios(originalRequest);
          });
      }
    } else {
      return res;
    }

    return res;
  },

  (error) => {
    const originalRequest = error.config;
    // console.log(error.response);
    // error.response.data.errors.forEach(function (msg) {
    //   console.log(msg.message);
    //   toast.error(msg.message);
    // });

    // prevent infinite loop --------------------
    if (
      error.response.status === 401 &&
      originalRequest.url === "/Account/RefreshToken"
    ) {
      logOut();
      return Promise.reject(error);
    }

    // handle refresh token ----------------------
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      axios
        .post("/Account/RefreshToken", {
          accessToken: Cookies.get("token"),
          refreshToken: Cookies.get("refreshToken"),
        })
        .then((res) => {
          if (res.status === 201) {
            const tokenInfo = res.data;
            const tokenData = {
              token: tokenInfo.accessToken,
              tokenExp: tokenInfo.accessTokenExpirationTime,
              refreshToken: tokenInfo.refreshToken,
              refreshTokenExp: tokenInfo.refreshTokenExpirationTime,
            };
            setTokenCookies(tokenData);

            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${tokenInfo.accessToken}`;
            Cookies.set("isLogin", true);
          } else {
            // Router.push("/login");
          }
          return axios(originalRequest);
        });
    } else {
    }
    return Promise.reject(error);
  }
);

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
export default http;
