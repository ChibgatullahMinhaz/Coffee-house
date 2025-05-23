import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";
import { AuthContext } from "../../Context/AuthContext";
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const emailRef = useRef();
  const { creteUserWithGoogle, userLogin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password } = Object.fromEntries(formData.entries());
    userLogin(email, password)
      .then((result) => {
        const userInfo = {
          email,
          isOnline: true,
          lastSignInTime: result?.user?.metadata?.lastSignInTime,
        };

        fetch("https://coffee-server-lyart.vercel.app/users", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Successfully LogIn.",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate(location?.state || "/");
            }
          });
      })
      .catch((error) => {
        const errorcode = error.code;
        if (errorcode == "auth/user-not-found") {
          toast.warning("Invalid User ! please Create An Account");
        } else if (errorcode === "auth/wrong-password") {
          toast.warning("Wrong Password");
        } else if (errorcode === "auth/invalid-credential") {
          toast.warn("Invalid email or password");
        }
      });
  };

  const handleReset = () => {
    navigate("/forgetPassword", { state: { email } });
  };

  // login with google
  const provider = new GoogleAuthProvider();
  const handleLoginWithGoogle = () => {
    creteUserWithGoogle(provider)
      .then((result) => {
        const encodedEmail = encodeURIComponent(result?.user?.email);
        fetch(
          `https://coffee-server-lyart.vercel.app/thirdPartyUsers?email=${encodedEmail}`
        )
          .then((res) => res.json())
          .then((findUser) => {
            if (!findUser) {
              fetch("https://coffee-server-lyart.vercel.app/thirdPartyUsers", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(result),
              })
                .then((res) => res.json())
                .then(() => {});
            }
          });
        navigate(location?.state || "/");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // toggle password
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0 }}
      id="login"
      className="w-full max-w-md mx-auto my-5 bg-[#F4F3F0] rounded-box p-8 space-y-3 rounded-x overflow-hidden"
    >
      <h1 className="text-2xl font-bold text-center">Welcome Back</h1>
      <p className="text-center">Login with Coffee House</p>
      <form onSubmit={handleLogin} className="space-y-6">
        <div className="space-y-1 text-sm">
          <label htmlFor="username" className="block">
            Email
          </label>
          <input
            ref={emailRef}
            type="email"
            required
            name="email"
            placeholder="Enter Your Email"
            className="w-full px-4 py-3 rounded-md bg-white focus:outline-[var(--btnColor)]"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              required
              name="password"
              placeholder="Password"
              className="w-full px-4 pr-10 bg-white focus:outline-[var(--btnColor)] py-3 rounded-md"
            />
            <div
              onClick={handleShowPassword}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <div onClick={handleReset} className="flex justify-end text-xs">
            <Link to={`/forgetPassword`} rel="noopener noreferrer">
              Forgot Password?
            </Link>
          </div>
        </div>
        <button
          type="submit"
          className="block w-full bg-[var(--btnColor)] cursor-pointer p-3 text-center rounded-sm"
        >
          Sign in
        </button>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 "></div>
        <p className="px-3 text-md dark:text-gray-600">
          Login with social account
        </p>
        <div className="flex-1 h-px sm:w-16 "></div>
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={handleLoginWithGoogle}
          aria-label="Log in with Google"
          className="p-3 rounded-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
        </button>
      </div>
      <p className="text-lg text-center sm:px-6">
        Don't have an account?
        <Link
          to="/signUp"
          rel="noopener noreferrer"
          className="underline link-accent text-blue-600"
        >
          Sign up
        </Link>
      </p>
    </motion.div>
  );
};

export default Signin;
