import React from 'react';
import HeaderScreen from './screen/header/HeaderScreen';
import AboutUsScreen from './screen/aboutUs/AboutUsScreen';
import ProfileScreen from './screen/profile/ProfileScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import ContactScreen from './screen/contact/ContactScreen';
import SingUpScreen from './screen/singUp';
import EditOrganizationScreen from './screen/editOrganization/EditOrganizationScreen';

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
          <Route path="/backoffice/edit-organization">
            <EditOrganizationScreen />
          </Route>
          <Route path="/">
            <HeaderScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
