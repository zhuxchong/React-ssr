//console.log(123);
import React from "react";
import ReactDom from "react-dom";
import Home from "../containers/Home";
// const Test = () => {
//   return <div>Test</div>;
// }; root内的内容会被react完全接管
ReactDom.hydrate(<Home />, document.getElementById("root"));
