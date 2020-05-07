import Index from "./Index.jsx";

import { route as routeA } from "./Portal/WrapperA";
import { route as routeB } from "./Portal/WrapperB";
// 当我加载显示HOME组件之前，我希望调用Home.loadData方法，提前获取到必要的异步数据
// 然后再做服务器端渲染，把页面返回给用户
export default [
  {
    path: "/",
    component: Index,
    routes: [routeA, routeB]
  }
];
