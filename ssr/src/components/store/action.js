import { Constant } from "./constants";
const changeLogin = b => {
  return {
    type: Constant.CHANGE_LOGIN_STATUS,
    value: b
  };
};
export const getHeaderInfo = () => {
  return (dispatch, getState, customAxios) => {
    return customAxios
      .get("/api/isLogin.json?secret=PP87ANTIPIRATE")
      .then(r => {
        // console.log(res.data.data.login);

        dispatch(changeLogin(r.data.data.login));
      })
      .catch(e => {
        console.warn(e);
      });
  };
};
export const login = login => {
  return (dispatch, getState, customAxios) => {
    return customAxios
      .get(`/api/${login}.json?secret=PP87ANTIPIRATE`)
      .then(r => {
        dispatch(changeLogin("login" === login ? true : false));
      })
      .catch(e => {
        console.warn(e);
      });
  };
};
