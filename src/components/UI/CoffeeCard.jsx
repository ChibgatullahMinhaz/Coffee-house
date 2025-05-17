import React from "react";
import CoffeeImg from "../../assets/5.png";
import { FaEye, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { Link } from "react-router";
const CoffeeCard = ({ coffee, setCoffees }) => {
  const { price, name, _id, photo, barista } = coffee;


  const handleDelete = () => {
    toast.success("delete");
  };
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      viewport={{ once: false, amount: 0 }}
      className="bg-[#F5F4F1] rounded-box grid grid-cols-1  p-3 justify-center self-start sm:grid-cols-5 items-center"
    >
      <img
        src={photo || CoffeeImg}
        alt={name || "Coffee Image"}
        className="max-w-4/5 mx-auto col-span-2"
      />
      <div className="p-4 text-center sm:text-left col-span-2">
        <h2>
          <span className="text-xl font-semibold">Name:</span> {name}
        </h2>
        <p>
          {" "}
          <span className="text-xl font-semibold">Price: $</span>
          {price}
        </p>
        <p>
          {" "}
          <span className="text-xl font-semibold">Barista:</span> {barista}
        </p>
      </div>
      <div className="sm:col-span-1 flex justify-center items-center sm:flex-col gap-4">
        <Link to={`/coffeeDetails/${_id}`} className=" cursor-pointer bg-[var(--btnColor)] p-3 w-2/4 rounded-xl mx-auto text-center text-white flex justify-center">
            <FaEye />
        </Link>
        <Link
        to={`/updateCoffee/${_id}`}
          className=" cursor-pointer bg-[#3c393b] p-3 w-2/4 rounded-xl mx-auto text-center text-white flex justify-center"
        >
          <FaPen />
        </Link>

        <button
          onClick={handleDelete}
          className=" cursor-pointer bg-[#ea4744] p-3 w-2/4 rounded-xl mx-auto text-center text-white flex justify-center"
        >
          <MdDelete />
        </button>
      </div>
    </motion.div>
  );
};

export default CoffeeCard;
