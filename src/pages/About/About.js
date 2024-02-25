import React, { useEffect } from "react";
import "./About.css";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about">
      <div className="about-title">
        <h4>ABOUT US</h4>
        <p>Home / About Us</p>
      </div>
      <div className="about-content">
        <img
          src="https://dt-lights.myshopify.com/cdn/shop/files/about003_970x.jpg?v=1635761597"
          alt="about-img"
        />
        <div className="about-content-details">
          <h3>WELCOME TO LIGHTS</h3>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate id est laborum.
          </p>
          <p>
            us ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et
            Ut placerat legendos interpre.Donec vitae sapien ut libero venenatis
            faucibus. Nullam quis ante Etiam sit amet orci eget Duis dan
            molestie, sem in sollicitudin sodales, mi justo sagittis est, id
            consequat ipsum ligula a ante. Pellentesque sapien dui, miverra et
            commodo id ductus id est. Cras eu tempor eros donec ut porttitor
            lacus, nec ullamcorper massa maecenas eu nulla nisl. Destibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere.
          </p>
        </div>
      </div>
      <div className="about-container">
        <div className="about-container-details">
          <h3>MODERN HANGING LIGHTS</h3>
          <p>
            Lacus luctus accumsan tortor posuere ac ut. Purus in mollis nunc sed
            id. Pulvinar pellentesque habitant morbi tristique senectus et netus
            et malesuada. Placerat vestibulum lectus mauris ultrices. Amet
            porttitor eget dolor morbi. Commodo odio aenean sed adipiscing. Et
            magnis dis parturient montes.
          </p>
          <button>Read More</button>
        </div>
        <img
          src="https://dt-lights.myshopify.com/cdn/shop/files/about002_770x.jpg?v=1635761644"
          alt="about-img"
        />
      </div>
      <div className="about-staff">
        <h3>OUR STAFF</h3>
        <div className="about-staff-container">
          <div className="about-staff-box">
            <img
              src="https://dt-lights.myshopify.com/cdn/shop/files/team-03_800x.jpg?v=1635853111"
              alt="about-img"
            />
            <p>VICTORIA LEWIS</p>
            <span>Designer</span>
          </div>
          <div className="about-staff-box">
            <img
              src="https://dt-lights.myshopify.com/cdn/shop/files/team-02_800x.jpg?v=1635853138"
              alt="about-img"
            />
            <p>EDITH UNDERWOOD</p>
            <span>Quality Tester</span>
          </div>
          <div className="about-staff-box">
            <img
              src="https://dt-lights.myshopify.com/cdn/shop/files/team-01_800x.jpg?v=1635853160"
              alt="about-img"
            />
            <p>GENEVIEVE DAVIDSON</p>
            <span>Supporter</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
