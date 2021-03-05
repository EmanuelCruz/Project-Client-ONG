import React from "react";
import HeaderScreen from "./screen/header/HeaderScreen";
import AboutUsScreen from "./screen/aboutUs/AboutUsScreen";
import ProfileScreen from "./screen/profile/ProfileScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import FooterComponent from "./component/Footer/FooterComponent";
import SliderComponent from "./component/Slider/SliderComponent";



function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/nosotros">
            <AboutUsScreen />
          </Route>
          <Route path="/profile">
            <ProfileScreen />
          </Route>
          <Route path="/">
            <HeaderScreen />
            <SliderComponent />
            <FooterComponent />
          </Route>
        </Switch>
      </div>
      ;
    </Router>
  );
}

export default App;
