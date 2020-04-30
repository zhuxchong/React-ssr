import React from "react";
import { Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
const ClientRoute = () => {
  return (
    <React.Fragment>
      <Route path="/" exact component={Home}></Route>
      <Route path="/login" exact component={Login}></Route>
    </React.Fragment>
  );
};
export default ClientRoute;
