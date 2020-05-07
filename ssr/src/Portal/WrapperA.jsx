import React from "react";
import { renderRoutes } from "react-router-config";
import Login from "../containers/Login/Login";
const Portal = props => {
  return (
    <div style={{ width: 1000, height: 1000, border: "1px green solid" }}>
      <p>This is portal 2</p>
      {renderRoutes(props.route.routes)}
      {/* {props.children} */}
    </div>
  );
};

export default Portal;
const route = {
  path: "/b",
  component: Portal,
  routes: [
    {
      path: "/b/login",
      component: Login,
      exact: true,
      key: "login"
    }
  ]
};
export { route };
