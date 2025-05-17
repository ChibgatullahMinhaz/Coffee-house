import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import Logo from "../assets/more/logo1.png";
import { motion } from "framer-motion";
import { AuthContext } from "../Context/AuthContext";
import { auth } from "../Firebase/Firebase.init";

const navLinks = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/addCoffee",
    name: "Add Coffee",
  },
];
const Navbar = () => {
  const links = navLinks.map((link) => (
    <NavLink key={link.name} to={`${link.path}`} className={`text-md`}>
      {link.name}
    </NavLink>
  ));

  const { user, logout } = useContext(AuthContext);
  const handleLogout = async () => {
    if (user) {
      await fetch("https://coffee-server-lyart.vercel.app/users", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: user.email,
          isOnline: false,
          lastSignInTime: user?.metadata?.lastSignInTime,
        }),

      });

    }

    await logout();
  };
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="navbar shadow-sm"
      id="navbar"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu  dropdown-content bg-stone-600 rounded-box z-100 mt-3 w-32 p-2"
          >
            {links}
          </ul>
        </div>
        <div className="flex gap-x-2.5 items-center">
          <img src={Logo} alt="" className="h-10 w-10" />
          <Link to={`/`} className=" text-xl">
            Coffee House
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 flex gap-x-5">{links}</ul>
      </div>
      <div className="navbar-end flex gap-x-3">
        {user ? (
          <>
            <img
              onClick={handleLogout}
              className="w-10 h-10 rounded-full"
              src={user?.photoURL || user.providerData[0]?.photoURL || "Photo"}
              alt={user?.displayName || "user name"}
            />
          </>
        ) : (
          <>
            <Link to={`/signin`}>
              <button className="btn bg-[#E3B577] cursor-pointer text-white">
                Login
              </button>
            </Link>
            <Link to={`signUp`}>
              <button className=" btn bg-[#E3B577] cursor-pointer text-white">
                SingUp
              </button>
            </Link>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
