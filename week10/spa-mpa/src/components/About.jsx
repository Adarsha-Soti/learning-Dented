import React from "react";

const About = () => {
  return (
    <section className="py-5" id="about">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-12 col-md-6">
            <h2 className="mb-4">About Little Corner</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
              quibusdam reprehenderit id, minus dolores quaerat! Recusandae,
              aliquam, dolorem alias laudantium nulla reiciendis consequuntur ab
              quod quasi eligendi, corrupti id aspernatur?
            </p>
          </div>
          <div className="col-12 col-md-6">
            <img
              className="img-fluid rounded shadow-lg"
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/3e/ec/0d/entrance-on-enmore-road.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
