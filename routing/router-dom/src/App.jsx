import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <h1>This is the React Routing.</h1>
      <Navbar />
      <Outlet></Outlet>
    </div>
  );
}

export default App;
