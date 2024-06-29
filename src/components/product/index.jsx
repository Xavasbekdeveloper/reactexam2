import React, { memo, useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  decreaseAmount,
  increaseAmount,
  removeCart,
} from "../../context/slice/cartSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div key={product.id} className="cart__box__bottom__item">
      {/*  */}
      <div className="cart__box__bottom__item__left">
        <button
          onClick={() => dispatch(removeCart(product))}
          className="cart__box__bottom__item__remove-btn"
        >
          {" "}
          <IoClose />
        </button>
        <div>
          <Link to={`/products/${product.id}`}>
            <img src={product?.image} alt={product?.title} />
          </Link>
          <Link to={`/products/${product.id}`}>
            <h3 title={product?.title}>{product?.title}</h3>
          </Link>
        </div>
      </div>
      {/*  */}
      <span>${product?.price}</span>
      {/*  */}
      <div className="cart__box__bottom__item-btn">
        <button
          disabled={product?.amount <= 1}
          onClick={() => dispatch(decreaseAmount(product))}
        >
          <FaMinus />
        </button>
        <span>{product?.amount}</span>
        <button
          disabled={product?.rating?.count <= product?.amount}
          onClick={() => dispatch(increaseAmount(product))}
        >
          <FaPlus />
        </button>
      </div>
      {/*  */}
      <span className="cart__box__bottom__item-price">
        ${(product?.price * product?.amount).toFixed(2)}
      </span>
    </div>
  );
};

export default memo(Product);
