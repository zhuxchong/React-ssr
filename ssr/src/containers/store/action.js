import { Constant } from "./constants";

const changeHomeList = data => {
  return {
    type: Constant.HOME_LIST,
    data
  };
};
export const getHomeList = isServer => {
  return (dispatch, getState, customAxios) => {
    // const res = await axios.get(
    //   "http://47.95.113.63/ssr/api/news.json?secret=PP87ANTIPIRATE"
    // );

    // try {
    //   dispatch(changeHomeList(res.data.data));
    // } catch (e) {
    //   console.warn(e);
    // }
    //const request = isServer ? serverRequest : clientRequest;
    return customAxios
      .get("/api/news.json?secret=PP87ANTIPIRATE")
      .then(r => {
        dispatch(changeHomeList(r.data.data));
      })
      .catch(e => {
        console.warn(e);
      });
  };
};
export const getTranslation = () => {
  return (dispatch, getState, customAxios) => {
    return customAxios
      .get("/api/translations.json?secret=PP87ANTIPIRATE")
      .then(r => {
        if (r.success) {
          return;
        } else {
          dispatch({
            type: Constant.GET_TRANSLATION,
            data: r.data.data
          });
        }
      })
      .catch(e => {
        console.warn(e);
      });
  };
};
