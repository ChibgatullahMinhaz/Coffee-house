import React, { useContext, useState } from "react";
import Hero from "../components/Hero";
import ScrollButton from "../components/UI/ScrollButton";
import SubHeader from "../components/SubHeader";
import OurProductSection from "../components/OurProductSection";
import FollowUsSection from "../components/FollowUsSection";
import { CoffeeContext } from "../Context/CoffeeContext";

const Home = () => {
  return (
    <>
      {/* <ScrollButton></ScrollButton> */}
      <Hero></Hero>
      <SubHeader></SubHeader>
      <OurProductSection></OurProductSection>
      <FollowUsSection></FollowUsSection>
    </>
  );
};

export default Home;
