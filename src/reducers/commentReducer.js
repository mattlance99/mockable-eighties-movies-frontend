function commentReducer(
  state = {
    contents: [],
    loading: true,
    content: {}
  },
  action
) {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "GET_COMMENTS":
      return { ...state, comments: action.comments, loading: true };
    case "GET_COMMENT":
      return { ...state, comment: action.comment, loading: false };
    case "ADD_COMMENT":
      return {
        ...state,
        movies: [...state.comments, action.comment],
        loading: false
      };

    default:
      return state;
  }
}
export default commentReducer;
