import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/auth/useAuth";

const Authorized = () => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth?.isLogin ? (
    <Outlet />
  ) : (
    <Navigate to="sign-in" state={{ from: location }} replace />
  );
};

export default Authorized;
