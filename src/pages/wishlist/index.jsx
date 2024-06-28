import React, { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "../../context/api/productAPi";
import { addWishlist } from "../../context/slice/wishlistSlice";
import empty from "../../assets/images/emptypng.png";

import "./wishlist.scss";

const Wishlist = () => {
  const wishlistData = useSelector((state) => state.wishlist.data);
  const { data } = useGetProductsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let products = wishlistData?.map((product) => {
    let res = [];
    for (let i = 0; i < parseInt(product.rating.rate); i++) {
      res.push(<IoIosStar />);
    }
    if (product.rating.rate % 1 > 0.4) {
      res.push(<IoIosStarHalf />);
    }
    for (let i = Math.round(product.rating.rate); i < 5; i++) {
      res.push(<IoIosStarOutline />);
    }

    return (
      <div key={product.id} className="products__card">
        {" "}
        <div className="products__card__img">
          <img src={product?.image} alt={product?.title} />
          <div className="products__card__img__btns">
            <button>
              <IoCartOutline />
            </button>
            <button
              onClick={() => dispatch(addWishlist(product))}
              className="products__card__heart-btn"
            >
              {wishlistData.some((el) => el.id === product.id) ? (
                <FaHeart color="crimson" />
              ) : (
                <FaRegHeart color="#33A0FF" />
              )}
            </button>
          </div>
        </div>
        <div className="products__card__info">
          <Link to={`/products/${product.id}`}>
            <h3 title={product?.title} className="products__card__title">
              {product?.title}
            </h3>
          </Link>
          <div className="products__card__rating">{res}</div>
          <div className="products__card__price-box">
            <span>${product.price}</span>
            <div>
              <span>${product.price}</span>
              <span>{product.price}% Off</span>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="wishlist">
      <div className="container">
        {wishlistData.length ? (
          <div>
            <h1>Wishlist</h1>
            <div className="wishlist__cards">{products}</div>
          </div>
        ) : (
          <div className="wishlist__empty">
            <img src={empty} alt="empty img" />{" "}
            <button onClick={() => navigate("/")}>Go Home</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default memo(Wishlist);
