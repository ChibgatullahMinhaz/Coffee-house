import React from "react";
import CoffeeImg from "../../assets/5.png";
import { FaEye, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { Link } from "react-router";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee,coffees, setCoffees }) => {
  const { price, name, _id, photo, barista } = coffee;


const handleDelete = (id) => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  swalWithBootstrapButtons
    .fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
      
        fetch(`http://localhost:7000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              const remainingCoffee = coffees.filter(cof => cof._id !== id)
              setCoffees(remainingCoffee)
            }
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your coffee is safe 🙂",
          icon: "error",
        });
      }
    });
};

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      viewport={{ once: false, amount: 0 }}
      className="bg-[#F5F4F1] rounded-box grid grid-cols-1  p-3 justify-center self-start sm:grid-cols-4 items-center"
    >
        <div className="col-span-1">

      <img
        src={photo || CoffeeImg}
        alt={name || "Coffee Image"}
        className=" w-[300px] max-h-[200px] mx-auto"
      />
        </div>
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
        <Link
          to={`/coffeeDetails/${_id}`}
          className=" cursor-pointer bg-[var(--btnColor)] p-3 w-2/4 rounded-xl mx-auto text-center text-white flex justify-center"
        >
          <FaEye />
        </Link>
        <Link
          to={`/updateCoffee/${_id}`}
          className=" cursor-pointer bg-[#3c393b] p-3 w-2/4 rounded-xl mx-auto text-center text-white flex justify-center"
        >
          <FaPen />
        </Link>

        <button
          onClick={() => handleDelete(_id)}
          className=" cursor-pointer bg-[#ea4744] p-3 w-2/4 rounded-xl mx-auto text-center text-white flex justify-center"
        >
          <MdDelete />
        </button>
      </div>
    </motion.div>
  );
};

export default CoffeeCard;
