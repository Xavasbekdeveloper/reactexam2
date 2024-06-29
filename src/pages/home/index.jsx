import React, { memo, useEffect } from "react";
import Hero from "../../components/hero";
import Products from "../../components/products";
import Sneakers from "../../components/sneakers";
import Services from "../../components/services";
import News from "../../components/news";
import Featured from "../../components/featured";
import BackTop from "../../components/back-top";

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <Products />
      <Sneakers />
      <Services />
      <News />
      <Featured />
      <BackTop />
    </>
  );
};

export default memo(Home);
