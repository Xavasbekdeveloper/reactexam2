import React, { memo } from "react";
import Hero from "../../components/hero";
import Products from "../../components/products";

const Home = () => {
  return (
    <>
      <Hero />
      <Products />
    </>
  );
};

export default memo(Home);
