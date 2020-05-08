import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";

export const render = (req, store, routes) => {
  //console.log(matchRouter);

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter context={{}} location={req.path}>
        {renderRoutes(routes)}
      </StaticRouter>
    </Provider>
  );
  return `
    <html>
    <script type="application/javascript"> 
    const temp=window.history.state || {}
    window.history.replaceState({...temp,storeInitial:${JSON.stringify(
      store.getState() || {}
    )}},"title 1")</script> 
			<head>
				<title>ssr</title>
			</head>
      <body>
      <div id='root'>${content}</div>
      <script src='./react_bundles.js'></script>
     
    
		
			</body>
		</html>
  `;

  // run loadData;
};
// <div id='root'>${content}</div>
//       <script window.context={
//         state:${JSON.stringify(store.getState())}
//       }></script>
// 			<script src='./react_bundles.js'></script>
