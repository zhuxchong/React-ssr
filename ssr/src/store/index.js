import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as constainerReducer } from "../containers/store";
const reducer = combineReducers({
  constainerReducer
});
const getStore = () => {
  return createStore(reducer, applyMiddleware(thunk));
};
export default getStore;
