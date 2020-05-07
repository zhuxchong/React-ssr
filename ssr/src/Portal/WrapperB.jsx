import React from "react";
import { renderRoutes } from "react-router-config";
import Home from "../containers/Home/Home";
const Portal = props => {
  console.log(props);
  return (
    <div style={{ width: 1000, height: 1000, border: "1px red solid" }}>
      <p>This is portal 1</p>
      {renderRoutes(props.route.routes)}
      {/* {props.children} */}
    </div>
  );
};

export default Portal;
const route = {
  path: "/a",
  component: Portal,
  routes: [
    {
      path: "/a/home",
      component: Home,
      exact: true,
      loadData: Home.loadData
    }
  ]
};
export { route };
