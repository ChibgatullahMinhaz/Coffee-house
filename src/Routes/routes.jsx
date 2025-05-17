import { createBrowserRouter } from "react-router";
import ErrorLaoyouts from "../Layouts/ErrorLaoyouts";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import AddCoffee from "../components/AddCoffee";
import Signin from "../components/Auth/Signin";
import SignUp from "../components/Auth/SignUp";
import UpdateCoffee from "../components/UpdateCoffee";
import CoffeeDetails from "../components/CoffeeDetails";
import PrivateRoute from "./PrivetRoutes";
import ResetForm from "../components/UI/ResetForm";
import Loader from "../components/UI/Loader";

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
        path: "addCoffee",
        element: (
          <PrivateRoute>
            <AddCoffee></AddCoffee>
          </PrivateRoute>
        ),
      },
      {
        path: "updateCoffee/:id",
        loader: ({ params }) =>
          fetch(`https://coffee-server-lyart.vercel.app/coffees/${params.id}`),
        element: <UpdateCoffee></UpdateCoffee>,
      },
      {
        path: "coffeeDetails/:id",
        hydrateFallbackElement: <Loader></Loader>,
        loader: ({ params }) =>
          fetch(`https://coffee-server-lyart.vercel.app/coffees/${params.id}`),
        element: <CoffeeDetails></CoffeeDetails>,
      },
      {
        path: "/forgetPassword",
        element: <ResetForm></ResetForm>,
      },
      {
        path: "signin",
        element: <Signin></Signin>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorLaoyouts></ErrorLaoyouts>,
  },
]);
