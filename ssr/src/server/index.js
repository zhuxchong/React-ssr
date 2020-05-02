import express from "express";
import { render } from "./utils";

const app = express();
app.use(express.static("react")); //中间件。<script>中配置了index.js -> 加载的地址在react目录下

app.get("*", function(req, res) {
  res.send(render(req));
});

var server = app.listen(3000);
