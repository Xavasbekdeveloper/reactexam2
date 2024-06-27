import React, { memo } from "react";
import Hero from "../../components/hero";
import Products from "../../components/products";
import Sneakers from "../../components/sneakers";
import Services from "../../components/services";
import News from "../../components/news";
import Featured from "../../components/featured";

const Home = () => {
  return (
    <>
      <Hero />
      <Products />
      <Sneakers />
      <Services />
      <News />
      <Featured />
    </>
  );
};

export default memo(Home);
