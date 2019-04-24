import React, { Component } from "react";

class CommentForm extends Component {
  render() {
    return (
      <div>
        <h3>Create Comment...</h3>
        <form>
          <textarea required rows="10" cols="56" placeholder="Enter Post" />
          <br />
          <br />
          <button>Comment</button>
        </form>
      </div>
    );
  }
}
export default CommentForm;
