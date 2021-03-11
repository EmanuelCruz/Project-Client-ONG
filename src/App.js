import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutUsScreen from './screen/aboutUs/AboutUsScreen';
import BackOffice from './screen/backoffice/';
import ContactScreen from './screen/contact/ContactScreen';
import HeaderScreen from './screen/header/HeaderScreen';
import HomeScreen from './screen/home/HomeScreen';
import ProfileScreen from './screen/profile/ProfileScreen';
import SignUpScreen from './screen/signUp/SignUpScreen';
import NovedadesScreen from './screen/novedades/NovedadesScreen';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderScreen />
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
          <Route path="/signup">
            <SignUpScreen />
          </Route>
          <Route path="/backoffice">
            <BackOffice />
          </Route>
          <Route exact path="/novedades">
            <NovedadesScreen />
          </Route>
          <Route exact path="/">
            <HomeScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
