import React, { memo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "../../context/api/productAPi";
import { addWishlist } from "../../context/slice/wishlistSlice";
import empty from "../../assets/images/emptypng.png";
import { IoCartOutline, IoCart } from "react-icons/io5";

import "./wishlist.scss";
import Empty from "../../components/empty";

const Wishlist = () => {
  const wishlistData = useSelector((state) => state.wishlist.data);
  const cartData = useSelector((state) => state.cart.value);
  const { data } = useGetProductsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

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
            <button
              disabled={cartData?.some((el) => el.id === product.id)}
              onClick={() => dispatch(addToCart(product))}
            >
              {cartData?.some((el) => el.id === product.id) ? (
                <IoCart color="#33A0FF" />
              ) : (
                <IoCartOutline color="#33A0FF" />
              )}
            </button>
            <button
              onClick={() => dispatch(addWishlist(product))}
              className="products__card__heart-btn"
            >
              {wishlistData.some((el) => el.id === product.id) ? (
                <FaHeart color="#33A0FF" />
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
          <Empty img={empty} />
        )}
      </div>
    </section>
  );
};

export default memo(Wishlist);
