import { useEffect, useState } from "react";
import Home from "./Home";
import Login from "./Login";

// Conditional Rendering

function App() {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    setAuth(false); // Replace with auth checking using fetch or axios
    // else setAuth(false);
  }, []);
  return auth ? <Home /> : <Login />;
}

export default App;
