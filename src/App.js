import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutUsScreen from './screen/aboutUs/AboutUsScreen';
import BackOffice from './screen/backoffice/';
import ContactScreen from './screen/contact/ContactScreen';
import HeaderScreen from './screen/header/HeaderScreen';
import HomeScreen from './screen/home/HomeScreen';
import ProfileScreen from './screen/profile/ProfileScreen';
import SingUpScreen from './screen/singUp';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderScreen />
        <Switch>
          <Route exact path="/contacto">
            <ContactScreen />
          </Route>
          <Route exact path="/nosotros">
            <AboutUsScreen />
          </Route>
          <Route exact path="/profile">
            <ProfileScreen />
          </Route>
          <Route exact path="/singup">
            <SingUpScreen />
          </Route>
          <Route exact path="/backoffice">
            <BackOffice />
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
