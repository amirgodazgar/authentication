import { useState } from "react";
import "./App.css";
import { logIn, logOut } from "./services/auth-method";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="App">
      <div>
        <h1>Authentication</h1>
        <hr />
        <div>09212594679 - 123456789</div>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={() => logIn({ username, password })}>log in</button>
        <button onClick={logOut}>log out</button>
      </div>
    </div>
  );
}

export default App;
