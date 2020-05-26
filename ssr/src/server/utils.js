import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import { Helmet } from "react-helmet";
export const render = (req, store, routes, context) => {
  //console.log(matchRouter);

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter context={context} location={req.path}>
        {renderRoutes(routes)}
      </StaticRouter>
    </Provider>
  );
  const helmet = Helmet.renderStatic();
  const cssStr = Array.isArray(context.css) ? context.css.join("\n") : "";

  return `
    <html>
  
			<head>   
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
             <style>${cssStr}</style>
			</head>
      <body>
      <div id='root'>${content}</div>
      <script> 
          const temp=window.history.state || {}
          window.history.replaceState({...temp,storeInitial:${JSON.stringify(
            store.getState() || {}
          )}},true)
    </script> 
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
