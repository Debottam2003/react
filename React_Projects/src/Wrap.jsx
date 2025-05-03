import React, { useState } from "react";
import { createContext } from "react";
export let auth = createContext();
import Home from "./home.jsx";
import Login from "./login.jsx";
import Detail from "./detail.jsx";
import App from "./router.jsx";
import Update from "./update.jsx";
import Runtodo from "./runtodo.jsx";
import Foreach from "./foreach.jsx";
import Usecustomhook from "./usecustomhook.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserContextProvider } from "./UserContextProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "login",
        element: <Login />,
        children: [{ path: "details", element: <Detail /> }],
      },
    ],
  },
]);

function Wrap() {
  let [login, setLogin] = useState("true");
  return (
    // <auth.Provider value={{ login, setLogin }}>
    //   <RouterProvider router={router} />
    // </auth.Provider>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  );
}

export default Wrap;
