import React, { Component } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import App from "../App";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

class Movies extends Component {
  render() {
    return (
      <div>
        {this.props.movies.map(movie => (
          <div>
            <h3>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </h3>
            <h6>{movie.release_year}</h6>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

export default connect(mapStateToProps)(Movies);
