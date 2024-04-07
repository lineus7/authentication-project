import { createBrowserRouter, redirect } from "react-router-dom";
import LoginPage from "./views/LoginPage";
import LoginLayout from "./layouts/LoginLayout";

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
        element: <div>Hello World</div>,
      },
    ],
  },
]);
