import React, { Children, useEffect, useState } from "react";
import { CoffeeContext } from "./CoffeeContext";
import { toast } from "react-toastify";

const CoffeeProvider = ({ children }) => {
  const [allCoffees, setAllCoffees] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadCoffees = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://coffee-server-lyart.vercel.app/coffees"
        );
        const coffee = await res.json();
        setAllCoffees(coffee);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadCoffees();
  }, []);

  const coffee = {
    allCoffees,
    setAllCoffees,
  };

  return (
    <CoffeeContext.Provider value={coffee}>{children}</CoffeeContext.Provider>
  );
};

export default CoffeeProvider;
