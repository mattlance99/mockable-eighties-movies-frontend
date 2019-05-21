import React, { Component } from "react";

class Like extends Component {
  constructor() {
    super();
    this.state = {
      like: 0,
      dislike: 0
    };
  }

  handleLike = e => {
    e.preventDefault();
    const newCount = this.state.like + 1;
    this.setState({
      like: newCount
    });
  };

  handleDisLike = e => {
    e.preventDefault();
    const newCount = this.state.dislike + 1;
    this.setState({
      dislike: newCount
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleLike}>Like</button>
        {"  " + this.state.like + "  "}
        <button onClick={this.handleDisLike}>Dislike</button>
        {"  " + this.state.dislike}
      </div>
    );
  }
}

export default Like;
