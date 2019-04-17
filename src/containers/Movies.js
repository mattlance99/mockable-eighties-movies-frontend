import React, { Component } from "react";

const allMovies = [
  { id: 1, title: "Kingdom Come", genre: "Tall tale", release_year: "1989" },
  {
    id: 2,
    title: "Snowbirds Don't Fly",
    genre: "Fairy tale",
    release_year: "1988"
  }
];

class Movies extends Component {
  state = { movies: allMovies };
  render() {
    return (
      <div>
        <h2> moveis</h2>
        {this.state.movies.map(movie => (
          <div>
            <h3>{movie.title}</h3>
            <h6>{movie.release_year}</h6>
          </div>
        ))}
      </div>
    );
  }
}

export default Movies;
