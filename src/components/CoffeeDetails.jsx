import React from "react";
import BackButton from "./UI/BackButton";
import DetailsCard from "./UI/DetailsCard";

const CoffeeDetails = () => {
  return (
    <>
      <div id="detailsPage">
        <div className="overflow-hidden py-4 max-w-10/12 mx-auto">
          <BackButton></BackButton>
          <DetailsCard></DetailsCard>
        </div>
      </div>
    </>
  );
};

export default CoffeeDetails;
