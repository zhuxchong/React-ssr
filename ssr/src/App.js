import React from "react";
import Header from "./components/Header/Header";
import { renderRoutes } from "react-router-config";
import { actions } from "./components/store";

const App = props => {
  return (
    <div>
      <Header />
      {renderRoutes(props.route.routes)}
    </div>
  );
};
App.loadData = store => {
  //console.log("123");
  return store.dispatch(actions.getHeaderInfo());
};
export default App;
