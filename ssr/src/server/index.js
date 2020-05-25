import express from "express";
import { render } from "./utils";
import { getStore } from "../store";

import { matchRoutes } from "react-router-config";
import proxy from "express-http-proxy";
import routes from "../Routes";
const app = express();
app.use(express.static("react")); //中间件。<script>中配置了index.js -> 加载的地址在react目录下
app.use(
  "/api",
  proxy("http://47.95.113.63", {
    proxyReqPathResolver: function(req) {
      return "/ssr/api" + req.url;
    }
  })
);
app.get("*", function(req, res) {
  const store = getStore(req);
  const matchRouter = matchRoutes(routes, req.path);
  let promises = [];
  matchRouter.forEach(item => {
    if (item.route.loadData) {
      const promise = new Promise((res, rej) => {
        //永远都会then
        item.route
          .loadData(store)
          .then(res)
          .catch(res);
      });
      promises.push(promise);
    }
  });

  Promise.all(promises)
    .then(e => {
      const context = { css: [] };
      const html = render(req, store, routes, context);
      //console.log(context);
      if (context.action === "REPLACE") {
        res.redirect(301, context.url);
      }
      if (context.notFound) {
        res.status(404);
        res.send(html);
      } else {
        res.send(html);
      }
    })
    .catch(e => {
      res.end("error");
    });
});

var server = app.listen(3000);
