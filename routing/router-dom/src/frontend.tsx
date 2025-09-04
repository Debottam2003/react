/**
 * This file is the entry point for the React app, it sets up the root
 * element and renders the App component to the DOM.
 *
 * It is included in `src/index.html`.
 */

import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Contact from "./Contact";
import Home from "./Home";

const elem = document.getElementById("root")!;
// const app = <App />;

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

if (import.meta.hot) {
  // With hot module reloading, `import.meta.hot.data` is persisted.
  const root = (import.meta.hot.data.root ??= createRoot(elem));
  root.render(<RouterProvider router={router} />);
} else {
  // The hot module reloading API is not available in production.
  createRoot(elem).render(<RouterProvider router={router} />);
}
