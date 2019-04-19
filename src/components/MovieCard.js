import React, { Component } from "react";
import Movies from "../containers/Movies";
import { connect } from "react-redux";

class MovieCard extends Component {
  render() {
    console.log(this.props.movie);
    return <h2>{this.props.movie.title}</h2>;
  }
}

const mapStateToProps = (state, props) => {
  console.log(`This is a test ${props.match.params.id}`);
  //console.log(props);
  //console.log(state);
  const id = parseInt(props.match.params.id);
  //console.log(state.movies[id]);

  const singleMovie = state.movies.find(movie => movie.id === id);
  console.log(singleMovie);
  //  arr.find(k => k == "b");
  // find one movie from the state here

  return {
    movie: singleMovie
  };
};
export default connect(mapStateToProps)(MovieCard);
