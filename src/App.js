import { useContext, useState } from "react";
import "./App.css";
import AuthContext from "./context/authProvider";
import useSignIn from "./hooks/auth/useSignIn";
import useSignOut from "./hooks/auth/useSignOut";

function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { auth } = useContext(AuthContext);
  const { setInformation } = useSignIn();
  const { setLogout } = useSignOut();

  const submitHandler = (e) => {
    e.preventDefault();
    setInformation({ userName, password });
  };

  console.log(auth);

  return (
    <div className="App">
      {auth.isLogin ? (
        <>
          <h2>You are Log in successfully</h2>
          <button onClick={() => setLogout(true)}>log out</button>
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
          {/* <button onClick={logOut}>log out</button> */}
        </form>
      )}
    </div>
  );
}

export default App;
