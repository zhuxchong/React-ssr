import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as constainerReducer } from "../containers/store";
import { instance as clientServer } from "../client/request";
import { instance as serverServer } from "../server/request";
//import { reducer } from "../containers/store";
const reducer = combineReducers({
  constainerReducer
});
// const store = createStore(
//   reducer,
//   applyMiddleware(thunk.withExtraArgument(api))
// );

// // later
// function fetchUser(id) {
//   return (dispatch, getState, api) => {
//     // you can use api here
//   };
// }   from github thunk
const getStore = () => {
  return createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(serverServer))
  );
};
const getClientStore = () => {
  const defaultState = window.history.state.storeInitial || {};

  return createStore(
    reducer,
    { constainerReducer: defaultState },
    applyMiddleware(thunk.withExtraArgument(clientServer))
  );
};

export default getStore;

export { getStore, getClientStore };
