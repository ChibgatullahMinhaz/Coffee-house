import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { IoMdArrowBack } from "react-icons/io";
const AddCoffee = () => {
  return (
    <div id="addCoffee">
      <div className="max-w-4xl mx-auto my-5 md:my-9 text-center">
        <div>
          <Link to={`/`}>
            <motion.button
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: "easeIn" }}
              className=" cursor-pointer text-xl text-shadow-2xs flex items-center"
            >
              <IoMdArrowBack />
              Back To Home
            </motion.button>
          </Link>

          <div className="bg-[#F4F3F0] w-full p-4 rounded-box">
            <motion.h1
              initial={{ y: 70, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0 }}
              className="hTextShadow text-[#331A15] text-3xl md:text-4xl lg:text-5xl"
            >
              Add New Coffee
            </motion.h1>

            <motion.p
              initial={{ x: -70, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0 }}
              className="text-[#1B1A1A] justify-center"
            >
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </motion.p>

            {/* add coffee form */}
            <form className="space-y-6">
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
                  <label className="block">Barista</label>
                  <input
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
                  type="text"
                  required
                  name="photo"
                  placeholder="Enter Your Photo URL"
                  className="w-full px-4 py-3 rounded-md bg-white focus:outline-[var(--btnColor)]"
                />
              </motion.div>

              <button
                type="submit"
                className="btn btn-block bg-[var(--btnColor)]"
              >
                Add Coffee
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
