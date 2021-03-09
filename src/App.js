import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screen/home/HomeScreen";
import HeaderScreen from "./screen/header/HeaderScreen";
import AboutUsScreen from "./screen/aboutUs/AboutUsScreen";
import ProfileScreen from "./screen/profile/ProfileScreen";
import ContactScreen from "./screen/contact/ContactScreen";
import SingUpScreen from "./screen/singUp";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/contacto">
            <ContactScreen />
          </Route>
          <Route path="/nosotros">
            <AboutUsScreen />
          </Route>
          <Route path="/profile">
            <ProfileScreen />
          </Route>
          <Route path="/singup">
            <SingUpScreen />
          </Route>
          <Route path="/">
            <HeaderScreen />
            <HomeScreen />
          </Route>
        </Switch>
      </div>
      ;
    </Router>
  );
}

export default App;
