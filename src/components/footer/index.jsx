import React, { memo } from "react";
import logo from "../../assets/icons/logo.svg";
import brands from "../../assets/images/Brands.png";
import twitter from "../../assets/icons/twitter.svg";
import facebook from "../../assets/icons/facebook.svg";

import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container footer">
        <div className="footer__top">
          <div className="footer__top__row">
            <img src={logo} alt="" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.Since the 1500s, when an unknown printer.
            </p>
          </div>
          <div className="footer__top__row">
            <h3>Follow Us</h3>
            <p>
              Since the 1500s, when an unknown printer took a galley of type and
              scrambled.
            </p>
            <div>
              <img src={facebook} alt="" />
              <img src={twitter} alt="" />
            </div>
          </div>
          <div className="footer__top__row">
            <h3>Contact Us</h3>
            <p>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</p>
          </div>
        </div>
        <div className="footer__mid">
          <ul className="footer__mid__list">
            <h3>Information</h3>
            <li className="footer__mid__item">About Us</li>
            <li className="footer__mid__item">Information</li>
            <li className="footer__mid__item">Privacy Policy</li>
            <li className="footer__mid__item">Terms & Conditions</li>
          </ul>
          <ul className="footer__mid__list">
            <h3>Service</h3>
            <li className="footer__mid__item">About Us</li>
            <li className="footer__mid__item">Information</li>
            <li className="footer__mid__item">Privacy Policy</li>
            <li className="footer__mid__item">Terms & Conditions</li>
          </ul>
          <ul className="footer__mid__list">
            <h3>Information</h3>
            <li className="footer__mid__item">About Us</li>
            <li className="footer__mid__item">Information</li>
            <li className="footer__mid__item">Privacy Policy</li>
            <li className="footer__mid__item">Terms & Conditions</li>
          </ul>
          <ul className="footer__mid__list">
            <h3>Our Offers</h3>
            <li className="footer__mid__item">About Us</li>
            <li className="footer__mid__item">Information</li>
            <li className="footer__mid__item">Privacy Policy</li>
            <li className="footer__mid__item">Terms & Conditions</li>
          </ul>
        </div>
        <div className="footer__bot">
          <img src={brands} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
