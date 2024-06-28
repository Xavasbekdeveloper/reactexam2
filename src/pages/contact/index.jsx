import React, { memo } from "react";

import "./contact.scss";

const Contact = () => {
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
          <form className="contact__top__form">
            <div className="contact__top__form__group">
              <label htmlFor="fullname">Fullname</label>
              <input id="fullname" type="text" placeholder="James Doe" />
            </div>
            <div className="contact__top__form__group">
              <label htmlFor="Email">Email</label>
              <input id="Email" type="text" placeholder="jamesdoe@gmail.com" />
            </div>
            <div className="contact__top__form__group">
              <label htmlFor="Message">Message</label>
              <textarea
                name=""
                id="Message"
                placeholder="Type your message"
              ></textarea>
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
