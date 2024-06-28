import React, { memo, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  useGetProductByIdQuery,
  useGetProductsQuery,
} from "../../context/api/productAPi";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { FaPlus, FaMinus } from "react-icons/fa";
import { IoCartOutline, IoCart } from "react-icons/io5";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { addWishlist } from "../../context/slice/wishlistSlice";
import { addToCart } from "../../context/slice/cartSlice";

import "./detail.scss";

const Detail = () => {
  const [count, setCount] = useState(1);
  const { Id } = useParams();
  const { data } = useGetProductByIdQuery(Id);
  const { data: productsData, isLoading: productsLoading } =
    useGetProductsQuery({ limit: 4 });

  const dispatch = useDispatch();
  const wishlistData = useSelector((state) => state.wishlist.data);
  const cartData = useSelector((state) => state.cart.value);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const rating = (rate) => {
    let res = [];
    for (let i = 0; i < parseInt(rate); i++) {
      res.push(<IoIosStar />);
    }
    if (rate % 1 > 0.4) {
      res.push(<IoIosStarHalf />);
    }
    for (let i = Math.round(rate); i < 5; i++) {
      res.push(<IoIosStarOutline />);
    }
    return res;
  };

  let products = productsData?.map((product) => {
    return (
      <div key={product.id} className="detail__bottom__card">
        {" "}
        <div className="detail__bottom__card__img">
          <img src={product?.image} alt={product?.title} />
          <div className="detail__bottom__card__img__btns">
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
            <button onClick={() => dispatch(addWishlist(product))}>
              {wishlistData.some((el) => el.id === product.id) ? (
                <FaHeart color="#33A0FF" />
              ) : (
                <FaRegHeart color="#33A0FF" />
              )}
            </button>
          </div>
        </div>
        <div className="detail__bottom__card__info">
          <h3 title={product?.title} className="detail__bottom__card__title">
            {product?.title}
          </h3>
          <div className="detail__bottom__card__rating">
            {rating(product.rating.rate)}
          </div>
          <div className="detail__bottom__card__price-box">
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
    <section className="detail">
      <div className="container">
        {/* top */}
        <div className="detail__top">
          {/* top > left */}
          <div className="detail__top__left">
            <div className="detail__top__left__img">
              <img src={data?.image} alt={data?.title} />
            </div>
            <div className="detail__top__left__bottom">
              <img src={data?.image} alt={data?.title} />
            </div>
          </div>
          {/* top > middle */}
          <div className="detail__top__middle">
            {/*  */}
            <h1 title={data?.title}>{data?.title}</h1>
            {/*  */}
            <div className="detail__top__middle__top">
              <div className="detail__top__middle__rating">
                {rating(data?.rating?.rate)}
              </div>
              <span>0 reviews</span>
              <span>Submit a review</span>
            </div>
            {/*  */}
            <div className="detail__top__middle__price-box">
              <span>${data?.price}</span>
              <div>
                <span>${data?.price}</span>
                <span>{data?.price}% Off</span>
              </div>
            </div>
            {/*  */}
            <div className="detail__top__middle__list">
              <ul>
                <li>Availability:</li>
                <li>Category:</li>
                <li>Free shipping</li>
              </ul>
              <ul>
                <li>In stock</li>
                <li>{data?.category}</li>
              </ul>
            </div>
            {/*  */}
            <div className="detail__top__middle__box">
              <div className="detail__top__middle__box-color">
                <p>Select Color:</p>
              </div>
              <div className="detail__top__middle__box-size">
                <p>Size</p>
                <select name="" id="">
                  <option value="xs">XS</option>
                  <option value="xl">XL</option>
                  <option value="ll">LL</option>
                </select>
              </div>
            </div>
            {/*  */}
            <div className="detail__top__middle__btns">
              <div className="detail__top__middle__btns-first">
                <button
                  disabled={count <= 1}
                  onClick={() => setCount((p) => p - 1)}
                >
                  <FaMinus />
                </button>
                <span>{count}</span>
                <button
                  disabled={data?.rating?.count <= count}
                  onClick={() => setCount((p) => p + 1)}
                >
                  <FaPlus />
                </button>
              </div>

              <div className="detail__top__middle__btns-second">
                <button
                  disabled={cartData?.some((el) => el.id === data?.id)}
                  onClick={() => dispatch(addToCart(data))}
                >
                  {cartData?.some((el) => el.id === data?.id) ? (
                    <span>Added</span>
                  ) : (
                    <span>Add to cart</span>
                  )}
                  <IoCartOutline />
                </button>
                <button onClick={() => dispatch(addWishlist(data))}>
                  {wishlistData.some((el) => el.id === data?.id) ? (
                    <FaHeart color="#33A0FF" />
                  ) : (
                    <FaRegHeart color="#33A0FF" />
                  )}
                </button>
              </div>
            </div>
            {/*  */}
            <div className="detail__top__middle__social">
              <button>Share on Facebook</button>
              <button>Share on Twitter</button>
            </div>
          </div>
          {/* top > right */}
          <div className="detail__top__right">
            <h3>BEST SELLER</h3>
            <div className="detail__top__right__box">
              <div className="detail__top__right__img">
                <img src={data?.image} alt={data?.title} />
              </div>
              <div className="detail__top__right__info">
                <div className="detail__top__middle__rating">
                  {rating(data?.rating?.rate)}
                </div>
                <div>
                  <span>${data?.price}</span>
                  <span>${data?.price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* middle */}
        <div className="detail__middle">
          <div className="detail__middle__top">
            <p>Product Infomation</p>
            <p>Reviews</p>
            <p>Another tab</p>
          </div>
          <div className="detail__middle__bottom">
            <p>
              air max are always very comfortable fit, clean and just perfect in
              every way. just the box was too small and scrunched the sneakers
              up a little bit, not sure if the box was always this small but the
              90s are and will always be one of my favorites.
            </p>
            <p>
              air max are always very comfortable fit, clean and just perfect in
              every way. just the box was too small and scrunched the sneakers
              up a little bit, not sure if the box was always this small but the
              90s are and will always be one of my favorites.
            </p>
            <p>
              air max are always very comfortable fit, clean and just perfect in
              every way. just the box was too small and scrunched the sneakers
              up a little bit, not sure if the box was always this small but the
              90s are and will always be one of my favorites.
            </p>
          </div>
        </div>
        {/* bottom */}
        <div className="detail__bottom">
          <h3 className="detail__bottom__title">RELATED PRODUCTS</h3>

          <div className="detail__bottom__cards">{products}</div>
        </div>
      </div>
    </section>
  );
};

export default memo(Detail);
