import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import s from "../login.module.scss";

const CarouselPage = () => {
  return (
    <div className={s.carouselContainer}>
      <Carousel interval={1000}>
        <Carousel.Item >
          <img src="/images/slide1.png" alt="slide1" />
        </Carousel.Item>
        <Carousel.Item >
          <img src="/images/slide2.png" alt="slide2" />
        </Carousel.Item>
        <Carousel.Item >
          <img src="/images/slide3.png" alt="slide3" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselPage;
