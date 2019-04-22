import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import movieReducer from "./reducers/movieReducer";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  movieReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
