import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import Icon from "../assets/icons/1.png";
import { Link } from "react-router";
import { CoffeeContext } from "../Context/CoffeeContext";
import CoffeeCard from "./UI/CoffeeCard";
const OurProductSection = () => {
  const { allCoffees } = useContext(CoffeeContext);
  const [coffees, setCoffees] = useState(allCoffees);

  return (
    <div id="productSection" className="my-16  ">
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
          className="hTextShadow text-[#331A15] text-3xl md:text-4xl lg:text-5xl"
        >
          Our Popular Products
        </motion.h1>
        <Link to={"addCoffee"}>
          <motion.button
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 1 }}
            viewport={{ once: false, amount: 0 }}
            className="btn bg-[var(--btnColor)] content-center mt-5"
          >
            <span className="text-white textShadow">Add Coffee</span>
            <img src={Icon} className="w-5 h-5" alt="add coffee" />
          </motion.button>
        </Link>

        {/* showing coffees */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 max-w-11/12 mx-auto py-6 space-y-4 lg:gap-4">
          {
            coffees.map((coffee, idx) => (
              <CoffeeCard
                key={idx}
                setCoffees={setCoffees}
                coffee={coffee}
              coffees={coffees}
              ></CoffeeCard>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OurProductSection;
