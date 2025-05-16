import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const MainLaouts = () => {
  return (
    <>
      <header>
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>

      <main>
        <Outlet></Outlet>
      </main>

      <footer>
        footer
      </footer>
    </>
  );
};

export default MainLaouts;
