import React from "react";
import Filters from "./Filters";

class NewMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: "",
      genre: "",
      release_year: "",
      image_url: ""
    };
  }

  onChangeType = ({ target: { value } }) => {
    this.setState({ filters: { ...this.state.filters, type: value } });
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
        <Filters
          onChangeType={this.onChangeType}
          onFindPetsClick={this.fetchPets}
        />
        <div>
          <label>
            Genre:
            <input
              id="genre"
              type="text"
              name="genre"
              value={this.state.genre}
              onChange={this.handleChange}
            />
          </label>
        </div>

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

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default NewMovie;
