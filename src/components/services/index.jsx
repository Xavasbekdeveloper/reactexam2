import React, { memo } from "react";
import shipping from "../../assets/icons/shipping.svg";
import refund from "../../assets/icons/refund.svg";
import support from "../../assets/icons/support.svg";

import "./services.scss";

const Services = () => {
  return (
    <section className="service">
      <div className="container">
        <div className="service__cards">
          <div className="service__card">
            <img
              className="service__card-img"
              src={shipping}
              alt="Shipping img"
            />
            <h3 className="service__card-title">FREE SHIPPING</h3>
            <p className="service__card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
              tenetur?
            </p>
          </div>
          <div className="service__card">
            <img className="service__card-img" src={refund} alt="Refound img" />
            <h3 className="service__card-title">100% REFUND</h3>
            <p className="service__card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
              tenetur?
            </p>
          </div>
          <div className="service__card">
            <img
              className="service__card-img"
              src={support}
              alt="Support img"
            />
            <h3 className="service__card-title">SUPPORT 24/7</h3>
            <p className="service__card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
              tenetur?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Services);
