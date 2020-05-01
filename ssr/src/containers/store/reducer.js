import { Constant } from "./constants";
const defaultState = {
  newList: [],
  name: "zxc"
};
export default (state = defaultState, actions) => {
  switch (actions.type) {
    case Constant.HOME_LIST:
      return {
        ...state,
        newList: actions.data
      };
    default:
      return state;
  }
};
