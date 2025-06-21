import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home/Home";
import AuthenticationLayout from "../Layouts/AuthenticationLayout/AuthenticationLayout";
import Login from "../pages/authentication/Login/Login";
import Register from "../pages/authentication/Register/Register";
import Coverage from "../pages/Coverage/Coverage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component:Home
      },
      {
        path: 'coverage',
        Component: Coverage
      }
    ]
  },
  {
    path: "/",
    Component: AuthenticationLayout,
    children: [
      {
        path:"login",
        Component: Login
      },
      {
        path: 'register',
        Component: Register
      }
    ]
  }
]);
