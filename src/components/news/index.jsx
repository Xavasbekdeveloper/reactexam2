import React, { memo } from "react";
import nike from "../../assets/images/nike.png";
import figma from "../../assets/images/figma.png";
import kronos from "../../assets/images/kronos.png";

import "./news.scss";

const News = () => {
  return (
    <section className="news ">
      <div className="container">
        <h2 className="news__title">LATEST NEWS</h2>
        <div className="news__cards">
          <div className="news__card">
            <div className="news__img">
              <img src={nike} alt="" />
            </div>
            <div className="news__info">
              <span>01 Jan, 2015</span>
              <h3 className="news__name">Fashion Industry</h3>
              <p className="news__desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="news__card">
            <div className="news__img">
              <img src={figma} alt="" />
            </div>
            <div className="news__info">
              <span>01 Jan, 2015</span>
              <h3 className="news__name">Best Design Tools</h3>
              <p className="news__desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="news__card">
            <div className="news__img">
              <img src={kronos} alt="" />
            </div>
            <div className="news__info">
              <span>01 Jan, 2015</span>
              <h3 className="news__name">HR Community</h3>
              <p className="news__desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(News);
