import React from "react";
import ErrorNavbar from "../components/ErrorNavbar";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router";
import Footer from "../components/Footer";

const ErrorLaoyouts = () => {
  return (
    <>
      <header>
        <nav>
          <ErrorNavbar></ErrorNavbar>
        </nav>
      </header>
      <main className="mt-10">
        <div className="flex justify-center items-center">
          <Link to={`/`}>
            <button className="text-center cursor-pointer text-xl text-shadow-2xs flex items-center">
              <IoMdArrowBack />
              Back To Home
            </button>
          </Link>
        </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default ErrorLaoyouts;
