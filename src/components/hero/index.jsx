import React, { memo } from "react";
import product1 from "../../assets/images/product-img1.svg";
import product2 from "../../assets/images/product-img2.svg";
import product3 from "../../assets/images/product-img3.svg";

import "./hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero__title">Super Flash Sale 50% Off</h1>

        <div className="hero__hour">
          <p>08</p>
          <span>:</span>
          <p>34</p>
          <span>:</span>
          <p>52</p>
        </div>

        <div className="hero__banner">
          <div className="hero__banner__card">
            <h3 className="hero__banner__title">FS - QUILTED MAXI CROSS BAG</h3>
            <div className="hero__banner__price__box">
              <span>$534,33</span>
              <span>24% Off</span>
            </div>
            <p className="hero__banner__price">
              $<span>2</span>99,43
            </p>
          </div>
          <div className="hero__banner__card">
            <div className="hero__banner__card__top">
              <h3 className="hero__banner__title">
                FS - Nike Air Max 270 React...
              </h3>
              <p className="hero__banner__price">
                $<span>2</span>99,43
              </p>
            </div>
            <div className="hero__banner__price__box">
              <span>$534,33</span>
              <span>24% Off</span>
            </div>
          </div>
          <div className="hero__banner__card">
            <div className="hero__banner__card__top">
              <h3 className="hero__banner__title">
                FS - Nike Air Max 270 React...
              </h3>
              <div className="hero__banner__price__box">
                <span>$534,33</span>
                <span>24% Off</span>
              </div>
            </div>
            <p className="hero__banner__price">
              $<span>2</span>99,43
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);
