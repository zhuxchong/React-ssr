import React from "react";
import { Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import Header from "./components/Header";
const ClientRoute = () => {
  return (
    <div>
      <Route path="/" exact component={Home}></Route>
      <Route path="/login" exact component={Login}></Route>
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
