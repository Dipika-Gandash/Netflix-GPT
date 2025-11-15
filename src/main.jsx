import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./components/Browse.jsx";
import AuthPage from "./components/AuthPage.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/browse",
        element: <Browse />
      },
      {
        path: "/signIn",
        element: <AuthPage mode="signIn" />
      },
      {
        path: "/signUp",
        element: <AuthPage mode="signUp" />
      }
    ],
    errorElement: <ErrorPage />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>
);
