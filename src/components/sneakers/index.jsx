import React, { memo } from "react";
import sneakers from "../../assets/images/sneakers.png";
import { Link } from "react-router-dom";

import "./sneakers.scss";

const Sneakers = () => {
  return (
    <section className="sneakers">
      <div className="container sneakers__container">
        <div className="sneakers__left">
          <h2 className="sneakers__left__title">Adidas Men Running Sneakers</h2>
          <p className="sneakers__left__text">
            Performance and design. Taken right to the edge.
          </p>
          <Link className="sneakers__left__btn">SHOP NOW</Link>
        </div>
        <div className="sneakers__right">
          <img src={sneakers} alt="sneakers img" />
        </div>
      </div>
    </section>
  );
};

export default memo(Sneakers);
