export function createComment(data, movieID) {
  const body = JSON.stringify({ comment: data });
  return dispatch => {
    dispatch({ type: "LOADING" });
    return fetch(`http://localhost:3001/movies/${movieID}/comments`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body
    })
      .then(response => response.json())
      .then(comment => {
        dispatch({ type: "ADD_COMMENT", comment });
      });
  };
}
