//console.log(123);
import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "../Routes";

// const Test = () => {
//   return <div>Test</div>;
// };
//root内的内容会被react完全接管;
const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};
ReactDom.hydrate(<App />, document.getElementById("root"));
