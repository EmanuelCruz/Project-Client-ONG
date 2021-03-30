import React, { useState } from "react";
import SliderComponent from "./../../component/Slider/SliderComponent";

const HomeScreen = () => {
  const [welcomeHomeTitle, setWelcomeHomeTitle] = useState('welcomeTitle');
  const [welcomeHomeMessage, setWelcomeHomeMessage] = useState('welcomeMessage');
  const [news, setNews] = useState({
    news: {
      one: "",
      two: "",
      three: "",
      four: "",
    },
  });

  return (
    <div className="home">
      <SliderComponent />
      <h4>{welcomeHomeTitle}</h4>
      <p>{welcomeHomeMessage}</p>
      <h4>Últimas novedades</h4>
      <h4>{news.three} Here goes the third new</h4>
      <h4>{news.four} Here goes the fourth new</h4>
    </div>
  );
};

export default HomeScreen;
