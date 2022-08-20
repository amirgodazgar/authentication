import { useEffect } from "react";
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Authorized from "./components/Authorized";
import useAuth from "./hooks/auth/useAuth";
import useHttpPrivate from "./hooks/auth/useHttpPrivate";
import ForgotPassword from "./view/forgot-password/forgot-password";
import Layout from "./view/layout/layout";
import ResetPassword from "./view/reset-password/reset-password";
import SignIn from "./view/sign-in/sign-in";
import SignUp from "./view/sign-up/sign-up";
import VerificationCode from "./view/verification/verification-code";
import Welcome from "./view/welcome-page/welcome";

function App() {
  // const [get, setGet] = useState(false);
  // const httpPrivate = useHttpPrivate();
  const navigate = useNavigate();
  const { auth } = useAuth();
  const routes = [
    {
      path: "sign-in",
      component: <SignIn />,
    },
    {
      path: "sign-up",
      component: <SignUp />,
    },
    {
      path: "forgot-password",
      component: <ForgotPassword />,
    },
    {
      path: "verification-code",
      component: <VerificationCode />,
    },
    {
      path: "reset-password",
      component: <ResetPassword />,
    },
  ];

  // useEffect(() => {
  //   httpPrivate.get("/Account/GetUserData").then((res) => {
  //     console.log(res);
  //   });
  // }, [get]);

  useEffect(() => {
    navigate("/sign-in", { replace: true });
  }, []);

  console.log("App", auth);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* PUBLIC ROUTES -------------------- */}
          {routes.map(({ path, component }) => (
            <Route path={path} element={component} key={path} />
          ))}

          {/* PRIVATE ROUTES --------------------*/}
          <Route element={<Authorized />}>
            <Route path="/welcome" element={<Welcome />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
