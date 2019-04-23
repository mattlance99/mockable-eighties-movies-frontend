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
      return { ...state, movies: action.movies, loading: true };
    case "GET_MOVIE":
      return { ...state, movie: action.movie, loading: false };
    case "ADD_MOVIE":
      //take the new movie that was dispatched from the action and add it to the existing array of movies
      return { ...state, movies: action.movie, loading: false };

    default:
      return state;
  }
}

export default movieReducer;
