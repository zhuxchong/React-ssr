//console.log(123);
import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import routes from "../Routes";
import { renderRoutes } from "react-router-config";
import { getClientStore } from "../store";
import { Provider } from "react-redux";

// const Test = () => {
//   return <div>Test</div>;
// };
//root内的内容会被react完全接管;
const App = () => {
  const store = getClientStore();
  return (
    <Provider store={store}>
      <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
    </Provider>
  );
};
ReactDom.hydrate(<App />, document.getElementById("root"));
