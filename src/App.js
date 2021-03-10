import React from "react";
<<<<<<< HEAD
import HeaderScreen from "./screen/header/HeaderScreen";
import AboutUsScreen from "./screen/aboutUs/AboutUsScreen";
import ProfileScreen from "./screen/profile/ProfileScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ContactScreen from "./screen/contact/ContactScreen";
import SingUpScreen from "./screen/singUp";
import BackOffice from "./screen/backoffice/";
=======
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screen/home/HomeScreen";
import HeaderScreen from "./screen/header/HeaderScreen";
import AboutUsScreen from "./screen/aboutUs/AboutUsScreen";
import ProfileScreen from "./screen/profile/ProfileScreen";
import ContactScreen from "./screen/contact/ContactScreen";
import SingUpScreen from "./screen/singUp";
import "./App.css";
>>>>>>> 07db48b41dcfd3be06d7f1b99e986b5ea250f060

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
          <Route path="/backoffice">
            <BackOffice />
          </Route>
          <Route exact path="/">
            <HeaderScreen />
            <HomeScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
