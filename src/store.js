import { createStore, applyMiddleware, combineReducers } from "redux";
import movieReducer from "./reducers/movieReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  movies: movieReducer
  //books: booksReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
