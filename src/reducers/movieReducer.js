function movieReducer(
  state = {
    movies: [],
    loading: true,
    movie: {}
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
      return {
        ...state,
        movies: [...state.movies, action.movie],
        loading: false
      };
    case "DELETE_MOVIE":
      return {
        ...state,
        movies: state.movies.filter(movie => movie.id !== action.id)
      };
    case "ADD_COMMENT":
      //grab 1 movie from the movies array
      //add the new comment to the comments array for that movie
      const newState = {
        ...state,
        movies: state.movies.map(movie => {
          if (movie.id === action.comment.movie_id) {
            return {
              ...movie,
              comments: movie.comments.concat(action.comment)
            };
          } else {
            return movie;
          }
        }),
        loading: false
      };
      console.log(state);
      console.log(newState);
      return newState;
    default:
      return state;
  }
}

export default movieReducer;
