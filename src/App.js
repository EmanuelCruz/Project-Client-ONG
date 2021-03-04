import React from 'react';
import HeaderScreen from './screen/header/HeaderScreen';
import AboutUsScreen from './screen/aboutUs/AboutUsScreen';
import ProfileScreen from './screen/profile/ProfileScreen';
import ContactScreen from './screen/contact/ContactScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

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
          <Route path="/">
            <HeaderScreen />
          </Route>
        </Switch>
      </div>
      ;
    </Router>
  );
}

export default App;
