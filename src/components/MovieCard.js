import React, { Component } from "react";
import Movies from "../containers/Movies";
import { connect } from "react-redux";

class MovieCard extends Component {
  render() {
    return null;
  }
}

const mapStateToProps = (state, props) => {
  console.log(props);
  // find one movie from the state here
  //const singleMovie = find movie from state
  return {
    movie: null
  };
};
export default connect(mapStateToProps)(MovieCard);
