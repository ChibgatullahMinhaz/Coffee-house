import React from "react";
import { motion } from "framer-motion";
import Icon from "../assets/icons/1.png";
import { Link } from "react-router";
const OurProductSection = () => {
  return (
    <div id="productSection" className="my-16">
      <div className="max-w-11/12  mx-auto text-center py-6 md:py-16">
        <motion.p
          initial={{ x: -70, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0 }}
          className="text-[#1B1A1A]"
        >
          --- Sip & Savor ---
        </motion.p>
        <motion.h1
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0 }}
          className="text-shadow-2xs text-shadow-amber-300 text-[#331A15] text-3xl md:text-4xl lg:text-5xl"
        >
          Our Popular Products
        </motion.h1>
        <Link to={"addCoffee"}>
          <motion.button
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut",  delay:1}}
            viewport={{ once: false, amount: 0 }}
            className="btn bg-[var(--btnColor)] content-center mt-5"
          >
            <span className="text-white textShadow">Add Coffee</span>
            <img src={Icon} className="w-5 h-5" alt="add coffee" />
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default OurProductSection;
