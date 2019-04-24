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

export function createMovie(data, history) {
  const body = JSON.stringify({ movie: data });
  return dispatch => {
    dispatch({ type: "LOADING" });
    return fetch("http://localhost:3001/movies", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body
    })
      .then(response => response.json())
      .then(movie => {
        dispatch({ type: "ADD_MOVIE", movie });
        history.push(`/movies/${movie.id}`);
      });
  };
}

export function deleteMovie(id) {
  return dispatch => {
    dispatch({ type: "LOADING" });
    return fetch("http://localhost:3001/movies/" + id, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(id => dispatch({ type: "DELETE_MOVIE", id }));
  };
}
