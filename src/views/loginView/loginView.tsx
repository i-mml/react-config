import React from "react";
import InformationBox from "./components/informationBox";
import CarouselPage from "./components/carousel";
import s from "./login.module.scss";

const loginView = () => {
  return (
    <div className={s.container}>
      <CarouselPage />
      <InformationBox />
    </div>
  );
};

export default loginView;
