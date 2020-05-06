import React from "react";
import { Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import Header from "./components/Header";
const ClientRoute = () => {
  return (
    <div>
      {[
        {
          path: "/",
          component: Home,
          exact: true,
          loadData: Home.loadData
        },
        {
          path: "/login",
          component: Login,
          exact: true
        }
      ].map(i => (
        <Route {...i} key={i.path} />
      ))}
    </div>
  );
};
const RouterWithPortal = () => {
  return (
    <React.Fragment>
      <Header />
      <ClientRoute />
    </React.Fragment>
  );
};
export default RouterWithPortal;
