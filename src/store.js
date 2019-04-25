import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import movieReducer from "./reducers/movieReducer";
import commentReducer from "./reducers/commentReducer";

//import userReducer from "./reducers/userReducer";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  movieReducer,
  commentReducer
  //users: userReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
