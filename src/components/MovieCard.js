import React, { Component } from "react";
import Movies from "../containers/Movies";
import { connect } from "react-redux";

class MovieCard extends Component {
  render() {
    console.log(this.props);
    return null;
    //<h2>{this.props.movie.title}</h2>;
  }
}

const mapStateToProps = (state, props) => {
  const id = parseInt(props.match.params.id);
  const singleMovie = state.movies.find(movie => movie.id === id);

  return {
    movie: singleMovie
  };
};
export default connect(mapStateToProps)(MovieCard);
