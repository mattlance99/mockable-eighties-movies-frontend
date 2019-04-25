import React, { Component } from "react";
import { createComment } from "../actions/commentActions";
import { connect } from "react-redux";

class CommentForm extends Component {
  constructor() {
    super();

    this.state = {
      content: ""
    };
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createComment(this.state, this.props.history);
    this.setState({
      content: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Comment:
            <input
              id="content"
              type="text"
              name="content"
              value={this.state.content}
              onChange={this.handleChange}
              style={{ width: "500px", height: "50px" }}
            />
          </label>
        </div>

        <br />
        <div>
          <button type="submit">Submit Comment</button>
        </div>
      </form>
    );
  }
}

export default connect(
  null,
  { createComment }
)(CommentForm);