import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUsScreen from "./screen/aboutUs/AboutUsScreen";
import BackOffice from "./screen/backoffice/";
import ContactScreen from "./screen/contact/ContactScreen";
import HeaderScreen from "./screen/header/HeaderScreen";
import HomeScreen from "./screen/home/HomeScreen";
import ProfileScreen from "./screen/profile/ProfileScreen";
import SingUpScreen from "./screen/singUp";
import "./App.css";
import EditOrganizationScreen from "./screen/editOrganization/EditOrganizationScreen";

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
          <Route exact path="/backoffice">
            <BackOffice />
          </Route>
          <Route exact path="/backoffice/edit-organization">
            <EditOrganizationScreen />
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
