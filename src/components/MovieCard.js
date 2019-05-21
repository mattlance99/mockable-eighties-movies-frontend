import React, { Component } from "react";
import Movies from "../containers/Movies";
import CommentForm from "./CommentForm";
import Like from "./Like";
import { connect } from "react-redux";
import { fetchMovie, deleteMovie } from "../actions/movieActions";

class MovieCard extends Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.id);
  }

  handleDelete = e => {
    e.preventDefault();
    this.props.deleteMovie(this.props.movie.id, this.props.history);
  };

  handleEdit = e => {
    e.preventDefault();
  };

  render() {
    console.log(this.props.movie);
    if (this.props.loading) {
      return <h2>Loading....</h2>;
    }

    return (
      <div className="movie-card">
        <h2>{this.props.movie.title}</h2>
        <img src={this.props.movie.image_url} alt={this.props.movie.title} />
        <br />
        <Like />

        <h3>{this.props.movie.release_year}</h3>
        <h3>{this.props.movie.genre}</h3>
        {this.props.movie.comments.map(comment => (
          <p>
            {comment.content} <button onClick={this.handleEdit}>Edit </button>
          </p>
        ))}

        <CommentForm movieID={this.props.movie.id} />
        <br />
        <button onClick={this.handleDelete}>Delete Movie</button>
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
  };
};
export default connect(
  mapStateToProps,
  { fetchMovie, deleteMovie }
)(MovieCard);
