import { createBrowserRouter } from "react-router";
import ErrorLaoyouts from "../Layouts/ErrorLaoyouts";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import AddCoffee from "../components/AddCoffee";
import Signin from "../components/Auth/Signin";
import SignUp from "../components/Auth/SignUp";


export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: 'addCoffee',
        element: <AddCoffee></AddCoffee>
      }
      ,
      {
        path: 'signin',
        element: <Signin></Signin>
      }
      ,
      {
        path: 'signUp',
        element: <SignUp></SignUp>
      }
    ],
  },
  {
    path: "*",
    element: <ErrorLaoyouts></ErrorLaoyouts>,
  },
]);
