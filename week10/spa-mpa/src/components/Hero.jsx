import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="hero text-white d-flex align-items-center justify-content-center"
    >
      <div className="container text-center">
        <h1 className="fw-bold">Your Cozy coffee Spot</h1>
        <span className="fs-6 fw-light">Fresh beans...</span>
        <div className="mt-4">
          <button type="button" className="btn btn-primary" id="search-btn">
            View Menu
          </button>

          <button
            type="button"
            className="btn btn-outline-light"
            id="search-btn"
          >
            View Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
