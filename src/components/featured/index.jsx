import React, { memo } from "react";
import { IoMdStar } from "react-icons/io";
import { useGetProductsQuery } from "../../context/api/productAPi";
import "./featured.scss";

const Featured = () => {
  const { data } = useGetProductsQuery({ limit: 3 });

  const product = data?.map((product) => (
    <div className="featured__card" key={product.id}>
      <div className="featured__images-boxes">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="featured__info-box">
        <h3 className="featured__card-title">{product.title}</h3>
        <div className="featured__star-card">
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
        </div>
        <div className="featured__price-card">
          <p className="featured__price-text">${product.price}</p>
          <p className="featured__old-price-text">
            ${product.price + product.price * 0.24}
          </p>
        </div>
      </div>
    </div>
  ));
  return (
    <section className="featured">
      <div className="container">
        <h2 className="featured__title">FEATURED PRODUCTS</h2>
        <div className="featured__cards">{product}</div>
        <form className="featured__form">
          <input type="text" placeholder="Search query..." id="" />
          <button type="button">Search</button>
        </form>
      </div>
    </section>
  );
};

export default memo(Featured);
