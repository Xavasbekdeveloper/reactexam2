import React, { memo, useState } from "react";
import { useGetProductsQuery } from "../../context/api/productAPi";
import { useGetCategoryQuery } from "../../context/api/categoryApi";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./products.scss";
import { addWishlist } from "../../context/slice/wishlistSlice";

const Products = () => {
  const [categoryValue, setCategoryValue] = useState("all");
  const [limitValue, setLimitValue] = useState(1);
  let limit = 8;
  const dispatch = useDispatch();
  const wishlistData = useSelector((state) => state.wishlist.data);

  const { data: productsData, isLoading: productsLoading } =
    useGetProductsQuery({ limit: limit * limitValue });
  let category = categoryValue === "all" ? "" : "/category";
  const { data: categoriesData, isLoading: categoryLoading } =
    useGetCategoryQuery({ category });

  console.log(wishlistData);

  let categories = categoriesData?.map((category, inx) => (
    <li key={inx} className="products__category__item">
      <data
        className={
          categoryValue === category ? "products__category__active" : ""
        }
        onClick={(e) => setCategoryValue(e.target.value)}
        value={category}
      >
        {category}
      </data>
    </li>
  ));

  let products = productsData?.map((product) => {
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
          <Link to={`/products/${product.id}`}>
            <img src={product?.image} alt={product?.title} />
          </Link>
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
    <section className="products">
      <div className="container">
        <h2 className="products__title">BEST SELLER</h2>
        {/* categories */}
        <ul className="products__category">
          <li className="products__category__item">
            <data
              className={
                categoryValue === "all" ? "products__category__active" : ""
              }
              onClick={(e) => setCategoryValue(e.target.value)}
              value="all"
            >
              All
            </data>
          </li>
          {/* {categories} */}
        </ul>
        {/* products */}
        <div className="products__cards">{products}</div>
        <div className="products__btn">
          <button onClick={() => setLimitValue((p) => p + 1)}>Load more</button>
        </div>
      </div>
    </section>
  );
};

export default memo(Products);
