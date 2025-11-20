import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-image">
          <img src="https://img-c.udemycdn.com/notices/web_carousel_slide/image/5ab81bd5-af55-4235-9f1e-07cdc7ce0b93.jpg" alt="Hero" />
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1>Learn more, spend less — Black Friday Sale from E£279.99</h1>
            <p>Sitewide savings on thousands of courses. Ends Nov 28.</p>
            <button className="cta-button">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
