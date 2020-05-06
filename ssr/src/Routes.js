import React from "react";
import { Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import Header from "./components/Header";
const currentRouters = [
  {
    path: "/",
    component: Home,
    exact: true,
    loadData: Home.loadData // for ssr load data, coz didmount in ssr doesnot work
  },
  {
    path: "/login",
    component: Login,
    exact: true
  }
];

const ClientRoute = () => {
  return (
    <div>
      {currentRouters.map(i => (
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
export { currentRouters };
