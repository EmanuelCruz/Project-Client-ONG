import React, { useState } from "react";
import SliderComponent from "./../../component/Slider/SliderComponent";
import LastNews from "./News/LastNews";
import News from "./News/News";
import Welcome from "./Welcome/Welcome";

const HomeScreen = () => {

  return (
    <div className="home">
      <SliderComponent />
      <Welcome />
      <LastNews />
      <News />
    </div>
  );
};

export default HomeScreen;
