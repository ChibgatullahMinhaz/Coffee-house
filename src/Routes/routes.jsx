import { createBrowserRouter } from "react-router";
import ErrorLaoyouts from "../Layouts/ErrorLaoyouts";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorLaoyouts></ErrorLaoyouts>,
  },
]);
