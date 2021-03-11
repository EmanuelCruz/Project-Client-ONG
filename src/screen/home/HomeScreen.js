import React, { useState } from "react";
import SliderComponent from "./../../component/Slider/SliderComponent";

const HomeScreen = () => {
  const [welcomeMessage, setWelcomeMessage] = useState("");
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
      <h3>This is the Home screen</h3>
      <h4>{welcomeMessage} Here goes a dynamic welcome message</h4>
      <h4>{news.one} Here goes the first new</h4>
      <h4>{news.two} Here goes the second new</h4>
      <h4>{news.three} Here goes the third new</h4>
      <h4>{news.four} Here goes the fourth new</h4>
    </div>
  );
};

export default HomeScreen;
