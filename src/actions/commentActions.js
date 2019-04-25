export function fetchComments() {
  return dispatch => {
    dispatch({ type: "LOADING" });
    return fetch("http://localhost:3001/movies")
      .then(response => response.json())
      .then(movies => dispatch({ type: "GET_COMMENTS", movies }));
  };
}

export function fetchComment(id) {
  return dispatch => {
    dispatch({ type: "LOADING" });
    return fetch("http://localhost:3001/movies/" + id)
      .then(response => response.json())
      .then(movie => dispatch({ type: "GET_COMMENT", movie }));
  };
}

export function createComment(data, history) {
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
        dispatch({ type: "ADD_COMMENT", movie });
        history.push(`/movies/${movie.id}`);
      });
  };
}
