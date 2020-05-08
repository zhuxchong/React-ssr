import { Constant } from "./constants";
const defaultState = {
  isLogin: false
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case Constant.CHANGE_LOGIN_STATUS:
      return {
        ...state,
        isLogin: action.value
      };
    default:
      return state;
  }
};
