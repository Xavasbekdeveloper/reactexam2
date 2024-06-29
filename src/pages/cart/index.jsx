import React, { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Product from "../../components/product";
import CartModal from "../../components/cart-modal";
import Empty from "../../components/empty";
import empty from "../../assets/images/empty-cart.webp";

import "./cart.scss";
import BackTop from "../../components/back-top";

const Cart = () => {
  const cartData = useSelector((state) => state.cart.value);
  const [voucher, setVoucher] = useState(0);
  const [coupon, setCoupon] = useState("");
  const [close, setClose] = useState(false);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  let products = cartData?.map((product) => (
    <Product key={product.id} product={product} />
  ));

  const calculateAllPrice = () => {
    let total = cartData?.reduce(
      (sum, item) => sum + item?.amount * item?.price,
      0
    );
    return total.toFixed(2);
  };

  const handleCoupon = (e) => {
    e.preventDefault();
    if (coupon === "laylo") {
      setVoucher((+calculateAllPrice() + +calculateAllPrice() * 0.02) * 0.2);
    } else {
      alert("xato");
    }
    setCoupon("");
    console.log(calculateAllPrice());
  };

  return (
    <>
      <BackTop />
      {cartData.length ? (
        <section className="cart">
          <div className="container">
            <div className="cart__box">
              <div className="cart__box__top">
                <p>PRODUCT</p>
                <p>PRICE</p>
                <p>QTY</p>
                <p>UNIT PRICE</p>
              </div>
              <div className="cart__box__bottom">{products}</div>
            </div>
            {/*  */}
            <div className="cart__bottom">
              {/*  */}
              <form onSubmit={handleCoupon} className="cart__bottom__coupon">
                <input
                  type="text"
                  placeholder="Voucher code"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                />
                <button>Redeem</button>
              </form>
              {/*  */}
              <div className="cart__bottom__right">
                {/*  */}
                <div className="cart__bottom__right__list">
                  <ul>
                    <li>Subtotal:</li>
                    <li>Shipping fee:</li>
                    <li>Coupon:</li>
                  </ul>
                  <ul>
                    <li>${+calculateAllPrice()}</li>
                    <li>$20</li>
                    <li>{voucher?.toFixed(2)}</li>
                  </ul>
                </div>
                {/*  */}
                <div className="cart__bottom__right__middle">
                  <p>Total</p>
                  <p>${(+calculateAllPrice() + 20 - +voucher).toFixed(2)}</p>
                </div>
                <button onClick={() => setClose(true)}>Check out</button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <Empty img={empty} />
      )}
      {close ? <CartModal close={close} setClose={setClose} /> : <></>}
    </>
  );
};

export default memo(Cart);
