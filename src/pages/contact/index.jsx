import React, { memo, useEffect, useState } from "react";

import "./contact.scss";

const BOT__TOKEN = "7296011111:AAH9fsPtqvBOqekhvlcG9MVl4JBifgNtEJk";
const CHAT__ID = "-1002221404265";
const USER__ID = "6379671623";

const Contact = () => {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleMessage = (e) => {
    e.preventDefault();
    let text = "User: %0A%0A";
    text += `Name: ${fname} %0A`;
    text += `Email: ${email} %0A`;
    text += `Message: ${message}`;
    let url = ` https://api.telegram.org/bot${BOT__TOKEN}/sendMessage?chat_id=${CHAT__ID}&text=${text}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    setFname("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="contact">
      <div className="container contact__container">
        <div className="contact__top">
          <div className="contact__top__left">
            <h2>Get in touch</h2>
            <p>contact@e-comm.ng</p>
            <p>+234 4556 6665 34</p>
            <p>20 Prince Hakerem Lekki Phase 1, Lagos.</p>
          </div>
          <form onSubmit={handleMessage} className="contact__top__form">
            <div className="contact__top__form__group">
              <label htmlFor="fullname">Fullname</label>
              <input
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                id="fullname"
                type="text"
                placeholder="James Doe"
              />
            </div>
            <div className="contact__top__form__group">
              <label htmlFor="Email">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="Email"
                type="text"
                placeholder="jamesdoe@gmail.com"
              />
            </div>
            <div className="contact__top__form__group">
              <label htmlFor="Message">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name=""
                id="Message"
                placeholder="Type your message"
              ></textarea>
            </div>
            <div>
              <button>Submit</button>
            </div>
          </form>
        </div>
        <form className="featured__form">
          <input type="text" placeholder="Search query..." id="" />
          <button type="button">Search</button>
        </form>
      </div>
    </section>
  );
};

export default memo(Contact);
