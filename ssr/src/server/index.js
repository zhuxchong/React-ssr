import express from "express";
import { render } from "./utils";
import { getStore } from "../store";
import { currentRouters } from "../Routes";
import { matchRoutes } from "react-router-config";
import proxy from "express-http-proxy";
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
  const store = getStore();
  const matchRouter = matchRoutes(currentRouters, req.path);
  let promise = [];
  matchRouter.forEach(item => {
    if (item.route.loadData) {
      promise.push(item.route.loadData(store));
    }
  });
  Promise.all(promise)
    .then(e => {
      res.send(render(req, store));
    })
    .catch(e => console.warn(e));
});

var server = app.listen(3000);
