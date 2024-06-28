import React, { memo, useState } from "react";
import { IoClose, IoCardOutline } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaPaypal } from "react-icons/fa";
import { BsBank } from "react-icons/bs";

import "./cartModal.scss";

const BOT__TOKEN = "7296011111:AAH9fsPtqvBOqekhvlcG9MVl4JBifgNtEJk";
const CHAT__ID = "-1002221404265";

const CartModal = ({ close, setClose }) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [apy, setPay] = useState("");
  const [phone, setPhone] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    let text = "User: %0A%0A";
    text += `FName: ${fname} %0A`;
    text += `LName: ${lname} %0A`;
    text += `Email: ${email} %0A`;
    text += `phone: ${phone} %0A`;
    text += `Message: ${message}`;
    let url = ` https://api.telegram.org/bot${BOT__TOKEN}/sendMessage?chat_id=${CHAT__ID}&text=${text}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    e.target.reset();
  };

  return (
    <div className="modal">
      <div onClick={() => setClose(false)} className="modal__overlay"></div>
      <form onSubmit={handleSendMessage} action="" className="modal__form">
        <div className="modal__form__top">
          <div className="modal__form__top__btns">
            <button onClick={() => setClose(false)}>
              <FaArrowLeftLong />
            </button>
            <button onClick={() => setClose(false)}>
              <IoClose />
            </button>
          </div>
          <h3>Make Payment</h3>
        </div>
        <div className="modal__form__bottom">
          {/*  */}
          <div className="modal__form__bottom__box">
            <input
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              type="text"
              placeholder="First Name"
            />
            <input
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              type="text"
              placeholder="Last Name"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email Address"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name=""
              placeholder="Address for Delivery"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <div className="modal__form__bottom__pay">
              <div>
                <label htmlFor="card">
                  <IoCardOutline />
                  Credit Card Or Debit
                </label>
                <input id="card" type="radio" name="pay" />
              </div>
              <div>
                <label htmlFor="paypal">
                  <FaPaypal />
                  Paypal
                </label>
                <input id="paypal" type="radio" name="pay" />
              </div>
              <div>
                <label htmlFor="bank">
                  <BsBank />
                  Bank Transfer
                </label>
                <input id="bank" type="radio" name="pay" />
              </div>
            </div>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              placeholder="Mobile Phone"
            />
          </div>
          {/*  */}
          <div className="modal__form__bottom__btns">
            <button>Go to Payment</button>
          </div>
        </div>
        {/*  */}
      </form>
    </div>
  );
};

export default memo(CartModal);
