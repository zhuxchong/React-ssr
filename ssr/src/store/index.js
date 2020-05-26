import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as constainerReducer } from "../containers/store";
import { reducer as componentReducer } from "../components/store";
import { instance as clientServer } from "../client/request";
import { instance as serverServer } from "../server/request";
//import { reducer } from "../containers/store";
const reducer = combineReducers({
  constainerReducer,
  componentReducer
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
const getStore = req => {
  return createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(serverServer(req)))
  );
};
const getClientStore = () => {
  const defaultState = window.history.state.storeInitial || {};

  return createStore(
    reducer,
    {
      constainerReducer: defaultState.constainerReducer || {},
      componentReducer: defaultState.componentReducer || {}
    },
    applyMiddleware(thunk.withExtraArgument(clientServer))
  );
};

export default getStore;

export { getStore, getClientStore };
