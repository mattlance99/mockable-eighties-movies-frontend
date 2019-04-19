function movieReducer(state = [], action) {
  let idx;
  switch (action.type) {
    case "ADD_MOVIE":
      return [...state, action.book];

    case "REMOVE_MOVIE":
      idx = state.indexOf(action.id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    case "GET_MOVIES":
      return action.movies;

    default:
      return state;
  }
}

export default movieReducer;
