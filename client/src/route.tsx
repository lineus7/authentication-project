import { createBrowserRouter, redirect } from "react-router-dom";
import LoginPage from "./views/LoginPage";
import LoginLayout from "./layouts/LoginLayout";
import RegisterPage from "./views/RegisterPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
    loader: () => {
      return redirect("/login");
    },
  },
  {
    element: <LoginLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
]);
