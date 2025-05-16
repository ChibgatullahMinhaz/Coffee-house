import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

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
        <Footer></Footer>
      </footer>
    </>
  );
};

export default MainLaouts;
