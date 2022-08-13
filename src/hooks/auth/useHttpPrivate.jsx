import { useEffect } from "react";
import { httpPrivate } from "../../services/http";
import useAuth from "./useAuth";
import useRefreshToken from "./useRefreshToken";

const useHttpPrivate = () => {
  const refresh = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {
    const requestInterceptor = httpPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${auth?.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseInterceptor = httpPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;

        const authorizationError =
          (error?.response?.status === 403 ||
            error?.response?.status === 401) &&
          !prevRequest?.sent;

        if (error?.response?.status === 401 && !prevRequest?.sent) {
          prevRequest.sent = true;
          await refresh();
          prevRequest.headers["Authorization"] = `Bearer ${auth.accessToken}`;
          return httpPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      httpPrivate.interceptors.response.eject(responseInterceptor);
      httpPrivate.interceptors.request.eject(requestInterceptor);
    };
  }, [auth, refresh]);

  return httpPrivate;
};

export default useHttpPrivate;
