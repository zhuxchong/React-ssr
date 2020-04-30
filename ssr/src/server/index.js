import express from "express";
import React from "react";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";
import Routes from "../Routes";

const app = express();
app.use(express.static("public"));
app.get("*", function(req, res) {
  const content = renderToString(
    <StaticRouter context={{}} location={req.path}>
      <Routes />
    </StaticRouter>
  );
  //res.send(renderToString<Home/>)
  res.send(`
		<html>
			<head>
				<title>ssr</title>
			</head>
			<body>
				<div id='root'>${content}</div>
				<script src='./index.js'></script>
			</body>
		</html>
  `);
});

var server = app.listen(3000);
