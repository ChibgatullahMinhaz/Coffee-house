import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const MainLaouts = () => {
  return (
    <>
      <header className="sticky top-0">
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>

      <main className="" id="minHight">
        <Outlet></Outlet>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default MainLaouts;
