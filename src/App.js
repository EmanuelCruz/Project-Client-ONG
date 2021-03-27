import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import AboutUsScreen from "./screen/aboutUs/AboutUsScreen";
import BackOffice from "./screen/backoffice/";
import ContactScreen from "./screen/contact/ContactScreen";
import HeaderScreen from "./screen/header/HeaderScreen";
import HomeScreen from "./screen/home/HomeScreen";
import ProfileScreen from "./screen/profile/ProfileScreen";
import SignUpScreen from "./screen/signUp";
import EditOrganizationScreen from "./screen/editOrganization/EditOrganizationScreen";
import BackOfficeNewsScreen from "./screen/news/BackOfficeNewsScreen";
import AdminUsersListScreen from "./screen/adminUsersList/AdminUsersListScreen";
import NovedadesScreen from "./screen/novedades/NovedadesScreen";
import DetalleNovedadScreen from "./screen/detalleNovedad/DetalleNovedadScreen";
import ActivitiesScreen from "./screen/activities/ActivitiesScreen";
import LoginFormComponent from "./component/login/LoginFormComponent";
import BackOfficeActivitiesScreen from "./screen/activities/BackOfficeActivitiesScreen";
import BackOfficeContactsScreen from "./screen/backofficeContacts/BackOfficeContactsScreen";
import TestimonialsList from "./screen/testimonials/TestimonialsList";
import FooterScreen from "./screen/footer/FooterScreen";
import "./App.css";

const routes = [
  { path: '/', Component: HomeScreen },
  { path: '/contacto', Component: ContactScreen },
  { path: '/nosotros', Component: AboutUsScreen },
  { path: '/profile', Component: ProfileScreen },
  { path: '/signup', Component: SignUpScreen },
  { path: '/backoffice', Component: BackOffice },
  { path: '/backoffice/edit-organization', Component: EditOrganizationScreen },
  { path: '/backoffice/news', Component: BackOfficeNewsScreen },
  { path: '/backoffice/users', Component: AdminUsersListScreen },
  { path: '/backoffice/activities', Component: BackOfficeActivitiesScreen },
  { path: '/backoffice/contacts', Component: BackOfficeContactsScreen },
  { path: '/backoffice/testimonios', Component: TestimonialsList },
  { path: '/novedades', Component: NovedadesScreen },
  { path: '/novedad/:id', Component: DetalleNovedadScreen },
  { path: '/activities/:id', Component: ActivitiesScreen },
  { path: '/login', Component: LoginFormComponent },
]

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderScreen />
        <Switch>
          <AnimatePresence>
            {routes.map(({ path, Component }) => (
              <Route key={path} exact path={path}>
                <motion.div initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}>
                  <Component />
                </motion.div>
              </Route>
            ))}
          </AnimatePresence>
        </Switch>
        <FooterScreen />
      </div>
    </Router >
  );
}

export default App;
