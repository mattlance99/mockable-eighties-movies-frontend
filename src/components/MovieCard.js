import React, { Component } from "react";
import Movies from "../containers/Movies";
import { connect } from "react-redux";
import { fetchMovie } from "../actions/movieActions";

class MovieCard extends Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.id);
  }
  render() {
    if (this.props.loading) {
      return <h2>Loading....</h2>;
    }

    return (
      <div className="movie-card">
        <h2>{this.props.movie.title}</h2>
        <img
          src="http://i.imgur.com/bJw8ndW.png"
          alt={this.props.movie.title}
        />
        <h3>{this.props.movie.release_year}</h3>
        <h3>{this.props.movie.genre}</h3>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const id = parseInt(props.match.params.id);

  return {
    movie: state.movieReducer.movie,
    loading: state.movieReducer.loading,
    id
    //movie: singleMovie,
  };
};
export default connect(
  mapStateToProps,
  { fetchMovie }
)(MovieCard);
