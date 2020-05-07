import App from "./App";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";

// 当我加载显示HOME组件之前，我希望调用Home.loadData方法，提前获取到必要的异步数据
// 然后再做服务器端渲染，把页面返回给用户
export default [
  {
    path: "/",
    component: App,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
        loadData: Home.loadData,
        key: "home"
      },
      {
        path: "/login",
        component: Login,
        exact: true,
        key: "login"
      }
    ]
  }
];
