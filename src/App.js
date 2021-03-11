<<<<<<< HEAD
import React from "react";
=======
import React from 'react';
>>>>>>> 4c010786e2107bc56a5936129acbd039b88e5f7b
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutUsScreen from './screen/aboutUs/AboutUsScreen';
import BackOffice from './screen/backoffice/';
import ContactScreen from './screen/contact/ContactScreen';
import HeaderScreen from './screen/header/HeaderScreen';
import HomeScreen from './screen/home/HomeScreen';
import ProfileScreen from './screen/profile/ProfileScreen';
<<<<<<< HEAD
import SignUpScreen from './screen/signUp/SignUpScreen';
import NovedadesScreen from './screen/novedades/NovedadesScreen';
=======
import SingUpScreen from './screen/singUp';
>>>>>>> 4c010786e2107bc56a5936129acbd039b88e5f7b
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
<<<<<<< HEAD
          <Route path="/signup">
            <SignUpScreen />
=======
          <Route exact path="/singup">
            <SingUpScreen />
>>>>>>> 4c010786e2107bc56a5936129acbd039b88e5f7b
          </Route>
          <Route exact path="/backoffice">
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
