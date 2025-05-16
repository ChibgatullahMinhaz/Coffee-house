import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router";
import Footer from "../components/Footer";
import ScrollButton from "../components/UI/ScrollButton";
import AtomicSpinner from 'atomic-spinner'

const MainLaouts = () => {
  const [routeLoading, setRouteLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setRouteLoading(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    const timeout = setTimeout(() => {
      setRouteLoading(false);
    }, 200);
    return () => clearTimeout(timeout);
  }, [location]);
  return (
    <>
      <ScrollButton></ScrollButton>
      <header>
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>

      <main className="" id="minHight">
        {routeLoading ? <div className="flex justify-center items-center">
          <AtomicSpinner />
        </div> : <Outlet></Outlet>}
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default MainLaouts;
