export function fetchMovies() {
  return dispatch => {
    dispatch({ type: "LOADING" });
    return fetch("http://localhost:3001/movies")
      .then(response => response.json())
      .then(movies => dispatch({ type: "GET_MOVIES", movies }));
  };
}

export function fetchMovie(id) {
  return dispatch => {
    dispatch({ type: "LOADING" });
    return fetch("http://localhost:3001/movies/" + id)
      .then(response => response.json())
      .then(movie => dispatch({ type: "GET_MOVIE", movie }));
  };
}
