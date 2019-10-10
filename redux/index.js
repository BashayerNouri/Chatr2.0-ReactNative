import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { checkForExpiredToken } from "./actions";
import rootReducer from "./reducers";

import { composeWithDevTools } from "redux-devtools-extension";
const middlewares = [thunk];

const enhancer = composeWithDevTools({
  // Options: https://github.com/jhen0409/react-native-debugger#options
})(applyMiddleware(...middlewares));

const store = createStore(
  rootReducer,
  enhancer
);

// store.dispatch(checkForExpiredToken())

export default store;
