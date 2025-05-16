import React from "react";
import ErrorNavbar from "../components/ErrorNavbar";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import ErrorImage from "../assets/404/404.gif";
import ScrollButton from "../components/UI/ScrollButton";
const ErrorLaoyouts = () => {
  return (
    <>
    <ScrollButton></ScrollButton>
      <header>
        <nav>
          <ErrorNavbar></ErrorNavbar>
        </nav>
      </header>
      <main className="mt-10">
        <div className="flex justify-center items-center">
          <Link to={`/`}>
            <motion.button
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: "easeIn" }}
              className="text-center cursor-pointer text-xl text-shadow-2xs flex items-center"
            >
              <IoMdArrowBack />
              Back To Home
            </motion.button>
          </Link>
        </div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="flex justify-center items-center p-0 m-0"
        >
          <img src={ErrorImage} alt="404 not found pages" />
        </motion.div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default ErrorLaoyouts;
