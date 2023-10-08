import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const CarouselPage = () => {
  return (
    <div
      style={{
        width: "740px",
        height: "auto",
        marginRight: "32px",
      }}
    >
      <Carousel>
        <Carousel.Item interval={500}>
          <img src="/images/slide1.png" alt="slide1" />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img src="/images/slide2.png" alt="slide2" />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img src="/images/slide3.png" alt="slide3" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselPage;
