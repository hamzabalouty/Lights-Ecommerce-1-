import React, { useEffect } from "react";
import "./Contact.css";
import { BiLogoTelegram } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneFill, BsFillClockFill } from "react-icons/bs";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact">
      <div className="contact-title">
        <h4>CONTACT US</h4>
        <p>Home / Contact Us</p>
      </div>
      <div className="contact-contaitner">
        <div className="contact-box">
          <div className="contact-box-icon">
            <BiLogoTelegram className="tele-icon" />
          </div>
          <h4>ADDRESS</h4>
          <p>No: 58 A, East Madison Street, Baltimore, MD, USA 4508</p>
        </div>
        <div className="contact-box">
          <div className="contact-box-icon">
            <AiOutlineMail className="tele-icon" />
          </div>
          <h4>EMAIL</h4>
          <p>email:contact@example.com</p>
        </div>
        <div className="contact-box">
          <div className="contact-box-icon">
            <BsTelephoneFill className="tele-icon" />
          </div>
          <h4>PHONE</h4>
          <p>call:+0000-123-456789</p>
        </div>
        <div className="contact-box">
          <div className="contact-box-icon">
            <BsFillClockFill className="tele-icon" />
          </div>
          <h4>TIMING</h4>
          <p>available at 10am-8pm</p>
        </div>
      </div>
      <div className="contact-map">
        <iframe
          width="1400"
          height="600"
          className="gmap_iframe"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=700&amp;height=400&amp;hl=en&amp;q=cairo&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
      <div className="contact-form">
        <h4>SEND US A MESSAGE</h4>
        <div className="contact-form-container">
          <div className="contact-form-inputs">
            <div className="contact-form-input">
              <input type="text" placeholder="Name" />
            </div>
            <div className="contact-form-input">
              <input type="text" placeholder="Email" />
            </div>
            <div className="contact-form-input">
              <input type="text" placeholder="Phone" />
            </div>
          </div>
          <div className="contact-form-right">
            <div className="contact-form-textarea">
              <textarea placeholder="Message"></textarea>
            </div>
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
