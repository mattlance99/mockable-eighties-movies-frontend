import React, { Component } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import App from "../App";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchMovies } from "../actions/movieActions";

class Movies extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }
  render() {
    return (
      <div>
        {this.props.movies.map(movie => (
          <div>
            <h3>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </h3>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movieReducer.movies
  };
};

export default connect(
  mapStateToProps,
  { fetchMovies }
)(Movies);
