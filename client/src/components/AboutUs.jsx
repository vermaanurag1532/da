import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
            we are revolutionizing the future of healthcare through innovation, automation, and cutting-edge technology. Our mission is to enhance patient care, streamline hospital operations, and empower medical professionals by integrating autonomous robotics, AI, and advanced digital solutions into everyday healthcare workflows.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
