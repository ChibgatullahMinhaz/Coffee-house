import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import ScrollButton from "../components/UI/ScrollButton";

const MainLaouts = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    console.log('scroll top');
  }, []);
  return (
    <>
    <ScrollButton></ScrollButton>
      <header >
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
