import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./Register.jsx";
import Login from "./login.jsx";
import Profile from "./Profile.jsx";
import Generate from "./Generate.jsx";
import IndiviualRecipe from "./IndiviualRecipe.jsx";
import MultipleInteractionCard from "./RecipeCard.jsx";
import GeneratedRecipe from "./GeneratedRecipe.jsx";
import Search from "./Search.jsx";
import About from "./About.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <MultipleInteractionCard />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "generate",
        element: <Generate />,
      },
      {
        path: "recipe/:rid",
        element: <IndiviualRecipe />,
      },
      {
        path: "generatedrecipe/:gid",
        element: <GeneratedRecipe />,
      },
      { path: "/about", element: <About /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);

const elem = document.getElementById("root")!;
const app = (
  <>
    <RouterProvider router={router} />
  </>
);

if (import.meta.hot) {
  // With hot module reloading, `import.meta.hot.data` is persisted.
  const root = (import.meta.hot.data.root ??= createRoot(elem));
  root.render(app);
} else {
  // The hot module reloading API is not available in production.
  createRoot(elem).render(app);
}

// bun build ./frontend.tsx --outdir ../backend/public --minify
