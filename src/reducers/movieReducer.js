function movieReducer(
  state = {
    movies: [],
    loading: true
  },
  action
) {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "GET_MOVIES":
      return { ...state, movies: action.movies, loading: false };
    case "GET_MOVIE":
      return { ...state, movie: action.movie, loading: false };

    default:
      return state;
  }
}

export default movieReducer;
