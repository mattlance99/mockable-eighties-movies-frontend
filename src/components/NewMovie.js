import React, { Component } from "react";
import Filters from "./Filters";
import { createMovie } from "../actions/movieActions";
import { connect } from "react-redux";

const years = [1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989];
const genres = [
  "Action",
  "Adventure",
  "Comedy",
  "Crime",
  "Drama",
  "Historical",
  "Horror",
  "Musical",
  "Science Fiction",
  "War",
  "Westerns"
];

class NewMovie extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      genre: "",
      release_year: "",
      image_url: ""
    };
  }

  onChangeType = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createMovie(this.state, this.props.history);
    this.setState({
      title: "",
      genre: "",
      release_year: "",
      image_url: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <h3>Enter a Movie</h3>
          <label>
            Title:
            <input
              id="title"
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </label>
        </div>

        <h3>Select a Genre</h3>
        <Filters items={genres} name="genre" onChangeType={this.onChangeType} />
        <h3>Select a Release Year</h3>
        <Filters
          items={years}
          name="release_year"
          onChangeType={this.onChangeType}
        />
        <br />
        <div>
          <label>
            Image URL:
            <input
              id="image_url"
              type="image_url"
              name="image_url"
              value={this.state.image_url}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <br />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default connect(
  null,
  { createMovie }
)(NewMovie);
