import React, { memo } from "react";
import { Link, NavLink } from "react-router-dom";
import profile from "../../assets/icons/profile.svg";
import heart from "../../assets/icons/heart.svg";
import logo from "../../assets/icons/logo.svg";
import cart from "../../assets/icons/cart.svg";
import search from "../../assets/icons/search.svg";
import mobileHome from "../../assets/icons/mobile-home.svg";
import mobileCart from "../../assets/icons/mobile-cart.svg";
import mobileOffer from "../../assets/icons/mobile-offer.svg";
import mobileAccount from "../../assets/icons/mobile-account.svg";
import { useSelector } from "react-redux";
import { RiLoginBoxLine } from "react-icons/ri";

import "./header.scss";

const Header = () => {
  const wishlistData = useSelector((state) => state.wishlist.data);
  const cartData = useSelector((state) => state.cart.value);
  const isLogin = useSelector((state) => state.auth.token);
  return (
    <>
      <div className="top">
        <div className="container top__container">
          <div className="top__left">
            <select name="" id="">
              <option value="en">EN</option>
              <option value="uz">UZ</option>
              <option value="rus">RUS</option>
            </select>
            <select name="" id="">
              <option value="usd">USD</option>
              <option value="uzs">UZS</option>
              <option value="rub">RUB</option>
            </select>
          </div>
          <div className="top__right">
            <Link to={isLogin ? "/admin" : "/login"}>
              {isLogin ? (
                <img src={profile} alt="profile img" />
              ) : (
                <RiLoginBoxLine />
              )}
            </Link>
            <Link className="header__heart" to={"/wishlist"}>
              <img src={heart} alt="heart img" />
              <p>{wishlistData?.length}</p>
            </Link>
            <Link className="header__heart" to={"/cart"}>
              <img src={cart} alt="cart img" />
              <p>{cartData?.length}</p>
            </Link>
            <Link to={"/items"}>items</Link>
            <div>
              <span>$0.00</span>
              <img src={search} alt="search img" />
            </div>
          </div>
        </div>
      </div>

      <header className="header">
        <div className="container header__container">
          {/* logo */}
          <Link className="header__logo" to={"/"}>
            <img src={logo} alt="logo img" />
          </Link>
          {/* list */}
          <ul className="header__list">
            <li>
              <NavLink to={"/"} className="header__link">
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to={"/bags"} className="header__link">
                BAGS
              </NavLink>
            </li>
            <li>
              <NavLink to={"/sneakers"} className="header__link">
                SNEAKERS
              </NavLink>
            </li>
            <li>
              <NavLink to={"/belt"} className="header__link">
                BELT
              </NavLink>
            </li>
            <li>
              <NavLink to={"/contact"} className="header__link">
                CONTACT
              </NavLink>
            </li>
          </ul>

          {/* responsive mobile */}

          <div className="header__mobile__list">
            <input
              className="header__mobile__list-input"
              type="text"
              placeholder="search product"
            />
            <Link className="header__heart" to={"/wishlist"}>
              <img src={heart} alt="heart img" />
              <p>{wishlistData?.length}</p>
            </Link>
          </div>

          <ul className="header__mobile">
            <li>
              <NavLink to={"/"} className={"header__mobile__link"}>
                <img src={mobileHome} alt="mobile home img" />
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/explore"} className={"header__mobile__link"}>
                <img src={search} alt="mobile home img" />
                <span>Explore</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/cart"}
                className={"header__mobile__link header__heart"}
              >
                <img src={mobileCart} alt="mobile home img" />
                <span>Cart</span>
                <p>{cartData?.length}</p>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/contact"} className={"header__mobile__link"}>
                <img src={mobileOffer} alt="mobile home img" />
                <span>Contact</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={isLogin ? "/admin" : "/login"}
                className={"header__mobile__link"}
              >
                {isLogin ? (
                  <img src={mobileAccount} alt="mobile home img" />
                ) : (
                  <RiLoginBoxLine />
                )}
                <span>{isLogin ? "Admin" : "Login"}</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default memo(Header);
