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
import LoginScreen from "./screen/login/LoginScreen";
import BackOfficeActivitiesScreen from "./screen/activities/BackOfficeActivitiesScreen";
import BackOfficeContactsScreen from "./screen/backofficeContacts/BackOfficeContactsScreen";
import TestimonialsList from "./screen/testimonials/TestimonialsList";
import FooterScreen from "./screen/footer/FooterScreen";
import BackOfficeCategoriesScreen from "./screen/categories/BackOfficeCategoriesScreen";
import ProtectedAdminRoute from "./component/ProtectedRoutes/ProtectedAdminRoute";
import ProtectedUserRoute from "./component/ProtectedRoutes/ProtectedUserRoute";
import LogoutScreen from "./screen/logout/LogoutScreen";
import BackOfficeMembersScreen from "./screen/members/BackOfficeMembersScreen";
import "./App.css";
import FormEditProfile from "./component/FormEditProfile/FormEditProfile";

const routes = [
  { path: "/", Component: HomeScreen },
  { path: "/contacto", Component: ContactScreen },
  { path: "/nosotros", Component: AboutUsScreen },
  { path: "/signup", Component: SignUpScreen },
  { path: "/novedades", Component: NovedadesScreen },
  { path: "/novedad/:id", Component: DetalleNovedadScreen },
  { path: "/activities/:id", Component: ActivitiesScreen },
  { path: "/login", Component: LoginScreen },
  { path: "/logout", Component: LogoutScreen },
];

const backOfficeRoutes = [
  { path: "/backoffice/app/edit-organization", Component: EditOrganizationScreen },
  { path: "/backoffice/app/news", Component: BackOfficeNewsScreen },
  { path: "/backoffice/app/users", Component: AdminUsersListScreen },
  { path: "/backoffice/app/activities", Component: BackOfficeActivitiesScreen },
  { path: "/backoffice/app/contacts", Component: BackOfficeContactsScreen },
  { path: "/backoffice/app/testimonios", Component: TestimonialsList },
  { path: "/backoffice/app/categories", Component: BackOfficeCategoriesScreen },
  { path: "/backoffice/app/members", Component: BackOfficeMembersScreen },
  { path: "/backoffice/profile", Component: ProfileScreen },
  { path: "/backoffice/edit-profile", Component: FormEditProfile }
];

const adminRoutes = [{ path: "/backoffice", Component: BackOffice }];

const userRoutes = [{ path: "/profile", Component: ProfileScreen },{ path: "/edit-profile", Component: FormEditProfile }];

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderScreen />
        <Switch>
          <AnimatePresence>
            {routes.map(({ path, Component }) => (
              <Route key={path} exact path={path}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Component />
                </motion.div>
              </Route>
            ))}
            {backOfficeRoutes.map(({ path, Component }) => (
              <ProtectedAdminRoute
                path={path}
                component={Component}
                key={`par-${path}`}
              />
            ))}
            {adminRoutes.map(({ path, Component }) => (
              <ProtectedAdminRoute
                path={path}
                component={Component}
                key={`par-${path}`}
              />
            ))}
            {userRoutes.map(({ path, Component }) => (
              <ProtectedUserRoute
                path={path}
                component={Component}
                key={`pur-${path}`}
              />
            ))}
          </AnimatePresence>
        </Switch>
        <FooterScreen />
      </div>
    </Router>
  );
}

export default App;
