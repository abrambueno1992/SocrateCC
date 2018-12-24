import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import roverStates from "./reducers";

// const store = createStore(
//   reducers,
//   composeWithDevTools()
//   // applyMiddleware(...middleware)
//   // other store enhancers if any
// );
// import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(roverStates, composeWithDevTools());
export default ({ children }) => {
  return <Provider store={createStore(store)}>{children}</Provider>;
};
