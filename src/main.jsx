import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { routes } from "./Routes/routes";
import AuthProvider from "./Context/AuthProvider";
import { RouterProvider } from "react-router";
import CoffeeProvider from "./Context/CoffeeProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <CoffeeProvider>
        <RouterProvider router={routes}></RouterProvider>
      </CoffeeProvider>
    </AuthProvider>
  </StrictMode>
);
