import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as constainerReducer } from "../containers/store";
//import { reducer } from "../containers/store";
const reducer = combineReducers({
  constainerReducer
});
const getStore = () => {
  return createStore(reducer, applyMiddleware(thunk));
};
const getClientStore = () => {
  const defaultState = window.history.state.storeInitial || {};

  return createStore(
    reducer,
    { constainerReducer: defaultState },
    applyMiddleware(thunk)
  );
};
export default getStore;

export { getStore, getClientStore };
