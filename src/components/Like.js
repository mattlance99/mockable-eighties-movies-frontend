import React, { Component } from "react";

class Like extends Component {
  constructor() {
    super();
    this.state = {
      like: 0
    };
  }

  handleLike = e => {
    e.preventDefault();
    const newCount = this.state.like + 1;
    this.setState({
      like: newCount
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleLike}>Like</button>
        {this.state.like}
      </div>
    );
  }
}

export default Like;
