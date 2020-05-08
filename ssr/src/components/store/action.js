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
      .get("/api/isLogin.json")
      .then(r => {
        // console.log(res.data.data.login);

        dispatch(changeLogin(r.data.data.login));
      })
      .catch(e => {
        console.warn(e);
      });
  };
};
export const login = url => {
  return (dispatch, getState, customAxios) => {
    return customAxios
      .get(`/api/${url}.json`)
      .then(r => {
        dispatch(changeLogin("login" === url ? true : false));
      })
      .catch(e => {
        console.warn(e);
      });
  };
};
