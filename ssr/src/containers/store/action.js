import axios from "axios";
import { Constant } from "./constants";

const changeHomeList = data => {
  return {
    type: Constant.HOME_LIST,
    data
  };
};
export const getHomeList = () => {
  return dispatch => {
    // const res = await axios.get(
    //   "http://47.95.113.63/ssr/api/news.json?secret=PP87ANTIPIRATE"
    // );

    // try {
    //   dispatch(changeHomeList(res.data.data));
    // } catch (e) {
    //   console.warn(e);
    // }

    return axios
      .get("http://47.95.113.63/ssr/api/news.json?secret=PP87ANTIPIRATE")
      .then(r => {
        dispatch(changeHomeList(r.data.data));
      })
      .catch(e => {
        console.warn(e);
      });
  };
};
