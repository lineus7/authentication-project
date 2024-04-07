import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./views/LoginPage";
import LoginLayout from "./layouts/LoginLayout";
import RegisterPage from "./views/RegisterPage";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./views/HomePage";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
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
