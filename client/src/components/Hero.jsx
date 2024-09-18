import React from "react";
import image from "../images/verma.jpg";
import "../styles/hero.css";
import '../../../client/src/components/Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Automating Care, <br />
          Elevating Lives
        </h1>
        <p>
          We propose a Hospital Service ecosystem tailored specifically to meet hospital needs and improve efficiency in various domains.
        </p>
      </div>
      <div className="hero-img">
        <img
          className='services'
          src={image}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;
