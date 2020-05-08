import { Constant } from "./constants";
const defaultState = {
  newList: [],
  name: "zxc",
  translation: []
};
export default (state = defaultState, actions) => {
  switch (actions.type) {
    case Constant.HOME_LIST:
      return {
        ...state,
        newList: actions.data
      };
    case Constant.GET_TRANSLATION:
      return {
        ...state,
        translation: actions.data
      };
    default:
      return state;
  }
};
