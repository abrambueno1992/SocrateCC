import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

export default ({ children }) => {
  return (
    <Provider store={createStore(reducers, composeWithDevTools())}>
      {children}
    </Provider>
  );
};
