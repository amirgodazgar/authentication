import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import useAuth from "./hooks/auth/useAuth";
import useHttpPrivate from "./hooks/auth/useHttpPrivate";
import useRefreshToken from "./hooks/auth/useRefreshToken";
import useSignIn from "./hooks/auth/useSignIn";
import useSignOut from "./hooks/auth/useSignOut";
import Layout from "./view/layout/layout";

function App() {
  const [get, setGet] = useState(false);
  const { auth } = useAuth();
  const { setLogout } = useSignOut();
  const refresh = useRefreshToken();
  const httpPrivate = useHttpPrivate();

  useEffect(() => {
    httpPrivate.get("/Account/GetUserData").then((res) => {
      console.log(res);
    });
  }, [get]);

  return (
    <div className="App">
      {/* {auth.isLogin ? (
        <>
          <h2>You are Log in successfully</h2>
          <button onClick={() => setLogout(true)}>log out</button>
          <button onClick={() => refresh()}>refresh</button>
          <button onClick={() => setGet((prev) => !prev)}>get</button>
        </>
      ) : (
        <form onSubmit={(e) => submitHandler(e)}>
          <h1>Authentication</h1>
          <hr />
          <div>09212594679 - 123456789</div>
          <input
            type="text"
            name="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <br />
          <input
            type="text"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="submit">log in</button>
        </form>
      )} */}
      <Layout />
    </div>
  );
}

export default App;
