import React from "react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/s (1).png";
import img2 from "../assets/s (2).png";
import img3 from "../assets/s (3).png";
import img4 from "../assets/s (4).png";

const Home = () => {
  return (
    <div className="container">
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showThumbs={false}
        interval={1000}
      >
        <div>
          <img src={img1} alt="Item1" />
          <p className="legend">Ballons</p>
        </div>
        <div>
          <img src={img2} alt="Item3" />
          <p className="legend">Animating Ballons</p>
        </div>
        <div>
          <img src={img3} alt="Item3" />
          <p className="legend">Before Submit</p>
        </div>
        <div>
          <img src={img4} alt="Item3" />
          <p className="legend">After Submit</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Home;