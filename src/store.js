import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import movieReducer from "./reducers/movieReducer";

//import userReducer from "./reducers/userReducer";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  movieReducer
  //users: userReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
