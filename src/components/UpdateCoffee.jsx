import React from "react";
import { Link,  useLoaderData, useNavigate, useParams } from "react-router";
import { motion } from "framer-motion";
import BackButton from "./UI/BackButton";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
const UpdateCoffee = () => {
  const {
    barista,
    category,
    photo,
    details,
    name,
    price,
    quantity,
    supplier,
    taste,
    _id,
  } = useLoaderData();
  const { id } = useParams();
const navigate = useNavigate();



  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedDoc = Object.fromEntries(formData.entries());
    console.log(updatedDoc);
    fetch(`http://localhost:7000/coffees/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedDoc),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Coffee has been Added",
            showConfirmButton: false,
            timer: 1500,
          });
         navigate('/')
          form.reset();
        }else{
          toast.warn('Please Change something!')
        }
      });
  };
  return (
    <div id="addCoffee" className="overflow-hidden">
      <div className="max-w-4xl mx-auto my-5 md:my-9 text-center">
        <div>
          <BackButton></BackButton>

          <div className="bg-[#F4F3F0] w-full p-4 rounded-box">
            <motion.h1
              initial={{ y: 70, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0 }}
              className="hTextShadow text-[#331A15] text-3xl md:text-4xl lg:text-5xl"
            >
              Update Existing Coffee Details
            </motion.h1>

            <motion.p
              initial={{ x: -70, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0 }}
              className="text-[#1B1A1A] justify-center"
            >
              Time to refresh and refine. Use the form below to update this
              coffee’s details — from its name and origin to tasting notes and
              availability. Whether you’re tweaking the roast profile or
              rebranding a bestseller, every update helps your customers
              experience your coffee at its best. Keep it current. Keep it
              crafted. Let every change reflect your passion for the perfect
              brew.
            </motion.p>

            {/* add coffee form */}
            <form onSubmit={handleUpdate} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4">
                <motion.div
                  initial={{ x: -70, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  viewport={{ once: false, amount: 0 }}
                  className="space-y-1 text-sm text-left"
                >
                  <label className="block">Name</label>
                  <input
                    defaultValue={name}
                    type="text"
                    required
                    name="name"
                    placeholder="Enter coffee name"
                    className="w-full px-4 py-3 rounded-md bg-white focus:outline-[var(--btnColor)]"
                  />
                </motion.div>

                <motion.div
                  initial={{ x: 70, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  viewport={{ once: false, amount: 0 }}
                  className="space-y-1 text-sm text-left"
                >
                  <label className="block">Category</label>
                  <input
                    defaultValue={category}
                    type="text"
                    required
                    name="category"
                    placeholder="Enter coffee category"
                    className="w-full px-4 py-3 rounded-md bg-white focus:outline-[var(--btnColor)]"
                  />
                </motion.div>
                <motion.div
                  initial={{ x: -70, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  viewport={{ once: false, amount: 0 }}
                  className="space-y-1 text-sm text-left"
                >
                  <label className="block">Quantity</label>
                  <input
                    type="number"
                    defaultValue={quantity}
                    required
                    name="quantity"
                    placeholder="Enter coffee quantity"
                    className="w-full px-4 py-3 rounded-md bg-white focus:outline-[var(--btnColor)]"
                  />
                </motion.div>

                <motion.div
                  initial={{ x: 70, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  viewport={{ once: false, amount: 0 }}
                  className="space-y-1 text-sm text-left"
                >
                  <label className="block">Barista</label>
                  <input
                    defaultValue={barista}
                    type="text"
                    required
                    name="barista"
                    placeholder="Enter coffee barista"
                    className="w-full px-4 py-3 rounded-md bg-white focus:outline-[var(--btnColor)]"
                  />
                </motion.div>
                <motion.div
                  initial={{ x: -70, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  viewport={{ once: false, amount: 0 }}
                  className="space-y-1 text-sm text-left"
                >
                  <label className="block">Supplier</label>
                  <input
                    defaultValue={supplier}
                    type="text"
                    required
                    name="supplier"
                    placeholder="Enter coffee supplier"
                    className="w-full px-4 py-3 rounded-md bg-white focus:outline-[var(--btnColor)]"
                  />
                </motion.div>
                <motion.div
                  initial={{ x: 70, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  viewport={{ once: false, amount: 0 }}
                  className="space-y-1 text-sm text-left"
                >
                  <label className="block">Taste</label>
                  <input
                    type="text"
                    defaultValue={taste}
                    required
                    name="taste"
                    placeholder="Enter coffee taste"
                    className="w-full px-4 py-3 rounded-md bg-white focus:outline-[var(--btnColor)]"
                  />
                </motion.div>
                <motion.div
                  initial={{ x: -70, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  viewport={{ once: false, amount: 0 }}
                  className="space-y-1 text-sm text-left"
                >
                  <label className="block">Coffee Price</label>
                  <input
                    type="number"
                    defaultValue={price}
                    required
                    name="price"
                    placeholder="Enter coffee Price"
                    className="w-full px-4 py-3 rounded-md bg-white focus:outline-[var(--btnColor)]"
                  />
                </motion.div>
                <motion.div
                  initial={{ x: 70, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  viewport={{ once: false, amount: 0 }}
                  className="space-y-1 text-sm text-left"
                >
                  <label className="block">Details</label>
                  <input
                    type="text"
                    required
                    defaultValue={details}
                    name="details"
                    placeholder="Enter coffee details"
                    className="w-full px-4 py-3 rounded-md bg-white focus:outline-[var(--btnColor)]"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ y: 70, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                viewport={{ once: false, amount: 0 }}
                className="space-y-1 text-sm text-left"
              >
                <label htmlFor="username" className="block">
                  Photo Url
                </label>
                <input
                  type="url"
                  placeholder="https://Enter Your Photo URL"
                  defaultValue={photo}
                  pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
                  title="Must be valid URL"
                  name="photo"
                  className="w-full px-4 py-3 rounded-md bg-white focus:outline-[var(--btnColor)]"
                />
                <p className="validator-hint">Must be valid URL</p>
              </motion.div>

              <button
                type="submit"
                className="btn btn-block bg-[var(--btnColor)]"
              >
                Update Coffee Details
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
