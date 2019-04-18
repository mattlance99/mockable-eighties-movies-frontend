const allMovies = [
  { id: 1, title: "Kingdom Come", genre: "Tall tale", release_year: "1989" },
  {
    id: 2,
    title: "Snowbirds Don't Fly",
    genre: "Fairy tale",
    release_year: "1988"
  }
];

function movieReducer(state = allMovies, action) {
  let idx;
  switch (action.type) {
    case "ADD_MOVIE":
      return [...state, action.book];

    case "REMOVE_MOVIE":
      idx = state.indexOf(action.id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    case "GET_MOVIES":
      idx = state.indexOf(action.id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    default:
      return state;
  }
}

export default movieReducer;
