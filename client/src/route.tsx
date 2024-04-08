import { createBrowserRouter, redirect } from "react-router-dom";
import LoginPage from "./views/LoginPage";
import LoginLayout from "./layouts/LoginLayout";
import RegisterPage from "./views/RegisterPage";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./views/HomePage";
import { getCookie } from "./utils/getCookies";

export const router = createBrowserRouter([
  {
    loader: () => {
      if (getCookie("userLogin")) return null;
      return redirect("/login");
    },
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
  {
    loader: () => {
      if (getCookie("userLogin")) return redirect("/");
      return null;
    },
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
